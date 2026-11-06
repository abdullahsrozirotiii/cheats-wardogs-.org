export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideThreadReplies(topic: string): ForumComment[] {
  return [
    {
      author: 'ruft_ops',
      age: '2 days ago',
      score: 11,
      body: `Solid write-up on ${topic}. I kept ESP filters minimal and it was easier to read during extractions.`,
    },
    {
      author: 'eac_watch',
      age: '2 days ago',
      score: 9,
      body: 'Pair this with the patch-day checklist—checking the status banner before ranked avoids bad launch days.',
    },
    {
      author: 'loadout_nix',
      age: '1 day ago',
      score: 7,
      body: 'Use checkout from the War Dogs cheats product page, then tune overlays in a private lobby before matchmaking.',
    },
    {
      author: 'radar_sam',
      age: '1 day ago',
      score: 6,
      body: 'Smaller radar scale helped me more than enabling every marker on the first session.',
    },
    {
      author: 'steam_pc',
      age: '20 hours ago',
      score: 5,
      body: 'Discord #status usually has the build note before random forum rumors.',
    },
    {
      author: 'portal_user',
      age: '16 hours ago',
      score: 4,
      body: 'If something breaks after a War Dogs update, restart the loader once before opening a support ticket.',
    },
  ];
}

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, sourceTitle, ...post } = input;
  const comments: ForumComment[] = [
    { author: 'guide_team', age: 'From the guide', score: 14, body: tip },
    ...guideThreadReplies(sourceTitle),
  ];
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: comments.length,
    upvotes: input.upvotes,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments,
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-wardogs-esp-awareness-include', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'A quick breakdown of player ESP, deployables, objectives and smoke coverage from the map awareness guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'War Dogs map hack setup guide', sourcePath: '/blog/wardogs-esp-setup/',
    answer: 'The guide covers player ESP, loot and vehicle markers, radar markers, smoke alerts, and last-seen positions. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a team fight.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust the range and visibility settings one at a time.',
  }),
  guideDiscussion({
    slug: 'how-to-set-up-map-overlay', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'War Dogs map hack setup guide', sourcePath: '/blog/wardogs-esp-setup/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a bot lobby before relying on it in a live match. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'what-zoom-settings-are-comfortable', title: 'What camera zoom settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The zoom guide focuses on finding a view that improves map context without making movement and gunplay feel awkward.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'War Dogs zoom hack guide', sourcePath: '/blog/wardogs-radar-guide/',
    answer: 'There is no single ideal zoom value for every player. The guide recommends adjusting gradually and checking that you can still track your operator, weapon ranges, and nearby fights.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider view and return to familiar framing.',
    tip: 'Change one step at a time and play a short practice session before settling on a new camera distance.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-script-delay-settings', title: 'How do delay settings affect aim assists?', upvotes: 32,
    excerpt: 'A practical question about timing, aim smoothing, and why the ranked guide recommends conservative tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'War Dogs ranked loadouts and presets', sourcePath: '/blog/wardogs-ranked-loadouts/',
    answer: 'Reaction delay and smoothing control how quickly aim correction kicks in. The guide recommends starting with slower, more human profiles and testing them in a practice lobby before making changes.',
    detail: 'A consistent sequence is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'how-to-practice-auto-combos', title: 'What is a good way to practice aim and recoil settings?', upvotes: 29,
    excerpt: 'Use one loadout, repeat the same engagement pattern, and adjust smoothing and FOV in a controlled lobby.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'War Dogs aimbot presets guide', sourcePath: '/blog/wardogs-aimbot-presets/',
    answer: 'Pick one weapon class and one map rotation to practice. The guide walks through FOV, bone priority and recoil strength so target selection stays believable in live fights.',
    detail: 'A custom lobby lets you repeat the sequence and see which steps need adjustment without the pressure of a live match.',
    tip: 'Learn the manual sequence first; that makes it much easier to spot when a configuration is mistimed.',
  }),
  guideDiscussion({
    slug: 'what-is-in-the-elite-tier', title: 'What additional tools are included in the Elite tier?', upvotes: 67,
    excerpt: 'The Elite guide explains how its extra utility modules compare with the Lite and Pro feature sets.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'War Dogs Elite tier guide', sourcePath: '/blog/wardogs-elite-tier-guide/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Auto Farm Bot, finisher assists, zone control helpers, and Skin Changer.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'how-do-lite-and-pro-differ', title: 'How do Lite and Pro differ in practice?', upvotes: 53,
    excerpt: 'Lite centers on awareness features, while Pro adds aim and recoil tools; here is the short version.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'War Dogs Lite vs Pro: which tier fits you', sourcePath: '/blog/wardogs-lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as ESP, deployable markers, radar, and zoom. Pro adds aim automation on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the additional script modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'what-to-know-about-skin-changer', title: 'What should I know about the Skin Changer utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'War Dogs Skin Changer guide', sourcePath: '/blog/wardogs-skin-changer-guide/',
    answer: 'The guide describes Skin Changer as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'what-to-do-if-EAC-cannot-verify', title: 'What should I do if EAC cannot verify my War Dogs install?', upvotes: 24,
    excerpt: 'Start with Steam file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'platform Anti-Cheat unable to verify War Dogs', sourcePath: '/blog/platform-anti-cheat-unable-to-verify/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify War Dogs files through Steam.',
    detail: 'It also recommends fully exiting Steam, restarting the PC, and checking for conflicting overlays before trying more disruptive steps.',
    tip: 'Test a normal Steam launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'how-does-an-external-loader-work', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'War Dogs external cheat guide', sourcePath: '/blog/wardogs-external-cheat-guide/',
    answer: 'The article uses “external” to describe software that runs separately from the War Dogs process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever War Dogs receives an update.',
  }),
  guideDiscussion({
    slug: 'how-to-check-stream-proof-capture', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for War Dogs', sourcePath: '/blog/wardogs-stream-proof-setup/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'what-to-do-after-hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'The HWID guide covers common setup checks and when to contact support for an account or device reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'War Dogs HWID spoofer after ban', sourcePath: '/blog/wardogs-hwid-spoofer-after-ban/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'what-to-check-before-installing-tools', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'War Dogs cheats features guide', sourcePath: '/blog/wardogs-cheats-features-guide/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-wardogs-product-tier', title: 'How do I choose the right War Dogs product tier?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy War Dogs cheats in 2026', sourcePath: '/blog/how-to-buy-wardogs-cheats-2026/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'can-custom-lobby-cheat-codes-be-used-in-ranked', category: 'General', categoryTone: 'purple',
    title: 'Can third-party War Dogs tools be used in ranked matchmaking?',
    excerpt: 'Third-party overlays and loaders are separate from Steam-only play—ranked uses live EAC. Practice in private lobbies first.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 7, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'War Dogs cheat codes guide: console commands for practice lobbies', sourcePath: '/blog/wardogs-cheat-menu-guide/',
    body: ['Ranked matchmaking runs with EAC enabled. Third-party ESP, aimbot, or loader tools are not part of the official game and are risky in public queues.', 'Use private lobbies or offline drills to learn recoil, loot routes, and overlay layout before you rely on anything in live matchmaking. The linked guide covers safe practice habits—not ranked shortcuts.'],
    comments: [
      { author: 'mid_or_feed', age: '1 hour ago', score: 24, body: 'Treat ranked as EAC-on. If you test modules, do it offline or in a private session first.' },
      { author: 'ancient_archivist', age: '48 min. ago', score: 11, body: 'Conservative ESP presets made my first ranked session less chaotic than maxing every toggle.' },
      { author: 'blink_first', age: '35 min. ago', score: 8, body: 'Good distinction between practice setup and live matchmaking.' },
      { author: 'ruft_ops', age: '30 min. ago', score: 7, body: 'Status banner on cheatswardogs.org is the first place I check after a War Dogs patch.' },
      { author: 'loadout_nix', age: '22 min. ago', score: 6, body: 'Pick your tier on the cheats product page, then choose Lite vs Pro in the portal—comparison blog helps.' },
      { author: 'eac_watch', age: '18 min. ago', score: 5, body: 'Patch-day checklist thread is worth bookmarking if you play day-one updates.' },
      { author: 'steam_pc', age: '12 min. ago', score: 4, body: 'Stream-proof test recording saved me before I went live on OBS.' },
    ],
  },
  {
    slug: 'how-to-enable-the-wardogs-loader', category: 'General', categoryTone: 'purple',
    title: 'How do I install and launch the War Dogs loader?',
    excerpt: 'Follow post-checkout email steps: portal download, run as admin once, verify overlay in a private lobby.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 7, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to use cheat codes in War Dogs', sourcePath: '/blog/how-to-use-wardogs-cheats/',
    body: ['After purchase through cheatswardogs.org, open the operator portal from your email, download the current build, and follow the setup PDF for your tier.', 'Launch War Dogs through Steam, start the loader when the status panel shows green, then confirm ESP or radar in a private lobby before matchmaking.'],
    comments: [
      { author: 'pos4_roamer', age: '3 hours ago', score: 17, body: 'Running the loader once as admin fixed my overlay not attaching on Win11.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'Make sure Steam overlay and other capture tools are not fighting the same hook.' },
      { author: 'portal_user', age: '2 hours ago', score: 8, body: 'HWID reset is in the portal if you swapped PCs—limits depend on tier.' },
      { author: 'radar_sam', age: '90 min. ago', score: 6, body: 'Lite tier was enough for loot radar until I wanted aimbot on Pro.' },
      { author: 'support_main_5', age: '1 hour ago', score: 5, body: 'Discord ticket with order email beats posting keys in public channels.' },
      { author: 'farm_pattern', age: '45 min. ago', score: 4, body: 'Bot lobby smoke test after every game update—still the fastest way to confirm overlays.' },
      { author: 'one_more_game', age: '30 min. ago', score: 3, body: 'Comparison page at /products/wardogs/cheats/ lists what each tier includes.' },
    ],
  },
  {
    slug: 'practice-wardogs-esp-spots-safely', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is the safest way to tune ESP before ranked?',
    excerpt: 'Private lobby, minimal toggles, then add one module at a time while watching frame time and readability.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 7, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'All War Dogs console cheats and tips', sourcePath: '/blog/wardogs-esp-radar-tips/',
    body: ['Start in a private lobby with player ESP and loot filters only. Confirm you can still track targets and extractions without clutter.', 'Add radar or vehicle markers one at a time. If the overlay covers crosshair space, reduce scale before enabling more categories.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'High-ground extractions are easier to read with thinner box ESP.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'Loot color by rarity stopped me missing med kits in smoke.' },
      { author: 'ruft_ops', age: '3 hours ago', score: 6, body: 'Stream-proof mode plus a local OBS test clip—non-negotiable for me.' },
      { author: 'loadout_nix', age: '2 hours ago', score: 5, body: 'Pro recoil module came after ESP felt stable—blog ranked loadouts helped order.' },
      { author: 'eac_watch', age: '2 hours ago', score: 4, body: 'After EAC bump I re-ran the same private lobby checklist.' },
      { author: 'steam_pc', age: '1 hour ago', score: 3, body: 'Vehicle ESP distance at 120m was the sweet spot on my map.' },
      { author: 'blink_first', age: '50 min. ago', score: 2, body: 'Screenshot settings on the cheats detail page match what I use now.' },
    ],
  },
  {
    slug: 'what-to-check-after-a-wardogs-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a War Dogs patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing in a bot lobby before queueing.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 7, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'EAC patch day checklist', sourcePath: '/blog/eac-patch-day-checklist/',
    body: ['Check the current build/status notice first. After a game update, wait for a compatible build, update the loader, then verify the setup in a bot or Turbo lobby before returning to ranked.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'farm_pattern', age: '8 hours ago', score: 12, body: 'Testing after the update before ranked is the part I used to skip. Now I check the build note and run a quick bot lobby.' },
      { author: 'support_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the build/status has not caught up, wait. A checklist is better than guessing.' },
      { author: 'eac_watch', age: '6 hours ago', score: 6, body: 'Full Steam verify once if War Dogs crashes on boot after patch.' },
      { author: 'portal_user', age: '5 hours ago', score: 5, body: 'Portal showed “updating” for six hours last patch—patience saved a bad ranked session.' },
      { author: 'ruft_ops', age: '4 hours ago', score: 4, body: 'Discord #status pinned message matched the site banner—use both.' },
      { author: 'radar_sam', age: '3 hours ago', score: 3, body: 'Conservative aimbot FOV after patch until I trust the new build.' },
      { author: 'steam_pc', age: '2 hours ago', score: 2, body: 'Blog checklist link is the one I send to squadmates.' },
    ],
  },
  {
    slug: 'wardogs-lite-or-pro-aimbot', category: 'Community', categoryTone: 'green',
    title: 'Lite or Pro: which tier includes aimbot?',
    excerpt: 'Lite is ESP-focused; Pro adds aimbot, triggerbot, and recoil modules on top of Lite.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 7, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'War Dogs Lite vs Pro: feature comparison', sourcePath: '/blog/wardogs-lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on awareness tools such as player ESP, loot filters, and radar. Pro includes those features and adds combat automation such as aimbot, triggerbot, and recoil control.', 'The best fit depends on which features you need. Read the full comparison and the unified cheats product page before choosing.'],
    comments: [
      { author: 'one_more_game', age: '10 hours ago', score: 10, body: 'The comparison page shows modules per tier instead of only marketing headlines.' },
      { author: 'loadout_nix', age: '9 hours ago', score: 8, body: 'Started Lite for two weeks, upgraded to Pro in portal without new checkout hassle.' },
      { author: 'carry_curious', age: '8 hours ago', score: 6, body: 'Elite is overkill unless you want every utility bundled—cheats page explains it.' },
      { author: 'radar_sam', age: '7 hours ago', score: 5, body: 'Aimbot smoothing at default felt human enough in my clips review.' },
      { author: 'ruft_ops', age: '6 hours ago', score: 4, body: '/products/wardogs/cheats/ gallery matches what Pro actually ships.' },
      { author: 'support_main_5', age: '5 hours ago', score: 3, body: 'Support asked my tier before troubleshooting triggerbot—have portal open.' },
      { author: 'steam_pc', age: '4 hours ago', score: 2, body: 'Blog ranked loadouts article pairs well with Pro presets.' },
    ],
  },
  {
    slug: 'how-to-learn-hero-combos-in-practice-lobbies', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How can I practice gun control and loadouts offline?',
    excerpt: 'Private lobby or shooting range drills, then mirror the same sensitivity with loader recoil settings.',
    author: 'guide_team', age: '1 day ago', commentsCount: 7, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'War Dogs cheat codes guide: console commands for practice lobbies', sourcePath: '/blog/wardogs-cheat-menu-guide/',
    body: ['Use offline or private sessions to repeat the same weapon and attachment combo until recoil feels automatic.', 'When you enable recoil control in Pro, match your in-game sensitivity first and tune strength gradually—the linked guide lists safe drill order.'],
    comments: [
      { author: 'mid_or_feed', age: '20 hours ago', score: 10, body: 'Same gun for an hour straight beats swapping kits every death.' },
      { author: 'ancient_archivist', age: '18 hours ago', score: 5, body: 'Recorded my screen to see if recoil assist was over-correcting.' },
      { author: 'blink_first', age: '16 hours ago', score: 5, body: 'Lite ESP only during drills so I learn spawns without aim help.' },
      { author: 'farm_pattern', age: '14 hours ago', score: 4, body: 'Ranked loadouts blog has a sensible preset order.' },
      { author: 'portal_user', age: '12 hours ago', score: 3, body: 'Portal tier picker made Pro upgrade obvious once I outgrew Lite.' },
      { author: 'eac_watch', age: '10 hours ago', score: 2, body: 'Patch day I reset recoil to default and re-tuned from scratch.' },
      { author: 'one_more_game', age: '8 hours ago', score: 2, body: 'Cheats product page screenshots show realistic FOV values.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
