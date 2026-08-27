/* ============================================================
   STEPSAI — HOMEPAGE SCRIPT
   Nav scroll/burger/dropdowns live in the shared nav.js (loaded
   before this file). This file has everything unique to the
   homepage: the hero setup→channel sequence, deploy/stats count-up,
   the how-it-works device, industry tabs, the FAQ accordion, and
   generic reveal-on-scroll.
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     REVEAL ON SCROLL
     --------------------------------------------------------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal, .reveal-stagger'));
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

  /* ---------------------------------------------------------
     GENERIC COUNT-UP — any [data-count] inside a container
     --------------------------------------------------------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var prefix = el.getAttribute('data-prefix') || '';
    var decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
    if (reduceMotion || isNaN(target)) {
      el.textContent = prefix + target.toFixed(decimals) + suffix;
      return;
    }
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function wireCountUp(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
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
  }
  wireCountUp('deployStats');
  wireCountUp('numbersGrid');
  wireCountUp('analyticsStatsHome');

  /* ---------------------------------------------------------
     HERO — one-time setup card, then a looping channel demo
     --------------------------------------------------------- */
  (function heroSequence() {
    var channelCard = document.getElementById('channelCard');
    var channelDots = document.getElementById('channelDots');
    if (!channelCard) return;

    var CHANNELS = [
      {
        avatar: 'N', name: 'Nyra Store', status: 'online',
        bubbles: [
          { side: 'in', text: 'Hey, I love the floral summer dress! Do you have it in a size M?' },
          { side: 'out', text: 'Hi there! 👋 Yes, we still have 3 left in size Medium. It’s one of our bestsellers this week.' },
          { side: 'in', text: 'Awesome, can I get it by Friday?' },
          { side: 'out', text: 'Absolutely. If you order in the next 2 hours, we can do expedited shipping for Friday delivery. Shall I add it to your cart?' }
        ],
        receipt: 'Cart updated — Shopify'
      },
      {
        avatar: 'A', name: 'Aura Support', status: 'replies instantly',
        bubbles: [
          { side: 'in', text: 'Hi, my order #4928 was supposed to be delivered yesterday but the tracking hasn\'t updated.' },
          { side: 'out', text: 'I\'m so sorry about that delay! Let me check the courier system for you right now.' },
          { side: 'out', text: 'It looks like it was held up at the local sorting facility. I\'ll raise a priority ticket to get it moving today.' },
          { side: 'in', text: 'Thank you, I really need it before the weekend.' }
        ],
        receipt: 'Ticket created — Zendesk'
      },
      {
        avatar: 'K', name: 'Keystone Realty', status: 'online',
        bubbles: [
          { side: 'in', text: 'Hi! We’re looking for a 3-bed apartment in downtown. Any viewings available this weekend?' },
          { side: 'out', text: 'Hello! 🏙️ We just listed a beautiful 3-bed with skyline views. I can get you in for a viewing this Saturday at 2 PM or 4 PM.' },
          { side: 'in', text: '4 PM would be perfect.' },
          { side: 'out', text: 'Great, I’ve booked you in for 4 PM this Saturday. I\'ll send the calendar invite right away!' }
        ],
        receipt: 'Meeting booked — Calendly'
      }
    ];

    function typeText(el, text, duration, cb) {
      if (!el) { if (cb) cb(); return; }
      el.textContent = '';
      if (reduceMotion) { el.textContent = text; if (cb) cb(); return; }
      var i = 0, stepTime = duration / text.length;
      (function tick() {
        el.textContent = text.slice(0, i);
        i++;

        if (i <= text.length) setTimeout(tick, stepTime);
        else if (cb) cb();
      })();
    }
    var CHANNEL_THEME = ['is-website', 'is-whatsapp', 'is-instagram'];
    var CHANNEL_TYPES = ['website', 'whatsapp', 'instagram'];

    function renderChannel(index) {
      var data = CHANNELS[index];
      document.getElementById('channelAvatar').textContent = data.avatar;
      document.getElementById('channelName').textContent = data.name;
      document.getElementById('channelStatus').textContent = data.status;

      var header = document.getElementById('channelHeader');
      var card = document.getElementById('channelCard');
      ['is-whatsapp', 'is-instagram', 'is-website'].forEach(function (t) { header.classList.remove(t); card.classList.remove(t); });
      if (CHANNEL_THEME[index]) { header.classList.add(CHANNEL_THEME[index]); card.classList.add(CHANNEL_THEME[index]); }
      
      var sliderFrame = document.getElementById('heroSliderFrame');
      
      if (sliderFrame) {
        if (CHANNEL_TYPES[index] === 'website') {
           sliderFrame.classList.remove('is-mobile');
           sliderFrame.classList.add('is-website');
        } else if (CHANNEL_TYPES[index] === 'whatsapp' || CHANNEL_TYPES[index] === 'instagram') {
           sliderFrame.classList.remove('is-website');
           sliderFrame.classList.add('is-mobile');
        }
      }

      var bubblesWrap = document.getElementById('channelBubbles');
      bubblesWrap.innerHTML = '';
      data.bubbles.forEach(function (b, i) {
        var bubble = document.createElement('div');
        bubble.className = 'channel-bubble ' + b.side;
        bubble.textContent = b.text;
        bubble.style.animationDelay = (reduceMotion ? 0 : i * 500) + 'ms';
        bubblesWrap.appendChild(bubble);
      });

      var receiptStrip = document.getElementById('channelReceiptStrip');
      receiptStrip.innerHTML = '';
      var receipt = document.createElement('span');
      receipt.className = 'receipt';
      receipt.style.animationDelay = (reduceMotion ? 0 : data.bubbles.length * 500 + 200) + 'ms';
      receipt.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg><span>' + data.receipt + '</span>';
      receiptStrip.appendChild(receipt);

      document.querySelectorAll('.channel-dot').forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
        dot.setAttribute('aria-selected', String(i === index));
      });
    }

    var channelIndex = 0;
    var channelTimer = null;
    function startChannelCycle() {
      renderChannel(channelIndex);
      if (channelTimer) clearInterval(channelTimer);
      if (reduceMotion) return;
      channelTimer = setInterval(function () {
        channelIndex = (channelIndex + 1) % CHANNELS.length;
        renderChannel(channelIndex);
      }, 5200);
    }

    if (channelDots) {
      channelDots.querySelectorAll('.channel-dot').forEach(function (dot) {
        dot.addEventListener('click', function () {
          channelIndex = parseInt(dot.getAttribute('data-channel'), 10);
          renderChannel(channelIndex);
          if (channelTimer) clearInterval(channelTimer);
          startChannelCycle();
        });
      });
    }

    startChannelCycle();
  })();

  /* ---------------------------------------------------------
     HOW IT WORKS DEVICE — 3-step self-playing simulation
     --------------------------------------------------------- */
  (function hiwDeviceInit() {
    var device = document.getElementById('hiwDevice');
    if (!device) return;
    var screens = device.querySelectorAll('.hiw-screen');
    var dots = device.querySelectorAll('.hiw-dot');
    var stepNum = document.getElementById('hiwStepNum');
    var fill = document.getElementById('hiwFill');
    var urlText = document.getElementById('hiwUrlText');
    var channelCells = document.querySelectorAll('#hiwChannelGrid .hiw-channel-cell');
    var DWELL = 3300;
    var current = 0;
    var timer = null;
    var effectTimers = [];

    function clearEffects() { effectTimers.forEach(clearTimeout); effectTimers = []; }
    function typeText(el, text, duration) {
      if (!el) return;
      el.textContent = '';
      if (reduceMotion) { el.textContent = text; return; }
      var i = 0, stepTime = duration / text.length;
      (function tick() {
        el.textContent = text.slice(0, i);
        i++;
        if (i <= text.length) effectTimers.push(setTimeout(tick, stepTime));
      })();
    }
    function runEffects(i) {
      clearEffects();
      if (i === 0 && urlText) typeText(urlText, 'https://mystore.com/', 1000);
      if (i === 2 && channelCells.length) {
        channelCells.forEach(function (c) { c.classList.remove('live'); });
        channelCells.forEach(function (c, idx) {
          effectTimers.push(setTimeout(function () { c.classList.add('live'); }, reduceMotion ? 0 : idx * 400));
        });
      }
    }
    function resetProgress() {
      if (!fill) return;
      fill.classList.remove('animate');
      fill.style.width = '0%';
      void fill.offsetWidth;
      if (!reduceMotion) {
        fill.classList.add('animate');
        requestAnimationFrame(function () { fill.style.width = '100%'; });
      }
    }
    function show(i) {
      current = (i + screens.length) % screens.length;
      screens.forEach(function (s, idx) { s.classList.toggle('active', idx === current); });
      dots.forEach(function (d, idx) { d.classList.toggle('active', idx === current); });
      if (stepNum) stepNum.textContent = String(current + 1);
      resetProgress();
      runEffects(current);
    }
    function start() {
      stop();
      if (reduceMotion) return;
      timer = setInterval(function () { show(current + 1); }, DWELL);
    }
    function stop() { if (timer) clearInterval(timer); }

    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        show(parseInt(d.getAttribute('data-i'), 10));
        start();
      });
    });

    show(0);
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { entry.isIntersecting ? start() : stop(); });
      }, { threshold: 0.4 });
      obs.observe(device);
    } else {
      start();
    }
  })();

  /* ---------------------------------------------------------
     WORKFLOWS TEASER CANVAS — same generic wf-canvas player used on
     workflows.html / agents.html (kept local so this page doesn't
     also have to load industries.js's reveal/FAQ logic twice)
     --------------------------------------------------------- */
  (function workflowCanvasInit() {
    var canvas = document.querySelector('.wf-canvas');
    if (!canvas) return;
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
  })();

  /* ---------------------------------------------------------
     INDUSTRY TABS
     --------------------------------------------------------- */
  (function industryTabsInit() {
    var tabs = document.querySelectorAll('#homeIndustryTabs .industry-tab');
    var panels = document.querySelectorAll('.industry-panel');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var key = tab.getAttribute('data-tab');
        tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });
        panels.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-panel') === key); });
      });
    });
  })();

  /* ---------------------------------------------------------
     FAQ ACCORDION — same pattern as pages.js / pricing.js
     --------------------------------------------------------- */
  (function faqInit() {
    var grid = document.getElementById('homeFaqGrid');
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
