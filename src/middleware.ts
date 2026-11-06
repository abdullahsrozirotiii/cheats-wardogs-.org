import { defineMiddleware } from 'astro:middleware';
import { resolveCheckoutPathRedirect } from './config/checkout-redirects.mjs';
import { SITE_PATH_REDIRECTS } from './config/site-path-redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  const checkoutDestination = resolveCheckoutPathRedirect(pathname);
  if (checkoutDestination) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: checkoutDestination,
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  // Production 301s live only in public/_redirects. Emitting them here as well makes
  // @astrojs/cloudflare append a second copy and Cloudflare rejects the deploy (100324).
  if (import.meta.env.DEV) {
    const withSlash =
      pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
    const internalDestination =
      SITE_PATH_REDIRECTS.get(pathname) ?? SITE_PATH_REDIRECTS.get(withSlash);
    if (internalDestination) {
      const destination = new URL(internalDestination, url.origin);
      destination.search = url.search;
      destination.hash = url.hash;
      return Response.redirect(destination.toString(), 301);
    }
  }

  return next();
});
