'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { testimonialsData, Testimonial } from '@/data/testimonials';

export default function GoogleReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const [isHovered, setIsHovered] = useState(false);

  // Update visible cards based on responsive viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleCards);

  // Keep index valid when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const isAnyExpanded = Object.values(expandedMap).some(Boolean);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-play timer (pauses when hovered or any card is expanded)
  useEffect(() => {
    if (isHovered || isAnyExpanded) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered, isAnyExpanded, handleNext]);

  const toggleExpand = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setExpandedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      style={{
        padding: '5.5rem 0',
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '3.2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '6px 18px',
              borderRadius: '50px',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#1e3c72',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              marginBottom: '1rem',
            }}
          >
            {/* Google "G" Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.02 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>PATIENT LOVE & REVIEWS</span>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#94a3b8' }} />
            <span style={{ color: '#16a34a' }}>5.0 Rating</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '0.8rem',
              letterSpacing: '-0.02em',
            }}
          >
            Trusted by Delhi Patients
          </h2>
          <p
            style={{
              fontSize: '1.08rem',
              color: '#64748b',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Real, verified experiences from patients treated at Shekhar Dental &amp; Orthodontic Center.
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{ position: 'relative', margin: '0 auto', maxWidth: '1240px' }}>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: '#1e3c72',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1e3c72';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#1e3c72';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next review"
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              color: '#1e3c72',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1e3c72';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#1e3c72';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Viewport */}
          <div style={{ overflow: 'hidden', padding: '10px 4px 20px 4px' }}>
            <div
              style={{
                display: 'flex',
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                willChange: 'transform',
                alignItems: 'stretch',
              }}
            >
              {testimonialsData.map((testi: Testimonial) => {
                const isExpanded = Boolean(expandedMap[testi.id]);
                const isLong = testi.comment.length > 110;

                return (
                  <div
                    key={testi.id}
                    style={{
                      flex: `0 0 ${100 / visibleCards}%`,
                      padding: '0 12px',
                      boxSizing: 'border-box',
                      display: 'flex',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        background: isExpanded ? '#f0f7ff' : '#ffffff',
                        borderRadius: '22px',
                        padding: '1.8rem',
                        border: isExpanded ? '1.5px solid #3b82f6' : '1px solid #e2e8f0',
                        boxShadow: isExpanded
                          ? '0 20px 45px rgba(30, 60, 114, 0.16)'
                          : '0 10px 30px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative',
                        transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isExpanded ? 'scale(1.015)' : 'scale(1)',
                      }}
                      onMouseEnter={(e) => {
                        if (!isExpanded) {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 18px 40px rgba(30, 60, 114, 0.12)';
                          e.currentTarget.style.borderColor = '#93c5fd';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isExpanded) {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
                          e.currentTarget.style.borderColor = '#e2e8f0';
                        }
                      }}
                    >
                      <div>
                        {/* Top Card Bar */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '1rem',
                          }}
                        >
                          <div style={{ display: 'flex', gap: '3px' }}>
                            {[...Array(testi.rating)].map((_, i) => (
                              <Star key={i} size={17} color="#f59e0b" fill="#f59e0b" />
                            ))}
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {testi.timeAgo && (
                              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                                {testi.timeAgo}
                              </span>
                            )}
                            {/* Google G mini badge */}
                            <div
                              style={{
                                width: '22px',
                                height: '22px',
                                borderRadius: '50%',
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                              title="Google Review"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24">
                                <path
                                  fill="#4285F4"
                                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                                />
                                <path
                                  fill="#34A853"
                                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                                />
                                <path
                                  fill="#FBBC05"
                                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.02 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                                />
                                <path
                                  fill="#EA4335"
                                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Review Body with Smooth Motion Expansion */}
                        <div style={{ marginBottom: '1.2rem', position: 'relative' }}>
                          <div
                            style={{
                              maxHeight: isExpanded ? '500px' : '82px',
                              overflow: 'hidden',
                              transition: 'max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                              position: 'relative',
                            }}
                          >
                            <p
                              style={{
                                color: isExpanded ? '#0f172a' : '#334155',
                                fontSize: '0.98rem',
                                lineHeight: 1.68,
                                fontStyle: 'italic',
                                margin: 0,
                                transition: 'color 0.3s ease',
                              }}
                            >
                              &ldquo;{testi.comment}&rdquo;
                            </p>

                            {/* Subtle bottom fade when collapsed and text is long */}
                            {isLong && (
                              <div
                                aria-hidden
                                style={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  height: '24px',
                                  background: 'linear-gradient(to bottom, rgba(255,255,255,0), #ffffff)',
                                  pointerEvents: 'none',
                                  opacity: isExpanded ? 0 : 1,
                                  transition: 'opacity 0.3s ease',
                                }}
                              />
                            )}
                          </div>

                          {/* Read More / Read Less button with rotating motion chevron */}
                          {isLong && (
                            <button
                              type="button"
                              onClick={(e) => toggleExpand(testi.id, e)}
                              style={{
                                background: isExpanded ? '#dbeafe' : '#f1f5f9',
                                border: isExpanded ? '1px solid #93c5fd' : '1px solid #e2e8f0',
                                borderRadius: '20px',
                                color: '#1d4ed8',
                                fontSize: '0.82rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                padding: '4px 12px',
                                marginTop: '10px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                zIndex: 10,
                                position: 'relative',
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = isExpanded ? '#bfdbfe' : '#e2e8f0';
                                e.currentTarget.style.transform = 'scale(1.04)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = isExpanded ? '#dbeafe' : '#f1f5f9';
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              <span>{isExpanded ? 'Show less' : 'Read more'}</span>
                              <ChevronDown
                                size={14}
                                style={{
                                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                              />
                            </button>
                          )}

                          {/* Smoothly animated Owner response */}
                          <div
                            style={{
                              maxHeight: isExpanded && testi.ownerReply ? '180px' : '0px',
                              opacity: isExpanded && testi.ownerReply ? 1 : 0,
                              overflow: 'hidden',
                              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                              marginTop: isExpanded && testi.ownerReply ? '12px' : '0px',
                            }}
                          >
                            {testi.ownerReply && (
                              <div
                                style={{
                                  padding: '10px 14px',
                                  background: '#f0fdf4',
                                  borderLeft: '3px solid #16a34a',
                                  borderRadius: '8px',
                                  fontSize: '0.85rem',
                                  color: '#166534',
                                }}
                              >
                                <strong style={{ display: 'block', fontSize: '0.8rem', color: '#15803d', marginBottom: '2px' }}>
                                  Response from Shekhar Dental:
                                </strong>
                                {testi.ownerReply}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div
                        style={{
                          borderTop: '1px solid #f1f5f9',
                          paddingTop: '1.1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '10px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {/* Avatar with initial */}
                          <div
                            style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '50%',
                              backgroundColor: testi.avatarColor || '#3b82f6',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              flexShrink: 0,
                            }}
                          >
                            {testi.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h4
                              style={{
                                color: '#0f172a',
                                fontSize: '0.98rem',
                                fontWeight: 700,
                                margin: 0,
                                lineHeight: 1.2,
                              }}
                            >
                              {testi.name}
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                              {testi.badge && (
                                <span
                                  style={{
                                    fontSize: '0.72rem',
                                    color: '#ea580c',
                                    fontWeight: 700,
                                    background: '#ffedd5',
                                    padding: '1px 6px',
                                    borderRadius: '4px',
                                  }}
                                >
                                  {testi.badge}
                                </span>
                              )}
                              {testi.reviewCount && (
                                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                                  {testi.reviewCount}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Verified badge */}
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            color: '#15803d',
                            background: '#dcfce7',
                            padding: '4px 9px',
                            borderRadius: '12px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <CheckCircle size={12} color="#16a34a" />
                          <span>Google Review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Pagination */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '7px',
              marginTop: '1.8rem',
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: currentIndex === idx ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '10px',
                  backgroundColor: currentIndex === idx ? '#1e3c72' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
