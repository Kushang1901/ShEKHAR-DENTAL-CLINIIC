'use client';

import React, { useEffect, useState, useRef } from 'react';
import Script from 'next/script';
import { Globe, Loader2 } from 'lucide-react';

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

interface LanguageToggleProps {
  variant?: 'desktop' | 'mobile';
}

export default function LanguageToggle({ variant = 'desktop' }: LanguageToggleProps) {
  const [currentLang, setCurrentLang] = useState<'en' | 'hi'>('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pollTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to read Google Translate cookie (googtrans: /auto/hi or /auto/en or /en/hi)
  const getTransCookie = (): string => {
    if (typeof document === 'undefined') return '';
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : '';
  };

  const setTransCookie = (lang: 'en' | 'hi') => {
    const val = lang === 'hi' ? '/en/hi' : '/en/en';
    const domain = window.location.hostname;
    // Set for current host and root path
    document.cookie = `googtrans=${val}; path=/;`;
    if (domain !== 'localhost' && !domain.endsWith('.local')) {
      document.cookie = `googtrans=${val}; path=/; domain=.${domain};`;
      document.cookie = `googtrans=${val}; path=/; domain=${domain};`;
    }
    localStorage.setItem('user_selected_lang', lang);
  };

  useEffect(() => {
    setMounted(true);

    // Read saved state or cookie
    const saved = localStorage.getItem('user_selected_lang');
    const cookieVal = getTransCookie();
    if (saved === 'hi' || cookieVal.includes('/hi')) {
      setCurrentLang('hi');
    } else {
      setCurrentLang('en');
    }

    // Google Translate element initialization callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi',
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout?.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };

    // If script was already present in window
    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }

    return () => {
      if (pollTimerRef.current) clearInterval(pollTimerRef.current);
    };
  }, []);

  const triggerGoogleTranslate = (targetLang: 'en' | 'hi') => {
    if (isTranslating) return;

    // Show lightweight fast loader feedback
    setIsTranslating(true);
    setTransCookie(targetLang);
    setCurrentLang(targetLang);

    // Look for Google combo select
    const selectElem = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (selectElem) {
      selectElem.value = targetLang;
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
      // Dismiss the loader quickly within 350ms once DOM translation starts
      setTimeout(() => {
        setIsTranslating(false);
      }, 350);
      return;
    }

    // If combo isn't yet in DOM (script still initializing), poll for up to 1.5s
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const lateSelect = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (lateSelect) {
        clearInterval(interval);
        lateSelect.value = targetLang;
        lateSelect.dispatchEvent(new Event('change', { bubbles: true }));
        setTimeout(() => setIsTranslating(false), 300);
      } else if (attempts >= 8) {
        // Fallback: fast reload with cookie set
        clearInterval(interval);
        window.location.reload();
      }
    }, 120);

    pollTimerRef.current = interval;
  };

  const toggleLanguage = () => {
    const nextLang = currentLang === 'en' ? 'hi' : 'en';
    triggerGoogleTranslate(nextLang);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Hidden google translate script container */}
      <div id="google_translate_element" style={{ display: 'none', position: 'absolute', width: 0, height: 0 }} />
      <Script
        id="google-translate-script"
        strategy="lazyOnload"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />

      {/* Top fast progress bar when translating */}
      {isTranslating && <div className="trans-progress-bar" />}

      {variant === 'mobile' ? (
        <div style={{ padding: '0.4rem 1.1rem', margin: '0.2rem 0' }}>
          <button
            type="button"
            onClick={toggleLanguage}
            disabled={isTranslating}
            aria-label="Switch Language between English and Hindi"
            className="notranslate"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
              background: currentLang === 'hi' ? '#eff6ff' : '#f8fafc',
              border: '1.5px solid #cbd5e1',
              color: '#1e3c72',
              cursor: isTranslating ? 'wait' : 'pointer',
              fontWeight: 600,
              fontSize: '0.92rem',
              transition: 'all 0.2s ease',
              opacity: isTranslating ? 0.8 : 1,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isTranslating ? (
                <Loader2 size={18} color="#2563eb" className="trans-spinner" />
              ) : (
                <Globe size={18} color="#2563eb" />
              )}
              <span>
                {isTranslating
                  ? 'अनुवाद हो रहा है... / Translating...'
                  : 'भाषा / Language'}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#e2e8f0',
                borderRadius: '20px',
                padding: '2px',
                position: 'relative',
                fontSize: '0.78rem',
              }}
            >
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '16px',
                  background: currentLang === 'en' ? '#1e3c72' : 'transparent',
                  color: currentLang === 'en' ? '#ffffff' : '#64748b',
                  fontWeight: currentLang === 'en' ? 700 : 500,
                  transition: 'all 0.2s ease',
                }}
              >
                EN
              </span>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '16px',
                  background: currentLang === 'hi' ? '#1e3c72' : 'transparent',
                  color: currentLang === 'hi' ? '#ffffff' : '#64748b',
                  fontWeight: currentLang === 'hi' ? 700 : 500,
                  transition: 'all 0.2s ease',
                }}
              >
                हिंदी
              </span>
            </div>
          </button>
        </div>
      ) : (
        /* Desktop Pill Switcher */
        <button
          type="button"
          onClick={toggleLanguage}
          disabled={isTranslating}
          title={
            currentLang === 'en'
              ? 'वेबसाइट हिंदी में देखें (Switch to Hindi)'
              : 'Switch back to English'
          }
          aria-label="Toggle language between English and Hindi"
          className="notranslate"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 7px',
            background: isTranslating ? '#eff6ff' : '#f1f5f9',
            border: `1.5px solid ${isTranslating ? '#3b82f6' : '#cbd5e1'}`,
            borderRadius: '30px',
            cursor: isTranslating ? 'wait' : 'pointer',
            flexShrink: 0,
            transition: 'all 0.2s ease',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            if (!isTranslating) {
              e.currentTarget.style.borderColor = '#93c5fd';
              e.currentTarget.style.background = '#eff6ff';
            }
          }}
          onMouseLeave={(e) => {
            if (!isTranslating) {
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.background = '#f1f5f9';
            }
          }}
        >
          {isTranslating ? (
            <Loader2
              size={15}
              color="#2563eb"
              className="trans-spinner"
              style={{ marginLeft: '4px', flexShrink: 0 }}
            />
          ) : (
            <Globe
              size={15}
              color="#2563eb"
              style={{ marginLeft: '4px', flexShrink: 0 }}
            />
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.78rem' }}>
            <span
              style={{
                padding: '2px 8px',
                borderRadius: '20px',
                background: currentLang === 'en' ? '#1e3c72' : 'transparent',
                color: currentLang === 'en' ? '#ffffff' : '#64748b',
                fontWeight: currentLang === 'en' ? 700 : 600,
                transition: 'all 0.2s ease',
              }}
            >
              EN
            </span>
            <span
              style={{
                padding: '2px 8px',
                borderRadius: '20px',
                background: currentLang === 'hi' ? '#1e3c72' : 'transparent',
                color: currentLang === 'hi' ? '#ffffff' : '#64748b',
                fontWeight: currentLang === 'hi' ? 700 : 600,
                transition: 'all 0.2s ease',
              }}
            >
              हिंदी
            </span>
          </div>
        </button>
      )}
    </>
  );
}
