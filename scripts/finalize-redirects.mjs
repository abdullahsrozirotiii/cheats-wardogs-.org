import fs from 'node:fs';
import path from 'node:path';
import { buildRedirectFile } from './redirect-rules.mjs';

/**
 * @astrojs/cloudflare appends Astro redirect routes onto `_redirects`.
 * Cloudflare rejects the deploy when a path appears twice (error 100324).
 * Rewrite every copy under dist/ after that append.
 */
const root = process.cwd();
const body = buildRedirectFile();
const expected = body.trim().split('\n').length;

function writeRedirectFile(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body);
  const paths = fs
    .readFileSync(file, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split(/\s+/)[0]);
  if (new Set(paths).size !== paths.length || paths.length !== expected) {
    console.error(`finalize-redirects: ${file} has ${paths.length} rules, expected ${expected} unique`);
    process.exit(1);
  }
  console.log(`Wrote ${path.relative(root, file)} (${paths.length} unique rules)`);
}

writeRedirectFile(path.join(root, 'public', '_redirects'));

const dist = path.join(root, 'dist');
if (!fs.existsSync(dist)) {
  console.error('finalize-redirects: dist/ is missing — run astro build first.');
  process.exit(1);
}

/** @param {string} dir */
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === '_redirects') writeRedirectFile(full);
  }
}

walk(dist);

const fallback = [
  path.join(dist, '_redirects'),
  path.join(dist, 'client', '_redirects'),
];
for (const file of fallback) {
  if (fs.existsSync(path.dirname(file))) writeRedirectFile(file);
}
