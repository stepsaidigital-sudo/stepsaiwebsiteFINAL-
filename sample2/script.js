// StepsAI — Sample 2 interactivity: scroll-reveal, channel tabs, FAQ accordion.
// No dependencies, no build step — matches Sample 1's plain JS approach.

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ---- Channel tabs ----
  var tabs = document.querySelectorAll('.channel-tab');
  var panels = document.querySelectorAll('.channel-panel');

  function activateTab(tab) {
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute('aria-selected', selected ? 'true' : 'false');
    });
    panels.forEach(function (p) {
      p.hidden = p.id !== 'panel-' + tab.dataset.channel;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { activateTab(tab); });
    tab.addEventListener('keydown', function (e) {
      var idx = Array.prototype.indexOf.call(tabs, tab);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        var next = tabs[(idx + 1) % tabs.length];
        next.focus();
        activateTab(next);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        var prev = tabs[(idx - 1 + tabs.length) % tabs.length];
        prev.focus();
        activateTab(prev);
      }
    });
  });

  // ---- FAQ accordion ----
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var isOpen = item.dataset.open === 'true';
      // close all
      faqItems.forEach(function (other) {
        other.dataset.open = 'false';
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        other.querySelector('.chev').textContent = '+';
      });
      // open this one unless it was already open (toggle)
      if (!isOpen) {
        item.dataset.open = 'true';
        btn.setAttribute('aria-expanded', 'true');
        item.querySelector('.chev').textContent = '−';
      }
    });
  });
  // initialize chevron glyphs to match default-open first item
  faqItems.forEach(function (item) {
    item.querySelector('.chev').textContent = item.dataset.open === 'true' ? '−' : '+';
  });

})();
