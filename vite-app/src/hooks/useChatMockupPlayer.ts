import { useEffect } from 'react';

/**
 * Ports nav.js's "CHAT MOCKUP PLAYER" — makes every .wa-real-body /
 * .ig-real-body / .lw-body conversation play out message-by-message
 * (typing beat before each business/agent reply) the first time it
 * scrolls into view, instead of appearing as a static screenshot.
 */
export function useChatMockupPlayer(deps: readonly unknown[] = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const bodies = Array.from(
      document.querySelectorAll<HTMLElement>('.wa-real-body, .ig-real-body, .lw-body')
    ).filter((body) => !body.closest('[data-feature-demo]'));
    if (!bodies.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function isBusinessSide(el: Element) {
      return el.classList.contains('out') || el.classList.contains('agent') || el.classList.contains('chat-card');
    }

    function typingIndicatorFor(body: HTMLElement) {
      const el = document.createElement('div');
      el.className = body.classList.contains('lw-body') ? 'lw-typing' : 'chat-typing';
      el.innerHTML = '<span></span><span></span><span></span>';
      return el;
    }

    const timers: number[] = [];
    function setTimer(fn: () => void, ms: number) {
      const id = window.setTimeout(fn, ms);
      timers.push(id);
      return id;
    }

    function playConversation(body: HTMLElement) {
      const items = Array.from(body.children) as HTMLElement[];
      if (!items.length) return;

      if (reduceMotion) {
        items.forEach((el) => el.classList.add('cm-shown'));
        return;
      }

      items.forEach((el) => el.classList.add('cm-pending'));

      let i = 0;
      function step() {
        if (i >= items.length) return;
        const el = items[i];
        const reveal = () => {
          el.classList.remove('cm-pending');
          el.classList.add('cm-shown');
          body.scrollTop = body.scrollHeight;
          i++;
          setTimer(step, isBusinessSide(el) ? 500 : 650);
        };
        if (isBusinessSide(el)) {
          const typing = typingIndicatorFor(body);
          body.insertBefore(typing, el);
          body.scrollTop = body.scrollHeight;
          setTimer(() => {
            typing.remove();
            reveal();
          }, 800 + Math.random() * 500);
        } else {
          setTimer(reveal, 300);
        }
      }
      step();
    }

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playConversation(entry.target as HTMLElement);
              observer!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      bodies.forEach((b) => observer!.observe(b));
    } else {
      bodies.forEach(playConversation);
    }

    return () => {
      observer?.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, deps);
}
