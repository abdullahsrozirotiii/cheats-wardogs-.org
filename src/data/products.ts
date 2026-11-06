import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  cheats: [
    'wardogs-cheats-features-guide',
    'wardogs-lite-vs-pro',
    'wardogs-elite-tier-guide',
    'wardogs-esp-setup',
    'how-to-buy-wardogs-cheats-2026',
    'eac-patch-day-checklist',
  ],
  'hwid-spoofer': [
    'wardogs-hwid-spoofer-after-ban',
    'eac-login-errors-guide',
    'eac-patch-day-checklist',
    'wardogs-external-cheat-guide',
  ],
  ugc: [
    'eac-login-errors-guide',
    'wardogs-hwid-spoofer-after-ban',
    'how-to-buy-wardogs-cheats-2026',
  ],
  'unlock-all': [
    'wardogs-skin-changer-guide',
    'wardogs-cheats-features-guide',
    'wardogs-stream-proof-setup',
  ],
};

const productBase = '/products/wardogs/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on cheatswardogs.org and Discord #status before purchase—especially after a War Dogs or EAC update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite-tier access or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Steam platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue ranked or Turbo.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'War Dogs and EAC receive frequent updates. Confirm module availability on the live status panel at cheatswardogs.org before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in War Dogs can violate platform Terms of Use and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const wardogsSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current War Dogs client via Steam with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets War Dogs published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const heroCaptions = [
  ['Player ESP in control zone', 'Enemy skeletons, boxes and distance tags through cover.'],
  ['Aimbot reticle on target', 'FOV ring and silent aim ready for ranked pushes.'],
  ['Scoped down-sight view', 'Magnified target tracking with HUD overlays.'],
  ['Tactical optic view', 'Long-range engagement with loot awareness.'],
  ['Tree-line wallhack', 'ESP markers through foliage and terrain.'],
  ['Base assault ESP', 'Red skeleton highlight through sandbag walls.'],
  ['Wireframe chams overlay', 'Stream-proof friendly chams with kill confirm.'],
] as const;

