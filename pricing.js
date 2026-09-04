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

  /* ---------- INTERACTIVE ROI CALCULATOR ---------- */
  (function initRoiCalculator() {
    var inqSlider = document.getElementById('roiInquiries');
    var inqDisplay = document.getElementById('roiInquiriesVal');
    var valSlider = document.getElementById('roiOrderVal');
    var valDisplay = document.getElementById('roiOrderValDisplay');
    var monthlyRev = document.getElementById('roiMonthlyRev');
    var hoursSaved = document.getElementById('roiHoursSaved');
    var roiMultiplier = document.getElementById('roiRoiMultiplier');
    var recPlan = document.getElementById('roiRecPlan');
    var indPills = Array.prototype.slice.call(document.querySelectorAll('.roi-ind-pill'));

    if (!inqSlider || !valSlider || !monthlyRev) return;

    var currentRate = 0.18; // Default E-Commerce recovery rate

    function formatINR(num) {
      return num.toLocaleString('en-IN');
    }

    function calculate() {
      var inquiries = parseInt(inqSlider.value, 10);
      var avgVal = parseInt(valSlider.value, 10);

      // Conversions recovered
      var convertedOrders = inquiries * currentRate;
      var totalRevenue = Math.round(convertedOrders * avgVal);

      // Hours saved: ~3.5 min per complex inquiry resolution
      var hours = Math.round((inquiries * 3.5) / 60);

      // Plan determination
      var planName = "Starter (₹2,499/mo)";
      var planCost = 2499;
      if (inquiries > 15000) {
        planName = "Enterprise (Custom)";
        planCost = 35000;
      } else if (inquiries > 5000) {
        planName = "Scale (₹18,999/mo)";
        planCost = 18999;
      } else if (inquiries > 1000) {
        planName = "Growth (₹6,999/mo)";
        planCost = 6999;
      }

      var roi = (totalRevenue / planCost).toFixed(1);

      inqDisplay.textContent = formatINR(inquiries) + ' / mo';
      valDisplay.textContent = '₹' + formatINR(avgVal);
      monthlyRev.textContent = formatINR(totalRevenue);
      if (hoursSaved) hoursSaved.textContent = formatINR(hours) + ' hrs';
      if (roiMultiplier) roiMultiplier.textContent = roi + 'x';
      if (recPlan) recPlan.textContent = planName;
    }

    inqSlider.addEventListener('input', calculate);
    valSlider.addEventListener('input', calculate);

    indPills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        indPills.forEach(function (p) { p.classList.remove('is-active'); });
        pill.classList.add('is-active');
        currentRate = parseFloat(pill.getAttribute('data-rate')) || 0.18;
        calculate();
      });
    });

    calculate();
  })();
})();
