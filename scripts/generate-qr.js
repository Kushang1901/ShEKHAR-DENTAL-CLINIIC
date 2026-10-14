const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const sharp = require('sharp');

async function generate() {
  const targetUrl = 'https://shekhardental.in/appointment';
  console.log('Generating QR code for:', targetUrl);

  // Read clinic logo
  const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
  const logoBuffer = fs.readFileSync(logoPath);
  const logoBase64 = logoBuffer.toString('base64');
  const logoDataUri = `data:image/png;base64,${logoBase64}`;

  // 1. Generate standalone pure QR Code PNG (600x600 and 1200x1200)
  const qrPurePngBuffer = await QRCode.toBuffer(targetUrl, {
    type: 'png',
    errorCorrectionLevel: 'H',
    margin: 2,
    width: 800,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  });
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'appointment-qr-code-only.png'), qrPurePngBuffer);

  // 2. Generate pure vector QR Code SVG
  const rawQrSvg = await QRCode.toString(targetUrl, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 1,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  });

  // Extract viewBox and inner paths
  const vbMatch = rawQrSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
  const matrixSize = vbMatch ? parseInt(vbMatch[1], 10) : 37;

  // Extract all paths (white background and black barcode strokes)
  const pathMatches = rawQrSvg.match(/<path[^>]+>/g) || [];
  const innerPaths = pathMatches.join('\n      ');

  // Dimensions for high-resolution card (1000 x 1400 px)
  const width = 1000;
  const height = 1420;
  const qrDisplaySize = 650;
  const qrX = (width - qrDisplaySize) / 2;
  const qrY = 560;
  const scaleFactor = qrDisplaySize / matrixSize;

  // 3. Create Vector SVG with embedded Clickable Link & Clean Professional Styling
  const cardSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <filter id="cardShadow" x="-10%" y="-5%" width="120%" height="115%">
      <feDropShadow dx="0" dy="12" stdDeviation="24" flood-color="#0f172a" flood-opacity="0.08" />
    </filter>
  </defs>

  <style>
    .clinic-name {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 38px;
      font-weight: 800;
      fill: #1e3c72;
      letter-spacing: 0.5px;
      text-anchor: middle;
    }
    .clinic-sub {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 20px;
      font-weight: 600;
      fill: #475569;
      letter-spacing: 2.5px;
      text-anchor: middle;
      text-transform: uppercase;
    }
    .msg-title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 32px;
      font-weight: 700;
      fill: #0f172a;
      text-anchor: middle;
    }
    .msg-sub {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 19px;
      font-weight: 500;
      fill: #64748b;
      text-anchor: middle;
    }
    .url-link {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 22px;
      font-weight: 700;
      fill: #2563eb;
      text-anchor: middle;
      letter-spacing: 0.5px;
    }
    .card-bg {
      fill: #ffffff;
      stroke: #e2e8f0;
      stroke-width: 2;
      rx: 28;
    }
    .qr-container {
      fill: #ffffff;
      stroke: #e2e8f0;
      stroke-width: 2;
      rx: 20;
    }
  </style>

  <!-- Clickable wrapper to directly open appointment page when clicked -->
  <a xlink:href="${targetUrl}" target="_blank" style="cursor: pointer;">
    <!-- Background Canvas -->
    <rect width="${width}" height="${height}" fill="#f8fafc" />

    <!-- Main White Card -->
    <rect x="36" y="36" width="${width - 72}" height="${height - 72}" class="card-bg" filter="url(#cardShadow)" />

    <!-- Top Clinic Logo -->
    <image href="${logoDataUri}" x="${(width - 170) / 2}" y="75" width="170" height="170" preserveAspectRatio="xMidYMid meet" />

    <!-- Clinic Branding -->
    <text x="${width / 2}" y="290" class="clinic-name">SHEKHAR DENTAL CLINIC</text>
    <text x="${width / 2}" y="325" class="clinic-sub">Dental &amp; Orthodontic Centre</text>

    <!-- Accent Line -->
    <line x1="${width / 2 - 60}" y1="355" x2="${width / 2 + 60}" y2="355" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />

    <!-- Prompt Message -->
    <text x="${width / 2}" y="420" class="msg-title">Scan to Book Your Appointment</text>
    <text x="${width / 2}" y="460" class="msg-sub">Point your camera to book online instantly</text>

    <!-- White Frame for QR Code -->
    <rect x="${qrX - 18}" y="${qrY - 18}" width="${qrDisplaySize + 36}" height="${qrDisplaySize + 36}" class="qr-container" />

    <!-- High-Precision Vector QR Code -->
    <g transform="translate(${qrX}, ${qrY}) scale(${scaleFactor})">
      ${innerPaths}
    </g>

    <!-- Direct URL Link at bottom -->
    <text x="${width / 2}" y="${qrY + qrDisplaySize + 68}" class="url-link">shekhardental.in/appointment</text>
  </a>
