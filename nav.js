/* ============================================================
   STEPSAI — SHARED NAV
   Loaded on every page, before that page's own script. Handles the
   one nav that's identical everywhere: scroll state, the mobile
   burger menu, and the Product/Solutions dropdowns. Kept out of
   script.js/pricing.js/pages.js so this logic exists exactly once
   instead of once per page.
   ============================================================ */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  if (!nav) return;

  /* ---------- SCROLL STATE ---------- */
  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- MOBILE MENU ---------- */
  var burger = document.getElementById('navBurger');
  if (burger) {
    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      /* Body scroll lock while the mobile panel is open — per spec.
         Full focus-trap is a follow-up; Escape-to-close already works
         via the keydown handler below. */
      document.body.style.overflow = isOpen ? 'hidden' : '';
      closeAllDropdowns();
    });
  }
  Array.prototype.slice.call(document.querySelectorAll('.nav-mobile a, .nav-mobile button')).forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      if (burger) burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      if (burger) burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ---------- PRODUCT / SOLUTIONS / RESOURCES DROPDOWNS ----------
     Opens on click/tap (works the same on mouse, keyboard, and touch)
     AND on hover with a 150ms intent delay (so a fast mouse pass-over
     doesn't flash every panel open). Only one open at a time; closes
     on outside click, Escape, blur, or picking a link. Generic over
     every .nav-dropdown, so adding Resources needed no new JS. */
  var dropdowns = Array.prototype.slice.call(document.querySelectorAll('.nav-dropdown'));
  var HOVER_INTENT_DELAY = 150;
  var hoverTimer = null;

  function openDropdown(dropdown, trigger) {
    if (dropdown.classList.contains('is-open')) return;
    closeAllDropdowns();
    dropdown.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
  }

  function closeAllDropdowns() {
    dropdowns.forEach(function (d) {
      d.classList.remove('is-open');
      var trigger = d.querySelector('.nav-dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  dropdowns.forEach(function (dropdown) {
    var trigger = dropdown.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.contains('is-open');
      closeAllDropdowns();
      if (!isOpen) openDropdown(dropdown, trigger);
    });

    dropdown.addEventListener('mouseenter', function () {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(function () { openDropdown(dropdown, trigger); }, HOVER_INTENT_DELAY);
    });
    dropdown.addEventListener('mouseleave', function () {
      clearTimeout(hoverTimer);
      dropdown.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', closeAllDropdowns);
  document.addEventListener('focusout', function (e) {
    dropdowns.forEach(function (d) {
      if (!d.contains(e.relatedTarget)) {
        d.classList.remove('is-open');
        var trigger = d.querySelector('.nav-dropdown-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllDropdowns();
  });
})();
