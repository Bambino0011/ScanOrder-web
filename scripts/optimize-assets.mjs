import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const dir = path.resolve('src/assets/app');

// Phone screenshots: portrait, shown ~300px wide -> 720px covers retina.
const PHONE = ['menu', 'menu-arabe', 'sommelier', 'sommelier-resp', 'checkout', 'product', 'cart', 'rating', 'success'];
const LOGO = ['logo_gold'];

async function run() {
  for (const name of PHONE) {
    const src = path.join(dir, `${name}.png`);
    try {
      await stat(src);
    } catch {
      continue;
    }
    await sharp(src)
      .resize({ width: 760, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(dir, `${name}.webp`));
    console.log(`✓ ${name}.webp`);
  }
  for (const name of LOGO) {
    await sharp(path.join(dir, `${name}.png`))
      .resize({ width: 400, withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(path.join(dir, `${name}.webp`));
    console.log(`✓ ${name}.webp`);
  }

  const files = await readdir(dir);
  for (const f of files.filter((f) => f.endsWith('.webp'))) {
    const s = await stat(path.join(dir, f));
    console.log(`${(s.size / 1024).toFixed(0)} KB  ${f}`);
  }
}

run();