</svg>`;

  // Save SVG
  const outSvgPath = path.join(__dirname, '..', 'public', 'shekhar-dental-appointment-qr.svg');
  fs.writeFileSync(outSvgPath, cardSvg);
  console.log('Saved SVG:', outSvgPath);

  // Render High-Resolution PNG with Sharp
  const outPngPath = path.join(__dirname, '..', 'public', 'shekhar-dental-appointment-qr.png');
  await sharp(Buffer.from(cardSvg))
    .png({ quality: 100, compressionLevel: 8 })
    .toFile(outPngPath);
  console.log('Saved Card PNG:', outPngPath);

  // 4. Also generate a Clean Minimalistic Version (pure white background, no outer frame/shadow)
  // Exactly matching: "white background and black font qr code and above qr code clinic logo and with a message like Scan to book your appointment... and dont add any extra ui"
  const minWidth = 800;
  const minHeight = 1100;
  const minQrSize = 600;
  const minQrX = (minWidth - minQrSize) / 2;
  const minQrY = 400;
  const minScale = minQrSize / matrixSize;

  const pureMinimalSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${minWidth}" height="${minHeight}" viewBox="0 0 ${minWidth} ${minHeight}">
  <style>
    .clinic-title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 36px;
      font-weight: 800;
      fill: #1e3c72;
      text-anchor: middle;
    }
    .scan-msg {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 28px;
      font-weight: 700;
      fill: #000000;
      text-anchor: middle;
    }
    .url-text {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 20px;
      font-weight: 600;
      fill: #2563eb;
      text-anchor: middle;
    }
  </style>

  <a xlink:href="${targetUrl}" target="_blank" style="cursor: pointer;">
    <!-- Pure White Background -->
    <rect width="${minWidth}" height="${minHeight}" fill="#ffffff" />

    <!-- Clinic Logo -->
    <image href="${logoDataUri}" x="${(minWidth - 160) / 2}" y="45" width="160" height="160" preserveAspectRatio="xMidYMid meet" />

    <!-- Clinic Name -->
    <text x="${minWidth / 2}" y="245" class="clinic-title">SHEKHAR DENTAL CLINIC</text>

    <!-- Message -->
    <text x="${minWidth / 2}" y="315" class="scan-msg">Scan to book your appointment</text>

    <!-- Pure Black on White QR Code -->
    <g transform="translate(${minQrX}, ${minQrY}) scale(${minScale})">
      ${innerPaths}
    </g>

    <!-- Direct URL -->
    <text x="${minWidth / 2}" y="${minQrY + minQrSize + 55}" class="url-text">https://shekhardental.in/appointment</text>
  </a>
</svg>`;

  const outMinSvgPath = path.join(__dirname, '..', 'public', 'appointment-qr-minimal.svg');
  fs.writeFileSync(outMinSvgPath, pureMinimalSvg);

  const outMinPngPath = path.join(__dirname, '..', 'public', 'appointment-qr-minimal.png');
  await sharp(Buffer.from(pureMinimalSvg))
    .png({ quality: 100 })
    .toFile(outMinPngPath);
  console.log('Saved Pure Minimal PNG:', outMinPngPath);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
