'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  formatWithCommas?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  suffix = '+',
  prefix = '',
  formatWithCommas = true,
  className = '',
  style,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic ease-out slowdown
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOutProgress * target);

        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    };

    // If element is already in viewport on mount (e.g. Hero section)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      const timer = setTimeout(startAnimation, 150);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  const displayValue = formatWithCommas
    ? count.toLocaleString('en-IN')
    : count.toString();

  return (
    <span ref={containerRef} className={className} style={style}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
