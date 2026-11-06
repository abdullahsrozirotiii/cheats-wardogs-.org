import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let en = fs.readFileSync(path.join(root, 'src/i18n/en.ts'), 'utf8');

const blogPosts = fs.readFileSync(path.join(root, 'src/data/blog/posts.ts'), 'utf8');
const slugMatches = [...blogPosts.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]).slice(0, 18);
const titleMatches = [...blogPosts.matchAll(/title: "([^"]+)"/g)].map((m) => m[1]).slice(0, 18);
const descMatches = [...blogPosts.matchAll(/desc: "([^"]+)"/g)].map((m) => m[1]).slice(0, 18);

const tags = ['Guides','Guides','Setup','Features','Setup','Guides','Guides','Setup','Setup','Setup','Guides','Updates','Guides','Guides','Setup','Troubleshooting','Guides','Setup'];
const dates = ['Aug 20','Aug 19','Aug 18','Aug 18','Aug 17','Aug 16','Aug 16','Aug 15','Aug 15','Aug 14','Aug 14','Aug 13','Aug 13','Aug 12','Aug 12','Aug 11','Aug 11','Aug 10'];
const readTimes = ['7 min read','6 min read','7 min read','11 min read','8 min read','5 min read','7 min read','6 min read','5 min read','5 min read','6 min read','5 min read','7 min read','5 min read','6 min read','6 min read','7 min read','5 min read'];

const items = slugMatches.map((slug, i) => `      {
        tag: '${tags[i]}',
        title: ${JSON.stringify(titleMatches[i])},
        slug: '${slug}',
        image: '/images/blog/${slug}.webp',
        desc: ${JSON.stringify(descMatches[i])},
        date: '${dates[i]}, 2026',
        readTime: '${readTimes[i]}',
      }`).join(',\n');

const blogMarker = en.indexOf('  blog: {');
const itemsStart = en.indexOf('    items: [', blogMarker);
const toolkitIdx = en.indexOf('  toolkit:', blogMarker);
const closeIdx = en.lastIndexOf('    ],', toolkitIdx);
if (itemsStart < 0 || closeIdx < 0) throw new Error('blog items block not found');
en = en.slice(0, itemsStart) + `    items: [\n${items}\n    ],` + en.slice(closeIdx + 6);

const liteProBlock = `      {
        badge: 'Popular',
        tier: 'Standard',
        name: 'Lite',
        title: 'War Dogs Lite',
        desc: 'ESP, loot filters and radar for operators who want awareness without aimbot automation.',
        features: ['Player ESP & boxes', 'Loot & vehicle ESP', 'Radar compass', 'Stream-proof mode'],
        more: 12,
        href: \`\${productBase}lite/\`,
        variant: 'essential',
      },
      {
        badge: 'Best value',
        tier: 'Advanced',
        name: 'Pro',
        title: 'War Dogs Pro',
        desc: 'Lite plus aimbot, triggerbot, no recoil and prediction tuned for ranked firefights.',
        features: ['All Lite modules', 'Memory aimbot', 'Triggerbot', 'No recoil control'],
        more: 18,
        href: \`\${productBase}pro/\`,
        variant: 'popular',
      },
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'War Dogs Elite',
        desc: 'Full module suite with priority patches, advanced radar shapes and direct dev support.',
        features: ['All Pro modules', 'Silent aim options', 'Full radar suite', 'Skin Changer included'],
        more: 42,
        href: \`\${productBase}elite/\`,
        variant: 'limited',
      },`;

en = en.replace(/    items: \[\s*\{\s*badge: 'Limited slots'[\s\S]*?variant: 'limited',\s*\},\s*\],/m, `    items: [\n${liteProBlock}\n    ],`);

const safe = [
  ['dotacheats.com', 'cheatswardogs.org'],
  ['DotaCheats', 'War Dogs Cheats'],
  ['Dota 2', 'War Dogs'],
  ['dota 2', 'War Dogs'],
  ['dota cheats', 'War Dogs cheats'],
  ['Dota cheats', 'War Dogs cheats'],
  ['VAC', 'EAC'],
  ['Valve', 'platform'],
  ['/products/dota-2-cheats/', '/products/wardogs/'],
  ['.png', '.webp'],
];
for (const [a, b] of safe) en = en.split(a).join(b);

en = en.replace(
  "title: 'Dota Cheats & Hacks | War Dogs Scripts, Map Hack & ESP',",
  "title: 'War Dogs Cheats & Hacks | Aimbot, ESP & Radar',",
);
en = en.replace(
  'Undetected War Dogs cheats with scripts, map hack, zoom hack and skin changer for PC ranked—updated every patch at cheatswardogs.org.',
  'War Dogs cheats for Steam PC with aimbot, ESP, loot filters and radar—updated after patches at cheatswardogs.org.',
);
en = en.replace("status: 'War Dogs — patch build online'", "status: 'War Dogs — live build online'");
en = en.replace("modes: ['Ranked', 'Turbo', 'All Pick', 'Captains Mode']", "modes: ['PvP', 'Co-op', 'Ranked', 'Custom']");
en = en.replace(
  'War Dogs cheats with scripts, map hack, zoom hack and skin changer for PC ranked on Steam—updated every patch with preset configs and support at cheatswardogs.org.',
  'War Dogs cheats with aimbot, ESP, loot filters and radar on Steam PC—portal presets and support at cheatswardogs.org.',
);

fs.writeFileSync(path.join(root, 'src/i18n/en.ts'), en);
console.log('Patched en.ts OK', en.length);
