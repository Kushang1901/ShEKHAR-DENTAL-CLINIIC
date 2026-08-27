import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Heart, ArrowUpRight, MessageCircle } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

// Custom SVG Icons for Socials
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function ThreadsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24C5.466 24 0 18.673 0 12.113 0 5.553 5.466.226 12.186.226c6.438 0 11.814 4.954 12.186 11.385h-2.616C21.39 6.368 17.202 2.66 12.186 2.66c-5.26 0-9.54 4.237-9.54 9.453 0 5.217 4.28 9.453 9.54 9.453 4.475 0 8.243-2.954 9.298-6.953h-9.3v-2.434h11.96c.11.758.17 1.543.17 2.348C24.314 18.847 18.887 24 12.186 24z" />
    </svg>
  );
}

function XIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
          {/* Col 1: Clinic Info & Social Links */}
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
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.4rem' }}>
              Providing top-tier, painless, and aesthetic dental care in Sagarpur, Delhi. Dedicated to patient comfort, modern sterilization protocols, and radiant healthy smiles.
            </p>

            {/* Social Media Links Row */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Follow Our Practice
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Instagram */}
                <a
                  href={clinicInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram - @shekhar_dental"
                  className="footer-social-circle footer-social-ig"
                >
                  <InstagramIcon size={20} />
                </a>

                {/* Threads / X */}
                <a
                  href={clinicInfo.socials.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads / X - @shekhar_dental"
                  className="footer-social-circle footer-social-threads"
                >
                  <ThreadsIcon size={19} />
                </a>

                {/* WhatsApp */}
                <a
                  href={clinicInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp - Shekhar Dental"
                  className="footer-social-circle footer-social-wa"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
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
            padding: '2rem 1rem 3.5rem',
            textAlign: 'center',
            color: '#94a3b8',
            fontSize: '0.88rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            lineHeight: 1.6,
          }}
        >
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.9rem' }}>
            <Link href="/privacy-policy" className="footer-nav-link" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            <Link href="/terms" className="footer-nav-link" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
              Terms &amp; Conditions
            </Link>
          </div>
          <p style={{ margin: 0, textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.
          </p>
          <p style={{ margin: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <span>Crafted with</span>
            <Heart size={14} color="#ef4444" fill="#ef4444" />
            <span>by</span>
            <a
              href={clinicInfo.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#38bdf8', fontWeight: 600, textDecoration: 'none' }}
            >
              {clinicInfo.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
