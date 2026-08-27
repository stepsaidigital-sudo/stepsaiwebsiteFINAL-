/* ============================================================
   STEPSAI — AGENTS PAGE SCRIPT
   nav.js (nav) and industries.js (reveal, count-up, wf-canvas
   player, faq accordion) load before this file. This file only
   has what's unique here: the setup-step tabs and workflow tabs.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function wireTabs(tabSelector, panelSelector, root) {
    var scope = root || document;
    var tabs = Array.prototype.slice.call(scope.querySelectorAll(tabSelector));
    var panels = Array.prototype.slice.call(scope.querySelectorAll(panelSelector));
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var key = tab.getAttribute('data-tab');
        tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });
        panels.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-panel') === key); });
      });
    });
  }

  wireTabs('.setup-tab-btn', '.setup-tab-panel');
  wireTabs('.wflow-tab', '.wflow-panel');

  /* Type the website URL into the setup step-1 field once it's visible */
  var setupUrlEl = document.getElementById('setupTeachUrl');
  if (setupUrlEl) {
    var typed = false;
    function typeUrl() {
      if (typed) return;
      typed = true;
      var text = 'https://nyrastore.com';
      if (reduceMotion) { setupUrlEl.textContent = text; return; }
      var i = 0, stepTime = 900 / text.length;
      (function tick() {
        setupUrlEl.textContent = text.slice(0, i);
        i++;
        if (i <= text.length) setTimeout(tick, stepTime);
      })();
    }
    var setupSection = setupUrlEl.closest('section');
    if (setupSection && 'IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (entry.isIntersecting) typeUrl(); });
      }, { threshold: 0.4 });
      obs.observe(setupSection);
    } else {
      typeUrl();
    }
  }
})();
