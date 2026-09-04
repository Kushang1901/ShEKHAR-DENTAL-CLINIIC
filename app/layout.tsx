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
    default: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE | Dr. Prakash Thakur | Best Dentist in Sagarpur Delhi',
    template: `%s | SHEKHAR DENTAL AND ORTHODONTIC CENTRE`,
  },
  description:
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE (Shekhar Dental Clinic) in Sagarpur East, New Delhi. Led by Founder & Lead Dental Surgeon Dr. Prakash Thakur BDS, MIDA (Doctor Prakash Thakur). Specialized in Dental Implants, Braces & Aligners, Rotary Root Canal (RCT), Cosmetic Dentistry, and Sunday Free Consultations. Call 098702 94558. Address: 1G, RZ-20B, Kailashpuri Road, Near Baraat Ghar, Sagarpur East, Delhi 110046.',
  keywords: [
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTER',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE Sagarpur Delhi',
    'Shekhar Dental and Orthodontic Centre Delhi',
    'Shekhar Dental and Orthodontic Center New Delhi',
    'Shekhar Dental Clinic Sagarpur',
    'Shekhar Dental Clinic Delhi',
    'Dr Prakash Thakur',
    'Doctor Prakash Thakur',
    'Dr. Prakash Thakur',
    'Dr Prakash Thakur BDS MIDA',
    'Prakash Thakur Dentist Sagarpur',
    'Dr Prakash Thakur Dental Surgeon',
    'Doctor Prakash Thakur Sagarpur',
    'Dr Prakash Thakur Shekhar Dental',
    'Dr Prakash Thakur Sagarpur Delhi',
    'shekhar dental and orthodentic center',
    'shekhar dental and orthodentic centre',
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
    'Dental Clinic in Kailashpuri Delhi',
    'Dental Clinic near Baraat Ghar Sagarpur',
    '1G RZ-20B Kailashpuri Road Sagarpur',
    'Emergency Dentist Sagarpur',
    'Cosmetic Smile Makeover Delhi',
    'Dental Clinic 110046',
    '098702 94558',
    '9870294558'
  ],
  authors: [
    { name: 'Dr. Prakash Thakur', url: 'https://shekhardental.in/team' },
    { name: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE', url: 'https://shekhardental.in' }
  ],
  creator: 'Dr. Prakash Thakur',
  publisher: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
  applicationName: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
  category: 'Dental Healthcare',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': 'https://shekhardental.in',
      'hi-IN': 'https://shekhardental.in',
    },
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
    siteName: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    title: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE | Dr. Prakash Thakur | Delhi',
    description:
      'SHEKHAR DENTAL AND ORTHODONTIC CENTRE in Sagarpur, Delhi. Founded & headed by Dr. Prakash Thakur (Doctor Prakash Thakur). Dental Implants, Braces, Aligners & Free Sunday Consultations. Call 098702 94558.',
    images: [
      {
        url: '/background.png',
        width: 1200,
        height: 630,
        alt: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE Operatory and Dr. Prakash Thakur',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE | Dr. Prakash Thakur | Delhi',
    description:
      'SHEKHAR DENTAL AND ORTHODONTIC CENTRE in Sagarpur, Delhi. Founded by Dr. Prakash Thakur (Doctor Prakash Thakur). Implants, Braces, RCT & Sunday Free Checkups.',
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
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9564494037866343"
          crossOrigin="anonymous"
        />
        {/* LCP optimisation — preload first hero slide so browser fetches it immediately */}
        <link
          rel="preload"
          as="image"
          href="/gallery/implant_procedure.png"
          fetchPriority="high"
        />
        {/* DNS prefetch & preconnect for third-party origins */}
        <link rel="preconnect" href="https://translate.googleapis.com" />
        <link rel="preconnect" href="https://translate.google.com" />
        <link rel="dns-prefetch" href="https://translate.googleapis.com" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
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
