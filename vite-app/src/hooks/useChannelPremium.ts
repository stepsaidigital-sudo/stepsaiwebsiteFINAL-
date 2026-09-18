import { useEffect } from 'react';

/**
 * Ports channel-premium.js: gates the "bold" direction's ambient drift
 * animation to .glass-stage--bold elements currently on screen. No-ops for
 * reduced-motion or pages with no such element.
 */
export function useChannelPremium(deps: readonly unknown[] = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stages = document.querySelectorAll('.glass-stage--bold');
    if (reduceMotion || !stages.length || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('in-view', entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    stages.forEach((stage) => io.observe(stage));
    return () => io.disconnect();
  }, deps);
}
