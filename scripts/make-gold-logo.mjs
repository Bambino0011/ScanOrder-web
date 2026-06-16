import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = 'C:/Users/Marwan/proyectos/scanorder-horeca/public/logo_circular_correct.png';
const out = path.join(root, 'src/assets/app/logo_emblem.webp');

// Just crop the circular emblem (drop the "scanorder horeca" wordmark).
// Colour is irrelevant — it is used as a CSS mask and filled with gold.
const left = 140, top = 20, size = 262;

await sharp(src)
  .extract({ left, top, width: size, height: size })
  .resize(220)
  .webp({ quality: 92 })
  .toFile(out);

console.log('emblem written ->', out);
