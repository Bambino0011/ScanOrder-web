import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = 'C:/Users/Marwan/proyectos/scanorder-horeca/video/panel-shots';
const dst = path.join(root, 'src/assets/app');

const MAP = {
  '30-kds-cocina.png': 'kds.webp',
  '11-grupo-analiticas.png': 'analytics.webp',
  '20-restaurante-dashboard.png': 'dashboard.webp',
  '12-grupo-pagos.png': 'payments.webp',
};

for (const [src, out] of Object.entries(MAP)) {
  await sharp(path.join(SRC, src))
    .resize({ width: 920, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(dst, out));
  console.log('->', out);
}
