import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Heart, ArrowUpRight } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#ffffff', paddingTop: '4rem', marginTop: 'auto' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Col 1: Clinic Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.2rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Shekhar Dental Logo" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/footer.png"
                alt="Shekhar Dental & Orthodontic Center"
                style={{ height: '36px', width: 'auto', objectFit: 'contain', maxWidth: '240px' }}
              />
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Providing top-tier, painless, and aesthetic dental care in Sagarpur, Delhi. Dedicated to patient comfort, modern sterilization protocols, and radiant healthy smiles.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#10b981' }}></span>
              <span style={{ color: '#93c5fd', fontSize: '0.85rem', fontWeight: 500 }}>Accepting New Patients</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.2rem', fontWeight: 600 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About Clinic', href: '/about' },
                { name: 'Our Services & Pricing', href: '/services' },
                { name: 'Dental Specialists & Team', href: '/team' },
                { name: 'Treatment Gallery', href: '/gallery' },
                { name: 'Contact & Directions', href: '/contact' },
                { name: 'Book Appointment', href: '/appointment' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="footer-nav-link"
                    style={{
                      color: '#94a3b8',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'color 0.2s',
                    }}
                  >
                    <ArrowUpRight size={14} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Treatments */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.2rem', fontWeight: 600 }}>Treatments</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { name: 'Dental Implants', price: '₹25,000' },
                { name: 'Braces & Clear Aligners', price: '₹30,000' },
                { name: 'Root Canal Treatment', price: '₹2,500' },
                { name: 'Zirconia Aesthetic Cap', price: '₹5,000' },
                { name: 'Teeth Whitening & Bleach', price: '₹8,000' },
                { name: 'Ultrasonic Scaling', price: '₹1,000' },
              ].map((item) => (
                <li key={item.name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <Link
                    href="/services"
                    className="footer-nav-link"
                    style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                  >
                    {item.name}
                  </Link>
                  <span style={{ color: '#f59e0b', fontWeight: 500, fontSize: '0.85rem' }}>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.2rem', fontWeight: 600 }}>Clinic Location & Timings</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#94a3b8', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{clinicInfo.address.full}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {clinicInfo.phoneNumbers.map((p) => (
                    <a
                      key={p.value}
                      href={`tel:${p.value}`}
                      className="footer-nav-link"
                      style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="footer-nav-link"
                  style={{ color: '#cbd5e1', transition: 'color 0.2s' }}
                >
                  {clinicInfo.email}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <p style={{ margin: 0, color: '#f1f5f9' }}>Mon - Sat:</p>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>10:00 AM - 12:00 PM & 06:00 PM - 10:00 PM</p>
                  <p style={{ margin: '4px 0 0', color: '#38bdf8', fontSize: '0.85rem' }}>Sunday: Free Check-up</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            padding: '1.8rem 0',
            textAlign: 'center',
            color: '#64748b',
            fontSize: '0.9rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.
          </p>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>Crafted with</span>
            <Heart size={14} color="#ef4444" fill="#ef4444" />
            <span>by</span>
            <a
              href={clinicInfo.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#38bdf8', fontWeight: 600 }}
            >
              {clinicInfo.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
