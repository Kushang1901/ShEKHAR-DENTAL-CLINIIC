import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Calendar, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { clinicInfo } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: 'Dental Treatments & Pricing | SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
  description: 'Explore our complete list of dental treatments with transparent pricing at SHEKHAR DENTAL AND ORTHODONTIC CENTRE in Sagarpur, Delhi, headed by Dr. Prakash Thakur. Dental Implants (₹25,000), Braces (₹30,000), Root Canal (₹2,500), Zirconia Caps (₹5,000).',
  keywords: [
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTER',
    'Dr Prakash Thakur Dental Clinic',
    'Dental Services Sagarpur',
    'Dental Treatment Cost Delhi',
    'Root Canal Price Delhi',
    'Dental Implant Cost Sagarpur',
    'Braces Cost Janakpuri',
    'Zirconia Crown Price Delhi',
    'Teeth Whitening Price Delhi'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Dental Services & Treatment Pricing | SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    description: 'Comprehensive dental services with upfront transparent pricing at SHEKHAR DENTAL AND ORTHODONTIC CENTRE in Sagarpur, Delhi with Dr. Prakash Thakur. Dental Implants ₹25,000 | Braces ₹30,000 | Root Canal ₹2,500 | Zirconia Cap ₹5,000.',
    url: 'https://shekhardental.in/services',
  },
};

const servicesBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE', item: 'https://shekhardental.in' },
    { '@type': 'ListItem', position: 2, name: 'Dental Services & Treatments', item: 'https://shekhardental.in/services' },
  ],
};

