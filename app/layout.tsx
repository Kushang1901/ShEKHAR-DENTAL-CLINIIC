import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { clinicInfo } from '@/data/clinicInfo';

export const metadata: Metadata = {
  metadataBase: new URL('https://shekhardental.com'),
  title: {
    default: `${clinicInfo.name} - Premier Dental Care Services in Delhi`,
    template: `%s | ${clinicInfo.shortName}`
  },
  description: 'Expert dental care at Shekhar Dental & Orthodontic Center in Sagarpur, Delhi. Comprehensive services including dental implants, braces, root canal, teeth whitening, dentures, and cosmetic dentistry.',
  keywords: [
    'Shekhar Dental Clinic',
    'Dentist in Sagarpur Delhi',
    'Orthodontist Delhi',
    'Dental Implants Delhi',
    'Root Canal Treatment',
    'Teeth Whitening Delhi',
    'Braces & Aligners',
    'Dental Surgery Sagarpur',
    'Dr. Vivek Shekhar',
    'Dr. Prakash Thakur'
  ],
  authors: [{ name: clinicInfo.name }],
  creator: clinicInfo.name,
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shekhardental.com',
    title: `${clinicInfo.name} - Premier Dental Care in Delhi`,
    description: 'Expert dental care in Sagarpur, Delhi. Comprehensive treatments with state-of-the-art dental equipment and gentle patient care.',
    siteName: clinicInfo.name,
    images: [
      {
        url: '/background.png',
        width: 1200,
        height: 630,
        alt: clinicInfo.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
