'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: '2rem', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ maxWidth: '500px', width: '100%', background: '#ffffff', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ color: '#1e3c72', fontSize: '1.75rem', marginBottom: '1rem' }}>Application Error</h2>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            A temporary system error occurred. Please reload to restore the session.
          </p>
          <button
            onClick={() => reset()}
            style={{
              background: '#2563eb',
              color: '#ffffff',
              border: 'none',
              padding: '0.85rem 2rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(37,99,235,0.3)',
            }}
          >
            Reload Website
          </button>
        </div>
      </body>
    </html>
  );
}
