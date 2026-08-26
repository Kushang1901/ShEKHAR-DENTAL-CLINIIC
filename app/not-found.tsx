import Link from 'next/link';
import { Home, Calendar, Phone } from 'lucide-react';
import { clinicInfo } from '@/data/clinicInfo';

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <span
          style={{
            fontSize: '6rem',
            fontWeight: 800,
            color: '#1e3c72',
            lineHeight: 1,
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          404
        </span>
        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2rem' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">
            <Home size={18} />
            <span>Return Home</span>
          </Link>
          <Link href="/appointment" className="btn" style={{ background: '#e2e8f0', color: '#1e293b' }}>
            <Calendar size={18} />
            <span>Book Appointment</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
