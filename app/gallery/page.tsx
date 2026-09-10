import React from 'react';
import { Metadata } from 'next';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Smile Gallery & Case Results | Shekhar Dental Clinic Delhi',
  description: 'View before-and-after smile transformations, dental implants, orthodontic braces, and clinic operatory photos at Shekhar Dental Clinic (SHEKHAR DENTAL AND ORTHODONTIC CENTRE) in Sagarpur East, Delhi with Dr. Prakash Thakur. Best service giving dental clinic in Delhi.',
  keywords: [
    'shekhar dental clinic',
    'shekhar dental and orthodontic center',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'best clinic in delhi',
    'best dental clinic in delhi',
    'best service giving dental clinic in delhi',
    'Dental Smile Gallery Delhi',
    'Dental Implants Before and After Delhi',
    'Braces Transformation Delhi',
    'Dr Prakash Thakur Dental Results'
  ],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Dental Gallery & Smile Transformations | Shekhar Dental Clinic Delhi',
    description: 'Explore real patient surgical results, cosmetic smile makeovers, and modern clinical equipment in Sagarpur, Delhi at Shekhar Dental Clinic.',
    url: 'https://shekhardental.in/gallery',
    images: ['/gallery/cosmetic.png'],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
