import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const posts = [
  ['Guides','War Dogs cheat menu walkthrough','wardogs-cheat-menu-guide','Navigate AIMBOT, PLAYERS, WORLD, RADAR and CONFIG tabs before your first match.','7 min read'],
  ['Guides','War Dogs ESP and radar tips','wardogs-esp-radar-tips','Filter player boxes, loot tiers and vehicle ESP without cluttering the screen.','6 min read'],
  ['Setup','How to use War Dogs cheats safely','how-to-use-wardogs-cheats','Status checks, loader order and conservative presets for Steam PC sessions.','7 min read'],
  ['Features','War Dogs cheats features guide','wardogs-cheats-features-guide','Aimbot, ESP, loot filters, radar, no recoil and stream-proof modules explained.','11 min read'],
  ['Setup','War Dogs aimbot settings guide','wardogs-aimbot-settings-guide','FOV, smooth, prediction and silent aim tuning for tactical lobbies.','8 min read'],
  ['Guides','War Dogs Lite vs Pro','wardogs-lite-vs-pro','ESP-first Lite versus Pro aimbot and trigger modules—pick the tier that matches your risk profile.','5 min read'],
  ['Guides','War Dogs Elite tier guide','wardogs-elite-tier-guide','When Elite slots, full radar and priority patches are worth the upgrade.','7 min read'],
  ['Setup','War Dogs ranked loadouts','wardogs-ranked-loadouts','Portal presets for aggressive, support and loot-focused ranked sessions.','6 min read'],
  ['Setup','War Dogs ESP setup','wardogs-esp-setup','Skeleton, box, snap line and distance filters for readable wallhack overlays.','5 min read'],
  ['Setup','War Dogs radar guide','wardogs-radar-guide','Compass dots, arrow shapes and entity filters for rotating without tunnel vision.','5 min read'],
  ['Guides','War Dogs skin changer guide','wardogs-skin-changer-guide','Local cosmetic preview and loadout favorites without touching Steam inventory.','6 min read'],
  ['Updates','EAC patch day checklist','eac-patch-day-checklist','Status banner, loader refresh and safe profiles after War Dogs or EAC updates.','5 min read'],
  ['Guides','HWID spoofer after a hardware ban','wardogs-hwid-spoofer-after-ban','When to spoof, when to reset, and pairing with [UGC](/products/wardogs/ugc/).','7 min read'],
  ['Guides','How to buy War Dogs cheats in 2026','how-to-buy-wardogs-cheats-2026','Checkout, portal access and first launch for Lite, Pro and Elite.','5 min read'],
  ['Setup','War Dogs aimbot presets','wardogs-aimbot-presets','Starter FOV and smooth curves for rifles, SMGs and DMR roles.','6 min read'],
  ['Troubleshooting','EAC login and verify errors','eac-login-errors-guide','Fix integrity failures, driver conflicts and when to open a support ticket.','6 min read'],
  ['Guides','War Dogs external cheat guide','wardogs-external-cheat-guide','Why external loaders matter on EAC-protected Steam builds.','7 min read'],
  ['Setup','Stream-proof overlay setup','wardogs-stream-proof-setup','Hide ESP and radar from OBS while keeping modules on your monitor.','5 min read'],
];

