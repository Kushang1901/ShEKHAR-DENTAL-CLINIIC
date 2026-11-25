'use client';

import React from 'react';

/**
 * High-performance, non-blocking page transition loader.
 * Replaces the full-screen modal to eliminate the 2-3 second blocking delay
 * and allow the hero section and page content to display instantaneously.
 */
export default function Loading() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 99999,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(90deg, #1e3c72, #2563eb, #38bdf8, #10b981)',
          animation: 'topLoaderSlide 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          boxShadow: '0 0 10px rgba(37, 99, 235, 0.7)',
        }}
      />
      <style jsx global>{`
        @keyframes topLoaderSlide {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
