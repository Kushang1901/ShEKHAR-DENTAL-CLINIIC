'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, CheckCircle2, Calendar } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive visible cards count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, servicesData.length - visibleCards);

  // Keep index within bounds when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Card-by-card navigation
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-play card-by-card every 2.8 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2800);

    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const gap = 24; // Gap between cards in px

  return (
    <div
      style={{ position: 'relative', width: '100%', padding: '0 4px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        aria-label="Previous Service"
        style={{
          position: 'absolute',
          left: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: '#ffffff',
          color: '#1e3c72',
          border: '1px solid #cbd5e1',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 25,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#1e3c72';
          e.currentTarget.style.color = '#ffffff';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(30, 60, 114, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#ffffff';
          e.currentTarget.style.color = '#1e3c72';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
        }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        aria-label="Next Service"
        style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: '#ffffff',
          color: '#1e3c72',
          border: '1px solid #cbd5e1',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 25,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#1e3c72';
          e.currentTarget.style.color = '#ffffff';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(30, 60, 114, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#ffffff';
          e.currentTarget.style.color = '#1e3c72';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.12)';
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Masked Slider Viewport */}
      <div style={{ overflow: 'hidden', width: '100%', padding: '0.8rem 0 1.5rem' }}>
        {/* Animated Track (Card by Card shift) */}
        <div
          style={{
            display: 'flex',
            gap: `${gap}px`,
            transition: 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)',
            transform: `translateX(calc(-${currentIndex} * ((100% - ${(visibleCards - 1) * gap}px) / ${visibleCards} + ${gap}px)))`,
            willChange: 'transform',
          }}
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              style={{
                flex: `0 0 calc((100% - ${(visibleCards - 1) * gap}px) / ${visibleCards})`,
                minWidth: `calc((100% - ${(visibleCards - 1) * gap}px) / ${visibleCards})`,
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(44, 90, 160, 0.15)';
                e.currentTarget.style.borderColor = '#93c5fd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              {/* Image & Price Tag */}
              <div style={{ height: '200px', overflow: 'hidden', background: '#e2e8f0', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'linear-gradient(135deg, #ee5a24, #ff6b6b)',
                    color: '#ffffff',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    boxShadow: '0 4px 12px rgba(238, 90, 36, 0.4)',
                  }}
                >
                  {service.price}
                </div>
              </div>

              {/* Content Details */}
              <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#1e3c72' }}>{service.name}</h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.55', marginBottom: '1.2rem', minHeight: '44px' }}>
                  {service.shortDescription}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#475569' }}>
                      <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/appointment"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: 'auto', padding: '0.75rem 1rem', fontSize: '0.92rem' }}
                >
                  <Calendar size={15} />
                  <span>Book For This Service</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
