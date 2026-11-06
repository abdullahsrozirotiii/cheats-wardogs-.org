/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'War Dogs Cheats | Aim, ESP, Radar & Patch Day Status',
    description:
      'War Dogs cheats on Steam PC: ESP and Radar on every tier, aim on Pro and Elite, loot filters, and Patch Day loader status at cheatswardogs.org.',
  },
  '/products/wardogs/': {
    title: 'War Dogs Cheats & Utilities | ESP, Aimbot, HWID',
    description:
      'War Dogs cheats (Lite, Pro, Elite) plus HWID spoofer, UGC and Skin Changer—four products, checkout at cheatswardogs.org.',
  },
  '/products/wardogs/cheats/': {
    title: 'Aimbot, ESP & vehicle radar — War Dogs cheats',
    description:
      'Aimbot on Pro and Elite, player and vehicle ESP, radar overlays—Lite to Elite via one checkout and the operator portal at cheatswardogs.org.',
  },
  '/products/wardogs/hwid-spoofer/': {
    title: 'War Dogs HWID Spoofer | Hardware ID Recovery',
    description:
      'HWID spoofer for War Dogs on Steam PC—compatibility scan, restore-point workflow and portal setup at cheatswardogs.org.',
  },
  '/products/wardogs/ugc/': {
    title: 'War Dogs UGC | Account & Restriction Appeals',
    description:
      'UGC appeal workspace for War Dogs players—case tracking and dispute workflows alongside cheats at cheatswardogs.org.',
  },
  '/products/wardogs/unlock-all/': {
    title: 'War Dogs Skin Changer | Cosmetic Utility',
    description:
      'Skin Changer utility for War Dogs—local cosmetic previews and setup guides linked from cheatswardogs.org products.',
  },
  '/blog/': {
    title: 'Guides – Lite vs Pro comparisons | War Dogs Cheats',
    description:
      'Setup guides, Lite vs Pro comparisons, EAC patch checklists, and ranked config tips for War Dogs cheats. Patch notes and Steam PC tuning in one hub.',
  },
  '/forum/': {
    title: 'War Dogs Community Forum – Join | Cheats',
    description:
      'War dogs community forum: join players to discuss loadouts, Control Zone tactics, patches, and guide-based Q&A.',
  },
  '/faq/': {
    title: 'Faq – War Dogs Cheats, Products & Setup |',
    description:
      'FAQ for War Dogs cheats on Steam PC: Lite Pro Elite tiers, ESP and aimbot scope, HWID and UGC tools, checkout, and patch-day loader status at.',
  },
  '/terms/': {
    title: 'Terms & Conditions | War Dogs Cheats',
    description:
      'Purchase terms, license use, and refund policy for War Dogs Cheats products sold through cheatswardogs.org.',
  },
  '/privacy/': {
    title: 'Privacy – and contact data when you browse | War Dogs Cheats',
    description:
      'Privacy: How cheatswardogs.org uses analytics, cookies, and contact data when you browse or request support. Data use and retention in plain terms.',
  },
  '/about/': {
    title: 'Tiers – Learn what War Dogs Cheats |',
    description:
      'Learn what each War Dogs cheats tier unlocks on Steam PC at cheatswardogs.org: Lite, Pro and Elite scope, patch-day coverage, and how guides stay aligned.',
  },
  '/support/': {
    title: 'Support | War Dogs Cheats',
    description:
      'Loader setup, forum guides, and checkout help for War Dogs cheats and utilities at cheatswardogs.org.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
