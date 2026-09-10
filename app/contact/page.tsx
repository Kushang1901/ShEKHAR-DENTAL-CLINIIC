import React from 'react';
import { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';
import { clinicInfo } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: 'Contact Shekhar Dental Clinic | SHEKHAR DENTAL AND ORTHODONTIC CENTRE Delhi',
  description: `Contact Shekhar Dental Clinic (SHEKHAR DENTAL AND ORTHODONTIC CENTRE) in Sagarpur East, Delhi led by Dr. Prakash Thakur. Call ${clinicInfo.phoneNumbers[0].label} (or ${clinicInfo.phoneNumbers[1].label}) for appointments, emergency dental relief, and free Sunday check-ups. Best service giving dental clinic in Delhi.`,
  keywords: [
    'shekhar dental clinic',
    'shekhar dental and orthodontic center',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'shekhar dental clinic contact number',
    'best clinic in delhi',
    'best dental clinic in delhi',
    'best service giving dental clinic in delhi',
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
    title: 'Contact Shekhar Dental Clinic | Best Dental Clinic in Delhi | Dr. Prakash Thakur',
    description: 'Get in touch for appointments, clinic address, timings, and emergencies at Shekhar Dental Clinic & Orthodontic Center led by Dr. Prakash Thakur in Sagarpur, Delhi.',
    url: 'https://shekhardental.in/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
