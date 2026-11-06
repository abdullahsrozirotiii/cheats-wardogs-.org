import fs from 'node:fs';

/**
 * A previous Cloudflare build leaves `.wrangler/deploy/config.json`, and the
 * build cache can restore it. Wrangler then ignores wrangler.jsonc and runs
 * `astro add cloudflare`, which duplicates `_redirects` (error 100324).
 */
fs.rmSync('.wrangler', { recursive: true, force: true });
console.log('Removed .wrangler');
