'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ZoomIn, ShieldCheck, Award, Clock, Smile, HeartHandshake, Sparkles, Calendar, Phone } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryItem } from '@/data/gallery';
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

      {/* Why Visit Our Clinic — Static Trust Section */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Promise</span>
            <h2>Why Visit SHEKHAR DENTAL?</h2>
            <p>Every procedure at our clinic is backed by years of expertise, hospital-grade sterilization, and a patient-first philosophy.</p>
          </div>

          {/* 6 Trust Highlight Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.8rem',
              marginBottom: '4rem',
            }}
          >
            {[
              {
                icon: <ShieldCheck size={28} color="#10b981" />,
                bg: '#ecfdf5',
                title: 'Hospital-Grade Sterilization',
                desc: 'Class B autoclave sterilization, UV-sterilized operatory, single-use disposables, and individually sealed sterile kits — for every patient, every time.',
              },
              {
                icon: <Award size={28} color="#2563eb" />,
                bg: '#eff6ff',
                title: 'BDS & MIDA Certified Doctors',
                desc: 'Led by Dr. Prakash Thakur (BDS, MIDA) with 15+ years of clinical experience. Multi-specialist team covering implantology, orthodontics, and endodontics.',
              },
              {
                icon: <Smile size={28} color="#f59e0b" />,
                bg: '#fffbeb',
                title: '5,000+ Smiles Restored',
                desc: 'From routine cleanings to complete full-mouth implant restorations — over five thousand patients have trusted us with their smile.',
              },
              {
                icon: <Clock size={28} color="#8b5cf6" />,
                bg: '#f5f3ff',
                title: 'Open Till 10 PM + Sundays',
                desc: 'Morning and late evening appointments Mon–Sat. Free dental check-ups every Sunday (10 AM – 1 PM) for the whole family by prior appointment.',
              },
              {
                icon: <HeartHandshake size={28} color="#ec4899" />,
                bg: '#fdf2f8',
                title: 'Painless & Gentle Dentistry',
                desc: 'Computer-assisted local anesthesia, rotary instrumentation, and a calm clinical ambience ensure a virtually pain-free experience for every patient.',
              },
              {
                icon: <Sparkles size={28} color="#06b6d4" />,
                bg: '#ecfeff',
                title: 'Transparent Pricing, No Surprises',
                desc: 'Upfront cost estimates shared before any treatment begins. Affordable pricing with UPI, credit/debit cards, and major digital wallets accepted.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="hover-lift-sm"
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '14px',
                    background: card.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#1e293b', marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.93rem', lineHeight: '1.7', margin: 0 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stat Bar */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1e3c72 0%, #2c5aa0 100%)',
              borderRadius: '20px',
              padding: '2.5rem 3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '5000+', label: 'Patients Treated' },
              { value: '12+', label: 'Treatments Available' },
              { value: '4.5★', label: 'Google Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>{stat.value}</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            <a href="/appointment" className="btn btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}>
              <Calendar size={18} />
              <span>Book Your Visit</span>
            </a>
            <a href="tel:+919870294558" className="btn btn-outline" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem', border: '2px solid #1e3c72', color: '#1e3c72' }}>
              <Phone size={18} />
              <span>Call: 098702 94558</span>
            </a>
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
