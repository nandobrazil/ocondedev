import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { targets } from './shots.config.mjs';

const root = resolve(import.meta.dirname, '..');
const projectsDir = resolve(root, 'src/content/projects');
const only = new Set(process.argv.slice(2));
const selected = only.size ? targets.filter((target) => only.has(target.slug)) : targets;

async function writeWebp(png, path, quality) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, await sharp(png).webp({ quality }).toBuffer());
}

async function capture(browser, target, colorScheme = 'dark') {
  const quality = target.quality ?? 82;
  const suffix = colorScheme === 'light' ? '-light' : '';
  const context = await browser.newContext({
    colorScheme,
    locale: 'pt-BR',
    viewport: { width: 1440, height: target.height ?? 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(target.url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1500);
  for (const selector of target.hide ?? []) {
    await page.locator(selector).evaluateAll((elements) => elements.forEach((element) => element.remove()));
  }
  const desktopPath = target.dest ? resolve(projectsDir, target.dest) : resolve(projectsDir, target.slug, `desktop${suffix}.webp`);
  await writeWebp(await page.screenshot({ type: 'png' }), desktopPath, quality);
  if (!target.desktopOnly && !target.dest) {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(800);
    await writeWebp(await page.screenshot({ type: 'png' }), resolve(projectsDir, target.slug, `mobile${suffix}.webp`), quality);
  }
  await context.close();
}

async function renderOg(browser) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto(`file://${resolve(root, 'scripts/og.html')}`);
  await page.waitForTimeout(500);
  await page.screenshot({ type: 'png', path: resolve(root, 'public/og-home.png') });
  await page.close();
}

const browser = await chromium.launch();
let failed = 0;
for (const target of selected) {
  try {
    await capture(browser, target);
    if (target.themes) await capture(browser, target, 'light');
    console.log('ok  ', target.slug);
  } catch (error) {
    failed++;
    console.error('fail', target.slug, error.message.split('\n')[0]);
  }
}
if (!only.size || only.has('og')) await renderOg(browser);
await browser.close();
process.exit(failed ? 1 : 0);
