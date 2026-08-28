import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import JsonLd from '@/components/JsonLd';
import { clinicInfo } from '@/data/clinicInfo';

export const viewport: Viewport = {
  themeColor: '#1e3c72',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shekhardental.in'),
  title: {
    default: `${clinicInfo.name} | Best Dentist & Orthodontist in Sagarpur Delhi`,
    template: `%s | ${clinicInfo.shortName}`,
  },
  description:
    'Experience world-class, painless dental care at Shekhar Dental & Orthodontic Center in Sagarpur, New Delhi. Specialized in Dental Implants, Braces & Aligners, Root Canal (RCT), Cosmetic Dentistry, and Sunday Free Check-ups.',
  keywords: [
    'Shekhar Dental Clinic',
    'Best Dentist in Sagarpur Delhi',
    'Dental Clinic Near Me Sagarpur',
    'Top Orthodontist in Janakpuri Delhi',
    'Painless Root Canal Treatment Delhi',
    'Dental Implants Sagarpur Delhi',
    'Clear Aligners & Braces Delhi',
    'Teeth Whitening Clinic West Delhi',
    'Zirconia Dental Caps Delhi',
    'Sunday Free Dental Checkup Delhi',
    'Dr Vivek Shekhar Orthodontist',
    'Dr Prakash Thakur Dental Surgeon',
    'Dental Clinic in Kailashpuri Delhi',
    'Emergency Dentist Sagarpur',
    'Cosmetic Smile Makeover Delhi'
  ],
  authors: [{ name: clinicInfo.name, url: 'https://shekhardental.in' }],
  creator: clinicInfo.name,
  publisher: clinicInfo.name,
  applicationName: clinicInfo.shortName,
  category: 'Dental Healthcare',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shekhardental.in',
    siteName: clinicInfo.name,
    title: `${clinicInfo.name} | Premier Dental Care in Sagarpur, Delhi`,
    description:
      'Painless, advanced dental care with digital technology in Sagarpur, Delhi. Specialized in Implants, Braces, Aligners, Laser Whitening & Rotary RCT.',
    images: [
      {
        url: '/background.png',
        width: 1200,
        height: 630,
        alt: `${clinicInfo.name} Clinic Operatory and Team`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${clinicInfo.name} | Best Dentist in Sagarpur Delhi`,
    description:
      'Premier dental clinic in Sagarpur, Delhi. Dental Implants, Braces, Aligners, Painless RCT & Sunday Free Checkups.',
    images: ['/background.png'],
    creator: '@shekhar_dental',
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'New Delhi',
    'geo.position': '28.6033997;77.1033054',
    'ICBM': '28.6033997, 77.1033054',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager — must be as high in <head> as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PTRWKWRX');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* LCP optimisation — preload first hero slide so browser fetches it immediately */}
        <link
          rel="preload"
          as="image"
          href="/gallery/implant_procedure.png"
          fetchPriority="high"
        />
        {/* DNS prefetch for third-party origins */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <JsonLd />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) — must be immediately after <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTRWKWRX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
