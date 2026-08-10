/* ============================================================
   STEPSAI — PRICING PAGE SCRIPT
   Deliberately separate from script.js: this page doesn't need the
   Step Line, hero card rotation, agents grid, or any of the other
   homepage-only animation logic, so it doesn't load that ~58KB file.
   Nav scroll/burger/dropdowns live in the shared nav.js (loaded
   before this file). This file only has what's unique to this page:
   the billing toggle and the FAQ accordion.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- BILLING TOGGLE (monthly / annual) ---------- */
  (function initBillingToggle() {
    var stage = document.getElementById('pricingStage');
    var options = Array.prototype.slice.call(document.querySelectorAll('.billing-toggle-option'));
    if (!stage || !options.length) return;

    options.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var period = btn.getAttribute('data-period');
        options.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        stage.classList.toggle('is-annual', period === 'annual');
      });
    });
  })();

  /* ---------- FAQ ACCORDION — one open at a time ---------- */
  (function initFaq() {
    var grid = document.getElementById('pricingFaqGrid');
    if (!grid) return;
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
  })();
})();
