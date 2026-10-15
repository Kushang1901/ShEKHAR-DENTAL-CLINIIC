import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin, Cookie, Megaphone } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: 'Privacy Policy | Shekhar Dental & Orthodontic Center',
  description: 'Learn how Shekhar Dental Clinic protects your personal data, medical records, healthcare confidentiality, cookie usage, and advertising disclosures. Patient data rights under Indian IT Act.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Subpage Header Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="animate-fade-in">
            <h1>Privacy Policy</h1>
            <p>
              Your privacy, health information, and medical confidentiality are paramount to us at Shekhar Dental & Orthodontic Center.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Privacy Policy</span>
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
              <ShieldCheck size={26} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#1e3c72', marginBottom: '0.4rem' }}>
                Commitment to Patient Confidentiality
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                Last updated: <strong>March 2026</strong>. This Privacy Policy explains how Shekhar Dental &amp; Orthodontic Center (&ldquo;Clinic&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) collects, uses, protects, and handles your personal information, medical history, and clinical records when you visit our clinic or use our website.
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#334155', lineHeight: '1.8' }}>
            
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Eye size={20} color="#2c5aa0" />
                1. Information We Collect
              </h2>
              <p>When you schedule an appointment, consult our dentists, or interact with our website, we may collect the following details:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>Personal Identification:</strong> Full Name, Date of Birth, Gender, Contact Number, Email Address, and Residential Address.</li>
                <li><strong>Clinical &amp; Medical History:</strong> Previous dental treatments, medical conditions, allergies, existing medications, and family health history necessary for safe dental procedures.</li>
                <li><strong>Diagnostic Records:</strong> Intraoral photographs, digital X-rays, OPG scans, study models, and treatment charts.</li>
                <li><strong>Appointment &amp; Transaction Details:</strong> Appointment booking history, preferred time slots, invoices, and payment records.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={20} color="#2c5aa0" />
                2. How We Use Your Information
              </h2>
              <p>Your information is used strictly for legitimate healthcare and clinical administrative purposes:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>To formulate customized dental diagnoses, treatment plans, and post-procedure follow-ups.</li>
                <li>To send appointment confirmation notices, reminders, and essential clinical care guidelines.</li>
                <li>To maintain compliant electronic dental healthcare records as mandated by Indian medical and dental councils.</li>
                <li>To coordinate with certified dental laboratories for prosthetics, invisible aligners, crowns, and bridges.</li>
                <li>To respond to your inquiries submitted via website forms, WhatsApp, or phone calls.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={20} color="#2c5aa0" />
                3. Confidentiality &amp; Data Security
              </h2>
              <p>
                We implement robust administrative, technical, and physical safeguards to prevent unauthorized access, disclosure, or misuse of your health records.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>Zero Commercial Sharing:</strong> We do <em>not</em> sell, rent, or trade your personal or medical information to third-party marketing companies.</li>
                <li><strong>Restricted Access:</strong> Only authorized clinic doctors, specialists, and clinical assistants directly involved in your care have access to your health files.</li>
                <li><strong>Secure Transmission:</strong> Any digital form submission through our website is encrypted over secure HTTPS protocols.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} color="#2c5aa0" />
                4. Patient Rights
              </h2>
              <p>As our patient, you have the right to:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>Request access to copies of your dental X-rays, diagnostic records, and treatment summaries.</li>
                <li>Request corrections or updates to any inaccurate personal contact details.</li>
                <li>Opt out of non-essential clinic announcements or health reminder notifications at any time.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={20} color="#2c5aa0" />
                5. Contacting Us
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                If you have questions regarding this Privacy Policy, your medical data confidentiality, or wish to update your records, please contact our administrative desk:
              </p>
              <div
                style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={18} color="#2c5aa0" />
                  <span><strong>Shekhar Dental &amp; Orthodontic Center:</strong> {clinicInfo.address.full}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={18} color="#2c5aa0" />
                  <span><strong>Phone:</strong> {clinicInfo.phoneNumbers.map(p => p.label).join(' / ')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={18} color="#2c5aa0" />
                  <span><strong>Email:</strong> {clinicInfo.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cookie size={20} color="#2c5aa0" />
                6. Cookies and Website Analytics
              </h2>
              <p style={{ marginBottom: '0.8rem' }}>
                Our website (<strong>shekhardental.in</strong>) uses cookies — small text files stored on your device — to improve user experience, remember preferences, and measure website traffic. We use the following types of cookies:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li><strong>Essential Cookies:</strong> Required for the website to function correctly, including appointment booking sessions and security tokens. These cannot be disabled.</li>
                <li><strong>Analytics Cookies (Google Analytics):</strong> We use Google Analytics to collect anonymized, aggregated data on pages visited, session duration, device type, and geographic region. This data does not personally identify you and is used solely to improve website content and usability.</li>
                <li><strong>Advertising Cookies (Google AdSense):</strong> Our website participates in the Google AdSense advertising programme. Google uses cookies to serve ads based on your prior visits to our website and other sites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Google Ad Settings</a> or <a href="http://www.aboutads.info/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>aboutads.info</a>.</li>
                <li><strong>Preference Cookies:</strong> Store language preferences, form-fill data, and last-visited pages for a smoother repeat experience.</li>
              </ul>
              <p style={{ marginTop: '0.8rem' }}>
                You can control or disable cookies through your browser settings. For more information about how Google uses data when you visit our website, see{' '}
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>Google&apos;s Partner Policy</a>.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Megaphone size={20} color="#2c5aa0" />
                7. Advertising Disclosure
              </h2>
              <p style={{ marginBottom: '0.8rem' }}>
                <strong>shekhardental.in</strong> may display third-party advertisements through the <strong>Google AdSense</strong> programme operated by Google LLC. Please note:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>Advertisements are served by Google and its advertising partners using cookies and web beacons.</li>
                <li>Google may use DoubleClick DART cookies to serve ads based on your visit to this site and other sites.</li>
                <li>We do not have editorial control over specific advertisements served on our website. Ad content is the sole responsibility of the respective advertisers.</li>
                <li>The presence of an advertisement does not constitute an endorsement by Shekhar Dental Clinic of the advertised product or service.</li>
                <li>All dental and medical content on this website is clinically authored and editorially independent of any advertising relationships.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={20} color="#2c5aa0" />
                8. Medical Content Disclaimer
              </h2>
              <p>
                All health and dental information published on shekhardental.in — including blog articles, service descriptions, and FAQ content — is written for general patient education and informational purposes only. It does not constitute professional medical or dental advice, diagnosis, or treatment. Always seek the guidance of a qualified dental professional for any questions regarding your personal dental health condition. Never disregard professional advice or delay seeking it because of something you read on this website.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1e3c72', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lock size={20} color="#2c5aa0" />
                9. Compliance with Indian Information Technology Act
              </h2>
              <p>
                This Privacy Policy is compliant with the <strong>Information Technology Act, 2000</strong> and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong> as applicable to healthcare providers and websites collecting personal data in India. By using this website, you consent to the collection, storage, and use of your information as described in this policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
