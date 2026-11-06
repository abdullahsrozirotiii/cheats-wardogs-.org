import fs from 'node:fs';
import path from 'node:path';
import { buildRedirectFile } from './redirect-rules.mjs';

const root = process.cwd();
const out = buildRedirectFile();
const count = out.trim().split('\n').length;

/**
 * Seed `public/_redirects` so static builds copy it into dist.
 * `finalize-redirects.mjs` writes this same body again after `astro build`,
 * because @astrojs/cloudflare appends Astro redirect routes onto the copied file.
 */
fs.writeFileSync(path.join(root, 'public', '_redirects'), out);
console.log(`Wrote public/_redirects (${count} rules)`);
