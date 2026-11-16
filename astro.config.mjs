import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import site from './src/config/site';

export default defineConfig({
  site: site.siteUrl,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
