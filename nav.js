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
      closeAllDropdowns();
    });
  }
  Array.prototype.slice.call(document.querySelectorAll('.nav-mobile a, .nav-mobile button')).forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      if (burger) burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- PRODUCT / SOLUTIONS DROPDOWNS ----------
     Click/tap to open (not hover-only) so this works the same on
     mouse, keyboard, and touch. Only one open at a time; closes on
     outside click, Escape, or picking a link. */
  var dropdowns = Array.prototype.slice.call(document.querySelectorAll('.nav-dropdown'));

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
      if (!isOpen) {
        dropdown.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', closeAllDropdowns);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllDropdowns();
  });
})();
