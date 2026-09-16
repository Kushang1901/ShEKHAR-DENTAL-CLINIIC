import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Sparkles,
  Stethoscope,
  CheckCircle2
} from 'lucide-react';
import { blogsData } from '@/data/blogs';
import { clinicInfo } from '@/data/clinicInfo';

export const metadata: Metadata = {
  title: 'Dental Health Blog & Expert Insights | Dr. Prakash Thakur Delhi',
  description: 'Read evidence-based dental guides authored by Dr. Prakash Thakur (BDS, MIDA) at Shekhar Dental Clinic & Orthodontic Center Delhi. Expert advice on dental implants, painless root canals, braces, aligners, and oral health.',
  keywords: [
    'Dental Blog Delhi',
    'Dr Prakash Thakur Dental Articles',
    'Shekhar Dental Clinic Blog',
    'Dental Implants Guide Delhi',
    'Painless Root Canal Tips',
    'Braces vs Aligners India',
    'Zirconia Crown vs PFM',
    'Wisdom Tooth Symptoms',
    'Free Dental Checkup Delhi'
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Dental Health Blog & Insights | Shekhar Dental Clinic Delhi',
    description: 'Expert dental care guides written by Dr. Prakash Thakur BDS, MIDA. Dental implants, painless RCT, braces, zirconia crowns, and oral health in Sagarpur, Delhi.',
    url: 'https://shekhardental.in/blog',
    images: ['/gallery/implant_procedure.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Blog | Dr. Prakash Thakur | Shekhar Dental Clinic',
    description: 'Authoritative dental guides and tips from Lead Dental Surgeon Dr. Prakash Thakur.',
    images: ['/gallery/implant_procedure.png'],
  },
};

function ToothWatermark() {
  return (
    <svg
      width="220"
      height="260"
      viewBox="0 0 160 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-15px',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.28,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <path
        d="M48 22 C24 22 12 38 12 60 C12 78 18 94 24 114 C30 136 36 158 42 180 C44 186 50 190 56 190 C62 190 67 186 70 180 L76 164 L82 180 C85 186 90 190 96 190 C102 190 108 186 110 180 C116 158 122 136 128 114 C134 94 140 78 140 60 C140 38 128 22 104 22 C88 22 80 32 76 38 C72 32 64 22 48 22 Z"
        stroke="#38bdf8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M136 32 L139 20 L142 32 L154 35 L142 38 L139 50 L136 38 L124 35 Z" fill="#38bdf8" opacity="0.85" />
      <path d="M148 64 L150 56 L152 64 L160 66 L152 68 L150 76 L148 68 L140 66 Z" fill="#60a5fa" opacity="0.75" />
      <path d="M22 64 L24 57 L26 64 L33 66 L26 68 L24 75 L22 68 L15 66 Z" fill="#38bdf8" opacity="0.65" />
    </svg>
  );
}

export default function BlogListingPage() {
  const featuredPost = blogsData[0];
  const otherPosts = blogsData.slice(1);

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Shekhar Dental Clinic Dental Health Blog',
    description: 'Authoritative clinical dental articles and patient guides authored by Dr. Prakash Thakur BDS, MIDA.',
    url: 'https://shekhardental.in/blog',
    publisher: {
      '@type': 'Dentist',
      name: 'Shekhar Dental Clinic',
      url: 'https://shekhardental.in',
      logo: 'https://shekhardental.in/logo.png',
    },
    blogPost: blogsData.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://shekhardental.in/blog/${post.slug}`,
      datePublished: post.publishedTime,
      author: {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.role,
      },
      image: `https://shekhardental.in${post.image}`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shekhardental.in' },
      { '@type': 'ListItem', position: 2, name: 'Dental Blog', item: 'https://shekhardental.in/blog' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Modern Light Hero Banner matching site design */}
      <section
        style={{
          background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 45%, #f8fafc 100%)',
          padding: '3.5rem 0 3.5rem',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          <ToothWatermark />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Left Column: Heading, Badge, Description, Breadcrumbs */}
            <div style={{ paddingLeft: '0.5rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#dbeafe',
                  color: '#1e40af',
                  padding: '5px 15px',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '1.2rem',
                }}
              >
                DENTAL HEALTH &amp; INSIGHTS
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#1e3a8a',
                  lineHeight: 1.18,
                  marginBottom: '1.1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Dental Health<br />Blog &amp; Insights
              </h1>

              <p
                style={{
                  color: '#64748b',
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  maxWidth: '520px',
                  marginBottom: '1.6rem',
                }}
              >
                Evidence-based clinical guides and patient advice authored by{' '}
                <strong style={{ color: '#1e293b' }}>Dr. Prakash Thakur (BDS, MIDA)</strong>, Founder &amp; Lead Dental Surgeon at Shekhar Dental Clinic, Sagarpur, Delhi.
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                }}
              >
                <Link
                  href="/"
                  style={{
                    color: '#2563eb',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  Home
                </Link>
                <ChevronRight size={14} color="#94a3b8" />
                <span style={{ color: '#64748b' }}>Dental Blog</span>
              </div>
            </div>

            {/* Right Column: Cartoon Tooth Reading Books & Writing Blog */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                className="about-hero-image-wrap"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '580px',
                  height: '340px',
                  borderRadius: '160px 24px 24px 160px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px -15px rgba(30, 60, 114, 0.12)',
                  border: '4px solid #ffffff',
                  background: '#f8fafc',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/cartoon_tooth_blog.jpg"
                  alt="Cartoon Tooth Reading and Writing Dental Health Blog — Shekhar Dental Clinic"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          {/* Featured Article Spotlight */}
          {featuredPost && (
            <div style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.2rem' }}>
                <Sparkles size={20} color="#2563eb" />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Featured Clinical Article
                </span>
              </div>

              <div
                className="hover-lift-lg"
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid #e2e8f0',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  alignItems: 'center',
                }}
              >
                <div style={{ height: '100%', minHeight: '320px', position: 'relative', background: '#e2e8f0', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '18px',
                      left: '18px',
                      background: '#1e3c72',
                      color: '#67e8f9',
                      padding: '5px 14px',
                      borderRadius: '20px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                    }}
                  >
                    {featuredPost.category}
                  </div>
                </div>

                <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.88rem', color: '#64748b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={15} color="#2563eb" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={15} color="#2563eb" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#1e3c72', lineHeight: 1.25, margin: 0 }}>
                    <Link href={`/blog/${featuredPost.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: '1.7', margin: 0 }}>
                    {featuredPost.excerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#dbeafe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1e40af',
                        fontWeight: 700,
                      }}
                    >
                      <Stethoscope size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }}>{featuredPost.author.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{featuredPost.author.role}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1rem' }}>
                    <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary" style={{ padding: '0.85rem 1.8rem' }}>
                      <span>Read Full Guide</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Articles Section */}
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
            <span className="section-badge">Recent Articles</span>
            <h2>Patient Education &amp; Clinical Insights</h2>
            <p>Practical oral healthcare guides to help you make informed decisions about dental treatments in Delhi.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="hover-lift-sm"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Article Card Image */}
                <div style={{ height: '220px', position: 'relative', background: '#f1f5f9', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(30, 60, 114, 0.9)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                {/* Article Card Body */}
                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: '#64748b', marginBottom: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} color="#2563eb" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} color="#2563eb" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: '#1e3c72', lineHeight: 1.35, marginBottom: '0.8rem' }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>

                  <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '1rem', marginTop: 'auto' }}>
                    <div style={{ fontSize: '0.82rem', color: '#1e293b', fontWeight: 600 }}>
                      By {post.author.name}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: '#2563eb',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                      }}
                    >
                      <span>Read More</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Consultation Callout */}
          <div
            style={{
              marginTop: '5rem',
              background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
              borderRadius: '24px',
              padding: '3rem',
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            <span style={{ background: 'rgba(255,255,255,0.15)', color: '#67e8f9', padding: '5px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, display: 'inline-block', marginBottom: '1rem' }}>
              Free Sunday Consultations
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#ffffff', marginBottom: '1rem' }}>
              Have Questions About Your Dental Health?
            </h2>
            <p style={{ maxWidth: '640px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', lineHeight: '1.7' }}>
              Schedule a personalized consultation with Dr. Prakash Thakur at Shekhar Dental Clinic in Sagarpur East, Delhi. Complimentary check-ups available every Sunday.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/appointment" className="btn btn-white" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
                <Calendar size={18} color="#1e3c72" />
                <span>Book Priority Appointment</span>
              </Link>
              <a
                href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
                className="btn btn-outline-white"
                style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
              >
                <span>Call: {clinicInfo.phoneNumbers[0].label}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
