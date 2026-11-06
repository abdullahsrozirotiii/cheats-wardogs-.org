import fs from 'node:fs';
import path from 'node:path';

/**
 * Fails fast when Workers Builds uses a stale checkout or cached package.json.
 * Old tree shows `site@0.0.1` and skips finalize-redirects → duplicate _redirects on deploy (100324).
 */
const pkgPath = path.join(process.cwd(), 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const build = pkg.scripts?.build ?? '';

if (pkg.name !== 'cheats-wardogs--org') {
  console.error(
    `[assert-ci-pipeline] package.json "name" must be "cheats-wardogs--org" (got "${pkg.name}").\n` +
      'Cloudflare may be building an old commit, wrong branch, or restoring a stale dependency cache.\n' +
      'Fix: Workers → Settings → clear build cache once, confirm production branch is main, redeploy.'
  );
  process.exit(1);
}

if (!build.includes('prepare-cloudflare') || !build.includes('finalize-redirects')) {
  console.error(
    '[assert-ci-pipeline] scripts.build must include prepare-cloudflare.mjs and finalize-redirects.mjs.\n' +
      'Pull the latest main branch into your Cloudflare-connected repo.'
  );
  process.exit(1);
}

console.log('[assert-ci-pipeline] package.json build pipeline OK.');
