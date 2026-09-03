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

/* ============================================================
   CHAT MOCKUP PLAYER — makes every .wa-real-body / .ig-real-body /
   .lw-body conversation on the site play out message-by-message
   instead of appearing as a static screenshot: a brief "typing…"
   beat before each business/agent reply, then the message lands and
   the thread scrolls to it, same as a real chat. Runs once per
   mockup the first time it scrolls into view. No script tag needed
   per page — this lives in nav.js, which every page already loads,
   and no-ops instantly if a page has no mockups.
   ============================================================ */
(function () {
  'use strict';

  var bodies = Array.prototype.slice.call(document.querySelectorAll('.wa-real-body, .ig-real-body, .lw-body'));
  if (!bodies.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function isBusinessSide(el) {
    return el.classList.contains('out') || el.classList.contains('agent') || el.classList.contains('chat-card');
  }

  function typingIndicatorFor(body) {
    var el = document.createElement('div');
    el.className = body.classList.contains('lw-body') ? 'lw-typing' : 'chat-typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    return el;
  }

  function playConversation(body) {
    var items = Array.prototype.slice.call(body.children);
    if (!items.length) return;

    if (reduceMotion) {
      items.forEach(function (el) { el.classList.add('cm-shown'); });
      return;
    }

    items.forEach(function (el) { el.classList.add('cm-pending'); });

    var i = 0;
    function step() {
      if (i >= items.length) return;
      var el = items[i];
      var reveal = function () {
        el.classList.remove('cm-pending');
        el.classList.add('cm-shown');
        body.scrollTop = body.scrollHeight;
        i++;
        setTimeout(step, isBusinessSide(el) ? 500 : 650);
      };
      if (isBusinessSide(el)) {
        var typing = typingIndicatorFor(body);
        body.insertBefore(typing, el);
        body.scrollTop = body.scrollHeight;
        setTimeout(function () {
          typing.remove();
          reveal();
        }, 800 + Math.random() * 500);
      } else {
        setTimeout(reveal, 300);
      }
    }
    step();
  }

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          playConversation(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    bodies.forEach(function (b) { obs.observe(b); });
  } else {
    bodies.forEach(playConversation);
  }
})();

/* ============================================================
   USE-CASE CARD GRID — staggered reveal-on-scroll for the
   .usecase-group-list capability grids (industry-*.html and
   role-*.html pages, which only load nav.js — no industries.js).
   Each row fades/lifts in with a small delay based on its position,
   once, the first time its group scrolls into view.
   ============================================================ */
(function () {
  'use strict';

  var groups = Array.prototype.slice.call(document.querySelectorAll('.usecase-group-list'));
  if (!groups.length) return;

  groups.forEach(function (group) {
    Array.prototype.slice.call(group.children).forEach(function (row, i) {
      row.style.setProperty('--i', i);
    });
  });

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    groups.forEach(function (g) { obs.observe(g); });
  } else {
    groups.forEach(function (g) { g.classList.add('is-visible'); });
  }
})();

/* ============================================================
   CAPABILITY SHOWCASE — one sticky mockup per page shared across
   every group, so there's no reset moving from one group to the
   next. Active-row detection is scroll-position based (nearest row
   to a fixed line under the sticky nav), recomputed on scroll via
   rAF — more reliable here than an IntersectionObserver band, since
   the active row itself grows/shrinks as it activates. The visual
   swaps to a small mockup matching the active row's category, and
   uses the page's own hero photo as a backdrop when one exists
   (industry pages), or the page's accent gradient otherwise (role
   pages, which have no photo).
   ============================================================ */
