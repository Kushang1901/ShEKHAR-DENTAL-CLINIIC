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
  title: 'Our Dental Services & Transparent Pricing | Shekhar Dental Clinic Delhi',
  description: 'Explore our complete list of dental treatments with transparent pricing in Sagarpur, Delhi. Dental Implants (₹25,000), Braces & Aligners (₹30,000), Root Canal (₹2,500), Zirconia Caps (₹5,000), and Laser Whitening (₹8,000).',
  keywords: [
    'Dental Services Sagarpur',
    'Dental Treatment Cost Delhi',
    'Root Canal Price Delhi',
    'Dental Implant Cost Sagarpur',
    'Braces Cost Janakpuri',
    'Zirconia Crown Price Delhi',
    'Teeth Whitening Price Delhi',
    'Dentures Price Sagarpur'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Dental Services & Treatment Pricing | Shekhar Dental Clinic',
    description: 'Comprehensive dental services with upfront transparent pricing in Sagarpur, Delhi. Dental implants, RCT, braces, aligners, crowns & whitening.',
    url: 'https://shekhardental.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Subpage Header Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="animate-fade-in">
            <h1>Our Dental Services & Treatments</h1>
            <p>
              Comprehensive, modern dental solutions with transparent pricing and compassionate care for you and your family.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Services</span>
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
