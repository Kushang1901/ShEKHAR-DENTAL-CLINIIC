import React from 'react';
import { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';
import { clinicInfo } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: 'Contact & Clinic Directions | Shekhar Dental Clinic Sagarpur Delhi',
  description: `Contact Shekhar Dental & Orthodontic Center located in Sagarpur East, Delhi. Call ${clinicInfo.phoneNumbers[0].label} or visit for expert dental treatments and Sunday free checkups.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Shekhar Dental Clinic | Sagarpur East, New Delhi',
    description: 'Get in touch for appointments, clinic address, timings, and emergencies at Shekhar Dental Clinic.',
    url: 'https://shekhardental.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
