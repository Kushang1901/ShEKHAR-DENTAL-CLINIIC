import React from 'react';
import { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';
import { clinicInfo } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: 'Contact & Clinic Directions | SHEKHAR DENTAL AND ORTHODONTIC CENTRE Delhi',
  description: `Contact SHEKHAR DENTAL AND ORTHODONTIC CENTRE in Sagarpur East, Delhi led by Dr. Prakash Thakur. Call ${clinicInfo.phoneNumbers[0].label} (or ${clinicInfo.phoneNumbers[1].label}) or visit for expert dental treatments and Sunday free checkups.`,
  keywords: [
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTER',
    'Shekhar Dental Contact Number',
    'Dr Prakash Thakur Phone Number',
    'Doctor Prakash Thakur Dental Clinic',
    'Shekhar Dental Clinic Sagarpur Address',
    '098702 94558',
    'Dental Clinic in Kailashpuri Delhi'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact SHEKHAR DENTAL AND ORTHODONTIC CENTRE | Sagarpur East, Delhi',
    description: 'Get in touch for appointments, clinic address, timings, and emergencies at SHEKHAR DENTAL AND ORTHODONTIC CENTRE led by Dr. Prakash Thakur.',
    url: 'https://shekhardental.in/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
