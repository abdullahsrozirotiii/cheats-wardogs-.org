import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'War Dogs Cheats',
    domain: 'cheatswardogs.org',
    title: 'War Dogs Cheats | Aim, ESP, Radar & Patch Day Status',
    description:
      'War Dogs cheats for Steam PC: ESP and Radar on every tier, aim tools on Pro and Elite, plus Patch Day loader status at cheatswardogs.org.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'War Dogs — live build online',
    eyebrow: '#1 Undetected Provider',
    titleLine1: 'War Dogs cheats',
    titleLine2: 'Aim, ESP, Radar & Patch Day Status',
    subtitle:
      'Steam PC War Dogs cheats with player ESP, Radar overlays, and aim tools on Pro and Elite—boxes and skeletons out to 463 m, loot and vehicle markers on the 256 km² map, and a tunable aim curve where your tier unlocks it. Loader builds track the current EAC release; check the cheatswardogs.org status banner and Discord #status before checkout or ranked.',
    ctaPrimary: 'View War Dogs cheats',
    ctaDiscord: 'Join Discord',
    modesLabel: 'War Dogs modes',
    modes: ['PvP', 'Co-op', 'Ranked', 'Custom'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'War Dogs cheats built for large-scale fights',
    subtitle:
      'Same focus as the hero: ESP and Radar on every tier, aim on Pro and Elite, and Patch Day builds—check status before you queue ranked.',
    items: [
      {
        title: 'Player ESP / Wallhack',
        subtitle: 'See threats before you push.',
        desc: 'Track infantry and vehicles through cover when three teams converge on the same Control Zone—read positions before you commit.',
        bullets: [
          'Player boxes, skeletons and distance tags',
          'Loot and vehicle markers for loadout decisions',
          'Smoke and last-seen cues on busy maps',
        ],
        tags: ['War Dogs wallhack', 'War Dogs ESP', 'player esp'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Radar & minimap hack',
        subtitle: 'Control Zone awareness.',
        desc: 'Compass and radar overlays show flanks while you hold an objective—not just the squad directly in front of you.',
        bullets: [
          'Adjustable radar scale and filter presets',
          'Enemy direction hints during extractions',
          'Pairs with player ESP for safer rotations',
        ],
        tags: ['War Dogs radar', 'minimap hack', 'control zone'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Aimbot & recoil (Pro+)',
        subtitle: 'Win the gunfight second.',
        desc: 'Once targets break cover, Pro and Elite tiers add aimbot, triggerbot and recoil control tuned for War Dogs gunplay.',
        bullets: ['FOV and smoothing sliders', 'Triggerbot for defensive holds', 'Recoil profiles per weapon class'],
        tags: ['War Dogs aimbot', 'recoil control', 'triggerbot'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Loot ESP',
        subtitle: 'Protect your cash economy.',
        desc: 'War Dogs loadouts cost cash—loot filters help you gear up without blind sprinting into a third team.',
        bullets: ['Rarity and category filters', 'Med kit and ammo highlights', 'Safe-route hints with radar on'],
        tags: ['loot esp', 'loadouts', 'War Dogs cheats'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Utility Suite',
        subtitle: 'HWID, UGC and cosmetics.',
        desc: 'Beyond core War Dogs cheats—recovery utilities and Skin Changer when hardware or cosmetics are the goal.',
        bullets: [
          'HWID Spoofer for flagged hardware workflows',
          'UGC appeal workspace for restriction cases',
          'Skin Changer for local cosmetic previews',
          'Stream Proof: hide overlays from OBS capture',
        ],
        tags: ['hwid spoofer', 'skin changer', 'stream proof'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Tiered checkout',
        subtitle: 'Lite, Pro, Elite.',
        desc: 'One War Dogs cheats checkout—pick Lite for ESP, Pro for aimbot, Elite for the full module map and priority patches.',
        bullets: [
          'Lite: ESP, loot filters and radar',
          'Pro: Lite plus aimbot and recoil tools',
          'Elite: full suite and faster patch queue',
          'Compare tiers on the cheats product page',
        ],
        tags: ['War Dogs cheats', 'lite vs pro', 'elite tier'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators stay safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Zoom / camera',
        subtitle: 'Read the battlefield.',
        desc: 'Pull camera back for map context on large War Dogs maps without losing aim precision.',
        bullets: ['Distance caps per preset', 'Quick reset to default FOV', 'Pairs with radar overlays'],
        tags: ['zoom hack', 'camera', 'vision'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same War Dogs cheat presets on every PC—portal updates track game and EAC patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Ranked tooling backed by patches—not promises',
    subtitle:
      'Most War Dogs cheat shops ship stale loaders, obvious automation, and ticket bots. We built cheatswardogs.org around patch-day delivery, humanized scripts, and live operators.',
    usLabel: 'War Dogs Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'EAC-aware builds pushed within hours of War Dogs updates—check Discord #status before you queue ranked.',
      },
      {
        title: 'Humanized aim settings',
        desc: 'Conservative FOV, smoothing and recoil defaults mimic legit gunplay—not snap aim that floods reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, War Dogs presets and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the War Dogs process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Ranked, casual and per-weapon profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major War Dogs or EAC changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Steam PC players running War Dogs cheats, ESP and utilities on cheatswardogs.org.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to ranked queue in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue War Dogs on Steam PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'Open cheat tiers',
    ctaSecondary: 'Read the setup FAQ',
    ctaPrimaryHref: `${productBase}cheats/`,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import ranked or Turbo presets, and tune scripts plus map hack sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue War Dogs',
        desc: 'Check the live status banner, launch Steam War Dogs, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching War Dogs after updates.',
    items: ['Windows 10 & 11', 'Steam', 'War Dogs client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'War Dogs cheats',
    title: 'War Dogs cheat tiers',
    subtitle: 'Lite, Pro and Elite modules for Steam PC—one checkout, tier picked in the portal.',
    viewAll: 'View cheat details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Lite • Pro • Elite',
        name: 'Cheats',
        title: 'WarDogs Cheats (Lite • Pro • Elite)',
        desc: 'ESP, aimbot, loot filters, radar and stream-proof tools—pick Lite, Pro or Elite after checkout in the operator portal.',
        features: ['Lite: ESP, loot & radar', 'Pro: Aimbot & no recoil', 'Elite: Full suite + priority patches', 'Stream-proof mode'],
        more: 24,
        href: `${productBase}cheats/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'War Dogs products',
    subtitle: 'Four War Dogs products: cheats (Lite, Pro, Elite), HWID spoofer, UGC and Skin Changer.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for Steam restrictions, EAC bans and security holds—custom workflows and dispute automation.',
        features: [
          'Monthly $35',
          'Lifetime $150',
          'Custom appeal workflows',
          'Dispute automation',
          'Case documentation',
          'Status tracking dashboard',
        ],
        more: 4,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching War Dogs.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Skin Changer',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Lightweight Skin Changer for operator outfits, weapon skins and rare variants—local preview without Steam store purchases.',
        features: ['Operator skin swap', 'Weapon & effect customizer', 'Rare variant preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Cheat codes, script setup, map hack config and patch-day checks for War Dogs.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'Before your first match — War Dogs cheats: RADAR and CONFIG tabs',
        slug: 'wardogs-cheat-menu-guide',
        image: '/images/blog/wardogs-cheat-menu-guide.webp',
        desc:
          'Cheat menu walkthrough for War Dogs: AIMBOT, PLAYERS, WORLD, RADAR and CONFIG tabs before your first Steam PC match—module order and safe defaults.',
        date: 'Jan 9, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'War Dogs vehicle ESP cheats — filter boxes, loot, radar overlays',
        slug: 'wardogs-esp-radar-tips',
        image: '/images/blog/wardogs-esp-radar-tips.webp',
        desc:
          'ESP: filter boxes, loot tiers, vehicle ESP—radar and minimap tips for Steam PC Control Zone rotations, readable defaults.',
        date: 'Jan 24, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: "How to use War Dogs cheats safely",
        slug: 'how-to-use-wardogs-cheats',
        image: '/images/blog/how-to-use-wardogs-cheats.webp',
        desc: "Status checks, loader order and conservative presets for Steam PC sessions.",
        date: 'Feb 7, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: "War Dogs cheats features guide",
        slug: 'wardogs-cheats-features-guide',
        image: '/images/blog/wardogs-cheats-features-guide.webp',
        desc: "Aimbot, ESP, loot filters, radar, no recoil and stream-proof modules explained.",
        date: 'Feb 22, 2026',
        readTime: '11 min read',
      },
      {
        tag: 'Setup',
        title: "War Dogs aimbot settings guide",
        slug: 'wardogs-aimbot-settings-guide',
        image: '/images/blog/wardogs-aimbot-settings-guide.webp',
        desc: "FOV, smooth, prediction and silent aim tuning for tactical lobbies.",
        date: 'Mar 11, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: "War Dogs Lite vs Pro",
        slug: 'wardogs-lite-vs-pro',
        image: '/images/blog/wardogs-lite-vs-pro.webp',
        desc: "ESP-first Lite versus Pro aimbot and trigger modules—pick the tier that matches your risk profile.",
        date: 'Mar 26, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: "War Dogs Elite tier guide",
        slug: 'wardogs-elite-tier-guide',
        image: '/images/blog/wardogs-elite-tier-guide.webp',
        desc: "When Elite slots, full radar and priority patches are worth the upgrade.",
        date: 'Apr 8, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: "War Dogs ranked loadouts",
        slug: 'wardogs-ranked-loadouts',
        image: '/images/blog/wardogs-ranked-loadouts.webp',
        desc: "Portal presets for aggressive, support and loot-focused ranked sessions.",
        date: 'Apr 21, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: "War Dogs ESP setup",
        slug: 'wardogs-esp-setup',
        image: '/images/blog/wardogs-esp-setup.webp',
        desc: "Skeleton, box, snap line and distance filters for readable wallhack overlays.",
        date: 'May 4, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: "War Dogs radar guide",
        slug: 'wardogs-radar-guide',
        image: '/images/blog/wardogs-radar-guide.webp',
        desc: "Compass dots, arrow shapes and entity filters for rotating without tunnel vision.",
        date: 'May 19, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: "War Dogs skin changer guide",
        slug: 'wardogs-skin-changer-guide',
        image: '/images/blog/wardogs-skin-changer-guide.webp',
        desc: "Local cosmetic preview and loadout favorites without touching Steam inventory.",
        date: 'Jun 2, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Updates',
        title: 'Patch day checklist for War Dogs cheats after EAC updates',
        slug: 'eac-patch-day-checklist',
        image: '/images/blog/eac-patch-day-checklist.webp',
        desc:
          'War Dogs cheats patch day checklist: after EAC or game updates confirm status, refresh the loader, test ESP in a private lobby, then queue ranked on Steam PC.',
        date: 'Jun 17, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: "HWID spoofer after a hardware ban",
        slug: 'wardogs-hwid-spoofer-after-ban',
        image: '/images/blog/wardogs-hwid-spoofer-after-ban.webp',
        desc: "When to spoof, when to reset, and pairing with [UGC](/products/wardogs/ugc/).",
        date: 'Jul 1, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: "How to buy War Dogs cheats in 2026",
        slug: 'how-to-buy-wardogs-cheats-2026',
        image: '/images/blog/how-to-buy-wardogs-cheats-2026.webp',
        desc:
          'How to buy war dogs cheats in 2026: one checkout unlocks the operator portal on Steam PC, pick Lite Pro or Elite, download the loader, verify status, then queue ranked.',
        date: 'Jul 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: "War Dogs aimbot presets",
        slug: 'wardogs-aimbot-presets',
        image: '/images/blog/wardogs-aimbot-presets.webp',
        desc: "Starter FOV and smooth curves for rifles, SMGs and DMR roles.",
        date: 'Jul 28, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Troubleshooting',
        title: 'EAC login and verify errors — War Dogs cheats troubleshooting',
        slug: 'eac-login-errors-guide',
        image: '/images/blog/eac-login-errors-guide.webp',
        desc:
          'eac login and verify errors on War Dogs: fix integrity checks and driver conflicts, verify the loader, and know when to open a support ticket on Steam PC.',
        date: 'Aug 6, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: "War Dogs external cheat guide",
        slug: 'wardogs-external-cheat-guide',
        image: '/images/blog/wardogs-external-cheat-guide.webp',
        desc: "Why external loaders matter on EAC-protected Steam builds.",
        date: 'Aug 19, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: "Stream-proof overlay setup",
        slug: 'wardogs-stream-proof-setup',
        image: '/images/blog/wardogs-stream-proof-setup.webp',
        desc: "Hide ESP and radar from OBS while keeping modules on your monitor.",
        date: 'Sep 3, 2026',
        readTime: '5 min read',
      }
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Scripts', title: 'Combos that adapt to your hero', desc: 'Auto Combo, Orbwalker, Smart Cast and Delay Setting in one scripts tab.' },
      { num: '02', label: 'Vision', title: 'Map hack that stays readable', desc: 'Filter by distance, team color, ward type and smoke alert sensitivity.' },
      { num: '03', label: 'Minimap', title: 'Runes and rotates on lock', desc: 'Rune timers, enemy hints and minimap hack on a compact overlay.' },
      { num: '04', label: 'Heroes', title: 'Per-hero script profiles', desc: 'Save Invoker, Lion, PA and support scripts and swap with hotkeys.' },
      { num: '05', label: 'Bots', title: 'Farm & lane automation', desc: 'Auto Farm Bot, stack timer and courier manager for efficient farming.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate ranked, Turbo and casual presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a War Dogs profile you can reuse every session.',
    ctaLabel: 'Open product catalog',
    ctaHref: productBase,
    ctaSecondary: 'Open the setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check EAC status',
        desc: 'Read the live banner on cheatswardogs.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches your ranked goals.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save ranked and Turbo presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how War Dogs plays.',
    items: [
      { num: '01', title: 'Control Zone ready', desc: 'Patch notes hit Discord and the portal before major War Dogs updates—check ESP and aimbot status before you queue.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with readable ESP and moderate aimbot FOV, then tune up—not max sliders on day one.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or War Dogs presets? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'War Dogs Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'messageCircle',
        title: 'Join the community forum',
        desc: 'Trade loadouts, read patch notes, and browse guide-based Q&A with other War Dogs players.',
        linkLabel: 'Explore all guides',
        href: '/forum/',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'messageCircle',
        title: 'Discord support',
        desc: 'Live install help, loader questions, and the #status channel for build notes.',
        linkLabel: 'Open Discord invite',
        href: 'https://discord.com/invite/wmFY3xVtwm',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on cheatswardogs.org or via our secure checkout.' },
      { title: 'Platform', desc: 'Steam on Windows 10 or 11—and your War Dogs client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if War Dogs cheats are online?',
        a: 'The live status banner is on cheatswardogs.org and in the Discord #status channel. Always check after a War Dogs or EAC update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching War Dogs.',
      },
      {
        num: '03',
        q: 'Which platforms are supported?',
        a: 'War Dogs via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '04',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '05',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Skin Changer live at cheatswardogs.org/products/wardogs/ with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'War Dogs cheats for Steam PC — ESP, aimbot and utilities at cheatswardogs.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/wardogs/cheats/', label: 'Cheat tier list', ariaLabel: 'Lite, Pro and Elite cheat tiers' },
      { href: '/products/wardogs/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About War Dogs Cheats',
      description:
        'War Dogs Cheats provides War Dogs cheat tiers, utility tools and PC support resources at cheatswardogs.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'War Dogs Cheats is a PC-focused resource for War Dogs players exploring scripts, map hack, zoom hack and Skin Changer workflows. We publish tier comparisons, setup guides, and live status notes so you can evaluate War Dogs cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Lite, Pro, and Elite cheat tiers, HWID utilities, Skin Changer and account recovery workflows. Blog articles explain ranked-safe configs, patch-day checks, and EAC update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Steam account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How War Dogs Cheats handles analytics, cookies, and contact data when you use cheatswardogs.org.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on cheatswardogs.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for War Dogs Cheats products and cheatswardogs.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using cheatswardogs.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to War Dogs cheat tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, Skin Changer / Unlock All) delivered through an operator portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when War Dogs or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. cheatswardogs.org does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching War Dogs.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, EAC penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Steam War Dogs on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, War Dogs build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for War Dogs can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'War Dogs Cheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at cheatswardogs.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'War Dogs Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join War Dogs Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
