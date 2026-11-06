# cheats-wardogs-.org

Static Astro site for **cheatswardogs.org** — War Dogs cheats, products, blog, and forum content.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`.

If you update dependencies, refresh **`package-lock.json`** with the same **npm major** as CI (GitHub Actions uses **npm 10**): `npx npm@10.9.2 install`, then commit the lockfile. See [CLOUDFLARE.md](CLOUDFLARE.md).

## Cloudflare deploy

Workers Builds must use **`npm run deploy:only`** (or the same `wrangler` flags: `--config wrangler.jsonc --autoconfig false`). Plain **`npx wrangler deploy`** turns autoconfig on and can duplicate `_redirects` (**100324**). See [CLOUDFLARE.md](CLOUDFLARE.md).

If Cloudflare logs show **`site@0.0.1`** or no `finalize-redirects` in the build script, clear the Workers build cache and confirm the **main** branch is connected.

```bash
npm run deploy       # build + deploy
npm run deploy:only # deploy only (after npm run build)
```
