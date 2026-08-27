'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ZoomIn, Star } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryItem } from '@/data/gallery';
import { testimonialsData } from '@/data/testimonials';
import LightboxModal from '@/components/LightboxModal';

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const currentIndex = activeItem ? filteredItems.findIndex((it) => it.id === activeItem.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveItem(filteredItems[0]);
    }
  };

  return (
    <>
      {/* Subpage Header Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="animate-fade-in">
            <h1>Clinic & Treatment Gallery</h1>
            <p>
              Witness our dedication to clinical precision, surgical achievements, and radiant patient smile transformations in Sagarpur, Delhi.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Visual Showcase</span>
            <h2>Dental Procedures & Technology</h2>
            <p>Select a category below to explore our work across surgery, dental implants, orthodontics, and cosmetic dentistry.</p>
          </div>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {galleryCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.65rem 1.6rem',
                    borderRadius: '30px',
                    border: '2px solid #2c5aa0',
                    background: isActive ? 'linear-gradient(135deg, #2c5aa0 0%, #1e3c72 100%)' : '#ffffff',
                    color: isActive ? '#ffffff' : '#2c5aa0',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 4px 15px rgba(44, 90, 160, 0.3)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Gallery Items Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="hover-lift-lg overlay-container"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative', background: '#0f172a' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  {/* Hover Overlay Icon */}
                  <div
                    className="overlay-hover"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(30, 60, 114, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                      }}
                    >
                      <ZoomIn size={24} color="#1e3c72" />
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#2563eb',
                      background: '#eff6ff',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      display: 'inline-block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0, lineHeight: '1.6' }}>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials Strip */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Verified Reviews</span>
            <h2>What Patients Say</h2>
            <p>Real stories of restored smiles, painless procedures, and friendly dental care.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {testimonialsData.map((testi) => (
              <div
                key={testi.id}
                style={{
                  background: '#f8fafc',
                  padding: '2rem',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '0.8rem' }}>
                    {[...Array(testi.rating)].map((_, idx) => (
                      <Star key={idx} size={16} color="#f59e0b" fill="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.2rem' }}>
                    &ldquo;{testi.comment}&rdquo;
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.8rem' }}>
                  <h4 style={{ color: '#1e293b', fontSize: '1rem', margin: 0 }}>{testi.name}</h4>
                  <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{testi.treatment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
