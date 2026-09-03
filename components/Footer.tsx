import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Heart, ArrowUpRight } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

// Custom SVG Icons for Socials
function InstagramIcon({ size = 20 }: { size?: number }) {
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

function ThreadsIcon({ size = 19 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="currentColor"
    >
      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.0584 44.745 96.5549 44.745 96.0418 44.745C72.8252 44.745 54.8211 60.2764 54.8211 88.8953C54.8211 117.514 72.8252 133.046 96.0418 133.046C109.914 133.046 122.186 126.792 130.643 116.326L116.036 106.103C110.024 113.684 102.502 116.899 94.7573 116.899C80.8848 116.899 71.0772 106.772 71.0772 88.8953C71.0772 71.0185 80.8848 60.8918 94.7573 60.8918C108.63 60.8918 117.727 70.0844 118.828 88.9883H141.537ZM142.148 100.865C139.88 126.746 122.756 148.653 96.0418 148.653C64.6366 148.653 38.6743 125.044 38.6743 88.8953C38.6743 52.7467 64.6366 29.1378 96.0418 29.1378C127.447 29.1378 153.409 52.7467 153.409 88.8953C153.409 95.8451 152.368 102.668 150.364 109.123L165.736 113.61C168.324 105.736 169.674 97.4332 169.674 88.8953C169.674 44.0205 137.078 7.375 96.0418 7.375C55.0055 7.375 22.4092 44.0205 22.4092 88.8953C22.4092 133.77 55.0055 170.416 96.0418 170.416C128.533 170.416 156.452 148.406 165.597 117.659L149.771 113.256C147.962 108.971 145.362 104.834 142.148 100.865Z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3z" />
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
                  <WhatsAppIcon size={20} />
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
                'Dental Implants',
                'Braces & Clear Aligners',
                'Root Canal Treatment',
                'Zirconia Aesthetic Cap',
                'Teeth Whitening & Bleach',
                'Ultrasonic Scaling',
              ].map((name) => (
                <li key={name} style={{ fontSize: '0.95rem' }}>
                  <Link
                    href="/services"
                    className="footer-nav-link"
                    style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                  >
                    {name}
                  </Link>
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
