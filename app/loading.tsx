'use client';

import React from 'react';
import { clinicInfo } from '@/data/clinicInfo';

export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 50%, #ffffff 100%)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Background ambient glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(44,90,160,0.12) 0%, transparent 70%)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />

      {/* Main Loader Card */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2.5rem',
          maxWidth: '420px',
          width: '90%',
        }}
      >
        {/* Animated Icon / GIF Container */}
        <div
          style={{
            position: 'relative',
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0 12px 32px rgba(30,60,114,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            border: '2px solid rgba(226, 232, 240, 0.8)',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/loading.gif"
            alt="Loading..."
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
            }}
            onError={(e) => {
              // Fallback to logo if gif fails to load
              const target = e.currentTarget;
              target.src = '/logo.png';
            }}
          />

          {/* Outer rotating accent ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '50%',
              border: '3px solid transparent',
              borderTopColor: '#2563eb',
              borderRightColor: '#60a5fa',
              animation: 'spinContinuous 1.2s linear infinite',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Clinic Name */}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#1e3c72',
            marginBottom: '0.4rem',
            letterSpacing: '-0.01em',
          }}
        >
          {clinicInfo.shortName}
        </h3>

        <p
          style={{
            fontSize: '0.9rem',
            color: '#64748b',
            margin: '0 0 1.5rem 0',
            fontWeight: 500,
          }}
        >
          Preparing your dental care experience...
        </p>

        {/* Animated Progress Bar */}
        <div
          style={{
            width: '140px',
            height: '4px',
            borderRadius: '10px',
            backgroundColor: '#e2e8f0',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: '45%',
              background: 'linear-gradient(90deg, #1e3c72, #2563eb, #38bdf8)',
              borderRadius: '10px',
              animation: 'loaderSlide 1.4s ease-in-out infinite alternate',
            }}
          />
        </div>
      </div>
    </div>
  );
}
