# Cloudflare Workers (static assets)

This site builds to **`dist/`** and is deployed as **Workers static assets** using [`wrangler.jsonc`](wrangler.jsonc) (`assets.directory`: `./dist`).

## Why `--autoconfig false`

Wrangler **v4** defaults to **`--autoconfig true`**. For Astro projects that enables `astro add cloudflare` during deploy, runs a **second** build, and merges redirects into `_redirects`. That duplicates rules you already define and Cloudflare returns **error 100324** (duplicate `_redirects` paths).

This repo uses **static output only** (no `@astrojs/cloudflare` in [`astro.config.mjs`](astro.config.mjs)). **Always deploy with autoconfig disabled.**

## Cloudflare Workers Builds (dashboard)

Set these from the **repository root** (same folder as `package.json` — not a subfolder):

| Step | Command |
|------|---------|
| **Build** | `npm run build` |
| **Deploy** | **`npm run deploy:only`** |

**Recommended:** change the deploy step to `npm run deploy:only` exactly — it runs the project’s pinned `wrangler` with `--config wrangler.jsonc --autoconfig false`.

Do **not** use `npx wrangler deploy` alone (autoconfig defaults to **on** and you get `astro add cloudflare` + **100324**). If you insist on `npx`, pass flags explicitly:

```bash
npx wrangler deploy --config wrangler.jsonc --autoconfig false
```

## Branch, cache, and logs

- **Production branch** must be **`main`** (or whatever branch you push to; the build log must show the **same** commit as GitHub).
- If the log shows **`> site@0.0.1`** or a build line **without** `assert-ci-pipeline` / `prepare-cloudflare` / `finalize-redirects`, Cloudflare is **not** building the current repo — wrong branch, wrong repo connection, or **stale Workers Builds cache**.
- **Clear “Restore caches” / build cache** once (or disable cache for one run), then redeploy.
- A correct log starts with **`> cheats-wardogs--org@0.0.1 build`** and includes `assert-ci-pipeline`, `prepare-cloudflare`, and `finalize-redirects`.
- A successful deploy should **not** log “Configuring project for Astro” / `astro add cloudflare`, and should **not** use a redirected config under `dist/client/wrangler.json` from autoconfig.

## npm version and `package-lock.json`

GitHub Actions uses **npm 10.x** (e.g. 10.9.2). **npm 11** can write a lockfile that **npm 10 `npm ci` rejects** (e.g. missing `node_modules/@emnapi/runtime` at 1.11.3). After changing dependencies, regenerate the lock with **`npx npm@10.9.2 install`** (or match CI’s npm), then commit **`package-lock.json`**.

## GitHub commit time (“1 hour ago”)

GitHub shows **author time** of the commit, not “when you opened the page”. A push updates **branch tip** immediately; the “time ago” on a commit is when that commit was **created**. If the **red X** appears, open **Actions** or **Checks** on that commit to see whether CI failed (fix deploy settings + clear Cloudflare cache as above).

## Local

- Full build + deploy: `npm run deploy`
- Deploy only (after `npm run build`): `npm run deploy:only`

Authenticate with `wrangler login` (or `CLOUDFLARE_API_TOKEN` in CI) as usual.
