import React from 'react';
import { Metadata } from 'next';
import AppointmentClient from '@/components/AppointmentClient';

export const metadata: Metadata = {
  title: 'Book Dental Appointment Online | Shekhar Dental Clinic Sagarpur Delhi',
  description: 'Reserve your dental consultation or Sunday free checkup online at Shekhar Dental & Orthodontic Center in Sagarpur, Delhi. Immediate WhatsApp confirmation.',
  alternates: {
    canonical: '/appointment',
  },
  openGraph: {
    title: 'Book Dental Appointment | Shekhar Dental Clinic Delhi',
    description: 'Fast, easy online dental appointment scheduling. Select your preferred date, time slot, and treatment.',
    url: 'https://shekhardental.in/appointment',
  },
};

export default function AppointmentPage() {
  return <AppointmentClient />;
}
