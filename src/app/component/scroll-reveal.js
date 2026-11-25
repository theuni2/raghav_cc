'use client';

import { useEffect, useState } from 'react';

export default function ScrollReveal() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Scroll Progress Bar
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. IntersectionObserver for Reveal Animations
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.08,
        }
      );

      const elements = document.querySelectorAll('.reveal, .reveal-scale');
      elements.forEach((el) => observer.observe(el));

      // Mutation observer to handle any dynamically injected elements
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          const newElements = document.querySelectorAll('.reveal:not(.is-revealed), .reveal-scale:not(.is-revealed)');
          newElements.forEach((el) => observer.observe(el));
        });
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
        mutationObserver.disconnect();
      };
    } else {
      // Fallback: Reveal all immediately
      const elements = document.querySelectorAll('.reveal, .reveal-scale');
      elements.forEach((el) => el.classList.add('is-revealed'));
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at the very top of screen */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 z-[9999] transition-all duration-150 pointer-events-none shadow-[0_0_10px_rgba(34,211,238,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
}
