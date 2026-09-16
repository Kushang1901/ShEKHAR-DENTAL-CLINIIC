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
  ArrowRight,
  MapPin,
  CheckCircle2,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';
import { doctorsData } from '@/data/doctors';
import HeroSlider from '@/components/HeroSlider';
import GoogleReviewsCarousel from '@/components/GoogleReviewsCarousel';
import ServicesCarousel from '@/components/ServicesCarousel';
import AnimatedCounter from '@/components/AnimatedCounter';
import InstagramReelsSection from '@/components/InstagramReelsSection';
import { blogsData } from '@/data/blogs';

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

      {/* ─────────────────────────────────────────────
          AUTHORITY OVERVIEW — SEO Pillar Section
      ───────────────────────────────────────────── */}
      <section style={{ padding: '4.5rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div className="ai-entity-summary">
              <span className="section-badge" style={{ marginBottom: '0.8rem' }}>
                About Shekhar Dental Clinic
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', color: '#1e3c72', lineHeight: 1.2, marginBottom: '1.2rem' }}>
                Best Dental Clinic in Delhi &amp; Orthodontic Center
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                Welcome to <strong>SHEKHAR DENTAL AND ORTHODONTIC CENTRE</strong> (also widely known as <strong>Shekhar Dental Clinic</strong> or <strong>Shekhar Dental and Orthodontic / Orthodontix Center</strong>), widely celebrated across Delhi NCR as the <strong>best service giving dental clinic in Delhi</strong>. Founded and personally supervised by <strong>Dr. Prakash Thakur (BDS, MIDA)</strong>, our multi-specialty dental practice brings over 15 years of surgical excellence, compassionate care, and transparent pricing to Sagarpur East and West Delhi.
              </p>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '1.8rem' }}>
                Whether you require permanent titanium <strong>dental implants</strong>, gentle <strong>rotary root canal treatment (RCT)</strong>, aesthetic <strong>ceramic braces or clear aligners</strong>, or cosmetic smile designing with metal-free zirconia caps, our clinic delivers hospital-grade sterilization and pain-free clinical precision.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  '15+ Years Clinical Dental Experience',
                  'Best Service Giving Practice in Delhi',
                  'Free Sunday Consultations by Prior Slot',
                  'Rotary Painless Root Canal Protocols',
                  '100% Metal-Free Zirconia Crowns',
                  'Strict Class B Autoclave Sterilization',
                ].map((highlight, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: 600 }}>{highlight}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn btn-primary" style={{ padding: '0.85rem 1.8rem' }}>
                  <span>About Dr. Prakash Thakur &amp; Clinic</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn btn-outline" style={{ padding: '0.85rem 1.8rem' }}>
                  <span>Explore Treatments &amp; Pricing</span>
                </Link>
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, #1e3c72 0%, #2563eb 100%)',
                borderRadius: '24px',
                padding: '2.5rem',
                color: '#ffffff',
                boxShadow: '0 20px 40px rgba(30, 60, 114, 0.25)',
              }}
            >
              <div style={{ fontSize: '0.88rem', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.5rem' }}>
                Quick Clinic Summary
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '1.2rem' }}>
                Shekhar Dental &amp; Orthodontic Center
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.92)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="#67e8f9" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block' }}>Clinic Location:</strong>
                    <span>1G, RZ-20B, Kailashpuri Road, Near Baraat Ghar, Sant Mohalla, Sagarpur East, Delhi 110046</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Stethoscope size={20} color="#67e8f9" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block' }}>Lead Dental Surgeon:</strong>
                    <span>Dr. Prakash Thakur (BDS, MIDA) • 15+ Yrs Exp</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Clock size={20} color="#67e8f9" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block' }}>Clinic Hours:</strong>
                    <span>Mon–Sat: 10 AM–12 PM &amp; 6 PM–10 PM • Sunday: Free Checkup</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Phone size={20} color="#67e8f9" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block' }}>Direct Helpline:</strong>
                    <a href={`tel:${clinicInfo.phoneNumbers[0].clean}`} style={{ color: '#ffffff', textDecoration: 'underline' }}>
                      {clinicInfo.phoneNumbers[0].label}
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center' }}>
                <Link
                  href="/appointment"
                  className="btn btn-white"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.9rem 1.5rem', fontSize: '1.02rem' }}
                >
                  <Calendar size={18} color="#1e3c72" />
                  <span>Book Free Consultation / Check-up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Why Choose Shekhar Dental</span>
            <h2>Best Dental Clinic in Delhi — Compassionate &amp; Painless Care</h2>
            <p>SHEKHAR DENTAL AND ORTHODONTIC CENTRE is recognized as the best service giving dental clinic in Delhi. We combine compassionate clinical expertise, sterile protocols, and patient-first technology to deliver memorable smile makeovers.</p>
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
                          objectPosition: doc.imagePosition || 'center 38%',
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

      {/* ─────────────────────────────────────────────
          FEATURED DENTAL BLOGS — By Dr. Prakash Thakur
      ───────────────────────────────────────────── */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Doctor's Blog &amp; Insights</span>
            <h2>Dental Health Guides by Dr. Prakash Thakur</h2>
            <p>Clinical articles, treatment comparisons, and practical oral health advice written by Founder &amp; Lead Surgeon Dr. Prakash Thakur (BDS, MIDA).</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
            }}
          >
            {blogsData.slice(0, 3).map((blog) => (
              <article
                key={blog.slug}
                className="hover-lift-sm"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '210px', position: 'relative', background: '#f1f5f9', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(30, 60, 114, 0.9)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                    }}
                  >
                    {blog.category}
                  </div>
                </div>

                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#64748b', marginBottom: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} color="#2563eb" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} color="#2563eb" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#1e3c72', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                    <Link href={`/blog/${blog.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {blog.title}
                    </Link>
                  </h3>

                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.4rem', flex: 1 }}>
                    {blog.excerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '1rem', marginTop: 'auto' }}>
                    <div style={{ fontSize: '0.82rem', color: '#1e293b', fontWeight: 600 }}>
                      By {blog.author.name}
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: '#2563eb',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        textDecoration: 'none',
                      }}
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/blog"
              className="btn btn-primary"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}
            >
              <span>Explore All 7+ Dental Health Guides</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Reels Video Carousel */}
      <InstagramReelsSection />


      {/* ─────────────────────────────────────────────
          ON-PAGE SEO FAQS — Accordion for Rich Snippets
      ───────────────────────────────────────────── */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <span className="section-badge">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about Shekhar Dental Clinic, treatments, doctor credentials, and Sunday free consultations.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'Why is Shekhar Dental Clinic considered the best dental clinic in Delhi?',
                a: 'Shekhar Dental Clinic (SHEKHAR DENTAL AND ORTHODONTIC CENTRE) in Sagarpur East is recognized as the best clinic in Delhi due to 15+ years of surgical expertise under Dr. Prakash Thakur, hospital-grade Class B autoclave sterilization, painless rotary root canals, transparent upfront pricing, and free consultations every Sunday morning.',
              },
              {
                q: 'What makes Shekhar Dental and Orthodontic Center the best service giving clinic in Delhi?',
                a: 'Our patient-first approach, computer-assisted painless local anesthesia, gentle rotary endodontics, high-quality biocompatible dental implants, and dedicated post-operative follow-up have earned us the reputation as the best service giving dental clinic in Delhi.',
              },
              {
                q: 'Who is Doctor Prakash Thakur (Dr. Prakash Thakur)?',
                a: 'Dr. Prakash Thakur (BDS, MIDA) is the Founder & Lead Dental Surgeon at Shekhar Dental Clinic & SHEKHAR DENTAL AND ORTHODONTIC CENTRE. With 15+ years of clinical practice, he specializes in dental implants, oral rehabilitation, and gentle dental surgery in Sagarpur, New Delhi.',
              },
              {
                q: 'Where is Shekhar Dental Clinic located and how can I reach it?',
                a: 'The clinic is located at 1G, RZ-20B, Kailashpuri Road, Near Baraat Ghar, Sant Mohalla, Sagarpur East, New Delhi, Delhi 110046. It is easily reachable from Janakpuri (10 min), Uttam Nagar (8 min), Dwarka (15 min), and Palam (12 min). Contact 098702 94558 for directions.',
              },
              {
                q: 'What treatments are offered at Shekhar Dental Clinic & what are the charges?',
                a: 'We provide Dental Implants (₹25,000), Braces & Clear Aligners (₹30,000), Painless Root Canal/RCT (₹2,500), Zirconia Metal-Free Crowns (₹5,000), Laser Teeth Whitening (₹8,000), Ultrasonic Scaling (₹1,000), Wisdom Tooth Surgery (₹5,000), and Removable Dentures (₹15,000).',
              },
              {
                q: 'Are dental treatments painless at Shekhar Dental Clinic?',
                a: 'Yes. All dental procedures conducted by Dr. Prakash Thakur and our specialist team utilize modern localized computer-assisted anesthesia and gentle rotary instruments for a virtually pain-free experience.',
              },
              {
                q: 'Is there a free dental consultation available on Sundays?',
                a: 'Yes! Shekhar Dental Clinic offers free comprehensive dental check-ups and specialist consultations every Sunday between 10:00 AM and 1:00 PM. Prior appointment is recommended — call 098702 94558 to reserve your slot.',
              },
              {
                q: 'Does Shekhar Dental provide same-day emergency dental relief?',
                a: 'Yes. We prioritize acute dental emergencies including severe toothache, broken crowns, dental abscess, and oral trauma with extended clinic hours until 10:00 PM. Call our emergency helpline at 098702 94558 immediately.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '1.2rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <summary
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: '#1e3c72',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    outline: 'none',
                    listStyle: 'none',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HelpCircle size={18} color="#2563eb" style={{ flexShrink: 0 }} />
                    {faq.q}
                  </span>
                  <ChevronDown size={18} color="#64748b" style={{ flexShrink: 0 }} />
                </summary>
                <p
                  style={{
                    color: '#475569',
                    fontSize: '0.98rem',
                    lineHeight: '1.7',
                    marginTop: '0.85rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid #e2e8f0',
                    marginBottom: 0,
                    cursor: 'text',
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

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
