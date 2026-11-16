import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import site from './src/config/site';

export default defineConfig({
  site: site.siteUrl,
  trailingSlash: 'ignore',
  // Typecho 风格：文章 URL 为 /{slug}.html，其余页面也为 xxx.html
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
