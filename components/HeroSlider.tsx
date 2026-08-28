'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  Award,
  ShieldCheck,
  Clock,
  Sparkles,
  Users,
  Star,
  Stethoscope,
  MapPin,
  ChevronLeft,
  ChevronRight,
  HeartHandshake
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

const HERO_SLIDES = [
  {
    image: '/gallery/clinic_chair1.jpg',
    badge: 'Premium Dental Facility',
    title: 'Modern Clinic & Expert Care',
    sub: 'State-of-the-art ergonomic dental chairs, digital imaging, and fully sterilized operatory — designed for your comfort.',
    cta: 'Book Consultation',
  },
  {
    image: '/gallery/clinic_equipment.jpg',
    badge: 'Advanced Clinical Technology',
    title: 'Precision Dental Equipment',
    sub: 'High-tech rotary instruments, digital X-ray systems, and computerized diagnostics for accurate and gentle treatment.',
    cta: 'Book Free Consultation',
  },
  {
    image: '/gallery/clinic_chair2.jpg',
    badge: 'Hospital-Grade Sterilization',
    title: 'Safe, Sterile & Spotless',
    sub: 'Class B autoclave sterilization, single-use disposables, UV-sterilized operatory — your safety is our priority.',
    cta: 'Learn About Our Facility',
  },
  {
    image: '/gallery/clinic_tools.jpg',
    badge: 'Specialist Dental Tools',
    title: 'Expert Tools, Gentle Hands',
    sub: 'Precision-calibrated instruments used by specialist dentists for painless implants, braces, RCTs, and smile makeovers.',
    cta: 'View All Services',
  },
  {
    image: '/gallery/clinic_interior.jpg',
    badge: 'Patient-First Comfort',
    title: 'Your Trusted Smile Partner',
    sub: 'A calming, clean, and welcoming clinical environment — because great dental care starts with feeling at ease.',
    cta: 'Book an Appointment',
  },
];

const SLIDE_DURATION = 5000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setPrev(active);
      setActive(idx);
      setAnimating(true);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 900);
    },
    [active, animating]
  );

  const next = useCallback(() => goTo((active + 1) % HERO_SLIDES.length), [active, goTo]);
  const prev_ = useCallback(
    () => goTo((active - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
    [active, goTo]
  );

  useEffect(() => {
    const id = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [next]);

  const slide = HERO_SLIDES[active];

  return (
    <section className="hero-root">
      {/* ── Background slides ── */}
      <div className="hero-slides-track" aria-hidden>
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={[
              'hero-slide-bg',
              i === active ? 'slide-active' : '',
              i === prev ? 'slide-leaving' : '',
            ].join(' ')}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
      </div>

      {/* ── Dark overlay ── */}
      <div className="hero-overlay-layer" aria-hidden />

      {/* ── Glow blobs ── */}
      <div className="hero-glow hero-glow-1" aria-hidden />
      <div className="hero-glow hero-glow-2" aria-hidden />

      {/* ── Foreground content ── */}
      <div className="hero-content-wrapper">
        <div key={`badge-${active}`} className="hero-badge hero-slide-in">
          <span className="hero-badge-dot" />
          <MapPin size={13} />
          {slide.badge}
          <span className="hero-badge-open">● Open Now</span>
        </div>

        <h2 key={`h2-${active}`} className="hero-headline hero-slide-in" style={{ animationDelay: '0.08s' }}>
          {slide.title}
        </h2>

        <p key={`sub-${active}`} className="hero-subtext hero-slide-in" style={{ animationDelay: '0.18s' }}>
          {slide.sub}
        </p>

        <div key={`cta-${active}`} className="hero-cta-row hero-slide-in" style={{ animationDelay: '0.28s' }}>
          <Link href="/appointment" className="hero-btn-primary">
            <Calendar size={18} />
            {slide.cta}
          </Link>
          <a href={`tel:${clinicInfo.phoneNumbers[0].clean}`} className="hero-btn-ghost">
            <Phone size={18} />
            {clinicInfo.phoneNumbers[0].label}
          </a>
        </div>
      </div>

      {/* ── Arrow controls ── */}
      <button className="hero-arrow hero-arrow-left" onClick={prev_} aria-label="Previous slide">
        <ChevronLeft size={26} />
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next slide">
        <ChevronRight size={26} />
      </button>

      {/* ── Floating stat bar ── */}
      <div className="hero-stats-bar">
        {[
          { value: '5,000+', label: 'Happy Patients', icon: <Users size={20} color="#2563eb" /> },
          { value: '10+', label: 'Years of Care', icon: <Award size={20} color="#7c3aed" /> },
          { value: '4.9 ★', label: 'Google Rating', icon: <Star size={20} color="#f59e0b" fill="#f59e0b" /> },
          { value: '99%', label: 'Success Rate', icon: <ShieldCheck size={20} color="#10b981" /> },
          { value: '12+', label: 'Dental Services', icon: <Stethoscope size={20} color="#ec4899" /> },
        ].map((s, i) => (
          <div key={i} className="hero-stat-card">
            <div className="hero-stat-icon">{s.icon}</div>
            <div className="hero-stat-value">{s.value}</div>
            <div className="hero-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Invisible stat icons used only in server-rendered hero for CLS stability */}
      <span style={{ display: 'none' }}><Clock size={1} /><HeartHandshake size={1} /></span>
    </section>
  );
}