function bodyFor(slug, title) {
  const product = '[War Dogs cheats](/products/wardogs/)';
  const lite = '[Lite tier](/products/wardogs/lite/)';
  const pro = '[Pro tier](/products/wardogs/pro/)';
  const elite = '[Elite tier](/products/wardogs/elite/)';
  const go = '/go/wardogs/';
  const blocks = [
    { type: 'p', text: `${title} on cheatswardogs.org walks Steam PC operators through modules that match the live War Dogs client. Always read the status banner and Discord #status before you launch—especially after Easy Anti-Cheat or game patches.` },
    { type: 'h2', text: 'What this guide covers' },
    { type: 'p', text: `We focus on practical setup: which tabs to enable first, how to keep overlays readable in firefights, and when to upgrade from ${lite} to ${pro} or ${elite}. Feature lists on ${product} stay authoritative for checkout.` },
    { type: 'h2', text: 'Recommended workflow' },
    { type: 'ul', items: [
      'Confirm online status at cheatswardogs.org and in Discord.',
      'Load conservative portal presets before public matchmaking.',
      'Test loot and player ESP in a private lobby when available.',
      'Save ranked and casual profiles separately in the cloud library.',
    ]},
    { type: 'h2', text: 'Module pairing' },
    { type: 'p', text: `Pair player ESP with radar filters so you rotate using compass cues instead of staring at wallhack boxes. Pro adds aimbot, triggerbot and recoil control; Elite bundles stream-proof radar shapes and faster patch delivery.` },
    { type: 'h2', text: 'Utilities and recovery' },
    { type: 'p', text: 'Hardware flagged after a ban? Review [HWID Spoofer](/products/wardogs/hwid-spoofer/) and [UGC](/products/wardogs/ugc/) workflows. Cosmetic-only operators can use [Skin Changer](/products/wardogs/unlock-all/) without combat modules.' },
    { type: 'cta', title: 'Get War Dogs cheats', text: 'Pick Lite, Pro or Elite and checkout through our secure partner link.', href: go },
  ];
  if (slug.includes('hwid')) blocks[blocks.length - 1] = { type: 'cta', title: 'HWID Spoofer', text: 'Start hardware recovery workflow.', href: '/go/hwid-spoofer/' };
  if (slug.includes('skin-changer') || slug === 'wardogs-skin-changer-guide') blocks[blocks.length - 1] = { type: 'cta', title: 'Skin Changer', text: 'Preview cosmetics locally.', href: '/go/skin-changer/' };
  if (slug === 'eac-login-errors-guide') blocks[blocks.length - 1] = { type: 'cta', title: 'UGC appeal tools', text: 'Organize restriction appeals.', href: '/go/ugc/' };
  return blocks;
}

const postLines = [`import type { BlogPostFull } from './types';`, ``, `export const blogPosts: BlogPostFull[] = [`];
for (const [tag, title, slug, desc, readTime] of posts) {
  const image = `/images/blog/${slug}.webp`;
  const date = 'Aug 12, 2026';
  postLines.push(`  {`);
  postLines.push(`    tag: ${JSON.stringify(tag)},`);
  postLines.push(`    title: ${JSON.stringify(title)},`);
  postLines.push(`    slug: ${JSON.stringify(slug)},`);
  postLines.push(`    image: ${JSON.stringify(image)},`);
  postLines.push(`    desc: ${JSON.stringify(desc)},`);
  postLines.push(`    date: ${JSON.stringify(date)},`);
  postLines.push(`    readTime: ${JSON.stringify(readTime)},`);
  postLines.push(`    author: 'War Dogs Cheats Editorial',`);
  postLines.push(`    body: ${JSON.stringify(bodyFor(slug, title), null, 6).replace(/^/gm, '    ').trim()},`);
  postLines.push(`  },`);
}
postLines.push(`];`, ``);
fs.writeFileSync(path.join(root, 'src/data/blog/posts.ts'), postLines.join('\n'));
console.log('Wrote posts.ts');

const blogItems = posts.map(([tag, title, slug, desc, readTime], i) => {
  const dates = ['Aug 20','Aug 19','Aug 18','Aug 18','Aug 17','Aug 16','Aug 16','Aug 15','Aug 15','Aug 14','Aug 14','Aug 13','Aug 13','Aug 12','Aug 12','Aug 11','Aug 11','Aug 10'];
  return `      {
        tag: ${JSON.stringify(tag)},
        title: ${JSON.stringify(title)},
        slug: ${JSON.stringify(slug)},
        image: '/images/blog/${slug}.webp',
        desc: ${JSON.stringify(desc)},
        date: '${dates[i]}, 2026',
        readTime: '${readTime}',
      }`;
}).join(',\n');

