'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

export default function FloatingContact() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
    'Hello Shekhar Dental Clinic, I would like to inquire about dental services and book an appointment.'
  )}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 900,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
      }}
    >
      {/* Scroll to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="hover-scale"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: '#1e293b',
            color: '#ffffff',
            border: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
        aria-label="Call clinic directly"
        className="hover-scale"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2c5aa0, #1e3c72)',
          color: '#ffffff',
          boxShadow: '0 4px 20px rgba(44, 90, 160, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
        }}
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp Button with pulse animation */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shekhar Dental on WhatsApp"
        className="hover-scale"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25d366',
          color: '#ffffff',
          boxShadow: '0 6px 25px rgba(37, 211, 102, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          animation: 'pulseSlow 2.5s infinite',
        }}
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
