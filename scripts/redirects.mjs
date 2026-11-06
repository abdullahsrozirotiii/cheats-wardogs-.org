import { SITE_PATH_REDIRECTS } from '../src/config/site-path-redirects.mjs';

/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = SITE_PATH_REDIRECTS;

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const withSlash =
    pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  const direct = PATH_REDIRECTS.get(pathname) ?? PATH_REDIRECTS.get(withSlash);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
