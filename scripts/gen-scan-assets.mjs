import sharp from 'sharp';
import QRCode from 'qrcode';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dst = path.join(root, 'src/assets/app');

// 1) Splash screenshot (app opening) -> webp
await sharp('C:/Users/Marwan/proyectos/scanorder-horeca/video/public/shots/01-splash.png')
  .resize({ width: 760, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(path.join(dst, 'splash.webp'));
console.log('-> splash.webp');

// 2) Real, scannable QR -> svg (dark modules, transparent bg)
await QRCode.toFile(path.join(dst, 'qr.svg'), 'https://scanorderhoreca.com', {
  type: 'svg',
  margin: 1,
  color: { dark: '#241c15', light: '#00000000' },
});
console.log('-> qr.svg');
