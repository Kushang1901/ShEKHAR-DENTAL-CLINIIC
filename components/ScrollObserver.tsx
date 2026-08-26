'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Add JS indicator class to documentElement
    document.documentElement.classList.add('js-scroll-reveal');

    // Create an intersection observer with a subtle horizon offset
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before it hits bottom of horizon
      threshold: 0.08, // Trigger when 8% of the section is visible
    };

    const handleIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, unobserve to keep it permanently visible & preserve performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Function to find and observe all relevant elements
    const observeElements = () => {
      const targets = document.querySelectorAll<HTMLElement>(
        'section:not(.no-reveal), .reveal-on-scroll, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-zoom'
      );

      targets.forEach((el) => {
        // If element is already above or within the initial viewport, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    // Run after a short tick to ensure DOM is settled after page navigation
    const timeoutId = setTimeout(observeElements, 50);

    // Also observe on resize in case layout changes
    window.addEventListener('resize', observeElements, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('resize', observeElements);
    };
  }, [pathname]);

  return null;
}
