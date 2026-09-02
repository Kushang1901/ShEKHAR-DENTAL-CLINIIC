import React from 'react';
import { Metadata } from 'next';
import AppointmentClient from '@/components/AppointmentClient';

export const metadata: Metadata = {
  title: 'Book Dental Appointment Online | SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
  description: 'Reserve your consultation with Dr. Prakash Thakur (Doctor Prakash Thakur) or book a Sunday free checkup online at SHEKHAR DENTAL AND ORTHODONTIC CENTRE, Sagarpur, Delhi.',
  keywords: [
    'Book Appointment Shekhar Dental',
    'Dr Prakash Thakur Appointment',
    'Doctor Prakash Thakur Dental Clinic',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'Dentist Appointment Sagarpur Delhi'
  ],
  alternates: {
    canonical: '/appointment',
  },
  openGraph: {
    title: 'Book Appointment | SHEKHAR DENTAL AND ORTHODONTIC CENTRE | Dr. Prakash Thakur',
    description: 'Fast, easy online dental appointment scheduling with Dr. Prakash Thakur and specialists at SHEKHAR DENTAL AND ORTHODONTIC CENTRE.',
    url: 'https://shekhardental.in/appointment',
  },
};

export default function AppointmentPage() {
  return <AppointmentClient />;
}
