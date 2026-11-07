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
import { certificatesData, CertificateItem, certificateCategories } from '@/data/certificates';

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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allCerts = limit ? certificatesData.slice(0, limit) : certificatesData;

  const filteredCerts = selectedCategory === "all" 
    ? allCerts 
    : allCerts.filter(c => c.category === selectedCategory);

  const currentModalIndex = activeCert ? allCerts.findIndex(c => c.id === activeCert.id) : -1;

  const handleModalPrev = () => {
    if (currentModalIndex > 0) {
      setActiveCert(allCerts[currentModalIndex - 1]);
    } else {
      setActiveCert(allCerts[allCerts.length - 1]);
    }
  };

  const handleModalNext = () => {
    if (currentModalIndex < allCerts.length - 1) {
      setActiveCert(allCerts[currentModalIndex + 1]);
    } else {
      setActiveCert(allCerts[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCert) return;
      if (e.key === 'Escape') setActiveCert(null);
      if (e.key === 'ArrowLeft') handleModalPrev();
      if (e.key === 'ArrowRight') handleModalNext();
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
  }, [activeCert, currentModalIndex, allCerts]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'council':
        return <ShieldCheck size={16} className="text-blue-600" />;
      case 'implants':
        return <Stethoscope size={16} className="text-cyan-600" />;
      case 'orthodontics':
        return <Sparkles size={16} className="text-amber-500" />;
      case 'community':
        return <HeartHandshake size={16} className="text-emerald-600" />;
      case 'academic':
        return <GraduationCap size={16} className="text-indigo-600" />;
      default:
        return <Award size={16} className="text-blue-600" />;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Section Header */}
      <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        {badge && (
          <span 
            className="section-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: '#eff6ff',
              color: '#1e3c72',
              fontWeight: 700,
              fontSize: '0.82rem',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              border: '1px solid #bfdbfe'
            }}
          >
            <ShieldCheck size={15} style={{ color: '#2563eb' }} />
            {badge}
          </span>
        )}
        <h2 style={{ fontSize: '2.5rem', color: '#1e3c72', fontWeight: 800, marginBottom: '0.75rem' }}>
          {title}
        </h2>
        <p style={{ maxWidth: '750px', margin: '0 auto', color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7' }}>
          {subtitle}
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          marginBottom: '2.5rem',
        }}
      >
        {certificateCategories.map((cat) => {
          const count = cat.id === 'all' 
            ? allCerts.length 
            : allCerts.filter(c => c.category === cat.id).length;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '30px',
                border: isSelected ? '1px solid #1e3c72' : '1px solid #e2e8f0',
                background: isSelected ? 'linear-gradient(135deg, #1e3c72 0%, #2563eb 100%)' : '#ffffff',
                color: isSelected ? '#ffffff' : '#475569',
                fontSize: '0.85rem',
                fontWeight: isSelected ? 700 : 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isSelected ? '0 4px 14px rgba(30, 60, 114, 0.22)' : '0 2px 6px rgba(0,0,0,0.02)'
              }}
            >
              <span>{cat.label}</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '1px 7px',
                  borderRadius: '12px',
                  background: isSelected ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                  color: isSelected ? '#ffffff' : '#64748b',
                  fontWeight: 700,
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certificate Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {filteredCerts.map((cert) => (
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
            {/* Card Header Bar: Category Badge & Issue Year (OUTSIDE the image) */}
            <div
              style={{
                padding: '14px 18px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#1e3c72',
                  background: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '16px',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                }}
              >
                {getCategoryIcon(cert.category)}
                <span>{cert.badge}</span>
              </div>

              {cert.year && (
                <span
                  style={{
                    fontSize: '0.78rem',
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

            {/* Certificate Preview Frame (Clean diploma mount with dark contrast backdrop) */}
            <div
              style={{
                position: 'relative',
                height: '280px',
                background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                overflow: 'hidden',
                borderBottom: '1px solid #e2e8f0'
              }}
            >
              {/* Inner Certificate Card Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
                  border: '3px solid #ffffff',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px'
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
                    transition: 'transform 0.4s ease',
                  }}
                  className="hover-scale"
                />
              </div>

              {/* Hover Overlay Hint */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(30, 60, 114, 0.55)',
                  backdropFilter: 'blur(3px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  gap: '8px'
                }}
                className="cert-grid-overlay"
              >
                <ZoomIn size={20} />
                <span>Inspect Official Certificate</span>
              </div>
            </div>

            {/* Certificate Info Body */}
            <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#2563eb',
                  background: '#eff6ff',
                  padding: '3px 9px',
                  borderRadius: '6px',
                  alignSelf: 'flex-start',
                  marginBottom: '8px'
                }}
              >
                {cert.categoryLabel}
              </span>

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
                    padding: '0.7rem',
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

      {/* Trust Guarantee Ribbon below grid */}
      <div
        style={{
          marginTop: '3.5rem',
          padding: '1.4rem 2rem',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          border: '1px solid #bfdbfe',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.2rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(30, 60, 114, 0.12)'
            }}
          >
            <ShieldCheck size={28} style={{ color: '#2563eb' }} />
          </div>
          <div>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: '#1e3c72' }}>
              Statutory Dental Transparency & Patient Verification
            </div>
            <div style={{ fontSize: '0.88rem', color: '#475569' }}>
              All doctor certifications and council registrations are legally compliant and authenticated for clinical patient safety.
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setActiveCert(allCerts[0])}
          style={{
            padding: '9px 20px',
            borderRadius: '10px',
            background: '#1e3c72',
            color: '#ffffff',
            border: 'none',
            fontSize: '0.88rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(30, 60, 114, 0.2)',
            transition: 'all 0.2s ease'
          }}
        >
          <FileCheck2 size={16} />
          <span>View All 7 Certificates Full-Screen</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* LIGHTBOX ZOOM MODAL (PORTAL)                                   */}
      {/* ============================================================== */}
      {mounted && activeCert && typeof document !== 'undefined' && createPortal(
        <div
          onClick={() => setActiveCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
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
                  handleModalPrev();
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
                  handleModalNext();
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
        .cert-grid-overlay {
          opacity: 0;
        }
        .hover-lift-lg:hover .cert-grid-overlay {
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