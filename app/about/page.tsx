import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Heart, 
  Eye, 
  Target, 
  Sparkles, 
  CheckCircle, 
  Calendar, 
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';
import CertificatesShowcase from '@/components/CertificatesShowcase';

export const metadata: Metadata = {
  title: 'About SHEKHAR DENTAL AND ORTHODONTIC CENTRE | Dr. Prakash Thakur Delhi',
  description: 'Learn about SHEKHAR DENTAL AND ORTHODONTIC CENTRE in Sagarpur, New Delhi, founded by Dr. Prakash Thakur (Doctor Prakash Thakur). Committed to hospital-grade sterilization, advanced rotary dentistry, and ethical patient care.',
  keywords: [
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTER',
    'About Shekhar Dental',
    'Dr Prakash Thakur',
    'Doctor Prakash Thakur',
    'Prakash Thakur',
    'Dr Prakash Thakur Dentist',
    'Dental Clinic Sagarpur History',
    'Dr Vivek Shekhar Orthodontist',
    'Dental Sterilization Standards Delhi'
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About SHEKHAR DENTAL AND ORTHODONTIC CENTRE | Dr. Prakash Thakur | Delhi',
    description: 'Learn about our journey, patient-first philosophy, clinical certifications, and dental technology in Sagarpur, Delhi founded by Dr. Prakash Thakur.',
    url: 'https://shekhardental.in/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Subpage Header Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="animate-fade-in">
            <h1>About Shekhar Dental & Orthodontic Center</h1>
            <p>
              Dedicated to delivering painless, advanced, and compassionate dental care in Sagarpur, Delhi for over a decade.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Story Text */}
            <div>
              <span className="section-badge">Our Journey</span>
              <h2 style={{ fontSize: '2.5rem', color: '#1e3c72', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Compassion Meets Modern Dental Science
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                <strong>Shekhar Dental & Orthodontic Center</strong> was founded in 2017 with a singular vision: to bring world-class dental treatments to Sagarpur and West Delhi, combining state-of-the-art diagnostic technology with personalized, gentle patient care.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                Founded by <strong>Dr. Prakash Thakur</strong>, our clinic recognized the widespread dental anxiety patients face. By integrating rotary painless tools, digital smile analysis, and soothing chair-side manner, we have transformed dental visits into comfortable, empowering experiences.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Over the years, we have proudly served more than <strong>5,000+ satisfied patients</strong> across implants, root canal therapies, invisible aligners, and comprehensive family oral care.
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/appointment" className="btn btn-primary">
                  <Calendar size={18} />
                  <span>Book Consultation</span>
                </Link>
                <Link href="/team" className="btn" style={{ background: '#f1f5f9', color: '#1e293b' }}>
                  <Stethoscope size={18} />
                  <span>Meet Doctors</span>
                </Link>
              </div>
            </div>

            {/* Story Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  border: '6px solid #ffffff',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/About_us_img.png"
                  alt="Shekhar Dental Clinic Facility"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Floating Experience Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  left: '25px',
                  background: 'linear-gradient(135deg, #1e3c72, #2563eb)',
                  color: '#ffffff',
                  padding: '1.2rem 1.8rem',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>10+ Years</div>
                <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Clinical Excellence in Delhi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core Purpose</span>
            <h2>Our Mission & Vision</h2>
            <p>The guiding principles that steer our clinical team and patient commitments every single day.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {/* Mission */}
            <div
              style={{
                background: '#ffffff',
                padding: '3rem 2.5rem',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Heart size={32} color="#ef4444" />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#1e3c72', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ color: '#64748b', fontSize: '1.02rem', lineHeight: '1.8' }}>
                To provide exceptional, evidence-based dental care that elevates the oral health and well-being of every patient through gentle procedures, cutting-edge dentistry, and continuous patient education. We build lifelong trust one radiant smile at a time.
              </p>
            </div>

            {/* Vision */}
            <div
              style={{
                background: '#ffffff',
                padding: '3rem 2.5rem',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(37, 99, 235, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Eye size={32} color="#2563eb" />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#1e3c72', marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ color: '#64748b', fontSize: '1.02rem', lineHeight: '1.8' }}>
                To be the most respected and patient-recommended dental healthcare center in Delhi NCR, recognized for painless innovations, clinical perfection, transparent care, and community oral health welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Hygiene Standards */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Quality Guarantee</span>
            <h2>Our Clinical Standards</h2>
            <p>How we ensure unmatched patient safety, comfort, and satisfaction.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'Hospital-Grade Sterilization',
                desc: 'Multi-stage autoclave cycle, UV chambers, and individually packaged sterile tool sets for each patient.',
              },
              {
                title: 'Transparent Treatment Costs',
                desc: 'Complete cost transparency beforehand with zero hidden surprises. High quality dental care that fits your budget.',
              },
              {
                title: 'Modern Digital Equipment',
                desc: 'Digital intraoral cameras, rotary endodontics, and precision implant instruments for minimally invasive results.',
              },
              {
                title: 'Post-Treatment Follow Up',
                desc: 'Dedicated recovery guidelines and follow-up support to ensure smooth and swift healing after any procedure.',
              },
            ].map((val, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                  <CheckCircle size={22} color="#10b981" />
                  <h4 style={{ fontSize: '1.15rem', color: '#1e293b', margin: 0 }}>{val.title}</h4>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Certifications & Accreditations Section */}
      <section style={{ padding: '5.5rem 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <CertificatesShowcase 
            badge="Doctor Accreditations & Licenses"
            title="Verified Dental Registrations & Honors"
            subtitle="View official certifications of our clinical faculty across dental implants, invisible aligners, state medical council licenses, and community dental work."
          />
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '4rem 0 6rem', background: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #1e3c72 0%, #2563eb 100%)',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '3.5rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <h2 style={{ color: '#ffffff', fontSize: '2.3rem', marginBottom: '1rem' }}>
              Experience Dental Care That Puts You First
            </h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem', opacity: 0.9 }}>
              Visit our modern clinic in Sagarpur East, Delhi or book your preferred appointment slot online with instant WhatsApp confirmation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/appointment" className="btn btn-white" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}>
                <Calendar size={18} color="#1e3c72" />
                <span>Book Appointment Online</span>
              </Link>
              <Link href="/contact" className="btn btn-outline-white" style={{ padding: '0.95rem 2.2rem', fontSize: '1.05rem' }}>
                <span>Get Clinic Directions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
