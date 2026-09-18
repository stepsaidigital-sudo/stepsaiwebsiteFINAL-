import { useEffect } from 'react';

/**
 * Ports industries.js's COUNT-UP and generic data-attribute-driven WORKFLOW
 * CANVAS player (shared across all industry-*.html pages). Reveal-on-scroll
 * and the FAQ accordion from the same file are handled by useScrollReveal
 * and <FaqItem> respectively, so this hook only covers what those don't.
 */
export function useIndustryPageBehavior(deps: readonly unknown[] = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];

    /* ---------- COUNT-UP ---------- */
    function animateCount(el: Element) {
      const target = parseFloat(el.getAttribute('data-count') || '');
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
      if (reduceMotion || isNaN(target)) {
        el.textContent = prefix + target.toFixed(decimals) + suffix;
        return;
      }
      const duration = 1400;
      let start: number | null = null;
      function step(ts: number) {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    document.querySelectorAll('[data-count-container]').forEach((container) => {
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.querySelectorAll('[data-count]').forEach(animateCount);
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.4 }
        );
        obs.observe(container);
        cleanups.push(() => obs.disconnect());
      } else {
        container.querySelectorAll('[data-count]').forEach(animateCount);
      }
    });

    /* ---------- WORKFLOW CANVAS — generic, data-attribute driven ---------- */
    function initWorkflowCanvas(canvas: Element) {
      const els = Array.from(canvas.querySelectorAll<HTMLElement>('[data-wf-step]'));
      if (!els.length) return;
      const maxStep = els.reduce((m, el) => Math.max(m, parseInt(el.getAttribute('data-wf-step') || '0', 10)), 1);
      const DWELL = 1000;
      const PAUSE = 1400;
      let current = 0;
      let timer: number | undefined;

      function clearAll() {
        els.forEach((el) => el.classList.remove('pulse', 'active', 'visited'));
      }
      function applyUpTo(step: number) {
        els.forEach((el) => {
          const s = parseInt(el.getAttribute('data-wf-step') || '0', 10);
          const isNode = el.classList.contains('wf-node');
          if (s < step) {
            if (isNode) {
              el.classList.remove('pulse');
              el.classList.add('visited');
            } else el.classList.add('active');
          } else if (s === step) {
            if (isNode) el.classList.add('pulse');
            else el.classList.add('active');
          }
        });
      }
      function tick() {
        current++;
        if (current > maxStep) {
          clearAll();
          current = 0;
          timer = window.setTimeout(tick, PAUSE);
          return;
        }
        applyUpTo(current);
        timer = window.setTimeout(tick, DWELL);
      }
      function start() {
        stop();
        if (!reduceMotion) tick();
      }
      function stop() {
        if (timer) window.clearTimeout(timer);
      }

      if (reduceMotion) {
        applyUpTo(maxStep);
      } else if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
          },
          { threshold: 0.35 }
        );
        obs.observe(canvas);
        cleanups.push(() => {
          obs.disconnect();
          stop();
        });
      } else {
        start();
        cleanups.push(stop);
      }
    }
    document.querySelectorAll('.wf-canvas').forEach(initWorkflowCanvas);

    return () => cleanups.forEach((fn) => fn());
  }, deps);
}
