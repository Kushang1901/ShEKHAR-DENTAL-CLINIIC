'use client';

import React from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom';
  delay?: number; // Delay in milliseconds
  stagger?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span';
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay,
  stagger = false,
  className = '',
  as: Component = 'div',
  style,
  ...props
}: ScrollRevealProps) {
  const variantClass =
    variant === 'fade-left'
      ? 'reveal-fade-left'
      : variant === 'fade-right'
      ? 'reveal-fade-right'
      : variant === 'zoom'
      ? 'reveal-zoom'
      : 'reveal-fade-up';

  const staggerClass = stagger ? 'reveal-stagger' : '';
  const combinedClassName = `reveal-on-scroll ${variantClass} ${staggerClass} ${className}`.trim();

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };

  const ComponentTag = Component as any;

  return (
    <ComponentTag className={combinedClassName} style={combinedStyle} {...props}>
      {children}
    </ComponentTag>
  );
}
