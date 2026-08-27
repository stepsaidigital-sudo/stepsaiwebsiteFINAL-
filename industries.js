/* ============================================================
   STEPSAI — INDUSTRY PAGES SCRIPT (shared across industry-*.html)
   Nav lives in nav.js (loaded before this file). This file: generic
   reveal-on-scroll, count-up, a data-attribute-driven workflow
   canvas player (reusable for any industry's automation example —
   just mark elements with data-wf-step="N", nodes need the .wf-node
   class), and the standard FAQ accordion.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- REVEAL ON SCROLL ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- COUNT-UP ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    if (reduceMotion || isNaN(target)) {
      el.textContent = prefix + target.toFixed(decimals) + suffix;
      return;
    }
    var duration = 1400, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  document.querySelectorAll('[data-count-container]').forEach(function (container) {
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-count]').forEach(animateCount);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      obs.observe(container);
    } else {
      container.querySelectorAll('[data-count]').forEach(animateCount);
    }
  });

  /* ---------- WORKFLOW CANVAS — generic, data-attribute driven ---------- */
  function initWorkflowCanvas(canvas) {
    var els = Array.prototype.slice.call(canvas.querySelectorAll('[data-wf-step]'));
    if (!els.length) return;
    var maxStep = els.reduce(function (m, el) { return Math.max(m, parseInt(el.getAttribute('data-wf-step'), 10)); }, 1);
    var DWELL = 1000, PAUSE = 1400;
    var current = 0, timer = null;

    function clearAll() { els.forEach(function (el) { el.classList.remove('pulse', 'active', 'visited'); }); }
    function applyUpTo(step) {
      els.forEach(function (el) {
        var s = parseInt(el.getAttribute('data-wf-step'), 10);
        var isNode = el.classList.contains('wf-node');
        if (s < step) {
          if (isNode) { el.classList.remove('pulse'); el.classList.add('visited'); }
          else el.classList.add('active');
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
        timer = setTimeout(tick, PAUSE);
        return;
      }
      applyUpTo(current);
      timer = setTimeout(tick, DWELL);
    }
    function start() { stop(); if (!reduceMotion) tick(); }
    function stop() { if (timer) clearTimeout(timer); }

    if (reduceMotion) {
      applyUpTo(maxStep);
    } else if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { entry.isIntersecting ? start() : stop(); });
      }, { threshold: 0.35 });
      obs.observe(canvas);
    } else {
      start();
    }
  }
  document.querySelectorAll('.wf-canvas').forEach(initWorkflowCanvas);

  /* ---------- FAQ ACCORDION — same pattern as pages.js / pricing.js ---------- */
  Array.prototype.slice.call(document.querySelectorAll('.faq-grid')).forEach(function (grid) {
    var items = Array.prototype.slice.call(grid.querySelectorAll('.faq-item'));
    items.forEach(function (item) {
      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;
      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        items.forEach(function (other) {
          other.classList.remove('is-open');
          var otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = '0px';
        });
        if (!isOpen) {
          item.classList.add('is-open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });
})();
