import { useEffect, useRef, useState } from 'react';

/**
 * Ports agents.js's step-1 typewriter: the website URL types itself into the
 * setup field the first time the setup section is 40% visible (whole string
 * over 900ms), or appears instantly under prefers-reduced-motion. The tab
 * wiring from the same file is component state, so this hook is all that is
 * left of it.
 */
export function useSetupUrlTyping(url: string) {
  const sectionRef = useRef<HTMLElement>(null);
  const [typedUrl, setTypedUrl] = useState('');

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let started = false;
    let timer: number | undefined;

    function start() {
      if (started) return;
      started = true;
      if (reduceMotion) {
        setTypedUrl(url);
        return;
      }
      const stepTime = 900 / url.length;
      let i = 0;
      function tick() {
        setTypedUrl(url.slice(0, i));
        i++;
        if (i <= url.length) timer = window.setTimeout(tick, stepTime);
      }
      tick();
    }

    const section = sectionRef.current;
    if (section && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start();
          });
        },
        { threshold: 0.4 }
      );
      obs.observe(section);
      return () => {
        obs.disconnect();
        if (timer) window.clearTimeout(timer);
      };
    }

    start();
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [url]);

  return { sectionRef, typedUrl };
}
