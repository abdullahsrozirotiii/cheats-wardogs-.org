import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { sitemapSerialize } from './src/config/sitemap.ts';

const viteEnv = loadEnv(process.env.NODE_ENV === 'production' ? 'production' : 'development', process.cwd(), '');
const siteUrl = (viteEnv.PUBLIC_SITE_URL || process.env.PUBLIC_SITE_URL || '')
  .trim()
  .replace(/\/+$/, '');
/** Default production host; set PUBLIC_SITE_URL for preview/staging only. */
const site = siteUrl || 'https://cheatswardogs.org';

export default defineConfig({
  site,
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
