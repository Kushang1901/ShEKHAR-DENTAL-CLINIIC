'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  MessageCircle, 
  AlertCircle 
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';
import { servicesData } from '@/data/services';

const timeSlots = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '06:00 PM - 07:00 PM',
  '07:00 PM - 08:00 PM',
  '08:00 PM - 09:00 PM',
  '09:00 PM - 10:00 PM',
];

export default function AppointmentPage() {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: servicesData[0]?.name || 'General Dental Consultation',
    preferredDate: today,
    alternateDate: '',
    timeSlot: timeSlots[0],
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message
    let msg = `🦷 *NEW APPOINTMENT BOOKING - SHEKHAR DENTAL*\n\n`;
    msg += `👤 *Patient Name:* ${formData.name}\n`;
    msg += `📞 *Phone Number:* ${formData.phone}\n`;
    if (formData.email) msg += `✉️ *Email:* ${formData.email}\n`;
    msg += `💉 *Treatment Service:* ${formData.service}\n`;
    msg += `📅 *Preferred Date:* ${formData.preferredDate}\n`;
    if (formData.alternateDate) msg += `📅 *Alternate Date:* ${formData.alternateDate}\n`;
    msg += `⏰ *Selected Time Slot:* ${formData.timeSlot}\n`;
    if (formData.notes) msg += `📝 *Patient Notes / Symptoms:* ${formData.notes}\n`;
    msg += `\n*Sent via Shekhar Dental Website Booking System*`;

    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encoded}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <>
      {/* Subpage Header Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="animate-fade-in">
            <h1>Book Your Dental Appointment</h1>
            <p>
              Fast, easy online booking. Select your preferred date, time slot, and treatment to secure your consultation directly.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Book Appointment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Appointment Section */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'flex-start',
            }}
          >
            {/* Left Column: Booking Form */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '3rem',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid #e2e8f0',
                gridColumn: 'span 2',
              }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <span className="section-badge">Online Scheduling</span>
                <h2 style={{ fontSize: '2.2rem', color: '#1e3c72', marginBottom: '0.5rem' }}>
                  Reserve Your Visit
                </h2>
                <p style={{ color: '#64748b', fontSize: '1rem', margin: 0 }}>
                  Enter your details below. Once submitted, WhatsApp will open to confirm your booking directly with the clinic reception.
                </p>
              </div>

              {isSuccess ? (
                <div
                  style={{
                    background: '#dcfce7',
                    border: '2px solid #86efac',
                    color: '#14532d',
                    padding: '2.5rem',
                    borderRadius: '18px',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle2 size={56} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', color: '#14532d' }}>
                    Appointment Request Dispatched!
                  </h3>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '550px', margin: '0 auto 1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>! Your appointment request for <strong>{formData.service}</strong> on <strong>{formData.preferredDate} ({formData.timeSlot})</strong> has been forwarded to our WhatsApp coordinator.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: servicesData[0]?.name || 'General Dental Consultation',
                        preferredDate: today,
                        alternateDate: '',
                        timeSlot: timeSlots[0],
                        notes: '',
                      });
                    }}
                    className="btn btn-primary"
                    style={{ padding: '0.85rem 2rem' }}
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {/* Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={16} color="#2563eb" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Phone size={16} color="#2563eb" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 96672 66301"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={16} color="#2563eb" />
                      <span>Email Address (Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Service Selector */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={16} color="#2563eb" />
                      <span>Select Treatment *</span>
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                        background: '#ffffff',
                      }}
                    >
                      <option value="General Checkup & Consultation">General Checkup & Consultation (Free on Sundays)</option>
                      {servicesData.map((s) => (
                        <option key={s.id} value={`${s.name} (${s.price})`}>
                          {s.name} - {s.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={16} color="#2563eb" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={today}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Alternate Date */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={16} color="#2563eb" />
                      <span>Alternate Date (Optional)</span>
                    </label>
                    <input
                      type="date"
                      min={formData.preferredDate || today}
                      value={formData.alternateDate}
                      onChange={(e) => setFormData({ ...formData, alternateDate: e.target.value })}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Time Slots Selector */}
                  <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={16} color="#2563eb" />
                      <span>Choose Preferred Time Slot *</span>
                    </label>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '0.75rem',
                      }}
                    >
                      {timeSlots.map((slot) => {
                        const isSelected = formData.timeSlot === slot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setFormData({ ...formData, timeSlot: slot })}
                            style={{
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1',
                              background: isSelected ? '#eff6ff' : '#ffffff',
                              color: isSelected ? '#1e40af' : '#334155',
                              fontWeight: isSelected ? 600 : 500,
                              fontSize: '0.9rem',
                              cursor: 'pointer',
                              textAlign: 'center',
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes */}
                  <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FileText size={16} color="#2563eb" />
                      <span>Additional Notes or Symptoms (Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Tooth sensitivity in upper right molar, previous fillings, etc."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '1rem',
                        outline: 'none',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}
                    >
                      <MessageCircle size={20} />
                      <span>{isSubmitting ? 'Opening WhatsApp...' : 'Confirm & Book via WhatsApp'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Why Book With Us / Clinic Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Trust Box */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid #e2e8f0',
                }}
              >
                <h3 style={{ fontSize: '1.3rem', color: '#1e3c72', marginBottom: '1.2rem' }}>
                  Why Book With Shekhar Dental?
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Zero waiting times for confirmed appointments',
                    'Free Sunday Dental checkups & consultations',
                    'Hospital-grade sterilized instruments',
                    'Direct communication with lead doctor',
                    'Transparent upfront treatment estimates',
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: '#475569' }}>
                      <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Call Box */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1e3c72 0%, #2563eb 100%)',
                  borderRadius: '20px',
                  padding: '2rem',
                  color: '#ffffff',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <h3 style={{ color: '#ffffff', fontSize: '1.3rem', marginBottom: '0.6rem' }}>Prefer Booking by Phone?</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Speak directly with our clinic coordinator to select convenient timings or ask urgent questions.
                </p>
                <a
                  href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
                  className="btn btn-white"
                  style={{ width: '100%', color: '#1e3c72', fontWeight: 600 }}
                >
                  <Phone size={18} color="#1e3c72" />
                  <span>Call {clinicInfo.phoneNumbers[0].label}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
