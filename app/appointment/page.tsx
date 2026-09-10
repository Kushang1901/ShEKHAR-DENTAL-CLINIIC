import React from 'react';
import { Metadata } from 'next';
import AppointmentClient from '@/components/AppointmentClient';

export const metadata: Metadata = {
  title: 'Book Dental Appointment Online | Shekhar Dental Clinic Delhi',
  description: 'Book a priority dental appointment or reserve a Free Sunday Check-up with Dr. Prakash Thakur at Shekhar Dental Clinic (SHEKHAR DENTAL AND ORTHODONTIC CENTRE) in Sagarpur East, Delhi. Best service giving dental clinic in Delhi. Call 098702 94558.',
  keywords: [
    'Book Appointment Shekhar Dental',
    'shekhar dental clinic',
    'shekhar dental and orthodontic center',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'best clinic in delhi',
    'best dental clinic in delhi',
    'best service giving dental clinic in delhi',
    'Dr Prakash Thakur Appointment',
    'Doctor Prakash Thakur Dental Clinic',
    'Sunday free dental checkup Delhi',
    'Dentist Appointment Sagarpur Delhi'
  ],
  alternates: {
    canonical: '/appointment',
  },
  openGraph: {
    title: 'Book Appointment | Shekhar Dental Clinic | Dr. Prakash Thakur Delhi',
    description: 'Fast, easy online dental appointment scheduling with Dr. Prakash Thakur and specialists at Shekhar Dental Clinic & Orthodontic Center.',
    url: 'https://shekhardental.in/appointment',
  },
};

export default function AppointmentPage() {
  return <AppointmentClient />;
}
