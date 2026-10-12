import { chromium } from 'playwright';
import { readdirSync, statSync } from 'node:fs';
import http from 'node:http';
import { join } from 'node:path';

const base = process.argv[2] ?? 'http://127.0.0.1:8089';
const expectedCards = Number(process.env.SMOKE_CARDS ?? 14);
const expectedInfra = Number(process.env.SMOKE_INFRA ?? 3);
let failures = 0;

const check = (name, ok, detail = '') => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}${detail ? ` (${detail})` : ''}`);
  if (!ok) failures++;
};

const request = (path, headers = {}) =>
  new Promise((resolve) => {
    const url = new URL(base + path);
    const req = http.request(
      { host: url.hostname, port: url.port, path: url.pathname + url.search, method: 'GET', headers },
      (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const body = Buffer.concat(chunks).toString('utf8');
          resolve({ status: res.statusCode, headers: new Headers(res.headers), text: async () => body });
        });
      },
    );
    req.on('error', (error) => resolve({ status: 0, headers: new Headers(), text: async () => '', error }));
    req.end();
  });

for (const path of ['/', '/projetos/', '/projetos/radar/', '/experiencia/', '/setup/', '/contato/']) {
  const res = await request(path);
  const html = await res.text();
  check(`200 ${path}`, res.status === 200, String(res.status));
  check(`title ${path}`, /<title>[^<]+<\/title>/.test(html));
  check(`h1 ${path}`, /<h1/.test(html));
  check(`canonical ${path}`, html.includes(`<link rel="canonical" href="https://oconde.dev${path}"`));
  check(`og:image absolute ${path}`, /property="og:image" content="https:\/\/oconde\.dev\//.test(html));
}

let res = await request('/geradores/cpf?x=1');
check(
  'devtools redirect keeps the query',
  res.status === 301 && res.headers.get('location') === 'https://tools.oconde.dev/geradores/cpf?x=1',
  `${res.status} ${res.headers.get('location')}`,
);
res = await request('/projetos/radar/', { host: 'www.oconde.dev' });
check(
  'www redirect keeps the path',
  res.status === 301 && res.headers.get('location') === 'https://oconde.dev/projetos/radar/',
  `${res.status} ${res.headers.get('location')}`,
);
res = await request('/', { host: 'me.oconde.dev' });
check('me redirect', res.status === 301 && res.headers.get('location') === 'https://oconde.dev/', `${res.status} ${res.headers.get('location')}`);
res = await request('/projetos');
check('trailing slash redirect is relative', res.status === 301 && res.headers.get('location') === '/projetos/', `${res.status} ${res.headers.get('location')}`);
for (const path of ['/ngsw.json', '/ngsw-worker.js', '/manifest.webmanifest', '/nao-existe']) {
  res = await request(path);
  check(`404 ${path}`, res.status === 404, String(res.status));
}
res = await request('/healthz');
check('healthz', res.status === 200, String(res.status));
res = await request('/');
check('nosniff header', res.headers.get('x-content-type-options') === 'nosniff');
check('frame header', res.headers.get('x-frame-options') === 'DENY');
check('referrer header', res.headers.get('referrer-policy') === 'strict-origin-when-cross-origin');
check('server header hidden', !/\d/.test(res.headers.get('server') ?? ''), res.headers.get('server') ?? '');
res = await request('/_astro/nothing.css');
check('asset header on 404 too', res.status === 404);
const sitemap = await (await request('/sitemap-0.xml')).text();
for (const path of ['/', '/projetos/', '/projetos/radar/', '/experiencia/', '/contato/']) {
  check(`sitemap ${path}`, sitemap.includes(`https://oconde.dev${path}`));
}

const browser = await chromium.launch();
try {
  const withoutJs = await browser.newContext({ javaScriptEnabled: false });
  const page = await withoutJs.newPage();
  await page.goto(`${base}/projetos/`, { waitUntil: 'load', timeout: 15000 }).catch(() => {});
  const visible = await page.locator('.project:visible').count();
  check('cards visible without JS', visible === expectedCards, String(visible));
  await withoutJs.close();

  const withJs = await browser.newContext();
  const page2 = await withJs.newPage();
  await page2.goto(`${base}/projetos/`, { waitUntil: 'load', timeout: 15000 }).catch(() => {});
  await page2.click('[data-filter="infra"]', { timeout: 5000 }).catch(() => {});
  const infra = await page2.locator('.project:visible').count();
  check('filter infra', infra === expectedInfra, String(infra));
  await withJs.close();
} finally {
  await browser.close();
}

const walk = (dir) => {
  try {
    return readdirSync(dir).flatMap((name) => {
      const path = join(dir, name);
      return statSync(path).isDirectory() ? walk(path) : [path];
    });
  } catch (error) {
    return [];
  }
};
const images = walk('src/content/projects').filter((file) => /\.(webp|png|svg)$/.test(file));
check('project images exist', images.length > 0, String(images.length));
for (const file of images) {
  const size = statSync(file).size;
  check(`size ${file}`, size <= 300 * 1024, `${Math.round(size / 1024)} KB`);
}

console.log(failures ? `${failures} failure(s)` : 'all good');
process.exit(failures ? 1 : 0);
