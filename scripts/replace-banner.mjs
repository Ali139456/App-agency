import sharp from 'sharp';

const svg = `<svg width="462" height="995" xmlns="http://www.w3.org/2000/svg">
  <rect x="16" y="204" width="430" height="196" rx="22" fill="#12110f"/>
  <rect x="16" y="204" width="430" height="196" rx="22" fill="none" stroke="#3a3428" stroke-width="2"/>
  <rect x="16" y="204" width="8" height="196" rx="4" fill="#c4a15a"/>
  <text x="40" y="248" fill="#d4b06a" font-family="Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="2">TODAY</text>
  <text x="40" y="286" fill="#f6f3ee" font-family="Arial, sans-serif" font-size="28" font-weight="700">Zinger + Wings</text>
  <text x="40" y="316" fill="#b7b1a8" font-family="Arial, sans-serif" font-size="15">20% off this combo</text>
  <rect x="40" y="342" width="128" height="36" rx="18" fill="#c4a15a"/>
  <text x="104" y="366" text-anchor="middle" fill="#1a140c" font-family="Arial, sans-serif" font-size="14" font-weight="700">View deal</text>
</svg>`;

await sharp('public/screens/home.webp')
  .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
  .webp({ quality: 90 })
  .toFile('public/screens/home-v2.webp');

console.log('wrote home-v2.webp');
