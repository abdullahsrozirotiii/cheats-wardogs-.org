import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheatsProduct = link('War Dogs cheats (Lite, Pro, Elite)', `${ROUTES.products}cheats/`);
const cheatsPath = `${ROUTES.products}cheats/`;
const productsHub = link('War Dogs products', ROUTES.products);
const hwid = link('HWID spoof utility', productPath('hwid-spoofer'));
const ugc = link('UGC appeal workspace', productPath('ugc'));
const skin = link('Skin Changer utility', productPath('unlock-all'));
const faqPage = link('full FAQ', ROUTES.faq);
/** Same URL as faqPage; unique anchor text for SEO crawlers that flag repeated labels. */
const faqIndexAllTopics = link('FAQ index — all topics', ROUTES.faq);
const faqMasterIndex = link('master FAQ index', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);
const blogLongForm = link('long-form setup guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if War Dogs cheats are online?',
    a: a('The live status banner is on cheatswardogs.org and in the Discord #status channel. Always check after a War Dogs or EAC update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching War Dogs.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('War Dogs via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists ${cheatsProduct}, ${hwid}, ${ugc}, and ${skin} with feature lists and checkout via our partner.`,
  },
  {
    id: 'esp-aimbot-together',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Can I use War Dogs ESP and aimbot together?',
    a: a('Yes. Lite covers ESP, loot filters and radar. Pro and Elite add aimbot, triggerbot and recoil on top of the same awareness stack—enable ESP first, then tune aimbot after you can read the overlay in a private lobby.'),
  },
  {
    id: 'control-zone-awareness',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'Why is wallhack useful in War Dogs Control Zone fights?',
    a: a('Up to 100 players split across three teams can push the same objective from different angles. ESP and radar help you see flanks before you enter a building or open ground—not only the squad directly ahead.'),
  },
  {
    id: 'after-game-patch',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What should I do after a War Dogs game update?',
    a: `Check cheatswardogs.org and Discord #status, update the loader when a compatible build ships, then test in a private lobby before matchmaking. Follow the ${link('EAC patch-day checklist', '/blog/eac-patch-day-checklist/')} for the full routine.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is War Dogs ESP / wallhack?',
    a: `Player ESP and wallhack show enemy positions, loot and vehicles through cover on large War Dogs maps. ${link('Lite map-hack scope', cheatsPath)} covers awareness overlays. ${link('Pro aim layer', cheatsPath)} and ${link('Elite full map build', cheatsPath)} add aimbot modules on top.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between map hack and scripts?',
    a: `Map hack and ESP are information overlays—they highlight players, loot and vehicles; they do not pull the trigger for you. Aimbot, triggerbot and recoil assists ship on ${link('Pro aim stack', cheatsPath)} and ${link('Elite full utility build', cheatsPath)}. You can run awareness-only on ${link('Lite ESP-only path', cheatsPath)}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier do I need for map hack only?',
    a: `${link('Lite awareness package', cheatsPath)} is awareness only: player ESP, deployable markers, objective timers and zoom hack. ${link('Pro with aim assists', cheatsPath)} adds aimbot and recoil. ${link('Elite utility & skins', cheatsPath)} adds farm bots, finisher assists and Skin Changer.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes Auto Combo scripts?',
    a: `${link('Pro combat modules', cheatsPath)} ships aimbot, triggerbot, recoil control and smoothing. ${link('Elite bot add-ons', cheatsPath)} includes everything in Pro plus Auto Farm Bot and finisher assists. ${link('Lite: awareness only', cheatsPath)} has no aim automation.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do you rank Lite vs Pro vs Elite?',
    a: `Map awareness only → ${link('Lite overview — map hack', cheatsPath)}. Ranked gunfights with scripts → ${link('Pro overview — ranked aim', cheatsPath)}. Full bot suite and priority patches → ${link('Elite overview — bots & priority', cheatsPath)}. Compare on each cheat page or the ${faqIndexAllTopics}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${link('Lite stream-proof', cheatsPath)}, ${link('Pro stream-proof', cheatsPath)} and ${link('Elite stream-proof', cheatsPath)} hides overlays from OBS and Discord share. Test a local recording before going live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected War Dogs cheats guaranteed?',
    a: a('No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is map hack safer than scripts?',
    a: a('ESP is quieter in replay than obvious bot patterns, but it is still a cheat. EAC does not ignore overlays because you left scripts off.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh Steam accounts fail instantly on one PC but work elsewhere—hardware enforcement. Not for account-only EAC cases; see ${ugc} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `${ugc} (Unban & Governance Control) is an appeal workspace for Steam restrictions and EAC bans—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Skin Changer modify my Steam inventory?',
    a: `${skin} previews cosmetics locally on your client. Other players see your real inventory. Included with ${link('Elite tier bundle', cheatsPath)}; available standalone for cosmetic preview only.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the Steam folder?',
    a: `War Dogs Cheats runs external with cloud config sync—no files injected into the War Dogs directory. EAC risk still applies. See ${productsHub}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog cheat codes the same as ranked cheats?',
    a: `No. Blog articles about platform console commands apply only in custom lobbies with cheats enabled. Ranked War Dogs cheats are separate products—see ${link('Lite ranked scope', cheatsPath)}, ${link('Pro ranked scope', cheatsPath)} and ${link('Elite ranked scope', cheatsPath)}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to tier pages and ${productsHub}. Checkout runs through our secure partner—never paste loader files from random Discord DMs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each cheat tier page includes a compare table. The ${faqMasterIndex} collects product, cheat and blog answers in one place.`,
  },
  {
    id: 'who-tier',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Which War Dogs cheats tier should I choose: Lite, Pro or Elite?',
    a: `Stay on ${link('Lite if you need radar only', cheatsPath)} if you only need player ESP, loot filters and radar—awareness without aimbot automation. Move to ${link('Pro for aim on ESP stack', cheatsPath)} when you want aimbot, triggerbot and recoil on top of those overlays (the most common upgrade at cheatswardogs.org). Pick ${link('Elite for full module map', cheatsPath)} for the full module map, Skin Changer bundled where applicable, and priority patch delivery when slots are open.`,
  },
  {
    id: 'EAC-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a EAC update?',
    a: a('Check cheatswardogs.org status and Discord #status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open Discord after purchase with your order email, Windows version and War Dogs client build. Staff walk through loader setup live.'),
  },
  {
    id: 'turbo-ranked',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do tiers work in Turbo and ranked?',
    a: `Yes—${link('Lite Turbo preset', cheatsPath)}, ${link('Pro Turbo preset', cheatsPath)} and ${link('Elite Turbo preset', cheatsPath)} include Turbo and ranked presets in the portal. Tune distance caps and script delay before your first queue.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes zoom hack?',
    a: `Zoom hack ships on ${link('Lite zoom module', cheatsPath)} and carries through ${link('Pro zoom carry', cheatsPath)} and ${link('Elite zoom carry', cheatsPath)}. Extended camera helps you pre-aim angles and spot third parties without extra gadgets.`,
    scopes: ['lite'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which tier includes Auto Farm Bot?',
    a: `Auto Farm Bot, lane or zone control helpers and supply-route timers are ${link('Elite-only utility', cheatsPath)} only. ${link('Pro without farm bot', cheatsPath)} covers aim and ESP without loot-route automation.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private War Dogs cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. War Dogs Cheats ships portal delivery for ESP, scripts and map hack tiers.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and blog answers—or read ${blogLongForm} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'platforms', 'license-move', 'products-page', 'esp-aimbot-together'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter cheat plans, map hack, scripts, products, setup and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'EAC-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use console cheat codes in ranked?',
      a: a('No. platform lobby cheat codes only work in custom games with cheats enabled. Ranked requires separate War Dogs cheats from cheatswardogs.org tiers.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Awareness guides → ${link('Lite guides path', cheatsPath)}. Script and combo guides → ${link('Pro guides path', cheatsPath)}. Bot and kill-steal topics → ${link('Elite guides path', cheatsPath)}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in a lobby first?',
      a: a('Yes. Load conservative presets in a lobby or Turbo before ranked. Tune script delay and ESP distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-EAC',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee undetected status?',
      a: a('No article replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${link('Lite from blog', cheatsPath)}, ${link('Pro from blog', cheatsPath)}, ${link('Elite from blog', cheatsPath)} and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every War Dogs update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('map-hack') || slug.includes('esp') || slug.includes('radar')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers map hack from this article?',
      a: `${link('Lite deployable ESP', cheatsPath)} includes player ESP, equipment markers and objective timers. ${link('Pro aim layer', cheatsPath)} adds aimbot and recoil on the same overlay stack.`,
    });
  }
  if (slug.includes('script') || slug.includes('combo') || slug.includes('auto-combo')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes the scripts in this article?',
      a: `${link('Pro combo stack', cheatsPath)} and ${link('Elite combo stack', cheatsPath)} ship Auto Combo and related modules. ${link('Lite map hack base', cheatsPath)} is map hack only.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('EAC')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID or UGC products?',
      a: `Recovery guides complement ${hwid} and ${ugc}—read product pages for workflow scope and realistic outcomes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP & operator boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Deployable & equipment markers', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Objective & redeploy timers', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Zoom hack', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Minimap hack overlay', icon: 'compareMinimapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Memory aimbot (FOV)', icon: 'compareAutoCombo' as const, lite: false, pro: true, elite: true },
  { feature: 'Triggerbot & target switch', icon: 'compareOrbwalker' as const, lite: false, pro: true, elite: true },
  { feature: 'Recoil & spread control', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Humanized smoothing / delay', icon: 'compareActivator' as const, lite: false, pro: true, elite: true },
  { feature: 'Equipment & throwable radius hints', icon: 'compareAbilityRadius' as const, lite: false, pro: true, elite: true },
  { feature: 'Smoke & equipment alerts', icon: 'compareSmokeAlert' as const, lite: false, pro: true, elite: true },
  { feature: 'Auto Farm Bot', icon: 'compareAutoFarm' as const, lite: false, pro: false, elite: true },
  { feature: 'Finisher / last-hit assist', icon: 'compareAutoKillSteal' as const, lite: false, pro: false, elite: true },
  { feature: 'Zone / lane control helper', icon: 'compareAutoDagon' as const, lite: false, pro: false, elite: true },
  { feature: 'Full map hack suite', icon: 'compareFullMapHack' as const, lite: false, pro: false, elite: true },
  { feature: 'Skin Changer (Unlock All)', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct dev Discord support', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
