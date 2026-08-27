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
      {/* Subpage Header Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="animate-fade-in">
            <h1>Contact Shekhar Dental Clinic</h1>
            <p>
              We are here to help you achieve your best smile. Reach out to us for consultations, inquiries, or dental emergencies in Sagarpur, Delhi.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Contact Us</span>
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