let en = fs.readFileSync(path.join(root, 'src/i18n/en.ts'), 'utf8');
const blogStart = en.indexOf('    items: [');
const blogEnd = en.indexOf('    ],\n  },\n  toolkit:');
if (blogStart > 0 && blogEnd > blogStart) {
  en = en.slice(0, blogStart) + `    items: [\n${blogItems}\n` + en.slice(blogEnd);
}

const enReplacements = [
  [/name: 'War Dogs Cheats',\s*domain: 'cheatswardogs\.org',\s*title: '[^']*',\s*description:\s*'[^']*',/s,
    `name: 'War Dogs Cheats',\n    domain: 'cheatswardogs.org',\n    title: 'War Dogs Cheats & Hacks | Aimbot, ESP & Radar',\n    description:\n      'War Dogs cheats for Steam PC with aimbot, ESP, loot filters and radar tiers—updated after patches at cheatswardogs.org.',`],
  [/status: '[^']*'/,'status: \'War Dogs — patch build online\''],
  [/titleLine1: '[^']*'/,'titleLine1: \'War Dogs\''],
  [/titleLine2: '[^']*'/,'titleLine2: \'Cheats & Hacks\''],
  [/modesLabel: '[^']*'/,'modesLabel: \'War Dogs modes\''],
  [/modes: \[[^\]]*\]/,'modes: [\'PvP\', \'Co-op\', \'Ranked\', \'Custom\']'],
  [/subtitle:\s*'Dota cheats[^']*'/,'subtitle:\n      \'War Dogs cheats with aimbot, ESP, loot filters and radar for Steam PC—portal presets and live support at cheatswardogs.org.\''],
  [/features: \{\s*eyebrow: 'Features',\s*title: '[^']*',\s*subtitle: '[^']*'/s,
    `features: {\n    eyebrow: 'Features',\n    title: 'Everything you need in one package',\n    subtitle: 'Combat overlays and utility tools for War Dogs, maintained every patch.`],
];
for (const [re, rep] of enReplacements) en = en.replace(re, rep);

en = en.replace(/Dota 2/g, 'War Dogs').replace(/dota 2/gi, 'War Dogs').replace(/dota cheats/gi, 'War Dogs cheats').replace(/VAC/g, 'EAC').replace(/Valve/g, 'platform').replace(/Invoker|Lion|PA|hero|ward |rune |Turbo|ranked MMR/gi, (m) => {
  if (/Invoker|Lion|PA/i.test(m)) return 'rifle';
  if (/hero/i.test(m)) return 'operator';
  if (/ward |rune /i.test(m)) return 'loot ';
  if (/Turbo/i.test(m)) return 'Arcade';
  if (/ranked MMR/i.test(m)) return 'ranked';
  return m;
});

fs.writeFileSync(path.join(root, 'src/i18n/en.ts'), en);
console.log('Patched en.ts');

let pageSeo = fs.readFileSync(path.join(root, 'src/config/pageSeo.ts'), 'utf8');
pageSeo = pageSeo.replace(/Dota 2/g, 'War Dogs').replace(/dota 2/gi, 'War Dogs').replace(/dota cheats/gi, 'War Dogs cheats').replace(/VAC/g, 'EAC');
pageSeo = pageSeo.replace(
  "title: 'War Dogs Cheats & Hacks | Scripts, Map Hack & ESP',",
  "title: 'War Dogs Cheats & Hacks | Aimbot, ESP & Radar',",
);
pageSeo = pageSeo.replace(
  "description:\n      'War Dogs cheats for PC ranked: scripts, map hack, zoom hack, and skin changer tiers updated every patch at cheatswardogs.org.',",
  "description:\n      'War Dogs cheats for Steam PC: aimbot, ESP, loot filters, radar and tiered tools updated after patches at cheatswardogs.org.',",
);
fs.writeFileSync(path.join(root, 'src/config/pageSeo.ts'), pageSeo);

