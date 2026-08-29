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
          { side: 'in', text: 'Thank you, I really need it before the weekend.' },
          { side: 'out', text: 'Understood — flagged as urgent. It\'s scheduled for delivery tomorrow, and I\'ll message you the moment it moves.' }
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
    var tabsWrap = document.getElementById('homeIndustryTabs');
    if (!tabsWrap) return;
    var tabs = Array.prototype.slice.call(tabsWrap.querySelectorAll('.industry-tab'));
    var panels = Array.prototype.slice.call(document.querySelectorAll('.industry-panel'));
    var indicator = tabsWrap.querySelector('.industry-tabs-indicator');

    function moveIndicator(tab) {
      if (!indicator) return;
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
    }

    function showPanel(key) {
      panels.forEach(function (p) {
        var match = p.getAttribute('data-panel') === key;
        p.classList.toggle('active', match);
        p.classList.remove('is-shown');
        if (match) {
          void p.offsetWidth; // force layout so the enter transition actually plays
          requestAnimationFrame(function () { p.classList.add('is-shown'); });
        }
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        if (tab.classList.contains('active')) return;
        var key = tab.getAttribute('data-tab');
        tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });
        moveIndicator(tab);
        showPanel(key);
      });
    });

    var activeTab = tabsWrap.querySelector('.industry-tab.active') || tabs[0];
    if (activeTab) {
      moveIndicator(activeTab);
      showPanel(activeTab.getAttribute('data-tab'));
    }
    window.addEventListener('resize', function () {
      var current = tabsWrap.querySelector('.industry-tab.active');
      if (current) moveIndicator(current);
    }, { passive: true });
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

  /* ---------------------------------------------------------
     DEPLOYMENT HUB DIAGRAM — draws the connecting lines in (real
     SVG path length, not a guess) and staggers the channel-icon
     spokes into place the first time the diagram scrolls into view.
     --------------------------------------------------------- */
  (function hubDiagramInit() {
    var wrap = document.querySelector('.hub-spokes');
    if (!wrap) return;
    var lines = Array.prototype.slice.call(wrap.querySelectorAll('svg line'));
    var spokes = Array.prototype.slice.call(wrap.querySelectorAll('.hub-spoke'));

    lines.forEach(function (line) {
      var len = line.getTotalLength();
      line.style.setProperty('--len', len);
    });
    spokes.forEach(function (spoke, i) { spoke.style.setProperty('--i', i); });

    function draw() { wrap.classList.add('is-drawn'); }

    if (reduceMotion) { draw(); return; }
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { draw(); obs.unobserve(entry.target); }
        });
      }, { threshold: 0.4 });
      obs.observe(wrap);
    } else {
      draw();
    }
  })();

  /* ---------------------------------------------------------
     ANALYTICS BAR CHART — grows the bars up from zero (staggered)
     the first time the chart scrolls into view, instead of just
     appearing at full height with the page.
     --------------------------------------------------------- */
  (function analyticsBarsInit() {
    var bars = document.querySelector('.analytics-bars');
    if (!bars) return;
    Array.prototype.slice.call(bars.children).forEach(function (bar, i) {
      bar.style.setProperty('--i', i);
    });
    function grow() { bars.classList.add('is-grown'); }
    if (reduceMotion) { grow(); return; }
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { grow(); obs.unobserve(entry.target); }
        });
      }, { threshold: 0.5 });
      obs.observe(bars);
    } else {
      grow();
    }
  })();

  /* ---------------------------------------------------------
     ONE AGENT, MULTIPLE TASKS — one console re-renders from a data
     object per capability; selector click/hover switches context,
     never navigates. Sequenced conversation animation (question →
     typing → response → action → result), auto-cycles every 4.5s,
     resets cleanly on user interaction. All timers tracked and
     cleared before each new sequence — nothing stacks or leaks.
     --------------------------------------------------------- */
  (function agentHeroInit() {
    var body = document.getElementById('agentConsoleBody');
    var industryTag = document.getElementById('agentIndustryTag');
    var selector = document.getElementById('agentSelector');
    var indicator = document.getElementById('agentSelectorIndicator');
    if (!body || !selector || !indicator) return;
    var items = Array.prototype.slice.call(selector.querySelectorAll('.agent-selector-item'));

    var CAPS = {
      sales: { industry: 'Real Estate', q: 'Do you have this in large?', a: 'Yes — 2 left. Want me to hold one?', actionText: 'Checking inventory…', result: 'Cart updated' },
      leads: { industry: 'Education & Training', q: 'I’m looking for training for my team.', a: 'Absolutely — what’s your budget, and when are you looking to start?', actionText: 'Saving to CRM…', result: 'Lead created' },
      meetings: { industry: 'Healthcare & Clinics', q: 'I want to book a consultation.', a: 'I have Friday 2pm or Saturday 11am open — which works?', actionText: 'Checking calendar…', result: 'Meeting booked' },
      support: { industry: 'E-Commerce & D2C', q: 'Where is my order?', a: 'It ships tomorrow and should arrive Thursday by 7pm.', actionText: 'Tracking order…', result: 'No action needed' }
    };
    var ORDER = ['sales', 'leads', 'meetings', 'support'];
    var current = null;
    var seqTimers = [];
    var autoTimer = null;

    function clearSeqTimers() { seqTimers.forEach(clearTimeout); seqTimers = []; }

    function moveIndicator(item) {
      indicator.style.width = item.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + item.offsetLeft + 'px)';
    }

    function playSequence(cap) {
      clearSeqTimers();
      body.innerHTML =
        '<div class="ac-row"><span class="ac-label">Customer</span><div class="ac-bubble q">' + cap.q + '</div></div>' +
        '<div class="ac-row"><div class="ac-typing"><span></span><span></span><span></span></div></div>' +
        '<div class="ac-row"><span class="ac-label">Agent</span><div class="ac-bubble a">' + cap.a + '</div></div>' +
        '<div class="ac-row"><span class="ac-label">Action</span><div class="ac-action"><span class="ac-action-spinner"></span>' + cap.actionText + '</div></div>' +
        '<div class="ac-row"><div class="ac-result"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>' + cap.result + '</div></div>';
      var rows = Array.prototype.slice.call(body.children);
      if (reduceMotion) { rows.forEach(function (r) { r.classList.add('is-shown'); }); return; }
      var delays = [0, 500, 1100, 1900, 2700];
      rows.forEach(function (row, i) {
        seqTimers.push(setTimeout(function () { row.classList.add('is-shown'); }, delays[i]));
      });
    }

    function restartAutoCycle() {
      if (autoTimer) clearInterval(autoTimer);
      if (reduceMotion) return;
      autoTimer = setInterval(function () {
        var idx = ORDER.indexOf(current);
        setActive(ORDER[(idx + 1) % ORDER.length], true);
      }, 4500);
    }

    function setActive(key, silent) {
      if (key === current) return;
      current = key;
      var cap = CAPS[key];
      items.forEach(function (it) {
        var active = it.getAttribute('data-cap') === key;
        it.classList.toggle('is-active', active);
        it.setAttribute('aria-selected', active ? 'true' : 'false');
        if (active) moveIndicator(it);
      });
      industryTag.textContent = cap.industry;
      playSequence(cap);
      if (!silent) restartAutoCycle();
    }

    items.forEach(function (it) {
      it.addEventListener('click', function () { setActive(it.getAttribute('data-cap')); });
      it.addEventListener('mouseenter', function () { setActive(it.getAttribute('data-cap')); });
    });
    window.addEventListener('resize', function () {
      var active = selector.querySelector('.agent-selector-item.is-active');
      if (active) moveIndicator(active);
    }, { passive: true });

    setActive('sales', true);
    restartAutoCycle();
  })();

  /* ---------------------------------------------------------
     PROBLEM CARD GRID — staggered entrance (120ms per card) the
     first time it scrolls into view.
     --------------------------------------------------------- */
  (function problemGridInit() {
    var grid = document.querySelector('.problem-grid');
    if (!grid) return;
    function show() { grid.classList.add('is-visible'); }
    if (reduceMotion) { show(); return; }
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { show(); obs.unobserve(entry.target); }
        });
      }, { threshold: 0.2 });
      obs.observe(grid);
    } else {
      show();
    }
  })();

  /* ---------------------------------------------------------
     HERO PARALLAX — the ambient orb layer drifts at a different
     rate than the foreground content as you scroll through the
     hero, so leaving it doesn't feel like a flat cut. Only runs
     while the hero is actually on screen.
     --------------------------------------------------------- */
  (function heroParallaxInit() {
    if (reduceMotion) return;
    var hero = document.getElementById('heroSection');
    var orbs = hero && hero.querySelector('.hero-orbs');
    if (!hero || !orbs) return;

    var ticking = false;
    function apply() {
      ticking = false;
      var rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      orbs.style.transform = 'translateY(' + (rect.top * -0.12) + 'px)';
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(apply); }
    }, { passive: true });
    apply();
  })();
})();