const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the cost of a dental implant at SHEKHAR DENTAL AND ORTHODONTIC CENTRE?', acceptedAnswer: { '@type': 'Answer', text: 'A single dental implant at SHEKHAR DENTAL AND ORTHODONTIC CENTRE in Sagarpur, Delhi costs ₹25,000 including the titanium implant post, abutment, and zirconia crown. No hidden charges. Contact Dr. Prakash Thakur at 098702 94558.' } },
    { '@type': 'Question', name: 'How much does root canal treatment cost at Shekhar Dental Clinic?', acceptedAnswer: { '@type': 'Answer', text: 'Root Canal Treatment (RCT) at SHEKHAR DENTAL AND ORTHODONTIC CENTRE, Sagarpur starts from ₹2,500 per tooth using modern Protaper rotary instruments under local anesthesia. A protective crown is recommended after RCT.' } },
    { '@type': 'Question', name: 'What is the price of braces and clear aligners at Shekhar Dental?', acceptedAnswer: { '@type': 'Answer', text: 'Braces and clear aligners at SHEKHAR DENTAL AND ORTHODONTIC CENTRE start from ₹30,000 for a full treatment course. Available options include metal braces, ceramic braces, and clear aligners, all managed by specialist orthodontists.' } },
    { '@type': 'Question', name: 'How much do zirconia dental caps cost at SHEKHAR DENTAL AND ORTHODONTIC CENTRE?', acceptedAnswer: { '@type': 'Answer', text: 'Zirconia dental caps (ceramic crowns) at Shekhar Dental Clinic cost ₹5,000 per tooth. These are 100% metal-free, biocompatible, and match natural tooth shade for a seamless result.' } },
    { '@type': 'Question', name: 'What dental treatments are available at SHEKHAR DENTAL AND ORTHODONTIC CENTRE Sagarpur?', acceptedAnswer: { '@type': 'Answer', text: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE offers: Dental Implants (₹25,000), Braces & Aligners (₹30,000), Root Canal RCT (₹2,500), Zirconia Caps (₹5,000), Teeth Whitening (₹8,000), Ultrasonic Scaling (₹1,000), Wisdom Tooth Extraction (₹5,000), PFM Crowns (₹2,500), Composite Fillings, Removable Dentures (₹15,000), and Night Guards.' } },
    { '@type': 'Question', name: 'Does SHEKHAR DENTAL AND ORTHODONTIC CENTRE offer free dental check-ups?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. SHEKHAR DENTAL AND ORTHODONTIC CENTRE led by Dr. Prakash Thakur offers Free Dental Check-ups every Sunday from 10:00 AM to 1:00 PM by prior appointment. Call 098702 94558 to book your free Sunday slot.' } },
  ],
};

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

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }} />

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
                OUR TREATMENTS
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
                Our Dental Services<br />&amp; Treatments
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
                Comprehensive, modern dental solutions with transparent pricing and compassionate care for you and your family.
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
                <span style={{ color: '#64748b' }}>Services</span>
              </div>
            </div>

            {/* Right Column: Sketched Cartoon Tooth Mascot */}
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
                  src="/cartoon_tooth_services.jpg"
                  alt="Cartoon Tooth saying My Services — Shekhar Dental"
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

      {/* Services Stats Strip */}
      <section style={{ padding: '3rem 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            {[
              { num: '12+', text: 'Specialized Treatments' },
              { num: '5000+', text: 'Happy Smiles Restored' },
              { num: '10+', text: 'Years Clinical Experience' },
              { num: '99%', text: 'Treatment Success Rate' },
            ].map((stat, i) => (
              <div key={i} style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#2563eb' }}>{stat.num}</div>
                <div style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: 500 }}>{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Catalog Grid */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Treatment Catalog</span>
            <h2>Comprehensive Dental Care</h2>
            <p>All procedures are performed by certified specialists using sterile, biocompatible materials and the latest dental technologies.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {servicesData.map((service) => {
              const whatsappUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                `Hello Shekhar Dental Clinic, I am interested in ${service.name} (${service.price}). Please share more details.`
              )}`;

              return (
                <div
                  key={service.id}
                  className="hover-lift-lg"
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Service Image */}
                  <div style={{ height: '230px', position: 'relative', background: '#f1f5f9', overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        background: 'linear-gradient(135deg, #ee5a24 0%, #ff6b6b 100%)',
                        color: '#ffffff',
                        padding: '6px 14px',
                        borderRadius: '25px',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        boxShadow: '0 4px 15px rgba(238, 90, 36, 0.4)',
                      }}
                    >
                      {service.price}
                    </div>

                    {service.popular && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          background: 'rgba(30, 60, 114, 0.9)',
                          backdropFilter: 'blur(6px)',
                          color: '#00f2fe',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontWeight: 600,
                          fontSize: '0.78rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                      >
                        <Sparkles size={12} />
                        <span>Most Popular</span>
                      </div>
                    )}
                  </div>

                  {/* Service Info */}
                  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <h3 style={{ fontSize: '1.45rem', color: '#1e3c72', marginBottom: '0.5rem' }}>{service.name}</h3>
                      <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: '1.7', margin: 0 }}>
                        {service.fullDescription}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div style={{ margin: '1rem 0 1.8rem', flex: 1 }}>
                      <h4 style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.7rem' }}>
                        Key Highlights:
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        {service.features.map((feat, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#334155' }}>
                            <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto' }}>
                      <Link href="/appointment" className="btn btn-primary" style={{ flex: 1, padding: '0.8rem 1rem', fontSize: '0.95rem' }}>
                        <Calendar size={16} />
                        <span>Book Slot</span>
                      </Link>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                        style={{ padding: '0.8rem 1rem' }}
                        aria-label="Inquire on WhatsApp"
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section style={{ padding: '4.5rem 0', background: 'linear-gradient(135deg, #ef4444 0%, #ee5a24 100%)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '30px', marginBottom: '1.2rem' }}>
            <ShieldAlert size={18} />
            <span>Emergency Assistance Available</span>
          </div>
          <h2 style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '1rem' }}>Have an Urgent Dental Emergency?</h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 2rem', opacity: 0.95 }}>
            Severe bleeding, broken teeth, or unbearable pulp pain? Contact our emergency response number for immediate clinical guidance and same-day priority treatment.
          </p>
          <a
            href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
            className="btn btn-white"
            style={{ color: '#ef4444', padding: '1rem 2.5rem', fontSize: '1.1rem' }}
          >
            <Phone size={20} color="#ef4444" />
            <span>Call Emergency Doctor: {clinicInfo.phoneNumbers[0].label}</span>
          </a>
        </div>
      </section>
    </>
  );
}
