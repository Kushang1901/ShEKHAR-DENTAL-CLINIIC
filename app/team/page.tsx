import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ChevronRight, 
  Calendar, 
  Sparkles, 
  Award, 
  Stethoscope, 
  Heart,
  Smile,
  ShieldCheck,
  Scissors,
  CheckCircle2
} from 'lucide-react';
import { doctorsData, teamStats } from '@/data/doctors';

export const metadata: Metadata = {
  title: 'Dr. Prakash Thakur (Doctor Prakash Thakur) & Specialists | SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
  description: 'Meet Dr. Prakash Thakur (Doctor Prakash Thakur - Founder & Lead Dental Surgeon) and our specialist team at SHEKHAR DENTAL AND ORTHODONTIC CENTRE, Sagarpur, New Delhi. Over 15+ years of clinical excellence in dental implants, oral surgery, and painless dentistry.',
  keywords: [
    'Dr Prakash Thakur',
    'Doctor Prakash Thakur',
    'Dr. Prakash Thakur',
    'Prakash Thakur',
    'Dr Prakash Thakur Dentist',
    'Dr Prakash Thakur Dental Surgeon',
    'Doctor Prakash Thakur Sagarpur',
    'Dr Prakash Thakur Shekhar Dental',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    'SHEKHAR DENTAL AND ORTHODONTIC CENTER',
    'Shekhar Dental and Orthodontic Centre Delhi',
    'Dr Vivek Shekhar Orthodontist',
    'Best Dental Surgeon Sagarpur',
    'Dentist in Sagarpur East Delhi'
  ],
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'Dr. Prakash Thakur & Specialist Dentists | SHEKHAR DENTAL AND ORTHODONTIC CENTRE',
    description: 'Meet Dr. Prakash Thakur (Doctor Prakash Thakur) and expert dental specialists at SHEKHAR DENTAL AND ORTHODONTIC CENTRE, Sagarpur, Delhi.',
    url: 'https://shekhardental.in/team',
  },
};

export default function TeamPage() {
  return (
    <>
      {/* Subpage Header Banner */}
      <section className="subpage-banner">
        <div className="container">
          <div className="animate-fade-in">
            <h1>Meet Our Dental Specialists</h1>
            <p>
              Dedicated dental surgeons, orthodontists, and clinicians committed to delivering painless, patient-centered oral healthcare.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <span>Our Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats Strip */}
      <section style={{ padding: '3.5rem 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            {teamStats.map((stat, i) => (
              <div key={i} style={{ background: '#ffffff', padding: '1.8rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e3c72', marginBottom: '0.3rem' }}>{stat.value}</div>
                <div style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Profiles Grid */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Medical Faculty</span>
            <h2>Our Experienced Doctors</h2>
            <p>Our multidisciplinary team combines specialized clinical training and empathetic patient care to treat cases from simple cleanings to full mouth reconstructions.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {doctorsData.map((doc) => (
              <div
                key={doc.id}
                className="hover-lift-lg"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Doctor Avatar / Photo Header */}
                <div
                  style={{
                    height: '280px',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e3c72 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {doc.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={doc.image}
                        alt={doc.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: doc.imagePosition || 'center 20%',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.4) 0%, transparent 40%)',
                          pointerEvents: 'none',
                        }}
                      />
                    </>
                  ) : (
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      <Stethoscope size={50} color="#ffffff" />
                    </div>
                  )}

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#38bdf8',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      zIndex: 2,
                    }}
                  >
                    {doc.experience}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.45rem', color: '#1e3c72', marginBottom: '0.3rem' }}>{doc.name}</h3>
                  <div
                    style={{
                      color: '#2563eb',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Sparkles size={16} />
                    <span>{doc.role}</span>
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.4rem', flex: 1 }}>
                    {doc.description}
                  </p>

                  {/* Specialties Pills */}
                  <div style={{ marginBottom: '1.8rem' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                      Specializations:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {doc.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: '#f1f5f9',
                            color: '#334155',
                            fontSize: '0.8rem',
                            padding: '4px 10px',
                            borderRadius: '20px',
                            fontWeight: 500,
                          }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/appointment" className="btn btn-primary" style={{ width: '100%' }}>
                    <Calendar size={16} />
                    <span>Book With {doc.name.split(' ')[1] || 'Doctor'}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Department Expertise</span>
            <h2>Specialized Fields of Dentistry</h2>
            <p>Our doctors hold advanced training across core clinical domains.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: <Scissors size={26} color="#2563eb" />,
                title: 'Oral & Maxillofacial Surgery',
                desc: 'Impaction removals, trauma management, bone grafting, and dental implant placements.',
              },
              {
                icon: <Smile size={26} color="#10b981" />,
                title: 'Orthodontics & Clear Aligners',
                desc: 'Correcting malocclusions, crowded teeth, overbites, and aesthetic smile alignment.',
              },
              {
                icon: <Heart size={26} color="#ef4444" />,
                title: 'Endodontics (Root Canals)',
                desc: 'Single-visit rotary root canal therapy to save infected teeth from extraction.',
              },
              {
                icon: <Sparkles size={26} color="#f59e0b" />,
                title: 'Cosmetic Dentistry',
                desc: 'Laser teeth whitening, composite bonding, porcelain veneers, and bridal smile makeovers.',
              },
              {
                icon: <Award size={26} color="#0284c7" />,
                title: 'Implantology & Prosthodontics',
                desc: 'Single-tooth and full-arch dental implants, precision zirconia crowns, and restorative bridges.',
              },
              {
                icon: <ShieldCheck size={26} color="#8b5cf6" />,
                title: 'Periodontics & Gum Care',
                desc: 'Deep ultrasonic scaling, root planing, laser gum therapy, and preventive periodontal treatments.',
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  padding: '2.2rem 2rem',
                  borderRadius: '18px',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    background: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  {exp.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '0.7rem' }}>{exp.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #1e3c72 0%, #2c5aa0 100%)',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '3.5rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <h2 style={{ color: '#ffffff', fontSize: '2.3rem', marginBottom: '1rem' }}>
              Have Questions for Our Dental Specialists?
            </h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem', opacity: 0.9 }}>
              Schedule a personalized consultation. Our doctors will examine your oral health, discuss treatment options transparently, and design a customized care plan.
            </p>
            <Link href="/appointment" className="btn btn-white" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              <Calendar size={18} color="#1e3c72" />
              <span>Schedule Doctor Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
