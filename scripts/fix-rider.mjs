import sharp from 'sharp';
import path from 'node:path';

const src = path.join('public', 'screens', 'rider-hub.webp');
const meta = await sharp(src).metadata();

const header = Buffer.from(`
<svg width="${meta.width}" height="${meta.height}" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="${meta.width}" height="74" fill="#0c0c0a"/>
  <circle cx="36" cy="34" r="16" fill="#1c1917" stroke="#c4a15a" stroke-width="1.6"/>
  <text x="36" y="39" text-anchor="middle" fill="#c4a15a" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700">F</text>
  <text x="62" y="30" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700">Rider Hub</text>
  <text x="62" y="50" fill="#a8a29e" font-family="Arial, Helvetica, sans-serif" font-size="12">Hey Rider · GPS tracking on</text>
  <rect x="318" y="20" width="68" height="28" rx="14" fill="#10281c"/>
  <circle cx="336" cy="34" r="4" fill="#3dd68c"/>
  <text x="346" y="38" fill="#d1fae5" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700">Live</text>
  <circle cx="408" cy="34" r="14" fill="#1a1917" stroke="#3a3834" stroke-width="1"/>
  <path d="M402 34h10M408 30l4 4-4 4" fill="none" stroke="#d6d3d1" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);

const out = path.join('public', 'screens', 'rider-hub-next.webp');
await sharp(src).composite([{ input: header, top: 0, left: 0 }]).webp({ quality: 86 }).toFile(out);
console.log('header refreshed', meta.width, meta.height);
