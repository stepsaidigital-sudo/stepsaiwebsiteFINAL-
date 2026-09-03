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
    }, { threshold: 0.1, rootMargin: '0px 0px 120px 0px' });
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
  wireCountUp('one-agent');

  /* ---------------------------------------------------------
     HERO CONVERSATION — the cinematic device plays a looping
     conversation. The markup ships an empty #heroConversationBody
     for this to fill; previously this block still targeted the old
     #channelCard hero that no longer exists, so it bailed on the
     first line and left the card rendering as a blank white box.
     --------------------------------------------------------- */
  (function heroConversation() {
    var body = document.getElementById('heroConversationBody');
    if (!body) return;

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

    var timers = [];
    function clearTimers() { timers.forEach(clearTimeout); timers = []; }

    function addBubble(b) {
      var el = document.createElement('div');
      el.className = 'hc-bubble ' + b.side;
      el.textContent = b.text;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
      return el;
    }

    function showTyping() {
      var el = document.createElement('div');
      el.className = 'hc-bubble in hc-typing';
      el.setAttribute('aria-hidden', 'true');
      el.innerHTML = '<span></span><span></span><span></span>';
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
      return el;
    }

    /* Plays one conversation bubble by bubble, with a typing indicator in
       front of each agent reply, then hands back to the caller to advance. */
    function playConversation(index, done) {
      var data = CHANNELS[index];
      clearTimers();
      body.innerHTML = '';

      if (reduceMotion) {
        data.bubbles.forEach(addBubble);
        return;
      }

      var t = 0;
      data.bubbles.forEach(function (b, i) {
        if (b.side === 'out') {
          var typingAt = t;
          t += 900;
          timers.push(setTimeout(function () {
            var dots = showTyping();
            timers.push(setTimeout(function () { dots.remove(); addBubble(b); }, 900));
          }, typingAt));
          t += Math.min(2600, 700 + b.text.length * 14);
        } else {
          timers.push(setTimeout(function () { addBubble(b); }, t));
          t += Math.min(2200, 600 + b.text.length * 12);
        }
        if (i === data.bubbles.length - 1) {
          timers.push(setTimeout(done, t + 2400));
        }
      });
    }

    var idx = 0;
    function next() {
      playConversation(idx, function () {
        idx = (idx + 1) % CHANNELS.length;
        next();
      });
    }

    /* Only run while the hero is actually on screen. */
    if ('IntersectionObserver' in window && !reduceMotion) {
      var started = false;
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) { started = true; next(); }
        });
      }, { threshold: 0.2 });
      obs.observe(body);
    } else {
      next();
    }
  })();

  /* ---------------------------------------------------------
     HOW IT WORKS DEVICE — 3-step self-playing simulation
     --------------------------------------------------------- */
  (function hiwDeviceInit() {
    var device = document.getElementById('hiwDevice');
    if (!device) return;
    var screens = device.querySelectorAll('.hiw-screen');
    var items = Array.prototype.slice.call(device.querySelectorAll('.feat2-item'));
    var photos = Array.prototype.slice.call(device.querySelectorAll('.feat2-photo'));
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
      if (i === 0 && urlText) typeText(urlText, 'mystore.com/', 1000);
      if (i === 2 && channelCells.length) {
        channelCells.forEach(function (c) { c.classList.remove('live'); });
        channelCells.forEach(function (c, idx) {
          effectTimers.push(setTimeout(function () { c.classList.add('live'); }, reduceMotion ? 0 : idx * 400));
        });
      }
    }
    function show(i) {
      current = (i + screens.length) % screens.length;
      screens.forEach(function (s, idx) { s.classList.toggle('active', idx === current); });
      items.forEach(function (el, idx) {
        el.classList.toggle('is-active', idx === current);
        el.setAttribute('aria-selected', idx === current ? 'true' : 'false');
      });
      photos.forEach(function (p, idx) { p.classList.toggle('is-active', idx === current); });
      runEffects(current);
    }
    function start() {
      stop();
      if (reduceMotion) return;
      timer = setInterval(function () { show(current + 1); }, DWELL);
    }
    function stop() { if (timer) clearInterval(timer); }

    items.forEach(function (el) {
      el.addEventListener('click', function () {
        show(parseInt(el.getAttribute('data-hiw-i'), 10));
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
     INTERACTIVE WORKFLOWS
     --------------------------------------------------------- */
  (function interactiveWorkflowsInit() {
    var tabsWrap = document.getElementById('wfTabs');
    if (!tabsWrap) return;
    var tabs = Array.prototype.slice.call(tabsWrap.querySelectorAll('.wf-tab-h'));
    var views = Array.prototype.slice.call(document.querySelectorAll('.wf-view'));

    /* ---- flow player -------------------------------------------------
       Walks the active view's step lines top to bottom and swaps the
       single right-hand stage panel to whichever state that step is about
       (data-state on the <li> names the panel to show). The cart sits up
       front, the wait covers both the timer and the condition that reads
       it, and the sent message closes the loop.
       ------------------------------------------------------------------ */
    var STEP_DWELL = [3000, 4400, 3600, 4200];
    var timers = [];
    var running = false;

    function clearFlowTimers() { timers.forEach(clearTimeout); timers = []; }

    function showState(view, key) {
      view.querySelectorAll('.wf-state').forEach(function (s) {
        s.classList.toggle('is-shown', s.getAttribute('data-state') === key);
      });
    }

    function resetView(view) {
      view.querySelectorAll('.feat2-item').forEach(function (s) { s.classList.remove('is-active'); });
      showState(view, 'cart');
    }

    function playView(view) {
      clearFlowTimers();
      var steps = Array.prototype.slice.call(view.querySelectorAll('.feat2-item'));
      if (!steps.length) return;

      if (reduceMotion) {
        steps.forEach(function (s) { s.classList.add('is-active'); });
        showState(view, 'sent');
        return;
      }

      var t = 0;
      steps.forEach(function (step, i) {
        timers.push(setTimeout(function () {
          steps.forEach(function (s) { s.classList.remove('is-active'); });
          step.classList.add('is-active');
          showState(view, step.getAttribute('data-state') || 'cart');
        }, t));
        t += STEP_DWELL[i] || 3000;
      });
      timers.push(setTimeout(function () { if (running) playView(view); }, t));
    }

    function activeView() { return views.filter(function (v) { return v.classList.contains('is-active'); })[0]; }
    function restart() { var v = activeView(); if (v) { resetView(v); playView(v); } }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var targetId = tab.getAttribute('data-wf-target');
        if (!targetId) return;

        tabs.forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        views.forEach(function (v) { v.classList.remove('is-active'); resetView(v); });

        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        var view = document.getElementById('wf-' + targetId);
        if (view) { view.classList.add('is-active'); if (running) playView(view); }
      });
    });

    /* Only run the sequence while the section is actually on screen. */
    var section = document.getElementById('workflows-teaser');
    if (reduceMotion || !('IntersectionObserver' in window) || !section) {
      running = true;
      restart();
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!running) { running = true; restart(); }
        } else {
          running = false;
          clearFlowTimers();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(section);
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
     FAQ 3 — multi-category tabbed FAQ with animated accordions
     (React Bits Pro "FAQ 3" layout, hand-built in vanilla CSS/JS
     since this project has no React/shadcn toolchain). Tabs swap
     the visible .faq3-category and update the sticky left-hand
     title; each category runs its own single-open accordion.
     --------------------------------------------------------- */
  (function faq3Init() {
    var faqTabs = document.querySelectorAll('.faq3-tab');
    if (!faqTabs.length) return;
    var faqCats = document.querySelectorAll('.faq3-category');
    var faqItems = document.querySelectorAll('.faq3-item');
    var activeTitle = document.getElementById('faq3-active-title');

    // Tab switching
    faqTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        faqTabs.forEach(function (t) { t.classList.remove('active'); });
        faqCats.forEach(function (c) { c.classList.remove('active'); });

        tab.classList.add('active');
        var targetId = tab.getAttribute('data-target');
        var targetCat = document.getElementById(targetId);
        if (targetCat) targetCat.classList.add('active');

        if (activeTitle) activeTitle.textContent = tab.textContent;
      });
    });

    // Accordion toggling — one open item per category
    faqItems.forEach(function (item) {
      var btn = item.querySelector('.faq3-q');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        var siblingItems = item.parentElement.querySelectorAll('.faq3-item');
        siblingItems.forEach(function (sibling) {
          sibling.classList.remove('open');
          var sibBtn = sibling.querySelector('.faq3-q');
          if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
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

  /* ---------------------------------------------------------
     SCROLL STACK — pinned industry cards (#industryFlow)
     Restored (React Bits Pro "Scroll Stack" concept). Each card
     lives in a tall .stack-item and pins via plain CSS
     `position: sticky; top: 12vh`. The scroll "runway" available
     while a card is pinned is simply its .stack-item's height
     minus the card's own height — from that we derive a 0→1
     progress per card and use it to scale it down, rotate it a
     few degrees, fade it out and blur it slightly, so it visibly
     turns and dissolves as the next card slides up to cover it.
     The last card never dissolves (nothing needs to cover it).
     --------------------------------------------------------- */
  (function initScrollStack() {
    var flow = document.getElementById('industryFlow');
    if (!flow) return;
    var items = Array.prototype.slice.call(flow.querySelectorAll('.stack-item'));
    if (items.length < 2) return;
    var cards = items.map(function (item) { return item.querySelector('.industry-flow-card'); });
    if (cards.indexOf(null) !== -1) return;

    // Later cards paint over earlier ones as they arrive.
    cards.forEach(function (card, i) { card.style.zIndex = String(i + 1); });

    var isNarrow = window.matchMedia('(max-width: 900px)').matches;
    if (reduceMotion || isNarrow) return; // CSS already keeps things static at this width/preference

    var STICKY_TOP_RATIO = 0.12; // must match .industry-flow-card { top: 12vh } in home.css
    var ticking2 = false;

    function resetCard(card) {
      card.style.transform = 'none';
      card.style.opacity = '1';
      card.style.filter = 'none';
    }

    function update() {
      ticking2 = false;
      var stickyTop = window.innerHeight * STICKY_TOP_RATIO;

      items.forEach(function (item, i) {
        var card = cards[i];
        if (i === items.length - 1) { resetCard(card); return; } // last card stays put

        var rect = item.getBoundingClientRect();
        var runway = rect.height - card.offsetHeight;
        if (runway <= 0) { resetCard(card); return; }

        var progress = (stickyTop - rect.top) / runway;
        progress = Math.max(0, Math.min(1, progress));

        if (progress <= 0) { resetCard(card); return; }

        var scale = 1 - progress * 0.08;
        var rotate = (i % 2 === 0 ? -1 : 1) * progress * 4;
        var translateY = progress * -24;
        var opacity = 1 - progress * 0.85;
        var blur = progress * 3;

        card.style.transform = 'translateY(' + translateY.toFixed(2) + 'px) scale(' + scale.toFixed(3) + ') rotateZ(' + rotate.toFixed(2) + 'deg)';
        card.style.opacity = opacity.toFixed(3);
        card.style.filter = blur > 0.05 ? 'blur(' + blur.toFixed(2) + 'px)' : 'none';
      });
    }

    function onScrollOrResize2() {
      if (!ticking2) { ticking2 = true; requestAnimationFrame(update); }
    }

    window.addEventListener('scroll', onScrollOrResize2, { passive: true });
    window.addEventListener('resize', onScrollOrResize2, { passive: true });
    update();
  })();

})();
