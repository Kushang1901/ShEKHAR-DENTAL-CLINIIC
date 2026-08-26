'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotateCcw, Home, MessageCircle } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error('Next.js Page Error caught by boundary:', error);
  }, [error]);

  return (
    <section
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '560px',
          margin: '0 auto',
          background: '#ffffff',
          padding: '3rem 2rem',
          borderRadius: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#fee2e2',
            color: '#dc2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <RotateCcw size={32} />
        </div>

        <h1 style={{ fontSize: '1.8rem', color: '#1e3c72', marginBottom: '0.8rem', fontWeight: 800 }}>
          Something went smoothly off track
        </h1>

        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          We encountered a brief hiccup while loading this section. Click the button below to instantly reload the page content.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => reset()}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.8rem', cursor: 'pointer' }}
          >
            <RotateCcw size={18} />
            <span>Try Again</span>
          </button>

          <Link href="/" className="btn" style={{ background: '#f1f5f9', color: '#1e293b', padding: '0.85rem 1.8rem' }}>
            <Home size={18} />
            <span>Return Home</span>
          </Link>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.2rem' }}>
          <a
            href={`https://wa.me/${clinicInfo.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2563eb', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <MessageCircle size={16} />
            <span>Need Help? Contact Clinic Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
