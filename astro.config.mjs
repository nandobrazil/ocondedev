import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oconde.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { layout: 'constrained', responsiveStyles: true, dangerouslyProcessSVG: true },
  integrations: [sitemap()],
});