(function () {
  'use strict';

  var blocks = Array.prototype.slice.call(document.querySelectorAll('.capability-showcase'));
  if (!blocks.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var BODY_TYPE = {
    calendar: 'booking', reschedule: 'booking', bell: 'booking',
    chat: 'chat', compass: 'chat', search: 'chat',
    form: 'form', id: 'form', note: 'form',
    receipt: 'confirm', tag: 'confirm', cash: 'confirm', check: 'confirm', chart: 'confirm',
    alert: 'alert', shield: 'alert', handoff: 'alert'
  };

  var CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
  var ALERT_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L2 20H22L12 3Z"/><path d="M12 9V13M12 16.5V17"/></svg>';

  var STEPS = {
    booking: ['Customer asks for a time', 'Live calendar is checked, not a guess', 'Slot is confirmed instantly'],
    chat: ['Question comes in on any channel', 'Answered from your approved info only', 'Resolved without waiting in a queue'],
    form: ['Details collected inside the conversation', 'Synced straight to your system', 'No separate form, no drop-off'],
    confirm: ['Action is completed', 'Confirmation sent the same second', 'Recorded for your team automatically'],
    alert: ['Trigger phrase is detected', 'Routine flow pauses immediately', 'Handed to a person with full context'],
    generic: ['Request comes in on any channel', 'Handled using your approved info', 'Logged for your team automatically']
  };

  var CHANNEL_ICONS = [
    '<svg viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M17.472 14.383c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0012.05 0Z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12H21M12 3C14.5 5.5 15.8 8.6 15.8 12C15.8 15.4 14.5 18.5 12 21C9.5 18.5 8.2 15.4 8.2 12C8.2 8.6 9.5 5.5 12 3Z"/></svg>'
  ];
  var CHANNELS_ROW = '<div class="cap-channels"><span class="cap-channels-label">Works on</span>' +
    CHANNEL_ICONS.map(function (svg) { return '<span class="cap-channel-icon">' + svg + '</span>'; }).join('') +
    '</div>';

  function renderSteps(type) {
    var steps = STEPS[type] || STEPS.generic;
    return '<ol class="cap-steps">' + steps.map(function (s, i) {
      return '<li class="cap-step"><span class="cap-step-num">' + (i + 1) + '</span>' + s + '</li>';
    }).join('') + '</ol>';
  }

  function renderBody(type) {
    if (type === 'booking') {
      return '<div class="cap-slots"><span class="cap-slot">Today, 2:00 PM</span><span class="cap-slot">Tomorrow, 11:00 AM</span><span class="cap-slot">Fri, 4:30 PM</span></div>';
    }
    if (type === 'chat') {
      return '<div class="cap-chat"><div class="cap-chat-bubble q">Quick question, right here</div><div class="cap-chat-bubble a">Answered instantly, every time</div></div>';
    }
    if (type === 'form') {
      return '<div class="cap-fields"><div class="cap-field"><span>Name</span><span></span></div><div class="cap-field"><span>Contact</span><span></span></div><div class="cap-field"><span>Details</span><span></span></div></div>';
    }
    if (type === 'confirm') {
      return '<div class="cap-confirm">' + CHECK_SVG + '<span>Confirmed automatically</span></div>';
    }
    if (type === 'alert') {
      return '<div class="cap-alert">' + ALERT_SVG + '<span>Escalates to your team when it should</span></div>';
    }
    return '';
  }

  function initShowcase(block) {
    var visual = block.querySelector('.capability-visual');
    var rows = Array.prototype.slice.call(block.querySelectorAll('.usecase-row'));
    if (!visual || !rows.length) return;

    var bgPhoto = block.getAttribute('data-visual-bg');
    var current = -1;
    var target = -1;
    var swapping = false;
    var EXIT_MS = 220;

    function buildFrame(idx) {
      var row = rows[idx];
      var numEl = row.querySelector('.usecase-row-num');
      var titleEl = row.querySelector('.usecase-row-title');
      var descEl = row.querySelector('.usecase-row-desc');
      if (!numEl || !titleEl || !descEl) return null;
      var cat = row.getAttribute('data-cat') || '';
      var type = BODY_TYPE[cat] || 'generic';
      var frame = document.createElement('div');
      frame.className = 'cap-frame' + (type === 'generic' ? ' is-generic' : '') + (bgPhoto ? ' has-photo' : '');
      if (bgPhoto) frame.style.backgroundImage = "url('" + bgPhoto + "')";
      frame.innerHTML = '<div class="cap-frame-icon">' + numEl.innerHTML + '</div>' +
        '<h4 class="cap-frame-title">' + titleEl.textContent + '</h4>' +
        '<p class="cap-frame-desc">' + descEl.textContent + '</p>' +
        (type !== 'generic' ? '<div class="cap-frame-visual">' + renderBody(type) + '</div>' : '') +
        renderSteps(type) + CHANNELS_ROW;
      return frame;
    }

    function showFrame(idx) {
      var frame = buildFrame(idx);
      if (!frame) return;
      visual.innerHTML = '';
      if (reduceMotion) { visual.appendChild(frame); return; }
      frame.classList.add('cap-enter');
      visual.appendChild(frame);
      void frame.offsetWidth; // force layout so the enter transition actually runs
      requestAnimationFrame(function () { frame.classList.remove('cap-enter'); });
    }

    function setActive(idx) {
      if (idx < 0 || idx === target) return;
      target = idx;
      rows.forEach(function (r, i) { r.classList.toggle('is-active', i === idx); });

      if (current === -1 || reduceMotion) {
        current = target;
        showFrame(current);
        return;
      }
      if (swapping) return; // already sliding out — it'll pick up the latest target when it lands
      swapping = true;
      var existing = visual.querySelector('.cap-frame');
      if (existing) existing.classList.add('cap-exit');
      setTimeout(function () {
        current = target;
        showFrame(current);
        swapping = false;
      }, EXIT_MS);
    }

    var ticking = false;
    var stopped = false;
    function computeActive() {
      ticking = false;
      if (stopped) return;

      var lastRect = rows[rows.length - 1].getBoundingClientRect();
      if (lastRect.bottom < 0) {
        // Scrolled past the last card entirely — freeze on it and stop
        // listening. Nothing further to react to, and there's no reason
        // to keep recomputing this for the rest of the page's scroll.
        stopped = true;
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        return;
      }

      var firstRect = rows[0].getBoundingClientRect();
      if (firstRect.top > window.innerHeight) return; // hasn't reached the list yet — leave row 0 active

      var line = window.innerHeight * 0.38;
      var best = -1, bestDist = Infinity;
      for (var i = 0; i < rows.length; i++) {
        var rect = rows[i].getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
        var mid = rect.top + rect.height / 2;
        var dist = Math.abs(mid - line);
        if (dist < bestDist) { bestDist = dist; best = i; }
      }
      if (best >= 0) setActive(best);
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(computeActive); }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    setActive(0);
    computeActive();
  }

  blocks.forEach(initShowcase);

  /* ---------- UNIVERSAL SCROLL REVEAL (for all 42 subpages) ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal, .reveal-stagger'));
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 80px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