const related = `export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['wardogs-esp-setup', 'wardogs-lite-vs-pro', 'wardogs-radar-guide', 'eac-patch-day-checklist'],
  pro: [
    'wardogs-ranked-loadouts',
    'wardogs-aimbot-presets',
    'wardogs-lite-vs-pro',
    'wardogs-stream-proof-setup',
  ],
  elite: [
    'wardogs-elite-tier-guide',
    'wardogs-cheats-features-guide',
    'wardogs-esp-setup',
    'eac-patch-day-checklist',
    'how-to-buy-wardogs-cheats-2026',
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
};`;

let products = fs.readFileSync(path.join(root, 'src/data/products.ts'), 'utf8');
products = products.replace(/export const productRelatedBlogSlugs:[\s\S]*?};/, related);
products = products.replace(/dota-2-map-hack\.png/g, 'wardogs-visuals-esp.webp');
products = products.replace(/dota-2-scripts-combo\.png/g, 'wardogs-aimbot-menu.webp');
products = products.replace(/dota-2-zoom-hack\.png/g, 'wardogs-misc-radar.webp');
products = products.replace(/dota-2-skin-changer\.png/g, 'wardogs-skin-changer.webp');
products = products.replace(/dota-2-auto-kill-steal\.png/g, 'wardogs-aimbot-menu.webp');
products = products.replace(/dota-2-farm-bot\.png/g, 'wardogs-player-esp.webp');
products = products.replace(/dota-2-hero-esp\.png/g, 'wardogs-player-esp.webp');
products = products.replace(/Dota 2/g, 'War Dogs').replace(/dota 2/gi, 'War Dogs').replace(/dota cheats/gi, 'War Dogs cheats').replace(/VAC/g, 'EAC').replace(/Valve/g, 'platform');
products = products.replace(/dotaSystemRequirements/g, 'wardogsSystemRequirements');
products = products.replace(/return segment \|\| 'dota-2-cheats';/, "return segment || 'wardogs';");
products = products.replace(
  `'hwid-spoofer': {\n    images: slide('gpMapHack', 'gpHeroEsp', 'gpZoomHack'),`,
  `'hwid-spoofer': {\n    images: slide('gpHwid1', 'gpHwid2'),`,
);
products = products.replace(
  `'ugc': {\n    images: slide('gpMapHack', 'gpHeroEsp', 'gpZoomHack'),`,
  `'ugc': {\n    images: slide('gpUgc'),`,
);
products = products.replace(
  `'unlock-all': {\n    images: slide('gpSkinChanger', 'gpHeroEsp', 'gpMapHack'),`,
  `'unlock-all': {\n    images: slide('gpSkinChanger'),`,
);

const galleryInsert = `
  gpHwid1: {
    src: \`\${gameplay}/wardogs-hwid-spoofer-1.webp\`,
    alt: 'War Dogs HWID spoofer compatibility scan on Windows',
    caption: 'HWID scan',
    captionDesc: 'Portal compatibility scan before applying hardware profile tools.',
  },
  gpHwid2: {
    src: \`\${gameplay}/wardogs-hwid-spoofer-2.webp\`,
    alt: 'War Dogs HWID spoofer identifier verification screen',
    caption: 'Verification',
    captionDesc: 'Post-spoof identifier diff report before launching War Dogs.',
  },
  gpUgc: {
    src: \`\${gameplay}/wardogs-ugc-tool.webp\`,
    alt: 'War Dogs UGC appeal dashboard for Steam restrictions',
    caption: 'UGC dashboard',
    captionDesc: 'Case tracking and appeal templates for platform restrictions.',
  },`;

products = products.replace('  gpHeroEsp: {', galleryInsert + '\n  gpHeroEsp: {');
products = products.replace(
  /description: 'Elite dota cheats[^']*'/,
  "description: 'Elite War Dogs cheats, HWID spoofer, UGC recovery, and cosmetic utilities for Steam PC.'",
);
fs.writeFileSync(path.join(root, 'src/data/products.ts'), products);

console.log('Patched products.ts');
