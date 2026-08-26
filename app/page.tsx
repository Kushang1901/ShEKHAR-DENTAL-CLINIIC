'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  Award,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  CheckCircle2,
  Star,
  ArrowRight,
  Stethoscope,
  HeartHandshake
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';
import { servicesData } from '@/data/services';
import { doctorsData } from '@/data/doctors';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';
import ServicesCarousel from '@/components/ServicesCarousel';
import AnimatedCounter from '@/components/AnimatedCounter';

const heroPhrases = [
  'Starts Here',
  'Starts Today',
  'Starts With A Great Day',
  'Starts With Expert Care',
];

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 6);

  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState(heroPhrases[0]);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentPhrase = heroPhrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
    } else {
      const speed = isDeleting ? 40 : 85;
      timeout = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentPhrase.slice(0, currentText.length - 1)
            : currentPhrase.slice(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <>
      {/* ═══════════════════════════════════════════
          PROFESSIONAL HERO SECTION
      ═══════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: '#f8fafc',
          backgroundImage: 'linear-gradient(160deg, rgba(240, 247, 255, 0.88) 0%, rgba(232, 244, 253, 0.80) 40%, rgba(255, 255, 255, 0.92) 100%), url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* ── Professional background decorations ── */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
          {/* Background image overlay layer */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/hero-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.15,
            }}
          />

          {/* Soft ambient gradient blobs */}
          <div style={{
            position: 'absolute', top: '-15%', right: '-8%',
            width: '60vw', height: '60vw', maxWidth: '750px', maxHeight: '750px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(44,90,160,0.09) 0%, transparent 68%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-12%', left: '-10%',
            width: '50vw', height: '50vw', maxWidth: '620px', maxHeight: '620px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,172,254,0.09) 0%, transparent 68%)',
          }} />

          {/* Subtle dot grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(30,60,114,0.09) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }} />

          {/* Large watermark tooth SVG — top-right */}
          <svg
            viewBox="0 0 200 220"
            style={{ position: 'absolute', top: '4%', right: '2%', width: 'clamp(180px, 22vw, 320px)', opacity: 0.045 }}
            fill="#1e3c72"
          >
            <path d="M100 10 C60 10, 20 40, 20 80 C20 110, 30 130, 40 155 C50 180, 55 210, 65 210 C75 210, 78 185, 85 170 C90 158, 95 150, 100 150 C105 150, 110 158, 115 170 C122 185, 125 210, 135 210 C145 210, 150 180, 160 155 C170 130, 180 110, 180 80 C180 40, 140 10, 100 10 Z" />
          </svg>

          {/* Medium watermark tooth — bottom-left */}
          <svg
            viewBox="0 0 200 220"
            style={{ position: 'absolute', bottom: '5%', left: '3%', width: 'clamp(120px, 15vw, 220px)', opacity: 0.04, transform: 'rotate(-15deg)' }}
            fill="#2c5aa0"
          >
            <path d="M100 10 C60 10, 20 40, 20 80 C20 110, 30 130, 40 155 C50 180, 55 210, 65 210 C75 210, 78 185, 85 170 C90 158, 95 150, 100 150 C105 150, 110 158, 115 170 C122 185, 125 210, 135 210 C145 210, 150 180, 160 155 C170 130, 180 110, 180 80 C180 40, 140 10, 100 10 Z" />
          </svg>

          {/* Medical cross — upper left */}
          <svg
            viewBox="0 0 60 60"
            style={{ position: 'absolute', top: '12%', left: '6%', width: 'clamp(40px, 5vw, 72px)', opacity: 0.09 }}
            fill="#1e3c72"
          >
            <rect x="22" y="4" width="16" height="52" rx="4" />
            <rect x="4" y="22" width="52" height="16" rx="4" />
          </svg>

          {/* Medical cross — mid right */}
          <svg
            viewBox="0 0 60 60"
            style={{ position: 'absolute', top: '55%', right: '5%', width: 'clamp(30px, 4vw, 55px)', opacity: 0.07, transform: 'rotate(15deg)' }}
            fill="#2c5aa0"
          >
            <rect x="22" y="4" width="16" height="52" rx="4" />
            <rect x="4" y="22" width="52" height="16" rx="4" />
          </svg>

          {/* Small cross — bottom center */}
          <svg
            viewBox="0 0 60 60"
            style={{ position: 'absolute', bottom: '18%', left: '42%', width: '36px', opacity: 0.06, transform: 'rotate(-10deg)' }}
            fill="#1e3c72"
          >
            <rect x="22" y="4" width="16" height="52" rx="4" />
            <rect x="4" y="22" width="52" height="16" rx="4" />
          </svg>

          {/* Decorative ring — top center */}
          <svg
            viewBox="0 0 200 200"
            style={{
              position: 'absolute',
              top: '-6%',
              left: '35%',
              width: 'clamp(140px, 18vw, 260px)',
              opacity: 0.08,
              animation: 'spinContinuous 32s linear infinite',
              transformOrigin: 'center',
            }}
            fill="none" stroke="#2c5aa0" strokeWidth="8"
          >
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" strokeDasharray="12 10" />
          </svg>

          {/* Decorative ring — bottom right */}
          <svg
            viewBox="0 0 200 200"
            style={{
              position: 'absolute',
              bottom: '-12%',
              right: '20%',
              width: 'clamp(120px, 15vw, 220px)',
              opacity: 0.08,
              animation: 'spinContinuousReverse 26s linear infinite',
              transformOrigin: 'center',
            }}
            fill="none" stroke="#1e3c72" strokeWidth="8"
          >
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="65" strokeDasharray="8 12" />
          </svg>

          {/* Heartbeat / pulse line — decorative */}
          <svg
            viewBox="0 0 500 80"
            style={{ position: 'absolute', bottom: '28%', left: '0', width: '55%', opacity: 0.06 }}
            fill="none" stroke="#1e3c72" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="0,40 60,40 90,10 120,70 150,40 200,40 230,5 260,75 290,40 360,40 380,25 400,55 420,40 500,40" />
          </svg>

          {/* Bottom wave divider */}
          <svg
            viewBox="0 0 1440 90"
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%' }}
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,90 L0,90 Z"
              fill="rgba(30,60,114,0.04)"
            />
            <path
              d="M0,70 C360,40 720,90 1080,60 C1260,46 1380,70 1440,75 L1440,90 L0,90 Z"
              fill="rgba(44,90,160,0.05)"
            />
          </svg>
        </div>

        {/* ── Main content ── */}
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '5rem 1.5rem 5rem' }}>

          {/* Two-column layout */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
          }}>

            {/* ── LEFT: Text content ── */}
            <div style={{ flex: '1 1 480px', maxWidth: '640px' }}>

              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                padding: '6px 18px',
                borderRadius: '40px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#1d4ed8',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}>
                <Sparkles size={13} color="#2563eb" />
                Delhi&apos;s Premier Dental &amp; Orthodontic Center
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                <span style={{ color: '#16a34a', fontSize: '0.78rem' }}>Open Now</span>
              </div>

              {/* Headline with Typewriter Animation */}
              <h1 style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.15,
                marginBottom: '1.3rem',
                letterSpacing: '-0.025em',
                minHeight: '2.4em',
              }}>
                Your Perfect Smile<br />
                <span style={{
                  color: '#1e3c72',
                  display: 'inline-block',
                }}>
                  {currentText}
                  <span
                    style={{
                      display: 'inline-block',
                      width: '3px',
                      height: '0.85em',
                      backgroundColor: '#2563eb',
                      marginLeft: '5px',
                      verticalAlign: 'baseline',
                      animation: 'typeCursorBlink 0.9s infinite',
                    }}
                    aria-hidden="true"
                  />
                </span>
              </h1>

              {/* Sub-text */}
              <p style={{
                fontSize: '1.12rem',
                lineHeight: 1.75,
                color: '#64748b',
                marginBottom: '2.2rem',
                maxWidth: '520px',
              }}>
                Experience painless, modern dentistry with cutting-edge technology and trusted specialists. Serving Delhi families with gentle care for over <strong style={{ color: '#1e3c72' }}>10&nbsp;years</strong>.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link
                  href="/appointment"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '9px',
                    padding: '0.9rem 2rem',
                    background: 'linear-gradient(135deg, #1e3c72 0%, #2c5aa0 100%)',
                    color: '#ffffff', fontWeight: 700, fontSize: '1rem',
                    borderRadius: '50px', textDecoration: 'none',
                    boxShadow: '0 6px 22px rgba(30,60,114,0.30)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = 'translateY(-3px)';
                    el.style.boxShadow = '0 12px 32px rgba(30,60,114,0.42)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 6px 22px rgba(30,60,114,0.30)';
                  }}
                >
                  <Calendar size={18} />
                  Book Free Consultation
                </Link>

                <a
                  href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '9px',
                    padding: '0.9rem 2rem',
                    background: '#ffffff', color: '#1e3c72',
                    fontWeight: 700, fontSize: '1rem',
                    borderRadius: '50px', textDecoration: 'none',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = '#2c5aa0';
                    el.style.transform = 'translateY(-3px)';
                    el.style.boxShadow = '0 8px 20px rgba(30,60,114,0.14)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = '#e2e8f0';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
                  }}
                >
                  <Phone size={18} />
                  {clinicInfo.phoneNumbers[0].label}
                </a>
              </div>

              {/* Trust checkmarks */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem 1.6rem', paddingTop: '1.6rem', borderTop: '1px solid #e2e8f0' }}>
                {[
                  'Sunday Free Checkups',
                  'Painless Rotary Tech',
                  'Hospital-Grade Sterilization',
                  'Same-Day Emergency Care',
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: '#334155', fontWeight: 500 }}>
                    <CheckCircle2 size={16} color="#16a34a" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Stats card panel ── */}
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>

              {/* Main highlight card */}
              <div style={{
                background: 'linear-gradient(135deg, #1e3c72 0%, #2c5aa0 100%)',
                borderRadius: '24px',
                padding: '2.2rem 2rem',
                color: '#fff',
                boxShadow: '0 20px 50px rgba(30,60,114,0.25)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div aria-hidden style={{
                  position: 'absolute', top: '-40%', right: '-20%',
                  width: '200px', height: '200px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                }} />
                <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '0.6rem' }}>
                  Trusted by Delhi Families
                </div>
                <div style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.3rem' }}>
                  <AnimatedCounter target={5000} suffix="+" duration={2200} />
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.80)' }}>Happy Patients &amp; Counting</div>

                {/* Star rating row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '1.2rem' }}>
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} color="#fbbf24" fill="#fbbf24" />)}
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginLeft: '6px' }}>4.9 / 5 Rating</span>
                </div>
              </div>

              {/* 3-stat row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                {[
                  { value: '10+', label: 'Years', icon: <Award size={18} color="#1e3c72" /> },
                  { value: '12+', label: 'Services', icon: <Stethoscope size={18} color="#1e3c72" /> },
                  { value: '99%', label: 'Success', icon: <ShieldCheck size={18} color="#1e3c72" /> },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '1rem 0.6rem',
                    textAlign: 'center',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                    transition: 'all 0.25s ease',
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = '#2c5aa0';
                      el.style.transform = 'translateY(-4px)';
                      el.style.boxShadow = '0 10px 24px rgba(30,60,114,0.14)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = '#e2e8f0';
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                    }}
                  >
                    <div style={{ marginBottom: '0.4rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1e3c72', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Doctor badge */}
              <div style={{
                background: '#f0fdf4', border: '1px solid #bbf7d0',
                borderRadius: '14px', padding: '1rem 1.2rem',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <HeartHandshake size={22} color="#16a34a" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#15803d' }}>Sunday Free Checkup</div>
                  <div style={{ fontSize: '0.78rem', color: '#4ade80', fontWeight: 500 }}>Every Sunday · No Appointment Needed</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ padding: '3.5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {clinicInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="hover-lift-sm"
                style={{
                  background: '#ffffff',
                  padding: '2rem 1.5rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div
                  style={{
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #1e3c72 0%, #2563eb 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.3rem',
                  }}
                >
                  <AnimatedCounter
                    target={parseInt(stat.value.replace(/[^0-9]/g, '')) || 5000}
                    suffix={stat.value.includes('%') ? '%' : '+'}
                    duration={2000}
                  />
                </div>
                <div style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Why Choose Us</span>
            <h2>Excellence in Modern Dentistry</h2>
            <p>We combine compassionate clinical expertise, sterile protocols, and patient-first technology to deliver memorable smile makeovers.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: <Award size={28} color="#2563eb" />,
                title: 'Expert Dental Specialists',
                description: 'Team of experienced oral surgeons, orthodontists, and endodontists delivering specialized multi-disciplinary care.',
              },
              {
                icon: <ShieldCheck size={28} color="#10b981" />,
                title: 'Strict Sterilization & Safety',
                description: 'Hospital-grade autoclaves, single-use disposables, and ISO-standard hygiene protocols for 100% patient safety.',
              },
              {
                icon: <HeartHandshake size={28} color="#f59e0b" />,
                title: 'Gentle & Painless Techniques',
                description: 'Modern rotary endodontics, localized anesthesia, and a soothing clinical ambiance to make your visit stress-free.',
              },
              {
                icon: <Clock size={28} color="#8b5cf6" />,
                title: 'Convenient Timings & Emergency',
                description: 'Morning and late evening hours till 10 PM. Prompt same-day emergency relief for severe dental pain.',
              },
              {
                icon: <Sparkles size={28} color="#ec4899" />,
                title: 'Transparent Affordable Pricing',
                description: 'Upfront cost estimates with no hidden charges. Free initial dental consultations every Sunday.',
              },
              {
                icon: <Users size={28} color="#06b6d4" />,
                title: 'Comprehensive Family Care',
                description: 'All dental needs under one roof — pediatric checkups, teen braces, adult implants, and geriatric dentures.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="hover-lift-sm"
                style={{
                  background: '#ffffff',
                  padding: '2.2rem 2rem',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '1.2rem',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: '#1e293b' }}>{feature.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section with Arrows & Auto-Slide */}
      <section style={{ padding: '5.5rem 0', background: '#f8fafc', overflow: 'hidden' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Treatments</span>
            <h2>Popular Dental Services</h2>
            <p>From routine cleanings to complete full-mouth implant restorations, explore our patient-approved treatments.</p>
          </div>

          {/* Interactive Services Carousel with Left/Right Arrows */}
          <ServicesCarousel />

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/services" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <span>View All 12+ Dental Treatments</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Spotlight Section */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #1e3c72 0%, #2c5aa0 100%)',
              borderRadius: '24px',
              color: '#ffffff',
              padding: '3.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '3rem',
            }}
          >
            <div style={{ flex: '1 1 450px' }}>
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#67e8f9',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '1rem',
                }}
              >
                Lead Specialists
              </span>
              <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '1rem' }}>Meet Our Senior Dentists</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Led by Founder &amp; Lead Dental Surgeon Dr. Prakash Thakur, our clinical panel brings over 50 years of combined experience across implantology, orthodontic bite correction, and endodontics.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/team" className="btn btn-white">
                  <Stethoscope size={18} color="#1e3c72" />
                  <span>View All Doctors</span>
                </Link>
                <Link href="/appointment" className="btn btn-outline-white">
                  <Calendar size={18} />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {doctorsData.slice(0, 1).map((doc) => (
                <div
                  key={doc.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: '2rem',
                    borderRadius: '20px',
                    width: '100%',
                    maxWidth: '360px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
                    {doc.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={doc.image}
                        alt={doc.name}
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          objectPosition: 'center 20%',
                          border: '2px solid rgba(255, 255, 255, 0.5)',
                          flexShrink: 0,
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          flexShrink: 0,
                        }}
                      >
                        <Stethoscope size={24} color="#ffffff" />
                      </div>
                    )}
                    <div>
                      <h3 style={{ color: '#ffffff', fontSize: '1.18rem', margin: 0 }}>{doc.name}</h3>
                      <p style={{ color: '#67e8f9', fontSize: '0.85rem', fontWeight: 600, margin: '2px 0 0 0' }}>{doc.role}</p>
                    </div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                    {doc.specialties.slice(0, 2).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Carousel */}
      <GoogleReviewsCarousel />


      {/* Emergency Callout Banner */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #ef4444 0%, #ee5a24 100%)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontSize: '2.4rem', marginBottom: '0.8rem' }}>Suffering from Severe Tooth Pain?</h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto 2rem', opacity: 0.95 }}>
            Don&apos;t endure toothache or dental trauma. Contact our emergency helpline for fast pain relief and same-day dental care.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
              className="btn btn-white"
              style={{ color: '#ef4444', padding: '1rem 2.2rem', fontSize: '1.1rem' }}
            >
              <Phone size={20} color="#ef4444" />
              <span>Call Emergency Line: {clinicInfo.phoneNumbers[0].label}</span>
            </a>
            <Link
              href="/appointment"
              className="btn btn-outline-white"
              style={{ padding: '1rem 2.2rem', fontSize: '1.1rem' }}
            >
              <Calendar size={20} />
              <span>Book Priority Slot</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
