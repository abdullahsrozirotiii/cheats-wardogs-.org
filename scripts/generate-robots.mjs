import fs from 'node:fs';
import path from 'node:path';
import { resolveDistAssetsRoot } from './resolve-dist-root.mjs';

function resolveOrigin() {
  const raw = process.env.PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/+$/, '');
  return 'https://cheatswardogs.org';
}

const root = process.cwd();
const dist = resolveDistAssetsRoot(root);
const origin = resolveOrigin();

const body = `User-agent: *
Allow: /

Disallow: /go/

Sitemap: ${origin}/sitemap.xml

# RSS: ${origin}/rss.xml
`;

fs.writeFileSync(path.join(dist, 'robots.txt'), body, 'utf8');
const rel = path.relative(root, dist) || 'dist';
console.log(`robots.txt → ${rel}/robots.txt (Sitemap: ${origin}/sitemap.xml)`);
