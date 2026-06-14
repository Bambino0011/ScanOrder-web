import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Footer logo: displayed ~120px -> 320px webp covers retina.
await sharp(path.join(root, 'src/assets/footer_logo_gold.png'))
  .resize({ width: 320, withoutEnlargement: true })
  .webp({ quality: 90 })
  .toFile(path.join(root, 'src/assets/footer_logo_gold.webp'));
console.log('footer_logo_gold.webp done');

// Favicon: 256px is plenty; overwrite via temp.
const fav = path.join(root, 'public/scanorder_favicon.png');
await sharp(fav).resize({ width: 256 }).png({ quality: 90 }).toFile(fav + '.tmp');
console.log('favicon resized');
