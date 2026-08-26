'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  HeartHandshake, 
  CheckCircle2, 
  ZoomIn, 
  Calendar, 
  X, 
  ChevronLeft, 
  ChevronRight,
  FileCheck2,
  Stethoscope
} from 'lucide-react';
import { certificatesData, CertificateItem } from '@/data/certificates';

interface CertificatesShowcaseProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  limit?: number;
}

export default function CertificatesShowcase({
  title = "Our Accreditations & Certifications",
  subtitle = "Backed by statutory state dental council registrations, global implant certifications, clear aligner awards, and dedicated community service.",
  badge = "Verified Credentials & Trust",
  limit,
}: CertificatesShowcaseProps) {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayCerts = limit ? certificatesData.slice(0, limit) : certificatesData;

  const currentIndex = activeCert ? displayCerts.findIndex(c => c.id === activeCert.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveCert(displayCerts[currentIndex - 1]);
    } else {
      setActiveCert(displayCerts[displayCerts.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < displayCerts.length - 1) {
      setActiveCert(displayCerts[currentIndex + 1]);
    } else {
      setActiveCert(displayCerts[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCert) return;
      if (e.key === 'Escape') setActiveCert(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (activeCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert, currentIndex, displayCerts]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'council':
        return <ShieldCheck size={18} className="text-blue-600" />;
      case 'implants':
        return <Stethoscope size={18} className="text-cyan-600" />;
      case 'orthodontics':
        return <Sparkles size={18} className="text-amber-500" />;
      case 'community':
        return <HeartHandshake size={18} className="text-emerald-600" />;
      case 'academic':
        return <GraduationCap size={18} className="text-indigo-600" />;
      default:
        return <Award size={18} className="text-blue-600" />;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Header */}
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        {badge && <span className="section-badge">{badge}</span>}
        <h2 style={{ fontSize: '2.4rem', color: '#1e3c72', fontWeight: 800 }}>{title}</h2>
        <p style={{ maxWidth: '750px', margin: '0 auto', color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7' }}>
          {subtitle}
        </p>
      </div>

      {/* Certificates Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {displayCerts.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setActiveCert(cert)}
            className="hover-lift-lg"
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
            }}
          >
            {/* Top Ribbon Badge */}
            <div
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                zIndex: 5,
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(6px)',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#1e3c72',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid rgba(226, 232, 240, 0.8)'
              }}
            >
              {getCategoryIcon(cert.category)}
              <span>{cert.badge}</span>
            </div>

            {/* Certificate Preview Frame */}
            <div
              style={{
                position: 'relative',
                height: '240px',
                background: 'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                overflow: 'hidden',
                borderBottom: '1px solid #e2e8f0'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                  border: '3px solid #ffffff',
                  background: '#ffffff',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s ease',
                  }}
                  className="hover-scale"
                />
              </div>

              {/* Hover overlay hint */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(30, 60, 114, 0.45)',
                  backdropFilter: 'blur(2px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  gap: '8px'
                }}
                className="cert-overlay"
              >
                <ZoomIn size={22} />
                <span>Click to View Full Certificate</span>
              </div>
            </div>

            {/* Certificate Info Body */}
            <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: '#2563eb',
                    background: '#eff6ff',
                    padding: '3px 10px',
                    borderRadius: '6px',
                  }}
                >
                  {cert.categoryLabel}
                </span>
                {cert.year && (
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Calendar size={13} />
                    {cert.year}
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#1e293b', lineHeight: '1.35', marginBottom: '8px' }}>
                {cert.shortTitle}
              </h3>

              <div style={{ fontSize: '0.86rem', color: '#0284c7', fontWeight: 600, marginBottom: '10px' }}>
                🏛️ {cert.authority}
              </div>

              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.55', marginBottom: '1.2rem', flexGrow: 1 }}>
                {cert.description}
              </p>

              {/* Highlights Preview */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {cert.highlights.slice(0, 2).map((hl, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.82rem', color: '#475569' }}>
                    <CheckCircle2 size={14} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div style={{ marginTop: '1.2rem' }}>
                <button
                  type="button"
                  style={{
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: '10px',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: '#1e3c72',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <FileCheck2 size={16} />
                  <span>Inspect Official Certificate</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal rendered via Portal to ensure 100% viewport centering */}
      {mounted && activeCert && createPortal(
        <div
          onClick={() => setActiveCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(15, 23, 42, 0.94)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.2rem',
            overflowY: 'auto',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1050px',
              width: '100%',
              maxHeight: '90vh',
              background: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.65)',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
              margin: 'auto',
              animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="cert-modal-grid"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCert(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 30,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.85)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.35)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ef4444';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={22} />
            </button>

            {/* Left: Certificate Full Image Area */}
            <div
              style={{
                position: 'relative',
                background: '#090d16',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                minHeight: '380px',
              }}
              className="cert-modal-image-area"
            >
              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous certificate"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '16px',
                  transform: 'translateY(-50%)',
                  zIndex: 15,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#1e293b',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronLeft size={26} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next certificate"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '16px',
                  transform: 'translateY(-50%)',
                  zIndex: 15,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#1e293b',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronRight size={26} />
              </button>

              {/* Certificate Image Frame */}
              <div
                style={{
                  maxWidth: '100%',
                  maxHeight: '76vh',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  style={{
                    maxHeight: '70vh',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  className="cert-full-img"
                />
              </div>
            </div>

            {/* Right: Certificate Verification Details */}
            <div
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#ffffff',
                overflowY: 'auto',
                maxHeight: '85vh',
              }}
              className="cert-modal-details"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      color: '#1e3c72',
                      background: '#e0f2fe',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <ShieldCheck size={15} />
                    Verified Official Credential
                  </span>
                  {activeCert.year && (
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                      Issued: {activeCert.year}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.5rem', color: '#1e3c72', fontWeight: 800, lineHeight: '1.3', marginBottom: '10px' }}>
                  {activeCert.title}
                </h3>

                <div style={{ padding: '0.8rem 1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1.2rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                    Issuing Authority / Body
                  </div>
                  <div style={{ fontSize: '1rem', color: '#0f172a', fontWeight: 700 }}>
                    {activeCert.authority}
                  </div>
                </div>

                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {activeCert.description}
                </p>

                <h4 style={{ fontSize: '0.98rem', color: '#1e293b', fontWeight: 700, marginBottom: '0.8rem' }}>
                  Key Credential Highlights
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.5rem' }}>
                  {activeCert.highlights.map((hl, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#334155' }}>
                      <CheckCircle2 size={17} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Stamp Note */}
              <div
                style={{
                  padding: '0.9rem 1rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                  border: '1px solid #bbf7d0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '1rem'
                }}
              >
                <Award size={26} style={{ color: '#16a34a', flexShrink: 0 }} />
                <div style={{ fontSize: '0.82rem', color: '#14532d', lineHeight: '1.5' }}>
                  <strong>Authenticated Clinical Credential:</strong> Verified for patient transparency, regulatory compliance, and clinical safety standards.
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style jsx global>{`
        .cert-overlay {
          opacity: 0;
        }
        .hover-lift-lg:hover .cert-overlay {
          opacity: 1;
        }
        @media (max-width: 860px) {
          .cert-modal-grid {
            grid-template-columns: 1fr !important;
            max-height: 90vh !important;
            overflow-y: auto !important;
          }
          .cert-modal-image-area {
            min-height: 280px !important;
            padding: 16px !important;
          }
          .cert-full-img {
            max-height: 42vh !important;
          }
          .cert-modal-details {
            padding: 1.5rem 1.2rem !important;
            max-height: none !important;
          }
        }
      `}</style>
    </div>
  );
}
