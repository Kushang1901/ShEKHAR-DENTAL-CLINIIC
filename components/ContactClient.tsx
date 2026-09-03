'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

function ToothWatermark() {
  return (
    <svg
      width="220"
      height="260"
      viewBox="0 0 160 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-15px',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.28,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <path
        d="M48 22 C24 22 12 38 12 60 C12 78 18 94 24 114 C30 136 36 158 42 180 C44 186 50 190 56 190 C62 190 67 186 70 180 L76 164 L82 180 C85 186 90 190 96 190 C102 190 108 186 110 180 C116 158 122 136 128 114 C134 94 140 78 140 60 C140 38 128 22 104 22 C88 22 80 32 76 38 C72 32 64 22 48 22 Z"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M136 32 L139 20 L142 32 L154 35 L142 38 L139 50 L136 38 L124 35 Z" fill="#38bdf8" opacity="0.85" />
      <path d="M148 64 L150 56 L152 64 L160 66 L152 68 L150 76 L148 68 L140 66 Z" fill="#60a5fa" opacity="0.75" />
      <path d="M22 64 L24 57 L26 64 L33 66 L26 68 L24 75 L22 68 L15 66 Z" fill="#38bdf8" opacity="0.65" />
    </svg>
  );
}

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp Message for direct contact
    let msg = `*New Contact Message - Shekhar Dental*\n`;
    msg += `👤 *Name:* ${formData.name}\n`;
    msg += `📞 *Phone:* ${formData.phone}\n`;
    if (formData.email) msg += `✉️ *Email:* ${formData.email}\n`;
    msg += `🦷 *Subject / Service:* ${formData.service}\n`;
    if (formData.message) msg += `📝 *Message:* ${formData.message}\n`;

    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* Modern Light Hero Banner matching site design */}
      <section
        style={{
          background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 45%, #f8fafc 100%)',
          padding: '3.5rem 0 3.5rem',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          <ToothWatermark />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Left Column: Heading, Badge, Description, Breadcrumbs */}
            <div style={{ paddingLeft: '0.5rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#dbeafe',
                  color: '#1e40af',
                  padding: '5px 15px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '1.2rem',
                }}
              >
                GET IN TOUCH
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#1e3a8a',
                  lineHeight: 1.18,
                  marginBottom: '1.1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Contact Shekhar<br />Dental Clinic
              </h1>

              <p
                style={{
                  color: '#64748b',
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  maxWidth: '520px',
                  marginBottom: '1.6rem',
                }}
              >
                We are here to help you achieve your best smile. Reach out to us for consultations, inquiries, or dental emergencies in Sagarpur, Delhi.
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                }}
              >
                <Link
                  href="/"
                  style={{
                    color: '#2563eb',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  Home
                </Link>
                <ChevronRight size={14} color="#94a3b8" />
                <span style={{ color: '#64748b' }}>Contact Us</span>
              </div>
            </div>

            {/* Right Column: Cartoon Tooth on Telephone */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                className="about-hero-image-wrap"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '580px',
                  height: '340px',
                  borderRadius: '160px 24px 24px 160px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px -15px rgba(30, 60, 114, 0.12)',
                  border: '4px solid #ffffff',
                  background: '#f8fafc',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/cartoon_tooth_contact.jpg"
                  alt="Cartoon Tooth Talking on Telephone — Shekhar Dental Helpline"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details & Cards */}
      <section style={{ padding: '5rem 0 3rem', background: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            {/* Visit Card */}
            <div
              className="hover-lift"
              style={{
                background: '#ffffff',
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1e3c72, #2563eb)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  boxShadow: '0 8px 20px rgba(37, 99, 235, 0.3)',
                }}
              >
                <MapPin size={28} color="#ffffff" />
              </div>
              <h3 style={{ color: '#1e3c72', fontSize: '1.35rem', marginBottom: '0.8rem' }}>Visit Our Clinic</h3>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>
                {clinicInfo.address.line1},<br />
                {clinicInfo.address.line2},<br />
                {clinicInfo.address.city} – {clinicInfo.address.postalCode}
              </p>
            </div>

            {/* Call Card */}
            <div
              className="hover-lift"
              style={{
                background: '#ffffff',
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)',
                }}
              >
                <Phone size={28} color="#ffffff" />
              </div>
              <h3 style={{ color: '#1e3c72', fontSize: '1.35rem', marginBottom: '0.8rem' }}>Call Us</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '0.6rem' }}>
                {clinicInfo.phoneNumbers.map((p) => (
                  <a
                    key={p.value}
                    href={`tel:${p.value}`}
                    style={{ color: '#2563eb', fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none' }}
                  >
                    {p.label}
                  </a>
                ))}
              </div>
              <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Immediate response for emergencies</span>
            </div>

            {/* Timings Card */}
            <div
              className="hover-lift"
              style={{
                background: '#ffffff',
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid #e2e8f0',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  boxShadow: '0 8px 20px rgba(245, 158, 11, 0.3)',
                }}
              >
                <Clock size={28} color="#ffffff" />
              </div>
              <h3 style={{ color: '#1e3c72', fontSize: '1.35rem', marginBottom: '0.8rem' }}>Working Hours</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 0.4rem' }}>
                <strong>Mon - Sat:</strong> 10:00 AM - 12:00 PM & 06:00 PM - 10:00 PM
              </p>
              <span style={{ background: '#dcfce7', color: '#15803d', padding: '3px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600 }}>
                Sunday: Free Checkup
              </span>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="form-card" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-badge">Send a Message</span>
              <h2 style={{ fontSize: '2.1rem', color: '#1e3c72', marginBottom: '0.5rem', lineHeight: '1.25' }}>Have a Quick Question?</h2>
              <p style={{ color: '#64748b', fontSize: '0.98rem', margin: 0, lineHeight: '1.6' }}>
                Fill in the details below and our team will get in touch directly via WhatsApp or phone.
              </p>
            </div>

            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#14532d' }}>Message Sent Successfully!</h3>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#166534' }}>
                  Thank you for reaching out. We have opened WhatsApp with your message and our clinic reception will assist you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem', padding: '0.75rem 1.75rem', fontSize: '0.92rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-grid-2col">
                <div className="form-group">
                  <label className="form-label">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Manikant Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 96672 66301"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Treatment / Topic</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="form-select"
                  >
                    <option value="General Consultation">General Consultation & Checkup</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Braces & Clear Aligners">Braces & Aligners</option>
                    <option value="Root Canal Treatment">Root Canal Treatment</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Zirconia / PFM Crowns">Zirconia / PFM Crowns</option>
                    <option value="Dentures">Dentures (RPD / Full Mouth)</option>
                    <option value="Wisdom Tooth Extraction">Wisdom Tooth Extraction</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Your Message / Symptoms</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your symptoms or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <div className="form-group full-width" style={{ marginTop: '0.4rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', minHeight: '52px', fontSize: '1.05rem' }}>
                    <MessageCircle size={20} />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section style={{ padding: '3rem 0 5rem', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-badge">Location Map</span>
            <h2>Find Shekhar Dental Clinic on Map</h2>
            <p>Conveniently located near Baraat Ghar in Sagarpur East, Delhi.</p>
          </div>

          <div
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '2px solid #e2e8f0',
              height: '450px',
              background: '#e2e8f0',
            }}
          >
            <iframe
              src={clinicInfo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shekhar Dental Clinic Location Map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
