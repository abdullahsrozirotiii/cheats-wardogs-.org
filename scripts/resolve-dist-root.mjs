import fs from 'node:fs';
import path from 'node:path';

/**
 * Astro static output lives in `dist/`.
 * With @astrojs/cloudflare (and similar adapters), static assets are under `dist/client/`.
 */
export function resolveDistAssetsRoot(cwd = process.cwd()) {
  const dist = path.join(cwd, 'dist');
  const client = path.join(dist, 'client');

  const hasSitemap = (root) => fs.existsSync(path.join(root, 'sitemap-0.xml'));
  const hasIndex = (root) => fs.existsSync(path.join(root, 'index.html'));

  if (hasSitemap(dist)) return dist;
  if (hasSitemap(client)) return client;
  if (hasIndex(client)) return client;
  if (hasIndex(dist)) return dist;
  return dist;
}
