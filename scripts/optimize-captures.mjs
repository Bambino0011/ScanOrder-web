import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cap = path.join(root, 'capturas');
const dst = path.join(root, 'src/assets/app');

const MAP = {
  'Captura cocina.png': 'kds.webp',
  'Captura de pantalla 2026-06-15 144922.png': 'grupo.webp',
  'Captura de pantalla 2026-06-15 145236.png': 'analytics.webp',
  'Captura de pantalla 2026-06-15 145407.png': 'carta.webp',
};

for (const [src, out] of Object.entries(MAP)) {
  await sharp(path.join(cap, src))
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(dst, out));
  console.log('->', out);
}
