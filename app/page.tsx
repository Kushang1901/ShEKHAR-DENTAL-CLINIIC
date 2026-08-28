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
  Star,
  Stethoscope,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';
import { doctorsData } from '@/data/doctors';
import HeroSlider from '@/components/HeroSlider';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';
import ServicesCarousel from '@/components/ServicesCarousel';
import AnimatedCounter from '@/components/AnimatedCounter';
import InstagramReelsSection from '@/components/InstagramReelsSection';

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO — Client slider component (animations)
          Server-rendered wrapper keeps FCP fast
      ───────────────────────────────────────────── */}
      <HeroSlider />

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

      {/* Featured Services Section */}
      <section style={{ padding: '5.5rem 0', background: '#f8fafc', overflow: 'hidden' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Treatments</span>
            <h2>Popular Dental Services</h2>
            <p>From routine cleanings to complete full-mouth implant restorations, explore our patient-approved treatments.</p>
          </div>

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
                Led by Founder &amp; Lead Dental Surgeon Dr. Prakash Thakur, our clinical panel brings over 50 years of combined experience
                across implantology, orthodontic bite correction, and endodontics.
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

      {/* Instagram Reels Video Carousel */}
      <InstagramReelsSection />

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
