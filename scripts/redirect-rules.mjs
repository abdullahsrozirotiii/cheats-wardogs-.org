import { SITE_PATH_REDIRECTS } from '../src/config/site-path-redirects.mjs';
import { CHECKOUT_PATH_REDIRECTS } from '../src/config/checkout-redirects.mjs';

/** Canonical Cloudflare `_redirects` body. One rule per path. */
export function buildRedirectFile() {
  const lines = [];
  for (const [from, to] of SITE_PATH_REDIRECTS.entries()) {
    if (!from.endsWith('/')) continue;
    lines.push(`${from} ${to} 301`);
  }
  for (const [from, to] of CHECKOUT_PATH_REDIRECTS.entries()) {
    if (!from.endsWith('/')) continue;
    lines.push(`${from} ${to} 302`);
  }

  const paths = lines.map((line) => line.split(' ')[0]);
  const unique = new Set(paths);
  if (unique.size !== paths.length) {
    throw new Error('redirect rules contain duplicate paths');
  }

  return `${lines.join('\n')}\n`;
}
