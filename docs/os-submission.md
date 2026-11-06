# OS submission packet (pre-deploy)

Values below are verified locally unless marked **pending live deploy**.

## Form fields

1. **Live website URL:** https://cheatswardogs.org/ (**pending live deploy**)
2. **Sitemap URL:** https://cheatswardogs.org/sitemap.xml (**pending live deploy**)
3. **Robots.txt URL:** https://cheatswardogs.org/robots.txt (**pending live deploy**)
4. **SEO audit score:** Lighthouse SEO **100** (mobile homepage, local `dist/` via `npm start`, 2026-11-06)
5. **Homepage SEO title:** War Dogs Cheats & Hacks | Aimbot, ESP & Radar (47 chars)
6. **Meta description:** War Dogs cheats for Steam PC: aimbot, ESP, loot filters, radar and tiered tools updated after patches at cheatswardogs.org. (122 chars)
7. **Homepage H1:** War Dogs / Cheats & Hacks (two-line hero in `HeroSection`)
8. **Primary keyword:** wardogs cheats (best War Dogs purchase intent; see keyword notes)
9. **Supporting keywords:** war dogs cheats; wardogs aimbot
10. **Target audience / market:** Global English-speaking War Dogs (Steam PC) players researching private cheats, ESP, aimbot and utilities before purchase.
11. **Ranking and conversion justification:** War Dogs closed-beta demand is rising; this site maps buy-intent queries to tier pages, 18 original guides, FAQ, and affiliate checkout with EAC-aware disclaimers and status-first messaging.
12. **Important pages:** `/`, `/products/wardogs/`, `/products/wardogs/lite|pro|elite/`, utilities, `/blog/`, `/faq/`, `/support/`
13. **Notes for OS:** Static Astro build → `dist/`; Cloudflare Pages: build `npm run build`, output `dist`, Node 22+; `public/_redirects` handles `/go/*`; replace temp SVG logo/favicon before production marketing.
14. **Git repository URL:** https://github.com/Stellarhamza/NOT-OPTIMISED (**push not authorized yet**)
15. **Complete website ZIP:** Zip the project root or `dist/` after final logo swap and authorized git push.

## Keyword research (sources and limits)

| Keyword | Source | Volume / KD | Notes |
|---------|--------|-------------|-------|
| wardogs cheats | Google Trends / industry articles (e.g. Nokiamob Aug 2026 closed beta cheat demand) | **Exact monthly volume not published** in free tools for this new title | Primary on-page target |
| war dogs cheats | Spelling variant | Same limitation | Used in copy and H2s |
| wardogs aimbot | Competitor SERP intent (feature queries) | Not verified ≥1,000/mo | Supporting / blog |
| war dogs game | Broader game discovery | Likely higher than cheat terms; **not used as primary** to avoid intent mismatch |

**Criteria gap:** Public Keyword Planner access was not available in this build session. Game-specific cheat terms may not yet reach **1,000+ global searches/mo** or **KD &lt; 40%** in Ahrefs-style tools. Do not treat volume/KD numbers as verified until checked in your Ads/SEO tool.

## QA checklist (OS)

- [x] Production build completes (`npm run build`, 55 pages, 0 errors)
- [x] Key routes return 200 locally (home, products, blog, faq)
- [x] `/go/wardogs/` → 302 → Zadeyo affiliate URL (verified locally)
- [x] `dist/sitemap.xml` (54 URLs) and `dist/robots.txt` generated
- [x] Per-page titles/meta via `pageSeo.ts` + product/blog data; one H1 per template
- [x] Store links: `/go/wardogs/`, `/go/hwid-spoofer/`, `/go/ugc/`, `/go/skin-changer/`
- [x] User-supplied images only; WebP responsive variants + alt text
- [x] Original War Dogs copy (no Dota template text on indexable pages)
- [ ] Live URL/sitemap/robots verification (**after Cloudflare deploy**)
- [ ] Final logo/favicon from stakeholder (**before git push**)

## Cloudflare readiness

- Build command: `npm run build`
- Output directory: `dist`
- Redirects: `public/_redirects` (regenerated each build)
- Optional env: `PUBLIC_GA_MEASUREMENT_ID`, `INDEXNOW_KEY`

## Lighthouse (actual, local)

| Page | Form factor | Performance | Accessibility | Best Practices | SEO |
|------|-------------|-------------|---------------|----------------|-----|
| `/` | Mobile | 70 | 95 | 96 | 100 |
| `/` | Desktop | 99 | 86 | 96 | 100 |

Mobile performance limited mainly by **Total Blocking Time** (~1.75s) from client JS (carousels, forum scripts on other pages). Accessibility gaps: color contrast, heading order, carousel ARIA (template-level).
