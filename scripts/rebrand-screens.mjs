import sharp from 'sharp';
import path from 'node:path';

function svg(w, h, inner) {
  return Buffer.from(
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`
  );
}

const text = (x, y, value, size, fill, extra = '') =>
  `<text x="${x}" y="${y}" fill="${fill}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="700" ${extra}>${value}</text>`;

const box = (x, y, w, h, fill = '#000000') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`;

const jobs = {
  'user-home.webp:home.webp': () =>
    box(58, 10, 156, 48) +
    text(66, 40, 'Food App', 16, '#ffffff') +
    box(14, 96, 320, 28) +
    text(18, 116, 'Hungry? Order from Food App', 15, '#ffffff'),
  'user-menu.webp:menu.webp': () =>
    box(58, 10, 160, 48) +
    text(66, 40, 'Food App', 16, '#ffffff') +
    box(16, 242, 210, 22) +
    text(20, 258, 'Most ordered on Food App', 12, '#b5b5b5'),
  'user-cart.webp:cart.webp': () =>
    box(60, 12, 160, 46) +
    text(68, 42, 'Food App', 16, '#ffffff') +
    box(16, 114, 110, 22) +
    text(20, 130, 'Food App', 13, '#c4bfb8'),
  'account.webp:drawer.webp': () =>
    `<circle cx="49" cy="62" r="40" fill="#121110"/>` +
    `<circle cx="49" cy="62" r="34" fill="#1c1917" stroke="#c4a15a" stroke-width="2"/>` +
    text(49, 70, 'F', 22, '#c4a15a', 'text-anchor="middle"') +
    box(10, 866, 44, 56, '#111111') +
    `<circle cx="32" cy="896" r="14" fill="#1c1917" stroke="#c4a15a" stroke-width="1.5"/>` +
    text(32, 901, 'F', 12, '#c4a15a', 'text-anchor="middle"'),
  'rider.webp:rider-hub.webp': () =>
    box(0, 0, 250, 34, '#0c0c0a') +
    `<circle cx="26" cy="17" r="12" fill="#1c1917" stroke="#c4a15a" stroke-width="1.5"/>` +
    text(26, 22, 'F', 12, '#c4a15a', 'text-anchor="middle"') +
    text(46, 22, 'Rider Hub', 15, '#ffffff'),
};

for (const [pair, draw] of Object.entries(jobs)) {
  const [source, target] = pair.split(':');
  const file = path.join('public', 'screens', source);
  const meta = await sharp(file).metadata();
  const overlay = svg(meta.width, meta.height, draw());
  const out = path.join('public', 'screens', target);
  await sharp(file).composite([{ input: overlay, top: 0, left: 0 }]).webp({ quality: 86 }).toFile(out);
  console.log('wrote', target);
}
