import { useEffect } from 'react';

/**
 * Ports nav.js's "UNIVERSAL SCROLL REVEAL" — must run on every page.
 * Runs after each render triggered by `deps` (default: on mount only),
 * matching the original's page-load behavior.
 */
export function useScrollReveal(deps: readonly unknown[] = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealSelector = '.reveal, .reveal-stagger, .reveal-left, .reveal-right, .reveal-grow, .reveal-pop';
    const revealEls = Array.from(document.querySelectorAll(revealSelector));

    if (!revealEls.length) return;

    if (!('IntersectionObserver' in window) || reduceMotion) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, deps);
}
