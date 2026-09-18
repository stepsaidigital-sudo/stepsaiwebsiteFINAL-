import { useEffect, type RefObject } from 'react';

/**
 * Ports nav.js's scroll state, mobile burger menu, and Product/Solutions/
 * Resources dropdown behavior (click + hover-intent, single-open-at-a-time,
 * outside-click / Escape / blur to close) 1:1 from the original vanilla JS,
 * scoped to this Nav instance via `navRef` instead of `document.getElementById`.
 */
export function useNavBehavior(navRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    /* ---------- SCROLL STATE ---------- */
    function onScroll() {
      if (window.scrollY > 40) {
        nav!.classList.add('scrolled');
      } else {
        nav!.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- MOBILE MENU ---------- */
    const burger = nav.querySelector<HTMLButtonElement>('#navBurger');
    function onBurgerClick() {
      const isOpen = nav!.classList.toggle('open');
      burger?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      closeAllDropdowns();
    }
    burger?.addEventListener('click', onBurgerClick);

    const mobileLinks = Array.from(nav.querySelectorAll('.nav-mobile a, .nav-mobile button'));
    function onMobileLinkClick() {
      nav!.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    mobileLinks.forEach((link) => link.addEventListener('click', onMobileLinkClick));

    function onKeydownEscMobile(e: KeyboardEvent) {
      if (e.key === 'Escape' && nav!.classList.contains('open')) {
        nav!.classList.remove('open');
        burger?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
    document.addEventListener('keydown', onKeydownEscMobile);

    /* ---------- DROPDOWNS ---------- */
    const dropdowns = Array.from(nav.querySelectorAll<HTMLElement>('.nav-dropdown'));
    const HOVER_INTENT_DELAY = 150;
    const CLOSE_INTENT_DELAY = 300;
    let hoverTimer: number | undefined;

    function syncMenuOpenState() {
      const anyOpen = dropdowns.some((d) => d.classList.contains('is-open'));
      nav!.classList.toggle('menu-open', anyOpen);
    }

    function openDropdown(dropdown: HTMLElement, trigger: Element) {
      if (dropdown.classList.contains('is-open')) return;
      closeAllDropdowns();
      dropdown.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      syncMenuOpenState();
    }

    function closeAllDropdowns() {
      dropdowns.forEach((d) => {
        d.classList.remove('is-open');
        d.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
      syncMenuOpenState();
    }

    const dropdownCleanups: Array<() => void> = [];
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector('.nav-dropdown-trigger');
      if (!trigger) return;
      let closeTimer: number | undefined;

      function onTriggerClick(e: Event) {
        e.stopPropagation();
        window.clearTimeout(hoverTimer);
        window.clearTimeout(closeTimer);
        const isOpen = dropdown.classList.contains('is-open');
        closeAllDropdowns();
        if (!isOpen) openDropdown(dropdown, trigger!);
      }
      function onMouseEnter() {
        window.clearTimeout(hoverTimer);
        window.clearTimeout(closeTimer);
        hoverTimer = window.setTimeout(() => openDropdown(dropdown, trigger!), HOVER_INTENT_DELAY);
      }
      function onMouseLeave() {
        window.clearTimeout(hoverTimer);
        window.clearTimeout(closeTimer);
        closeTimer = window.setTimeout(() => {
          dropdown.classList.remove('is-open');
          trigger!.setAttribute('aria-expanded', 'false');
          syncMenuOpenState();
        }, CLOSE_INTENT_DELAY);
      }

      trigger.addEventListener('click', onTriggerClick);
      dropdown.addEventListener('mouseenter', onMouseEnter);
      dropdown.addEventListener('mouseleave', onMouseLeave);
      dropdownCleanups.push(() => {
        trigger.removeEventListener('click', onTriggerClick);
        dropdown.removeEventListener('mouseenter', onMouseEnter);
        dropdown.removeEventListener('mouseleave', onMouseLeave);
        window.clearTimeout(closeTimer);
      });
    });

    document.addEventListener('click', closeAllDropdowns);
    function onFocusOut(e: FocusEvent) {
      dropdowns.forEach((d) => {
        if (!d.contains(e.relatedTarget as Node)) {
          d.classList.remove('is-open');
          d.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });
      syncMenuOpenState();
    }
    document.addEventListener('focusout', onFocusOut);
    function onKeydownEscDropdowns(e: KeyboardEvent) {
      if (e.key === 'Escape') closeAllDropdowns();
    }
    document.addEventListener('keydown', onKeydownEscDropdowns);

    return () => {
      window.removeEventListener('scroll', onScroll);
      burger?.removeEventListener('click', onBurgerClick);
      mobileLinks.forEach((link) => link.removeEventListener('click', onMobileLinkClick));
      document.removeEventListener('keydown', onKeydownEscMobile);
      dropdownCleanups.forEach((fn) => fn());
      document.removeEventListener('click', closeAllDropdowns);
      document.removeEventListener('focusout', onFocusOut);
      document.removeEventListener('keydown', onKeydownEscDropdowns);
      window.clearTimeout(hoverTimer);
      document.body.style.overflow = '';
    };
  }, [navRef]);
}
