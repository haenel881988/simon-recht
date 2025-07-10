const sharp = require('sharp');
const path = require('path');

const images = [
  'docs/projekt/medien/bilder/simon_haenel_entschlossen.png',
  'docs/projekt/medien/bilder/simon_haenel_natur_froehlich.jpg',
];

images.forEach(async (imgPath) => {
  const outPath = imgPath.replace(/\.(png|jpg)$/i, '.webp');
  try {
    await sharp(imgPath)
  .webp({ quality: 70 })
      .toFile(outPath);
    console.log(`Konvertiert: ${imgPath} → ${outPath}`);
  } catch (err) {
    console.error(`Fehler bei ${imgPath}:`, err);
  }
});
