/**
 * Canonical internal path redirects. Keys use trailing slash (`trailingSlash: 'always'`).
 * Do not list both `/path` and `/path/` — keep one canonical key per destination.
 * Consumed by: scripts/generate-redirects.mjs (`public/_redirects` 301s),
 * src/middleware.ts (dev only), scripts/redirects.mjs / scripts/serve.mjs.
 * Do not add the same map to astro.config `redirects` or to production middleware
 * (Cloudflare deploy duplicates `_redirects` + adapter output → error 100324).
 */
export const SITE_PATH_REDIRECTS = new Map([
  ['/cheats/', '/products/wardogs/'],
  ['/cheats/lite/', '/products/wardogs/'],
  ['/cheats/pro/', '/products/wardogs/'],
  ['/cheats/elite/', '/products/wardogs/elite/'],
  ['/cheats/compare/', '/blog/wardogs-lite-vs-pro/'],
  ['/contact/', '/support/'],
  ['/products/dota-2-cheats/', '/products/wardogs/'],
  ['/products/dota-2-cheats/lite/', '/products/wardogs/'],
  ['/products/dota-2-cheats/pro/', '/products/wardogs/'],
  ['/products/dota-2-cheats/elite/', '/products/wardogs/elite/'],
  ['/products/wardogs/lite/', '/products/wardogs/cheats/'],
  ['/products/wardogs/pro/', '/products/wardogs/cheats/'],
  ['/products/wardogs/elite/', '/products/wardogs/cheats/'],
  ['/products/wardogs/utilities/', '/products/wardogs/'],
  ['/products/wardogs/account-recovery/', '/products/wardogs/ugc/'],
  ['/go/dota-2/', '/go/wardogs/'],
]);
