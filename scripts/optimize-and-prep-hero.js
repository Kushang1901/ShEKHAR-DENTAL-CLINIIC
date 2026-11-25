const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function downloadAndOptimizeHero() {
  const heroDir = path.join(__dirname, '..', 'public', 'hero');
  if (!fs.existsSync(heroDir)) {
    fs.mkdirSync(heroDir, { recursive: true });
  }

  const slides = [
    {
      url: 'https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=1600',
      fallback: path.join(__dirname, '..', 'public', 'gallery', 'implant_procedure.png'),
      name: 'slide-1.webp'
    },
    {
      url: 'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=1600',
      fallback: path.join(__dirname, '..', 'public', 'gallery', 'dental_surgery2.png'),
      name: 'slide-2.webp'
    },
    {
      url: 'https://images.unsplash.com/photo-1728342057953-94bfad8f0e7e?auto=format&fit=crop&w=1600&q=80',
      fallback: path.join(__dirname, '..', 'public', 'gallery', 'cosmetic.png'),
      name: 'slide-3.webp'
    },
    {
      url: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1600',
      fallback: path.join(__dirname, '..', 'public', 'gallery', 'orthodontic.png'),
      name: 'slide-4.webp'
    },
    {
      url: 'https://images.unsplash.com/photo-1643660527064-8d43259f014a?auto=format&fit=crop&w=1600&q=80',
      fallback: path.join(__dirname, '..', 'public', 'gallery', 'implant2.png'),
      name: 'slide-5.webp'
    }
  ];

  console.log('Downloading and optimizing 5 hero slides to WebP...');
  for (let i = 0; i < slides.length; i++) {
    const s = slides[i];
    const outPath = path.join(heroDir, s.name);
    try {
      console.log(`Fetching slide ${i + 1} from ${s.url}...`);
      const res = await fetch(s.url, { signal: AbortSignal.timeout(10000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await sharp(buf)
        .resize(1600, 900, { fit: 'cover', position: 'center' })
        .webp({ quality: 80, effort: 4 })
        .toFile(outPath);
      const stat = fs.statSync(outPath);
      console.log(`✓ Saved ${s.name} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.warn(`Failed fetching ${s.url}: ${err.message}. Using fallback...`);
      if (fs.existsSync(s.fallback)) {
        await sharp(s.fallback)
          .resize(1600, 900, { fit: 'cover', position: 'center' })
          .webp({ quality: 80, effort: 4 })
          .toFile(outPath);
        const stat = fs.statSync(outPath);
        console.log(`✓ Saved fallback for ${s.name} (${Math.round(stat.size / 1024)} KB)`);
      }
    }
  }
}

async function compressAllImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const dirs = [
    publicDir,
    path.join(publicDir, 'services'),
    path.join(publicDir, 'gallery'),
    path.join(publicDir, 'certificates'),
    path.join(publicDir, 'images')
  ];

  console.log('Optimizing images across public directories...');
  let totalSaved = 0;

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const fullPath = path.join(dir, f);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) continue;

      const ext = path.extname(f).toLowerCase();
      if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
      // Skip favicon or small icons
      if (f.startsWith('favicon') || f.includes('qr-code')) continue;

      const originalSize = stat.size;
      // Optimize in-place or generate webp
      try {
        const inputBuf = fs.readFileSync(fullPath);
        let optBuf;
        if (ext === '.png') {
          // Compress PNG with palette reduction and compression
          optBuf = await sharp(inputBuf)
            .png({ quality: 80, compressionLevel: 9, palette: true })
            .toBuffer();
        } else {
          optBuf = await sharp(inputBuf)
            .jpeg({ quality: 82, progressive: true, mozjpeg: true })
            .toBuffer();
        }

        if (optBuf.length < originalSize) {
          fs.writeFileSync(fullPath, optBuf);
          const saved = originalSize - optBuf.length;
          totalSaved += saved;
          console.log(`✓ Optimized ${path.relative(publicDir, fullPath)}: ${Math.round(originalSize / 1024)}KB -> ${Math.round(optBuf.length / 1024)}KB (Saved ${Math.round(saved / 1024)}KB)`);
        }

        // Also generate webp sibling if not exists
        const webpPath = fullPath.replace(/\.(png|jpe?g)$/i, '.webp');
        const webpBuf = await sharp(inputBuf)
          .webp({ quality: 80, effort: 4 })
          .toBuffer();
        fs.writeFileSync(webpPath, webpBuf);
      } catch (err) {
        console.warn(`Could not optimize ${f}:`, err.message);
      }
    }
  }

  console.log(`Total storage & bandwidth saved: ${Math.round(totalSaved / 1024 / 1024)} MB!`);
}

async function main() {
  await downloadAndOptimizeHero();
  await compressAllImages();
  console.log('All image optimizations completed successfully.');
}

main().catch(console.error);
