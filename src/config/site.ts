export const SITE_DOMAIN = 'cheatswardogs.org';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const PRODUCT_BASE = '/products/wardogs/';

/**
 * Production default: cheatswardogs.org. Override at build time (e.g. staging on workers.dev) via PUBLIC_SITE_URL.
 */
export function resolveSiteOrigin(publicSiteUrl: string | undefined): string {
  const raw = publicSiteUrl?.trim();
  if (raw) return raw.replace(/\/+$/, '');
  return SITE_URL;
}
export const TITLE_PREFIX = 'War Dogs Cheats & Hacks';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
