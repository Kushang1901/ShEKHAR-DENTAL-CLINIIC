import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Clock,
  Award,
  Sparkles,
  ArrowLeft,
  Stethoscope
} from 'lucide-react';
import { servicesData, DentalService } from '@/data/services';
import { clinicInfo } from '@/data/clinicInfo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Shekhar Dental Clinic',
    };
  }

  const title = `${service.name} in Delhi | Shekhar Dental Clinic & Orthodontic Center`;
  const description = `${service.name} at Shekhar Dental Clinic (SHEKHAR DENTAL AND ORTHODONTIC CENTRE) in Sagarpur East, Delhi. Led by Dr. Prakash Thakur. Transparent cost: ${service.price}. Best service giving dental clinic in Delhi. Call 098702 94558.`;

  return {
    title,
    description,
    keywords: [
      service.name,
      `${service.name} in Delhi`,
      `${service.name} Sagarpur`,
      `${service.name} West Delhi`,
      `${service.name} cost Delhi`,
      'shekhar dental clinic',
      'shekhar dental and orthodontic center',
      'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
      'best clinic in delhi',
      'best dental clinic in delhi',
      'best service giving dental clinic in delhi',
      'dr prakash thakur',
      'doctor prakash thakur',
    ],
    alternates: {
      canonical: `/services/${service.id}`,
    },
    openGraph: {
      title: `${service.name} | Shekhar Dental Clinic & Orthodontic Center Delhi`,
      description,
      url: `https://shekhardental.in/services/${service.id}`,
      images: [
        {
          url: service.image || '/background.png',
          width: 1200,
          height: 630,
          alt: `${service.name} at Shekhar Dental Clinic Delhi`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in Delhi | Shekhar Dental Clinic`,
      description,
      images: [service.image || '/background.png'],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const baseUrl = 'https://shekhardental.in';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${baseUrl}/services/${service.id}` },
    ],
  };

  const procedureSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.fullDescription,
    procedureType: 'NoninvasiveProcedure',
    offers: {
      '@type': 'Offer',
      price: service.price.replace(/[^0-9]/g, '') || '1000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/services/${service.id}`,
    },
    provider: {
      '@type': 'Dentist',
      name: 'Shekhar Dental Clinic',
      alternateName: 'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
      telephone: '+919870294558',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${clinicInfo.address.line1}, ${clinicInfo.address.line2}`,
        addressLocality: 'Sagarpur East, New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110046',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />

      {/* Subpage Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="breadcrumbs" style={{ marginBottom: '1.2rem', justifyContent: 'center' }}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} />
            <span>{service.name}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>{service.name} in Delhi</h1>
          <p>
            Provided at <strong>Shekhar Dental Clinic</strong> (SHEKHAR DENTAL AND ORTHODONTIC CENTRE) by Dr. Prakash Thakur.
            Recognized as the best service giving dental clinic in Delhi.
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <section style={{ padding: '4.5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Clinical Details */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid #e2e8f0',
              }}
            >
              {service.popular && (
                <span
                  style={{
                    background: '#ecfdf5',
                    color: '#059669',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    padding: '6px 14px',
                    borderRadius: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '1.2rem',
                  }}
                >
                  <Sparkles size={14} /> Most Popular Treatment
                </span>
              )}

              <h2 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '1rem' }}>
                About {service.name}
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                {service.fullDescription}
              </p>

              {/* Price Banner */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                  color: '#ffffff',
                  padding: '1.5rem 2rem',
                  borderRadius: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.88rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Transparent Pricing
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 800 }}>{service.price}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.9rem', color: '#93c5fd' }}>● No Hidden Charges</div>
                  <div style={{ fontSize: '0.82rem', opacity: 0.85 }}>Free Check-up on Sundays</div>
                </div>
              </div>

              {/* Key Features & Benefits */}
              <h3 style={{ fontSize: '1.35rem', color: '#1e293b', marginBottom: '1.2rem' }}>
                Why Choose Shekhar Dental for {service.name}?
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#f8fafc',
                      padding: '1rem 1.2rem',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#334155', fontSize: '0.95rem', fontWeight: 500 }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Quality Standards */}
              <div
                style={{
                  borderTop: '1px solid #e2e8f0',
                  paddingTop: '2rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={24} color="#2563eb" />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: '#1e293b' }}>Class B Autoclave</strong>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Hospital-grade sterilization</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={24} color="#7c3aed" />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: '#1e293b' }}>15+ Years Expertise</strong>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Dr. Prakash Thakur BDS, MIDA</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={24} color="#10b981" />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem', color: '#1e293b' }}>Evening Hours</strong>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>Open until 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Doctor Spotlight & Booking Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Quick Booking Card */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '2.2rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ fontSize: '1.4rem', color: '#1e293b', marginBottom: '0.6rem' }}>
                  Book {service.name}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.8rem', lineHeight: '1.6' }}>
                  Reserve your priority appointment with Dr. Prakash Thakur at Shekhar Dental Clinic & Orthodontic Center.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  <Link
                    href={`/appointment?service=${encodeURIComponent(service.name)}`}
                    className="btn btn-primary"
                    style={{ justifyContent: 'center', padding: '0.9rem 1.5rem', fontSize: '1rem' }}
                  >
                    <Calendar size={18} />
                    <span>Book Priority Slot</span>
                  </Link>
                  <a
                    href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
                    className="btn btn-outline"
                    style={{ justifyContent: 'center', padding: '0.9rem 1.5rem', fontSize: '1rem' }}
                  >
                    <Phone size={18} />
                    <span>Call: {clinicInfo.phoneNumbers[0].label}</span>
                  </a>
                  <a
                    href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(`Hello Dr. Prakash Thakur, I would like to inquire about ${service.name} at Shekhar Dental Clinic.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ justifyContent: 'center', padding: '0.9rem 1.5rem', fontSize: '1rem' }}
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Lead Doctor Card */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '2rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #dbeafe',
                    }}
                  >
                    <Stethoscope size={26} color="#2563eb" />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>Dr. Prakash Thakur</h4>
                    <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: '#2563eb', fontWeight: 600 }}>Founder &amp; Lead Dental Surgeon (BDS, MIDA)</p>
                  </div>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: '1.6', margin: 0 }}>
                  With over 15 years of clinical practice, Dr. Prakash Thakur personally supervises all {service.name} procedures to ensure gentle, painless, and aesthetic results.
                </p>
              </div>

              {/* All Services Link */}
              <div style={{ textAlign: 'center' }}>
                <Link
                  href="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#2563eb',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                  }}
                >
                  <ArrowLeft size={16} />
                  <span>View All Dental Treatments</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
