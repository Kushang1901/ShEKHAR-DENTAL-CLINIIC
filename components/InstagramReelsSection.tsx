'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

function Instagram({
  size = 20,
  color = 'currentColor',
  className = '',
}: {
  size?: number | string;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface ReelItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
  likes?: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: 'DcI_Kv7soOP',
    title: 'Cosmetic Smile Makeover & Restorations',
    category: 'Cosmetic Dentistry',
    thumbnail: '/gallery/cosmetic.png',
    url: 'https://www.instagram.com/reel/DcI_Kv7soOP/',
    likes: '1.2k',
  },
  {
    id: 'DNcovftynur',
    title: 'Single-Sitting Rotary Root Canal',
    category: 'Endodontics',
    thumbnail: '/services/root_canaltreatment.png',
    url: 'https://www.instagram.com/reel/DNcovftynur/',
    likes: '950',
  },
  {
    id: 'DIan1_0yaI-',
    title: 'Precision Implant & Zirconia Crown',
    category: 'Dental Implants',
    thumbnail: '/gallery/implant2.png',
    url: 'https://www.instagram.com/reel/DIan1_0yaI-/',
    likes: '1.8k',
  },
  {
    id: 'DH78rhjSm0b',
    title: 'Clear Aligners & Invisible Braces',
    category: 'Orthodontics',
    thumbnail: '/gallery/orthodontic.png',
    url: 'https://www.instagram.com/reel/DH78rhjSm0b/',
    likes: '2.1k',
  },
  {
    id: 'DHwMzmTzsfg',
    title: 'Painless Surgical Wisdom Extraction',
    category: 'Oral Surgery',
    thumbnail: '/services/surgical_wisdom.png',
    url: 'https://www.instagram.com/reel/DHwMzmTzsfg/',
    likes: '1.4k',
  },
  {
    id: 'DHqbRioJIUN',
    title: 'Laser Teeth Whitening Instant Glow',
    category: 'Teeth Whitening',
    thumbnail: '/services/dental_bleech.png',
    url: 'https://www.instagram.com/reel/DHqbRioJIUN/',
    likes: '1.1k',
  },
  {
    id: 'DHYHF7ipxOh',
    title: 'Hospital-Grade Clinical Protocols',
    category: 'Clinic Tour',
    thumbnail: '/gallery/dental_procedure.png',
    url: 'https://www.instagram.com/reel/DHYHF7ipxOh/',
    likes: '890',
  },
  {
    id: 'C_Pwg_XiQMP',
    title: 'Zirconia Cap & Bridge Restorations',
    category: 'Prosthodontics',
    thumbnail: '/services/zirconia cap.png',
    url: 'https://www.instagram.com/reel/C_Pwg_XiQMP/',
    likes: '1.6k',
  },
  {
    id: 'C_IPAQUpBb3',
    title: 'Braces Alignment Transformation',
    category: 'Orthodontics',
    thumbnail: '/services/braces_treatment.png',
    url: 'https://www.instagram.com/reel/C_IPAQUpBb3/',
    likes: '2.4k',
  },
  {
    id: 'C_IElrWppu-',
    title: 'Ultrasonic Scaling & Deep Gum Care',
    category: 'Periodontics',
    thumbnail: '/services/ultra_sonic.png',
    url: 'https://www.instagram.com/reel/C_IElrWppu-/',
    likes: '1.3k',
  },
  {
    id: 'CuQuAzGJqCi',
    title: 'Patient Smile Journey & Review',
    category: 'Patient Stories',
    thumbnail: '/gallery/dental_surgery2.png',
    url: 'https://www.instagram.com/reel/CuQuAzGJqCi/',
    likes: '1.7k',
  },
];

export default function InstagramReelsSection() {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update visible cards based on screen size (1 card on mobile)
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 960) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1200) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, REELS_DATA.length - visibleCards);

  // Keep index valid on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Card-by-card sliding handlers
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Auto-play timer: moves 1 card at a time every 3.2 seconds
  useEffect(() => {
    if (isHovered || selectedReel) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3200);

    return () => clearInterval(timer);
  }, [isHovered, selectedReel, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Lock body scroll when popup is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (selectedReel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset';
      }
    };
  }, [selectedReel]);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedReel(null);
    setIsIframeLoading(true);
  }, []);

  // Open modal and load iframe
  const openModal = (reel: ReelItem) => {
    setIsIframeLoading(true);
    setSelectedReel(reel);
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <section className="reels-section-root">
      <div className="container">
        
        {/* Section Header */}
        <div className="reels-header-wrapper">
          <div>
            <div className="reels-badge">
              <Instagram size={14} className="reels-ig-icon" />
              <span>Watch Us On Instagram</span>
            </div>
            <h2 className="reels-title">Real Smiles, Real Transformations</h2>
            <p className="reels-subtitle">
              Explore patient procedures, cosmetic results, and oral health tips directly from our dental operatory.
            </p>
          </div>

          {/* Follow Us Button & Nav Arrows */}
          <div className="reels-header-actions">
            <a
              href="https://www.instagram.com/shekhar_dental/"
              target="_blank"
              rel="noopener noreferrer"
              className="reels-follow-btn"
            >
              <Instagram size={18} />
              <span>Follow @shekhar_dental</span>
              <ExternalLink size={14} />
            </a>

            {/* Navigation Arrows */}
            <div className="reels-nav-arrows">
              <button
                onClick={handlePrev}
                className="reels-arrow-btn"
                aria-label="Previous reel"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="reels-arrow-btn"
                aria-label="Next reel"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider Viewport */}
        <div
          className="reels-slider-viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="reels-slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {REELS_DATA.map((reel) => (
              <div
                key={reel.id}
                className="reel-slide-item"
                style={{
                  flex: `0 0 ${100 / visibleCards}%`,
                  maxWidth: `${100 / visibleCards}%`,
                }}
              >
                <div
                  className="reel-card"
                  onClick={() => openModal(reel)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openModal(reel);
                    }
                  }}
                >
                  {/* Background Thumbnail Image */}
                  <div
                    className="reel-thumbnail"
                    style={{ backgroundImage: `url("${reel.thumbnail}")` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="reel-overlay" />

                  {/* Instagram Top Badge */}
                  <div className="reel-top-bar">
                    <span className="reel-category-pill">{reel.category}</span>
                    <div className="reel-ig-badge">
                      <Instagram size={14} color="#ffffff" />
                    </div>
                  </div>

                  {/* Center Play Icon Glow Button */}
                  <div className="reel-play-btn">
                    <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                  </div>

                  {/* Bottom Details */}
                  <div className="reel-bottom-info">
                    <h3 className="reel-item-title">{reel.title}</h3>
                    <div className="reel-handle-row">
                      <span className="reel-handle">@shekhar_dental</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ═══════════════════════════════════════════
          IN-POPUP REEL MODAL (EXACT INSTAGRAM CARD)
      ═══════════════════════════════════════════ */}
      {mounted && selectedReel && (
        <div
          className="reel-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="reel-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <div className="reel-modal-top-bar">
              <button
                className="reel-modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* In-Popup Instagram Reel Card Embed */}
            <div className="reel-modal-player-wrapper">
              {isIframeLoading && (
                <div className="reel-modal-loading-state">
                  <div className="reel-loading-spinner" />
                  <span className="reel-loading-text">Loading Instagram Reel...</span>
                </div>
              )}
              <iframe
                key={selectedReel.id}
                src={`https://www.instagram.com/reel/${selectedReel.id}/embed/captioned/`}
                className="reel-embed-iframe"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                onLoad={() => setIsIframeLoading(false)}
                title={selectedReel.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
