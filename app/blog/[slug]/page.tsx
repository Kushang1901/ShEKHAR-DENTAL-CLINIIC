import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Phone,
  Stethoscope,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  AlertCircle,
  BookOpen
} from 'lucide-react';
import { blogsData, BlogPost, getBlogSlug, findBlogBySlug } from '@/data/blogs';
import { clinicInfo } from '@/data/clinicInfo';
import { generateBreadcrumbSchema, generateBlogPostSchema } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: getBlogSlug(post),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Shekhar Dental Clinic',
    };
  }

  const title = `${post.title} | Dr. Prakash Thakur | Shekhar Dental Clinic`;
  const description = post.excerpt;

  return {
    title,
    description,
    keywords: [
      ...post.tags,
      'Dr Prakash Thakur',
      'Doctor Prakash Thakur',
      'Shekhar Dental Clinic',
      'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
      'Best dental clinic in Delhi',
      'Dentist Sagarpur Delhi'
    ],
    authors: [{ name: post.author.name, url: 'https://shekhardental.in/team' }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      publishedTime: post.publishedTime,
      authors: [post.author.name],
      title,
      description,
      url: `https://shekhardental.in/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = findBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const postSlug = getBlogSlug(post);
  const relatedPosts = blogsData.filter((p) => getBlogSlug(p) !== postSlug).slice(0, 3);

  const blogPostingSchema = generateBlogPostSchema(post);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Dental Blog', url: '/blog' },
    { name: post.title, url: `/blog/${postSlug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Article Header Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3c72 100%)',
          color: '#ffffff',
          padding: '8rem 0 4rem',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
          <div className="breadcrumbs" style={{ marginBottom: '1.5rem', justifyContent: 'center' }}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog">Blog</Link>
            <ChevronRight size={14} />
            <span>{post.category}</span>
          </div>

          <div
            style={{
              display: 'inline-block',
              background: 'rgba(56, 189, 248, 0.2)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              padding: '5px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.5px',
              marginBottom: '1.2rem',
            }}
          >
            {post.category}
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: '1.2rem',
              fontWeight: 800,
            }}
          >
            {post.title}
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '2rem' }}>
            {post.subtitle}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              fontSize: '0.92rem',
              color: '#94a3b8',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff' }}>
              <Stethoscope size={18} color="#38bdf8" />
              <span style={{ fontWeight: 600 }}>{post.author.name}</span>
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} color="#38bdf8" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} color="#38bdf8" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section style={{ padding: '4.5rem 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Medical Disclaimer Banner */}
          <div
            style={{
              background: '#fffbeb',
              border: '1px solid #fcd34d',
              borderLeft: '4px solid #f59e0b',
              borderRadius: '12px',
              padding: '1rem 1.4rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}
          >
            <AlertCircle size={20} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#78350f', lineHeight: '1.6' }}>
              <strong>Medical Disclaimer:</strong> This article is written for informational and patient-education purposes only and does not constitute professional medical or dental advice, diagnosis, or treatment. Always consult a qualified dental professional for personalized clinical guidance. Results may vary per individual.
            </p>
          </div>

          {/* Featured Image */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              marginBottom: '3rem',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Key Takeaways Card */}
          <div
            style={{
              background: '#eff6ff',
              border: '2px solid #bfdbfe',
              borderRadius: '20px',
              padding: '2rem 2.2rem',
              marginBottom: '3rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
              <Sparkles size={22} color="#2563eb" />
              <h2 style={{ fontSize: '1.3rem', color: '#1e3c72', margin: 0, fontWeight: 700 }}>
                Key Clinical Takeaways
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {post.keyTakeaways.map((takeaway, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#2563eb" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: '#1e293b', fontSize: '0.98rem', lineHeight: '1.6', fontWeight: 500 }}>
                    {takeaway}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Paragraph Sections */}
          <article
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: 'var(--shadow-md)',
              marginBottom: '3rem',
            }}
          >
            {post.content.map((sec, idx) => (
              <div key={idx} style={{ marginBottom: idx === post.content.length - 1 ? 0 : '2.5rem' }}>
                <h2 style={{ fontSize: '1.65rem', color: '#1e3c72', marginBottom: '1rem', lineHeight: 1.35 }}>
                  {sec.heading}
                </h2>
                <p style={{ color: '#334155', fontSize: '1.08rem', lineHeight: '1.85', margin: 0 }}>
                  {sec.text}
                </p>
                {sec.points && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '1.2rem 0 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                    }}
                  >
                    {sec.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          color: '#475569',
                          fontSize: '1.02rem',
                          lineHeight: '1.7',
                          background: '#f8fafc',
                          padding: '0.9rem 1.2rem',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                        }}
                      >
                        <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '4px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          {/* Clinical References */}
          {post.references && post.references.length > 0 && (
            <div
              style={{
                background: '#f0f9ff',
                border: '1px solid #bae6fd',
                borderRadius: '16px',
                padding: '1.8rem 2rem',
                marginBottom: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <BookOpen size={20} color="#0284c7" />
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#0c4a6e', fontWeight: 700 }}>
                  Clinical References & Further Reading
                </h3>
              </div>
              <ol style={{ margin: 0, paddingLeft: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {post.references.map((ref, i) => (
                  <li key={i} style={{ fontSize: '0.88rem', color: '#334155', lineHeight: '1.6' }}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#0284c7',
                        textDecoration: 'underline',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      {ref.label}
                      <ExternalLink size={13} />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Author Bio Card */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '2rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem',
            }}
          >
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1e3c72 0%, #2563eb 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              <Stethoscope size={40} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.82rem', color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                Reviewed &amp; Authored By
              </div>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '1.4rem', color: '#1e293b' }}>
                {post.author.name}
              </h3>
              <p style={{ margin: '0 0 10px 0', color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>
                {post.author.role}
              </p>
              <p style={{ margin: '0 0 10px 0', color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Dr. Prakash Thakur is the Founder and Lead Dental Surgeon at <strong>SHEKHAR DENTAL AND ORTHODONTIC CENTRE</strong> in Sagarpur East, New Delhi. Holding a Bachelor of Dental Surgery (BDS) and a Member of the Indian Dental Association (MIDA), he is registered with the Delhi State Dental Council (DCI Reg. No. 2009-14382). With over 15 years of post-qualification surgical experience specializing in implantology, rotary endodontics, and orthodontic smile designing, Dr. Thakur is recognized across West Delhi for his compassionate, evidence-based, and virtually painless patient care philosophy.
              </p>
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                  ✓ BDS Qualified
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                  ✓ DCI Registered
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#fef3c7', color: '#92400e', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                  ✓ 15+ Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Quick Consultation CTA */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1e3c72 0%, #2563eb 100%)',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              color: '#ffffff',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(30, 60, 114, 0.25)',
              marginBottom: '4rem',
            }}
          >
            <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.8rem' }}>
              Book an Appointment with Dr. Prakash Thakur
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'rgba(255,255,255,0.92)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Get expert, gentle care for implants, braces, root canals, or routine check-ups at Shekhar Dental Clinic, Sagarpur, Delhi. Free check-ups available every Sunday.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/appointment" className="btn btn-white" style={{ padding: '0.9rem 2rem', fontSize: '1.02rem' }}>
                <Calendar size={18} color="#1e3c72" />
                <span>Book Priority Appointment</span>
              </Link>
              <a
                href={`tel:${clinicInfo.phoneNumbers[0].clean}`}
                className="btn btn-outline-white"
                style={{ padding: '0.9rem 2rem', fontSize: '1.02rem' }}
              >
                <Phone size={18} />
                <span>Call Helpline: {clinicInfo.phoneNumbers[0].label}</span>
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', color: '#1e3c72', margin: 0 }}>
                  More Dental Health Articles
                </h3>
                <Link
                  href="/blog"
                  style={{
                    color: '#2563eb',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.95rem',
                  }}
                >
                  <span>View All Blogs</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="hover-lift-sm"
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid #e2e8f0',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ height: '150px', background: '#e2e8f0', overflow: 'hidden' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rel.image}
                        alt={rel.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 700, marginBottom: '6px' }}>
                        {rel.category}
                      </span>
                      <h4 style={{ fontSize: '1.05rem', color: '#1e3c72', lineHeight: 1.4, margin: '0 0 10px 0' }}>
                        {rel.title}
                      </h4>
                      <span style={{ marginTop: 'auto', fontSize: '0.82rem', color: '#64748b' }}>
                        {rel.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#2563eb',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              <ArrowLeft size={18} />
              <span>Back to All Dental Articles</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
