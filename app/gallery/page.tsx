import React from 'react';
import { Metadata } from 'next';
import GalleryClient from '@/components/GalleryClient';

export const metadata: Metadata = {
  title: 'Dental Treatment Gallery & Smile Transformations | Shekhar Dental Delhi',
  description: 'View before-and-after smile makeovers, dental implant procedures, orthodontics, and clinic tour gallery at Shekhar Dental & Orthodontic Center, Sagarpur, Delhi.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Dental Gallery & Smile Transformations | Shekhar Dental Clinic',
    description: 'Explore real patient surgical results, cosmetic smile makeovers, and modern clinical equipment in Sagarpur, Delhi.',
    url: 'https://shekhardental.com/gallery',
    images: ['/gallery/cosmetic.png'],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
