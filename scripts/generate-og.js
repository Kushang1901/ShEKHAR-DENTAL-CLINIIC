const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // Paths
  const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
  const doctorImgPath = path.join(__dirname, '..', 'public', 'About_us_img.png');

  let logoBase64 = '';
  if (fs.existsSync(logoPath)) {
    logoBase64 = fs.readFileSync(logoPath).toString('base64');
  }

  let doctorBase64 = '';
  if (fs.existsSync(doctorImgPath)) {
    const resizedDoctor = await sharp(doctorImgPath)
      .resize(420, 480, { fit: 'cover', position: 'top' })
      .toBuffer();
    doctorBase64 = resizedDoctor.toString('base64');
  }

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a1226"/>
        <stop offset="40%" stop-color="#0f224a"/>
        <stop offset="80%" stop-color="#1e3c72"/>
        <stop offset="100%" stop-color="#2563eb"/>
      </linearGradient>

      <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)"/>
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.04)"/>
      </linearGradient>

      <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0284c7"/>
        <stop offset="100%" stop-color="#2563eb"/>
      </linearGradient>

      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.5"/>
      </filter>

      <clipPath id="docClip">
        <rect x="730" y="75" width="410" height="480" rx="24"/>
      </clipPath>
    </defs>

    <!-- Deep Modern Medical Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGradient)"/>

    <!-- Subtle Decorative Glow Circles -->
    <circle cx="150" cy="120" r="280" fill="#2563eb" opacity="0.18" filter="blur(60px)"/>
    <circle cx="1050" cy="500" r="260" fill="#0284c7" opacity="0.22" filter="blur(60px)"/>

    <!-- Left Side: Content Area -->
    <!-- Top Trust Pill Badge -->
    <g transform="translate(60, 55)">
      <rect width="360" height="36" rx="18" fill="url(#badgeGradient)" opacity="0.95"/>
      <text x="20" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" fill="#ffffff" letter-spacing="0.8">
        DELHI'S TOP-RATED DENTAL CLINIC
      </text>
    </g>

    <!-- Logo icon & Brand Header -->
    <g transform="translate(60, 110)">
      ${logoBase64 ? `<image href="data:image/png;base64,${logoBase64}" width="54" height="54" x="0" y="0"/>` : ''}
      <text x="68" y="30" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" fill="#93c5fd" letter-spacing="0.5">
        SHEKHAR DENTAL &amp; ORTHODONTIC CENTRE
      </text>
      <text x="68" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#cbd5e1">
        Govt. Registered • Est. 2016 • Sagarpur East, New Delhi
      </text>
    </g>

    <!-- Main Title -->
    <g transform="translate(60, 215)">
      <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.5">
        Advanced Painless Dentistry
      </text>
      <text x="0" y="46" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="800" fill="#60a5fa">
        &amp; Modern Smile Makeovers
      </text>
    </g>

    <!-- Doctor Leadership Highlight -->
    <g transform="translate(60, 305)">
      <rect width="630" height="66" rx="14" fill="url(#cardGradient)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <text x="20" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" fill="#f8fafc">
        Principal Surgeon: Dr. Prakash Thakur (BDS, MIDA)
      </text>
      <text x="20" y="50" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#94a3b8">
        Founder &amp; Lead Dental Surgeon • Certified Implantologist &amp; Aligner Specialist
      </text>
    </g>

    <!-- Core Services Pills -->
    <g transform="translate(60, 395)">
      <!-- Pill 1: Implants -->
      <g transform="translate(0, 0)">
        <rect width="180" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="20" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#e2e8f0">
          Dental Implants
        </text>
      </g>
      <!-- Pill 2: Aligners -->
      <g transform="translate(192, 0)">
        <rect width="180" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="20" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#e2e8f0">
          Clear Aligners
        </text>
      </g>
      <!-- Pill 3: Painless RCT -->
      <g transform="translate(384, 0)">
        <rect width="180" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <text x="20" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" fill="#e2e8f0">
          Painless RCT
        </text>
      </g>
    </g>

    <!-- Rating / Trust Bar -->
    <g transform="translate(60, 460)">
      <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#fbbf24">
        ★ ★ ★ ★ ★
      </text>
      <text x="95" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#ffffff">
        4.9/5 Rating
      </text>
      <text x="180" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#94a3b8">
        (500+ Verified Reviews) • Sunday Free Consultations
      </text>
    </g>

    <!-- Bottom Footer Bar -->
    <g transform="translate(0, 565)">
      <rect width="${width}" height="65" fill="rgba(5, 10, 24, 0.9)"/>
      <line x1="0" y1="0" x2="${width}" y2="0" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

      <text x="60" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#60a5fa">
        🌐 shekhardental.in
      </text>
      <text x="270" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500" fill="#cbd5e1">
        Kailashpuri Rd, Sagarpur East, Delhi 110046
      </text>
      <text x="890" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="800" fill="#38bdf8">
        Call: 098702 94558 / 096672 66301
      </text>
    </g>

    <!-- Right Side: Doctor / Clinic Framed Card -->
    <g filter="url(#shadow)">
      <!-- Outer Card Border -->
      <rect x="726" y="71" width="418" height="488" rx="28" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
      
      <!-- Doctor photo clipped -->
      ${doctorBase64 ? `<image href="data:image/png;base64,${doctorBase64}" width="410" height="480" x="730" y="75" clip-path="url(#docClip)" preserveAspectRatio="xMidYMid slice"/>` : ''}

      <!-- Bottom overlay on photo with doctor credentials -->
      <g transform="translate(730, 445)">
        <rect width="410" height="110" fill="linear-gradient(180deg, transparent 0%, rgba(10, 18, 38, 0.95) 40%, rgba(10, 18, 38, 1) 100%)"/>
        <text x="24" y="55" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800" fill="#ffffff">
          Dr. Prakash Thakur
        </text>
        <text x="24" y="76" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#38bdf8">
          B.D.S. (Santosh Univ.) 2016 • DDC Lic: A-13143
        </text>
        <text x="24" y="94" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">
          Founder &amp; Principal Dental Surgeon
        </text>
      </g>
    </g>
  </svg>
  `;

  const ogBuffer = await sharp(Buffer.from(svg)).png({ quality: 95 }).toBuffer();

  const publicOgPath = path.join(__dirname, '..', 'public', 'og-image.png');
  const appOgPath = path.join(__dirname, '..', 'app', 'opengraph-image.png');
  const appTwitterPath = path.join(__dirname, '..', 'app', 'twitter-image.png');

  fs.writeFileSync(publicOgPath, ogBuffer);
  fs.writeFileSync(appOgPath, ogBuffer);
  fs.writeFileSync(appTwitterPath, ogBuffer);

  console.log('Successfully re-generated crisp Open Graph images:');
  console.log('- public/og-image.png (1200x630)');
  console.log('- app/opengraph-image.png (Next.js auto-OG)');
  console.log('- app/twitter-image.png (Next.js auto-Twitter)');
}

generateOgImage().catch(console.error);
