import { useEffect } from 'react';

/**
 * Ports nav.js's "USE-CASE CARD GRID" (staggered reveal for .usecase-group-list
 * rows) and "CAPABILITY SHOWCASE" (sticky mockup that swaps to match the
 * nearest-to-viewport .usecase-row, scroll-position based) plus the generic
 * [data-parallax] smoothed-parallax effect. Used by role-*.html pages, which
 * load only nav.js (no industries.js) for this behavior.
 */
export function useCapabilityShowcase(deps: readonly unknown[] = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];

    /* ---------- USE-CASE CARD GRID ---------- */
    const groups = Array.from(document.querySelectorAll<HTMLElement>('.usecase-group-list'));
    if (groups.length) {
      groups.forEach((group) => {
        Array.from(group.children).forEach((row, i) => {
          (row as HTMLElement).style.setProperty('--i', String(i));
        });
      });
      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
        );
        groups.forEach((g) => obs.observe(g));
        cleanups.push(() => obs.disconnect());
      } else {
        groups.forEach((g) => g.classList.add('is-visible'));
      }
    }

    /* ---------- CAPABILITY SHOWCASE ---------- */
    const blocks = Array.from(document.querySelectorAll<HTMLElement>('.capability-showcase'));
    if (blocks.length) {
      const BODY_TYPE: Record<string, string> = {
        calendar: 'booking', reschedule: 'booking', bell: 'booking',
        chat: 'chat', compass: 'chat', search: 'chat',
        form: 'form', id: 'form', note: 'form',
        receipt: 'confirm', tag: 'confirm', cash: 'confirm', check: 'confirm', chart: 'confirm',
        alert: 'alert', shield: 'alert', handoff: 'alert',
      };
      const CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
      const ALERT_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L2 20H22L12 3Z"/><path d="M12 9V13M12 16.5V17"/></svg>';
      const STEPS: Record<string, string[]> = {
        booking: ['Customer asks for a time', 'Live calendar is checked, not a guess', 'Slot is confirmed instantly'],
        chat: ['Question comes in on any channel', 'Answered from your approved info only', 'Resolved without waiting in a queue'],
        form: ['Details collected inside the conversation', 'Synced straight to your system', 'No separate form, no drop-off'],
        confirm: ['Action is completed', 'Confirmation sent the same second', 'Recorded for your team automatically'],
        alert: ['Trigger phrase is detected', 'Routine flow pauses immediately', 'Handed to a person with full context'],
        generic: ['Request comes in on any channel', 'Handled using your approved info', 'Logged for your team automatically'],
      };
      const CHANNEL_ICONS = [
        '<svg viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M17.472 14.383c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0012.05 0Z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12H21M12 3C14.5 5.5 15.8 8.6 15.8 12C15.8 15.4 14.5 18.5 12 21C9.5 18.5 8.2 15.4 8.2 12C8.2 8.6 9.5 5.5 12 3Z"/></svg>',
      ];
      const CHANNELS_ROW = '<div class="cap-channels"><span class="cap-channels-label">Works on</span>' +
        CHANNEL_ICONS.map((svg) => `<span class="cap-channel-icon">${svg}</span>`).join('') +
        '</div>';

      function renderSteps(type: string) {
        const steps = STEPS[type] || STEPS.generic;
        return '<ol class="cap-steps">' + steps.map((s, i) => `<li class="cap-step"><span class="cap-step-num">${i + 1}</span>${s}</li>`).join('') + '</ol>';
      }
      function renderBody(type: string) {
        if (type === 'booking') return '<div class="cap-slots"><span class="cap-slot">Today, 2:00 PM</span><span class="cap-slot">Tomorrow, 11:00 AM</span><span class="cap-slot">Fri, 4:30 PM</span></div>';
        if (type === 'chat') return '<div class="cap-chat"><div class="cap-chat-bubble q">Quick question, right here</div><div class="cap-chat-bubble a">Answered instantly, every time</div></div>';
        if (type === 'form') return '<div class="cap-fields"><div class="cap-field"><span>Name</span><span></span></div><div class="cap-field"><span>Contact</span><span></span></div><div class="cap-field"><span>Details</span><span></span></div></div>';
        if (type === 'confirm') return `<div class="cap-confirm">${CHECK_SVG}<span>Confirmed automatically</span></div>`;
        if (type === 'alert') return `<div class="cap-alert">${ALERT_SVG}<span>Escalates to your team when it should</span></div>`;
        return '';
      }

      function initShowcase(block: HTMLElement) {
        const visual = block.querySelector<HTMLElement>('.capability-visual');
        const rows = Array.from(block.querySelectorAll<HTMLElement>('.usecase-row'));
        if (!visual || !rows.length) return;

        const bgPhoto = block.getAttribute('data-visual-bg');
        let current = -1;
        let target = -1;
        let swapping = false;
        const EXIT_MS = 220;

        function buildFrame(idx: number) {
          const row = rows[idx];
          const numEl = row.querySelector('.usecase-row-num');
          const titleEl = row.querySelector('.usecase-row-title');
          const descEl = row.querySelector('.usecase-row-desc');
          if (!numEl || !titleEl || !descEl) return null;
          const cat = row.getAttribute('data-cat') || '';
          const type = BODY_TYPE[cat] || 'generic';
          const frame = document.createElement('div');
          frame.className = 'cap-frame' + (type === 'generic' ? ' is-generic' : '') + (bgPhoto ? ' has-photo' : '');
          if (bgPhoto) frame.style.backgroundImage = `url('${bgPhoto}')`;
          frame.innerHTML = `<div class="cap-frame-icon">${numEl.innerHTML}</div>` +
            `<h4 class="cap-frame-title">${titleEl.textContent}</h4>` +
            `<p class="cap-frame-desc">${descEl.textContent}</p>` +
            (type !== 'generic' ? `<div class="cap-frame-visual">${renderBody(type)}</div>` : '') +
            renderSteps(type) + CHANNELS_ROW;
          return frame;
        }

        function showFrame(idx: number) {
          const frame = buildFrame(idx);
          if (!frame) return;
          visual!.innerHTML = '';
          if (reduceMotion) {
            visual!.appendChild(frame);
            return;
          }
          frame.classList.add('cap-enter');
          visual!.appendChild(frame);
          void frame.offsetWidth;
          requestAnimationFrame(() => frame.classList.remove('cap-enter'));
        }

        let swapTimer: number | undefined;
        function setActive(idx: number) {
          if (idx < 0 || idx >= rows.length || (idx === current && !swapping)) return;
          target = idx;
          rows.forEach((r, i) => r.classList.toggle('is-active', i === idx));

          if (current === -1 || reduceMotion) {
            current = target;
            showFrame(current);
            return;
          }
          if (swapping) return;
          swapping = true;
          const existing = visual!.querySelector('.cap-frame');
          if (existing) existing.classList.add('cap-exit');

          window.clearTimeout(swapTimer);
          swapTimer = window.setTimeout(() => {
            current = target;
            showFrame(current);
            swapping = false;
            if (target !== current) setActive(target);
          }, EXIT_MS);
        }

        const rowHandlers: Array<{ row: HTMLElement; onClick: () => void; onEnter: () => void }> = [];
        rows.forEach((row, idx) => {
          row.style.cursor = 'pointer';
          const onClick = () => setActive(idx);
          const onEnter = () => setActive(idx);
          row.addEventListener('click', onClick);
          row.addEventListener('mouseenter', onEnter);
          rowHandlers.push({ row, onClick, onEnter });
        });

        let ticking = false;
        function computeActive() {
          ticking = false;
          const firstRect = rows[0].getBoundingClientRect();
          const lastRect = rows[rows.length - 1].getBoundingClientRect();
          if (lastRect.bottom < 0 || firstRect.top > window.innerHeight) return;
          const line = window.innerHeight * 0.44;
          let best = -1;
          let bestDist = Infinity;
          for (let i = 0; i < rows.length; i++) {
            const rect = rows[i].getBoundingClientRect();
            const mid = rect.top + rect.height / 2;
            const dist = Math.abs(mid - line);
            if (dist < bestDist) {
              bestDist = dist;
              best = i;
            }
          }
          if (best >= 0) setActive(best);
        }
        function onScroll() {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(computeActive);
          }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        setActive(0);
        computeActive();

        cleanups.push(() => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
          window.clearTimeout(swapTimer);
          rowHandlers.forEach(({ row, onClick, onEnter }) => {
            row.removeEventListener('click', onClick);
            row.removeEventListener('mouseenter', onEnter);
          });
        });
      }

      blocks.forEach(initShowcase);
    }

    /* ---------- SMOOTHED PARALLAX ---------- */
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    if (parallaxEls.length && !reduceMotion) {
      const parallaxState = parallaxEls.map((el) => ({
        el,
        strength: parseFloat(el.getAttribute('data-parallax') || '') || 0.15,
        smoothing: parseFloat(el.getAttribute('data-parallax-smoothing') || '') || 0.08,
        current: 0,
      }));
      let rafId: number;
      (function parallaxLoop() {
        const y = window.scrollY || window.pageYOffset;
        parallaxState.forEach((state) => {
          const target = y * state.strength;
          state.current += (target - state.current) * state.smoothing;
          state.el.style.transform = `translate3d(0, ${state.current.toFixed(2)}px, 0)`;
        });
        rafId = requestAnimationFrame(parallaxLoop);
      })();
      cleanups.push(() => cancelAnimationFrame(rafId));
    }

    return () => cleanups.forEach((fn) => fn());
  }, deps);
}