function buildHeroGallerySlides(): ProductSlide[] {
  return heroCaptions.map(([caption, captionDesc], i) => {
    const num = String(i + 1).padStart(2, '0');
    return {
      src: `${gameplay}/hero-${num}.webp`,
      alt: `War Dogs cheats screenshot ${i + 1} — ESP and aimbot overlay in Control Zone combat`,
      caption,
      captionDesc,
    };
  });
}

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/wardogs-visuals-esp.webp`,
    alt: 'War Dogs map hack showing enemy operator positions and objective markers',
    caption: 'Map hack awareness',
    captionDesc: 'Enemy position tracking, objective markers and last-seen tags during a Control Zone push.',
  },
  gpScripts: {
    src: `${gameplay}/wardogs-aimbot-menu.webp`,
    alt: 'War Dogs combat scripts menu with combo and recoil helpers',
    caption: 'Combat scripts',
    captionDesc: 'Weapon recoil and combo assists with humanized delay tuning from portal presets.',
  },
  gpZoomHack: {
    src: `${gameplay}/wardogs-misc-radar.webp`,
    alt: 'War Dogs zoom hack extended camera view of entire lane',
    caption: 'Extended camera zoom',
    captionDesc: 'Zoom hack showing full lane vision for safer positioning and gank avoidance.',
  },
  gpSkinChanger: {
    src: `${gameplay}/wardogs-skin-changer.webp`,
    alt: 'War Dogs Skin Changer previewing weapon and operator cosmetics',
    caption: 'Skin Changer preview',
    captionDesc: 'Local premium cosmetic preview via Unlock All—client-side only.',
  },
  gpAutoKill: {
    src: `${gameplay}/wardogs-aimbot-menu.webp`,
    alt: 'War Dogs finisher assist prioritizing low-HP targets in a firefight',
    caption: 'Finisher assist',
    captionDesc: 'Threshold-based targeting so you secure knockdowns before enemies revive teammates.',
  },
  gpFarmBot: {
    src: `${gameplay}/wardogs-player-esp.webp`,
    alt: 'War Dogs Auto Farm Bot collecting world loot and supply routes',
    caption: 'Auto Farm Bot',
    captionDesc: 'Route-aware looting and resupply timers to keep cash flow high between fights.',
  },

  gpHwid1: {
    src: `${gameplay}/spoofer-product-1.webp`,
    alt: 'War Dogs HWID spoofer compatibility scan on Windows',
    caption: 'HWID scan',
    captionDesc: 'Portal compatibility scan before applying hardware profile tools.',
  },
  gpHwid2: {
    src: `${gameplay}/spoofer-product-2.webp`,
    alt: 'War Dogs HWID spoofer identifier verification screen',
    caption: 'Verification',
    captionDesc: 'Post-spoof identifier diff report before launching War Dogs.',
  },
  gpUgc: {
    src: `${gameplay}/ugc-product.webp`,
    alt: 'War Dogs UGC appeal dashboard for Steam restrictions',
    caption: 'UGC dashboard',
    captionDesc: 'Case tracking and appeal templates for platform restrictions.',
  },
  gpSkinProduct: {
    src: `${gameplay}/skin-changer-product.webp`,
    alt: 'War Dogs skin changer local cosmetic preview',
    caption: 'Skin Changer',
    captionDesc: 'Browse weapon and operator cosmetics locally on your client.',
  },
  gpHeroEsp: {
    src: `${gameplay}/wardogs-player-esp.webp`,
    alt: 'War Dogs player ESP with name tags and distance readouts',
    caption: 'Player ESP overlay',
    captionDesc: 'Operator name tags, team colors and distance markers through fog and smoke.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'wardogs';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'War Dogs Lite is built for players who want map awareness first. In ranked, knowing enemy positions, redeploy routes and objective timing wins more fights than raw aim—Lite gives you that edge without combat automation.',
    },
    { type: 'h2', text: 'Ranked-safe by design' },
    {
      type: 'p',
      text: 'Lite skips combat scripts and bot modules entirely. Your gameplay looks natural while ESP, radar and zoom hack keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'War Dogs Pro is the sweet spot for ranked grinders. Aim assist, triggerbot and recoil helpers stack on the same awareness as Lite—when you tune smoothing and delay using our portal presets.',
    },
    { type: 'h2', text: 'Aim + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds aimbot, triggerbot, no-recoil and target prioritization. You see the fight before it starts and win it with settings that stay human at default profiles.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'War Dogs Elite is the private build for players who want everything—priority patches, full radar, silent aim options and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in private lobbies, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first ranked queue.',
    },
  ],
  cheats: [
    {
      type: 'p',
      text: 'This suite bundles Lite, Pro and Elite licenses through one checkout at cheatswardogs.org. Lite focuses on ESP, loot filters and radar. Pro adds aimbot, triggerbot and recoil control. Elite unlocks the full module map with priority patch delivery.',
    },
    { type: 'h2', text: 'Pick your tier in the portal' },
    {
      type: 'p',
      text: 'After purchase you choose Lite, Pro or Elite inside the operator portal—modules gate by tier, not by separate storefront pages. Read [Lite vs Pro](/blog/wardogs-lite-vs-pro/) and the [Elite guide](/blog/wardogs-elite-tier-guide/) before you launch.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, deployable and equipment markers, objective timers, zoom hack, and stream-safe overlay hiding. Config presets for ranked and Turbo ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aim automation' },
    {
      type: 'p',
      text: 'Memory aimbot, triggerbot, prediction and no-recoil stack on every Lite module. Smoothing and FOV caps tune how aggressive aim feels—start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at cheatswardogs.org—enough firepower for high-skill lobbies without Elite slot limits. Pair with our aim and ESP guides in the blog before your first ranked session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full utility and finish suite' },
    {
      type: 'p',
      text: 'Auto Farm Bot, lane and zone control helpers, finisher assists, Skin Changer and full map awareness with smoke and equipment alerts. Use lobby testing before ranked—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
  cheats: [
    { type: 'h2', text: 'Lite tier' },
    {
      type: 'p',
      text: 'Player ESP, loot and vehicle markers, radar compass, stream-proof overlays and cloud config backup—ideal when you want awareness without aim automation.',
    },
    { type: 'h2', text: 'Pro tier' },
    {
      type: 'p',
      text: 'Everything in Lite plus memory aimbot, triggerbot, prediction, no recoil and ranked-safe default presets tuned for War Dogs firefights.',
    },
    { type: 'h2', text: 'Elite tier' },
    {
      type: 'p',
      text: 'Full Pro stack plus silent aim options, advanced radar shapes, Skin Changer access and priority patch queue with direct dev support in Discord.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Steam accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only EAC cases; see [UGC](/products/wardogs/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Steam restrictions, EAC bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for platform review. Pair with [HWID Spoofer](/products/wardogs/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  cheats: {
    images: buildHeroGallerySlides(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wardogsSystemRequirements,
    fullFeatures: [
      'Lite: Player ESP, loot & vehicle ESP, radar, stream-proof',
      'Pro: Aimbot, triggerbot, no recoil, prediction',
      'Elite: Silent aim, full radar suite, Skin Changer, priority patches',
      'Cloud config backup',
      'Portal tier selector (Lite / Pro / Elite)',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Wardogs cheat: awareness, vehicle markers, radar, then aimbot',
      paragraphs: [
        'War Dogs is a three-team shooter—up to 100 players fight over randomized Control Zones, so enemies rarely approach from one direction. One checkout unlocks Lite, Pro and Elite in the portal: Lite focuses on player ESP, loot filters and radar so you see flanks before you push; Pro adds aimbot, triggerbot and recoil for the gunfight; Elite adds the full module map and priority patch delivery.',
        'Screenshots on this page are live War Dogs sessions. Pair ESP with radar before you enable aimbot, compare tiers in our [features guide](/blog/wardogs-cheats-features-guide/), and check the [patch-day checklist](/blog/eac-patch-day-checklist/) after game updates.',
      ],
    },
  },
  lite: {
    images: slide('gpHeroEsp', 'gpMapHack', 'gpZoomHack'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wardogsSystemRequirements,
    fullFeatures: [
      'Player ESP & operator boxes',
      'Deployable & equipment markers',
      'Loot and vehicle ESP',
      'Loadout and cooldown awareness',
      'Minimap hack overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Objective and redeploy timers',
      'Zoom hack',
      'Turbo preset config',
      'Ranked preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear War Dogs awareness workflow',
      paragraphs: [
        'War Dogs Lite focuses on player ESP, deployable markers, objective timing and zoom hack—everything you need to track third-party pushes and map control without aim automation. Modules are grouped in the portal so you can tune distance, colors, and stream-proof mode before your first queue.',
        'Lite is the entry path for ranked and Turbo players who want map awareness with minimal report risk. No aimbot, no farm bots—just readable overlays maintained every patch at cheatswardogs.org.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpMapHack', 'gpHeroEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wardogsSystemRequirements,
    fullFeatures: [
      'All Lite ESP & map hack modules',
      'Memory aimbot with FOV cap',
      'Triggerbot and target switch',
      'Recoil and spread control',
      'Bone priority and hitbox smoothing',
      'Silent aim options (portal gated)',
      'Humanized reaction delay',
      'Equipment and smoke alerts',
      'Ranked-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear War Dogs aim workflow',
      paragraphs: [
        'War Dogs Pro adds aimbot, triggerbot, prediction and recoil control on top of every Lite module. FOV, smoothing and bone priority live in one combat tab—tuned for ranked lobbies when you start with portal presets, not max sliders.',
        'Pro is the most popular tier: enough firepower for ranked and Turbo without Elite slot limits. Humanized defaults keep gunplay believable while ESP stays readable.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpFarmBot', 'gpSkinChanger'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wardogsSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Auto Farm Bot',
      'Zone and lane control helpers',
      'Supply and cash-route timers',
      'Finisher and last-hit assists',
      'Advanced radar shapes',
      'Full map hack suite',
      'Smoke and throwable alerts',
      'Equipment and vision hints',
      'Skin Changer (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Built around a full War Dogs operator workflow',
      paragraphs: [
        'War Dogs Elite is the private build with Auto Farm Bot, finisher assists, zone control helpers, Skin Changer, full awareness stack and priority patch delivery. Every Lite and Pro module is included—no caps, no upsells inside the loader.',
        'Elite slots are limited so patch cycles stay fast and builds stay maintainable. Direct dev support in Discord helps you tune conservative profiles before ranked. Check the status banner on cheatswardogs.org before purchase.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpHwid1', 'gpHwid2'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching War Dogs.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching War Dogs after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'The HWID Spoofer helps War Dogs players recover when EAC flags PC hardware but the Steam account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only EAC cases. After spoof, load a conservative cheat profile from cheatswardogs.org before queuing ranked.',
      ],
    },
  },
  ugc: {
    images: slide('gpUgc'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on cheatswardogs.org or at checkout on cheatswardogs.org.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you recover restricted gaming, social and marketplace accounts with structured appeal workflows and automation—not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinProduct'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Steam inventory or store state. Other players cannot see previewed arcanas or sets.',
    systemRequirements: wardogsSystemRequirements,
    fullFeatures: [
      'Operator and weapon skin swap',
      'Premium bundle and battle-pass preview',
      'Weapon charm and trinket customizer',
      'Loading and lobby screen editor',
      'Cursor and HUD theme tweaks',
      'Vehicle and slot cosmetics preview',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse premium operator skins, weapon finishes and store bundles locally in War Dogs—searchable catalog, favorites, and loadout export without modifying live Steam purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName =
      slug === 'cheats'
        ? 'this War Dogs suite (Lite • Pro • Elite)'
        : cheat.name === 'Lite'
          ? 'War Dogs Lite'
          : cheat.name === 'Pro'
            ? 'War Dogs Pro'
            : 'War Dogs Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

const CATALOG_SLUGS = ['cheats', 'ugc', 'hwid-spoofer', 'unlock-all'] as const;

export const catalogPages: ProductPage[] = CATALOG_SLUGS.map(
  (slug) => productPages.find((p) => p.slug === slug)!,
).filter(Boolean);

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return [...CATALOG_SLUGS];
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = buildHeroGallerySlides();

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'War Dogs cheats and utilities for Steam PC—ESP, aimbot, HWID spoofer, UGC and Skin Changer at cheatswardogs.org.',
  buyUrl: checkoutPath('wardogs'),
};
