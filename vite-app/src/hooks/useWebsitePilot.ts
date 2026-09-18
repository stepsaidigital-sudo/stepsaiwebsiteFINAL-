import { useCallback, useEffect, useRef, useState } from 'react';

const PART_COUNT = 4;
const STEP_COUNT = 3;

/** `-1` is the reset frame website-pilot.js paints before the first timer fires: every part pending, no step active. */
const RESET = -1;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Ports website-pilot.js (channel-website.html only): the scroll-triggered
 * "question becomes a booking" story player, its step/replay controls, and the
 * hero's scroll-to-demo action. The page's FAQ accordion from the same file is
 * plain component state and stays in the page.
 *
 * `completed` is the index of the last revealed [data-wp-demo-part]; parts past
 * it are pending and step `min(completed, STEP_COUNT - 1)` is active.
 */
export function useWebsitePilot() {
  const storyRef = useRef<HTMLElement | null>(null);
  const timersRef = useRef<number[]>([]);
  const playedRef = useRef(false);
  const [completed, setCompleted] = useState(PART_COUNT - 1);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }, []);

  const playStory = useCallback(() => {
    clearTimers();
    if (prefersReducedMotion()) {
      setCompleted(PART_COUNT - 1);
      return;
    }
    setCompleted(RESET);
    for (let index = 0; index < PART_COUNT; index++) {
      timersRef.current.push(window.setTimeout(() => setCompleted(index), 260 + index * 560));
    }
  }, [clearTimers]);

  const selectStep = useCallback(
    (index: number) => {
      clearTimers();
      setCompleted(index === 0 ? 0 : index === 1 ? 1 : PART_COUNT - 1);
    },
    [clearTimers]
  );

  const scrollToDemo = useCallback(() => {
    document.getElementById('wp-live-demo')?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  useEffect(() => {
    const story = storyRef.current;
    if (!story || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio > 0.28 && !playedRef.current) {
          playedRef.current = true;
          playStory();
        } else if (!entry.isIntersecting) {
          clearTimers();
          setCompleted(PART_COUNT - 1);
        }
      },
      { threshold: [0, 0.28, 0.65] }
    );
    observer.observe(story);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [playStory, clearTimers]);

  const activeStep = Math.min(completed, STEP_COUNT - 1);

  return { storyRef, completed, activeStep, playStory, selectStep, scrollToDemo };
}
