import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'public', 'logo.png');

async function png(size, out) {
  await sharp(src)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(root, 'public', out));
}

async function ico() {
  const buf16 = await sharp(src).resize(16, 16).png().toBuffer();
  const buf32 = await sharp(src).resize(32, 32).png().toBuffer();
  writeFileSync(join(root, 'public', 'favicon.ico'), buf32);
  console.log('Wrote favicon.ico (32px PNG payload; browsers accept this)');
  void buf16;
}

await png(16, 'favicon-16.png');
await png(32, 'favicon-32.png');
await png(180, 'apple-touch-icon.png');
await ico();
console.log('Favicons generated from public/logo.png');
