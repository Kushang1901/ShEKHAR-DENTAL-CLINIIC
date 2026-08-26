import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ChevronRight, AlertCircle, Clock, CheckCircle2, Shield, Stethoscope, Scale } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Shekhar Dental & Orthodontic Center',
  description: 'Terms of service, clinical consultation guidelines, appointment policies, and patient agreements for Shekhar Dental Clinic.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Subpage Header Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="animate-fade-in">
            <h1>Terms and Conditions</h1>
            <p>
              Guidelines, clinical consultation policies, and appointment terms for patients visiting Shekhar Dental &amp; Orthodontic Center.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Terms and Conditions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          {/* Overview Card */}
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(44, 90, 160, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#1e3c72',
              }}
            >
              <FileText size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#1e3c72', marginBottom: '0.4rem' }}>
                Clinical Guidelines &amp; Patient Agreement
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                Effective Date: <strong>March 2026</strong>. By accessing our website, booking an appointment, or receiving dental treatments at Shekhar Dental &amp; Orthodontic Center, you acknowledge and agree to the clinical terms and conditions outlined below.
              </p>
            </div>
          </div>

          {/* Terms Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#334155', lineHeight: '1.8' }}>
            
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Stethoscope size={20} color="#2c5aa0" />
                1. Dental Consultations &amp; Diagnostic Examinations
              </h2>
              <p>
                All clinical evaluations, treatment plans, and fee estimates provided through our website, phone consultations, or preliminary check-ups are indicative. A comprehensive intraoral examination, alongside necessary diagnostic digital X-rays/scans performed in-clinic, is required before a definitive treatment course and final pricing are confirmed.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={20} color="#2c5aa0" />
                2. Appointment Scheduling, Rescheduling &amp; Punctuality
              </h2>
              <p>To ensure high-standard dental care and minimal waiting times for all patients:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>Advance Scheduling:</strong> Patients are encouraged to book consultation slots in advance via our online appointment system or by direct phone call.</li>
                <li><strong>Timely Arrival:</strong> Please arrive 10 minutes prior to your scheduled slot for administrative check-in and medical history updating.</li>
                <li><strong>Rescheduling Policy:</strong> If you need to postpone or cancel an appointment, please inform our reception at least 2 to 4 hours in advance so the slot may be allocated to emergency or waitlisted patients.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={20} color="#2c5aa0" />
                3. Medical History &amp; Informed Consent
              </h2>
              <p>
                Patients (or their legal guardians) are required to provide complete and accurate information regarding their medical history, including heart conditions, diabetes, bleeding disorders, high blood pressure, pregnancy, and known drug allergies (e.g., Penicillin, local anesthetics).
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                Specific surgical, orthodontic, or invasive dental procedures (such as wisdom teeth impactions, bone grafting, or dental implant surgeries) will require signed informed written consent before procedure initiation.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} color="#2c5aa0" />
                4. Pricing, Payments &amp; Laboratory Work
              </h2>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>Transparent Pricing:</strong> Fee estimates are communicated transparently prior to initiating any treatment plan.</li>
                <li><strong>Custom Prosthetics:</strong> Treatments involving customized laboratory fabrications (such as Zirconia crowns, bridges, dentures, and clear aligner kits) may require an advance deposit before impressions or 3D scans are dispatched to certified dental laboratories.</li>
                <li><strong>Payment Modes:</strong> We accept cash, UPI / QR payments, debit/credit cards, and digital bank transfers.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={20} color="#2c5aa0" />
                5. Post-Treatment Care &amp; Warranty Guidelines
              </h2>
              <p>
                The longevity and success of dental restorations, root canal treatments, implants, and aligners depend heavily on oral hygiene maintenance, post-operative compliance, and periodic review check-ups. Patients must adhere to prescribed medications and scheduled follow-up visits.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Scale size={20} color="#2c5aa0" />
                6. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with clinical services or website usage shall be subject to the exclusive jurisdiction of the courts in <strong>New Delhi, India</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
