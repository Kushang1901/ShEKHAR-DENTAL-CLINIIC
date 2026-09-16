'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  Star,
  ShieldCheck,
  Stethoscope,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

const HERO_SLIDES = [
  {
    image: 'https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=2000',
    badge: 'Best Dental Clinic in Delhi • Sagarpur East',
    title: 'Shekhar Dental Clinic & Orthodontic Centre',
    sub: 'Recognized as the best service giving dental clinic in Delhi. Led by Dr. Prakash Thakur with 15+ years of clinical excellence in painless implants, braces & root canals.',
    cta: 'Book Consultation',
  },
  {
    image: 'https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&w=2000',
    badge: 'Shekhar Dental and Orthodontic Center',
    title: 'Best Dental Clinic in Delhi for Complete Care',
    sub: 'Specialized dental surgeons delivering precision titanium implants, clear aligners, rotary RCTs, and zirconia caps under hospital-grade sterilization.',
    cta: 'Book Free Consultation',
  },
  {
    image: 'https://images.unsplash.com/photo-1728342057953-94bfad8f0e7e?auto=format&fit=crop&w=2000&q=80',
    badge: 'Founder & Lead Surgeon • Dr. Prakash Thakur',
    title: 'Advanced Painless Dental Care in Delhi',
    sub: 'Modern rotary endodontics and computer-assisted local anesthesia. Experience truly pain-free root canals and smile makeovers with Delhi’s trusted dental team.',
    cta: 'Learn About Our Facility',
  },
  {
    image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=2000',
    badge: 'Free Sunday Consultations • Sagarpur Delhi',
    title: 'Best Service Giving Clinic with Transparent Care',
    sub: 'Upfront affordable pricing with zero hidden charges. Free comprehensive dental check-ups every Sunday morning for families across Delhi NCR.',
    cta: 'View All Services',
  },
  {
    image: 'https://images.unsplash.com/photo-1643660527064-8d43259f014a?auto=format&fit=crop&w=2000&q=80',
    badge: 'Shekhar Dental Clinic • Orthodontic & Aligners',
    title: 'Top Orthodontic Center & Aligners in Delhi',
    sub: 'Transform crowded, spaced, or misaligned teeth with metal/ceramic braces and invisible clear aligners customized for teen and adult smiles.',
    cta: 'Book an Appointment',
  },
];

const SLIDE_DURATION = 3300;

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
      }, 650);
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
      {/* ── Background slides with slow smooth zoom ── */}
      <div className="hero-slides-track" aria-hidden>
        {HERO_SLIDES.map((s, i) => {
          const isActive = i === active;
          const isLeaving = i === prev;
          return (
            <div
              key={i}
              className={[
                'hero-slide-bg',
                isActive ? 'slide-active' : '',
                isLeaving ? 'slide-leaving' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div
                key={isActive ? `act-${active}` : `idle-${i}`}
                className="hero-slide-img"
                style={{ backgroundImage: `url(${s.image})` }}
              />
            </div>
          );
        })}
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

        <h1 key={`h1-${active}`} className="hero-headline hero-slide-in" style={{ animationDelay: '0.08s' }}>
          {slide.title}
        </h1>

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
    </section>
  );
}
