import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    sitemap()
  ],
  site: 'https://simon-haenel.com',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
