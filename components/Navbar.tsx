'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Phone, Menu, X, Clock } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

const navLinks = [
  { name: 'Home',     href: '/' },
  { name: 'About',    href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/team' },
  { name: 'Gallery',  href: '/gallery' },
  { name: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const pathname                    = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ── Top info bar (desktop only via CSS class) ── */}
      <div className="navbar-topbar" style={{
        background: '#1e3c72',
        color: 'rgba(255,255,255,0.92)',
        fontSize: '0.84rem',
        lineHeight: '1.5',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1.5rem',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={14} color="#93c5fd" style={{ flexShrink: 0 }} />
            <span>Mon–Sat: 10AM–12PM &amp; 6PM–10PM &nbsp;|&nbsp; Sun: Free Checkup</span>
          </div>
          <a
            href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#93c5fd', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            <Phone size={13} />
            {clinicInfo.phoneNumbers[0].label}
          </a>
        </div>
      </div>

      {/* ── Main Header (sticky) ── */}
      <header style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#ffffff',
        borderBottom: isScrolled ? '1px solid #e2e8f0' : '1px solid #f1f5f9',
        boxShadow: isScrolled ? '0 2px 20px rgba(30,60,114,0.10)' : 'none',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem',
          gap: '1rem',
        }}>
          {/* Brand Logo */}
          <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Shekhar Dental Logo" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/navbar.png" alt="Shekhar Dental & Orthodontic Center" style={{ height: '32px', width: 'auto', objectFit: 'contain', maxWidth: '220px' }} />
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-desktop-nav" style={{ alignItems: 'center', gap: '0.25rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '0.1rem' }}>
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{
                        display: 'block',
                        padding: '0.45rem 0.9rem',
                        borderRadius: '7px',
                        fontSize: '0.92rem',
                        fontWeight: active ? 700 : 500,
                        color: active ? '#1e3c72' : '#475569',
                        textDecoration: 'none',
                        background: active ? '#eff6ff' : 'transparent',
                        borderBottom: active ? '2px solid #2c5aa0' : '2px solid transparent',
                        transition: 'all 0.18s ease',
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div style={{ width: '1px', height: '22px', background: '#e2e8f0', margin: '0 0.5rem', flexShrink: 0 }} />

            <Link
              href="/appointment"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                padding: '0.52rem 1.2rem',
                background: 'linear-gradient(135deg, #1e3c72 0%, #2c5aa0 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.88rem',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(30,60,114,0.25)',
                whiteSpace: 'nowrap',
                transition: 'all 0.22s ease',
              }}
            >
              <Calendar size={14} />
              Book Appointment
            </Link>
          </nav>

          {/* Hamburger — visible on mobile via CSS */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="navbar-mobile-btn"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '9px',
              background: mobileOpen ? '#eff6ff' : '#f8fafc',
              border: `1.5px solid ${mobileOpen ? '#2c5aa0' : '#e2e8f0'}`,
              color: '#1e3c72',
              cursor: 'pointer',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1100,
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
          overflowY: 'auto',
        }}
      >
        {/* Drawer header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          borderBottom: '1px solid #e2e8f0',
          background: '#f8fafc',
        }}>
          <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Shekhar Dental Logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/navbar.png" alt="Shekhar Dental & Orthodontic Center" style={{ height: '26px', width: 'auto', objectFit: 'contain', maxWidth: '180px' }} />
          </Link>
          <button onClick={close} aria-label="Close menu" style={{
            background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#475569',
            borderRadius: '8px', width: '38px', height: '38px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <X size={19} />
          </button>
        </div>

        {/* Timing banner inside drawer */}
        <div style={{
          margin: '1rem 1.1rem 0.4rem',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2c5aa0 100%)',
          color: '#ffffff',
          padding: '0.8rem 1rem',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          fontSize: '0.82rem',
          fontWeight: 500,
          boxShadow: '0 3px 12px rgba(30,60,114,0.18)',
        }}>
          <Clock size={16} color="#93c5fd" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 600 }}>Mon–Sat: 10AM–12PM &amp; 6PM–10PM</div>
            <div style={{ color: '#86efac', fontSize: '0.78rem', marginTop: '3px', fontWeight: 600 }}>
              ✦ Sunday: Free Dental Check-up (By Appointment)
            </div>
          </div>
        </div>

        {/* Nav links */}
        <ul style={{
          listStyle: 'none',
          padding: '0.6rem 1.1rem',
          margin: 0,
          display: 'flex', flexDirection: 'column', gap: '0.35rem',
          flex: 1,
        }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={close}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '10px',
                    fontSize: '1.02rem',
                    fontWeight: active ? 700 : 500,
                    color: active ? '#1e3c72' : '#334155',
                    textDecoration: 'none',
                    background: active ? '#eff6ff' : '#f8fafc',
                    border: active ? '1.5px solid #bfdbfe' : '1.5px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{link.name}</span>
                  {active && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2c5aa0', flexShrink: 0 }} />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Drawer CTAs */}
        <div style={{
          padding: '1rem 1.1rem 1.4rem',
          borderTop: '1px solid #e2e8f0',
          display: 'flex', flexDirection: 'column', gap: '0.7rem',
        }}>
          <Link href="/appointment" onClick={close} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
            padding: '0.95rem', borderRadius: '50px', textDecoration: 'none',
            background: 'linear-gradient(135deg, #1e3c72 0%, #2c5aa0 100%)',
            color: '#fff', fontWeight: 700, fontSize: '1rem',
            boxShadow: '0 4px 18px rgba(30,60,114,0.28)',
          }}>
            <Calendar size={18} /> Book Appointment
          </Link>
          <a href={`tel:${clinicInfo.phoneNumbers[0].clean}`} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
            padding: '0.85rem', borderRadius: '50px', textDecoration: 'none',
            background: '#f1f5f9', color: '#1e3c72', fontWeight: 600, fontSize: '0.98rem',
            border: '1.5px solid #dbe4ee',
          }}>
            <Phone size={17} /> {clinicInfo.phoneNumbers[0].label}
          </a>
        </div>
      </div>
    </>
  );
}
