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
     REVEAL ON SCROLL — handled sitewide by nav.js (loaded before
     this file). A second, independent observer used to live here
     with a premature trigger margin (rootMargin 120px positive,
     same bug fixed in nav.js) — since both watched the same
     elements, this stale duplicate was firing first and silently
     undoing that fix on every homepage section. Removed; nav.js's
     observer is the single source of truth now.
     --------------------------------------------------------- */

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
  wireCountUp('grow-with-stepsai');

  /* ---------------------------------------------------------
     HERO GLASSMORPHIC CHAT AUTOMATION BOARD ENGINE
     Powers the interactive channel tabs, live AI prompts,
     automated pipeline steps, real-time ticking metrics, and
     conversion charts.
     --------------------------------------------------------- */
  (function heroGlassBoardInit() {
    var hero = document.getElementById('heroSection');
    if (!hero) return;

    var promptText = document.getElementById('heroPromptText');
    var userAvatar = document.getElementById('boardUserAvatar');
    var userName = document.getElementById('boardUserName');
    var userTime = document.getElementById('boardUserTime');
    var userMsg = document.getElementById('boardUserMsg');
    var actionTool = document.getElementById('boardActionTool');
    var actionSlot = document.getElementById('boardActionSlot');
    var aiReply = document.getElementById('boardAiReply');
    var primaryBtn = document.getElementById('boardPrimaryBtn');
    var secondaryBtn = document.getElementById('boardSecondaryBtn');
    var convCount = document.getElementById('heroConvCount');
    var tickerBadge = document.getElementById('heroTickerBadge');
    var statsBars = document.getElementById('heroStatsBars');

    var channelBtns = hero.querySelectorAll('.hero-bch-btn');

    var scenarios = [
      {
        channel: 'wa',
        prompt: 'Review inbound WhatsApp message, verify Shopify inventory, and offer instant checkout & meeting slot.',
        userName: 'Alex Morgan',
        userAvatar: 'images/avatar-1.jpg',
        userTime: 'Just now',
        userMsg: 'Do you have a demo available this week, and can you check inventory for Model X?',
        tool: 'Shopify Inventory Verified (48 units)',
        slot: 'Calendar Slot Matched (Thu 3 PM)',
        reply: "Yes! Model X is in stock (48 units). I've reserved a slot for Thursday at 3:00 PM. Would you like to confirm the calendar invite?",
        primaryBtnText: '📅 Confirm Meeting',
        primaryBtnLink: 'pricing.html',
        secondaryBtnText: '🛍️ View Inventory',
        secondaryBtnLink: 'capabilities.html',
        bars: [60, 85, 100, 70, 92]
      },
      {
        channel: 'web',
        prompt: 'Qualify enterprise prospect intent on Website, calculate volume discount, and route to senior AE calendar.',
        userName: 'Sarah Jenkins',
        userAvatar: 'images/avatar-2.jpg',
        userTime: '1m ago',
        userMsg: 'Looking to automate customer support for our 35k monthly active users. What is the turnaround time?',
        tool: 'Volume Tier Computed ($0.02 / conv)',
        slot: 'Priority SLA Tagged (<1s response)',
        reply: "StepsAI deploys in under 10 minutes and resolves 89% of queries in <1.2s. I've prepared a custom volume plan for 35k MAU.",
        primaryBtnText: '⚡ View Custom Plan',
        primaryBtnLink: 'pricing.html',
        secondaryBtnText: '📊 ROI Calculator',
        secondaryBtnLink: 'analytics.html',
        bars: [75, 95, 80, 88, 100]
      },
      {
        channel: 'ig',
        prompt: 'Parse Instagram DM, identify product intent, recommend color variation, and generate 1-click payment link.',
        userName: 'Elena Rostova',
        userAvatar: 'images/avatar-3.jpg',
        userTime: 'Just now',
        userMsg: 'Obsessed with the Linen Oxford shirt! Do you have Navy Blue in Size M available to order?',
        tool: 'Product Catalog Match (Navy / M)',
        slot: '1-Click Stripe Link Created',
        reply: 'Yes! Navy Blue Size M is in stock with 2-day express shipping. Here is your fast checkout link with 10% first-order discount.',
        primaryBtnText: '💳 Fast Checkout ($58)',
        primaryBtnLink: 'pricing.html',
        secondaryBtnText: '👕 Size Guide',
        secondaryBtnLink: 'capabilities.html',
        bars: [50, 78, 92, 65, 85]
      },
      {
        channel: 'shopify',
        prompt: 'Intercept post-purchase order query, sync tracking API from carrier, and update customer CRM profile.',
        userName: 'David Lawson',
        userAvatar: 'images/avatar-2.jpg',
        userTime: '2m ago',
        userMsg: 'Can you update my delivery address for order #4829 to 402 Elm St before it ships?',
        tool: 'Shopify Fulfillment API Updated',
        slot: 'Carrier Reroute Dispatched',
        reply: 'All set, David! Your shipping address for Order #4829 has been updated to 402 Elm St, and an updated receipt was sent to your email.',
        primaryBtnText: '📦 Track Package',
        primaryBtnLink: 'pricing.html',
        secondaryBtnText: '🧾 View Receipt',
        secondaryBtnLink: 'capabilities.html',
        bars: [82, 68, 95, 88, 75]
      }
    ];

    var activeIdx = 0;
    var rotationTimer = null;

    function renderScenario(idx) {
      if (idx < 0 || idx >= scenarios.length) return;
      activeIdx = idx;
      var sc = scenarios[idx];

      // Update Channel Buttons
      channelBtns.forEach(function (btn) {
        btn.classList.toggle('is-active', btn.getAttribute('data-ch') === sc.channel);
      });

      // Fade content
      if (promptText) {
        promptText.style.opacity = '0';
        promptText.style.transform = 'translateY(3px)';
      }
      if (userMsg) {
        userMsg.style.opacity = '0';
        userMsg.style.transform = 'translateY(3px)';
      }
      if (aiReply) {
        aiReply.style.opacity = '0';
        aiReply.style.transform = 'translateY(3px)';
      }

      setTimeout(function () {
        if (promptText) {
          promptText.textContent = sc.prompt;
          promptText.style.opacity = '1';
          promptText.style.transform = 'translateY(0)';
        }
        if (userName) userName.textContent = sc.userName;
        if (userTime) userTime.textContent = sc.userTime;
        if (userAvatar && sc.userAvatar) userAvatar.src = sc.userAvatar;
        if (userMsg) {
          userMsg.textContent = sc.userMsg;
          userMsg.style.opacity = '1';
          userMsg.style.transform = 'translateY(0)';
        }
        if (actionTool) actionTool.textContent = sc.tool;
        if (actionSlot) actionSlot.textContent = sc.slot;

        if (aiReply) {
          aiReply.textContent = sc.reply;
          aiReply.style.opacity = '1';
          aiReply.style.transform = 'translateY(0)';
        }
        if (primaryBtn) {
          primaryBtn.setAttribute('href', sc.primaryBtnLink);
          var pSpan = primaryBtn.querySelector('span');
          if (pSpan) pSpan.textContent = sc.primaryBtnText;
        }
        if (secondaryBtn) {
          secondaryBtn.setAttribute('href', sc.secondaryBtnLink);
          var sSpan = secondaryBtn.querySelector('span');
          if (sSpan) sSpan.textContent = sc.secondaryBtnText;
        }

        // Update mini bar chart
        if (statsBars && sc.bars) {
          var bars = statsBars.querySelectorAll('.hero-mbar');
          bars.forEach(function (b, bIdx) {
            if (sc.bars[bIdx] !== undefined) {
              b.style.setProperty('--h', sc.bars[bIdx] + '%');
            }
          });
        }
      }, 160);
    }

    // Attach click handlers to channel buttons
    channelBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var ch = btn.getAttribute('data-ch');
        var matchIdx = scenarios.findIndex(function (s) { return s.channel === ch; });
        if (matchIdx !== -1) {
          renderScenario(matchIdx);
          restartTimer();
        }
      });
    });

    function restartTimer() {
      if (rotationTimer) clearInterval(rotationTimer);
      rotationTimer = setInterval(function () {
        var next = (activeIdx + 1) % scenarios.length;
        renderScenario(next);
      }, 5500);
    }

    // Initial timer
    restartTimer();

    // Live Conversation Counter Ticker (+1 new animation)
    var count = 1459;
    function tickLiveCounter() {
      var jitter = Math.floor(Math.random() * 2800) + 3500; // 3.5s to 6.3s
      setTimeout(function () {
        count++;
        if (convCount) {
          convCount.textContent = count.toLocaleString();
        }
        if (tickerBadge) {
          tickerBadge.classList.add('is-popping');
          setTimeout(function () {
            tickerBadge.classList.remove('is-popping');
          }, 1400);
        }

        // Random fluctuation in bars
        if (statsBars) {
          var bars = statsBars.querySelectorAll('.hero-mbar');
          var randBar = bars[Math.floor(Math.random() * bars.length)];
          if (randBar) {
            var newH = Math.floor(Math.random() * 45) + 55;
            randBar.style.setProperty('--h', newH + '%');
          }
        }

        tickLiveCounter();
      }, jitter);
    }
    tickLiveCounter();

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
     ONE INBOX HUB TABS (Multi-Channel Feed / Handover / CRM)
     --------------------------------------------------------- */
  (function inboxHubInit() {
    var tabsWrap = document.getElementById('inboxHubTabs');
    if (!tabsWrap) return;
    var tabs = Array.prototype.slice.call(tabsWrap.querySelectorAll('.inbox-hub-tab'));
    var views = Array.prototype.slice.call(document.querySelectorAll('.inbox-hub-view'));

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var tabIndex = tab.getAttribute('data-inbox-tab');
        tabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        views.forEach(function (v) {
          v.classList.toggle('is-active', v.getAttribute('data-inbox-view') === tabIndex);
        });
      });
    });
  })();

  /* ---------------------------------------------------------
     ONE INBOX TEASER — auto-cycles through conversation rows
     --------------------------------------------------------- */
  Array.prototype.slice.call(document.querySelectorAll('.inbox-dash')).forEach(function (dash) {
    var rows = Array.prototype.slice.call(dash.querySelectorAll('.inbox-dash-row'));
    var panels = Array.prototype.slice.call(dash.querySelectorAll('.inbox-dash-thread-panel'));
    if (!rows.length || panels.length < 2) return; // single-panel dashes need no switching JS

    var DWELL = 4200;
    var current = 0;
    var timer = null;

    function show(i) {
      current = (i + rows.length) % rows.length;
      rows.forEach(function (r, idx) { r.classList.toggle('is-active', idx === current); });
      panels.forEach(function (p, idx) { p.classList.toggle('is-active', idx === current); });
    }
    function start() {
      stop();
      if (reduceMotion) return;
      timer = setInterval(function () { show(current + 1); }, DWELL);
    }
    function stop() { if (timer) clearInterval(timer); }

    rows.forEach(function (row, idx) {
      row.addEventListener('click', function () { show(idx); start(); });
    });

    show(0);
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { entry.isIntersecting ? start() : stop(); });
      }, { threshold: 0.4 });
      obs.observe(dash);
    } else if (!reduceMotion) {
      start();
    }
  });

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

        /* Purely cosmetic: hands the active workflow's two accent colors
           to the section as CSS custom properties (--wf-accent-a/-b,
           registered with @property so the browser tweens them), which
           drive the active tab's glow ring, the active step icon's
           shadow, and the ambient light behind the flow player. Doesn't
           touch the flow player above — a new workflow just needs
           data-accent-a/-b on its tab, no code changes here. */
        var sectionEl = tab.closest('#workflows-teaser');
        var accentA = tab.getAttribute('data-accent-a');
        var accentB = tab.getAttribute('data-accent-b');
        if (sectionEl && accentA && accentB) {
          sectionEl.style.setProperty('--wf-accent-a', accentA);
          sectionEl.style.setProperty('--wf-accent-b', accentB);
        }
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
  /* ---------------------------------------------------------
     FREQUENTLY ASKED QUESTIONS — Clean Minimalist Accordion
     --------------------------------------------------------- */
  (function faqCleanInit() {
    var faqItems = document.querySelectorAll('.faq-clean-item, .faq3-item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
      var btn = item.querySelector('.faq-clean-q, .faq3-q');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open') || item.classList.contains('open');
        var parentList = item.parentElement;
        var siblings = parentList ? parentList.querySelectorAll('.faq-clean-item, .faq3-item') : [];
        siblings.forEach(function (sibling) {
          sibling.classList.remove('is-open', 'open');
          var sibBtn = sibling.querySelector('.faq-clean-q, .faq3-q');
          if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('is-open', 'open');
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



  /* ---------------------------------------------------------
     Deploy Everywhere: Interactive Neural Hub & Spoke Sync
     --------------------------------------------------------- */
  (function initDeployNeuralHub() {
    var stage = document.getElementById('hubDiagram');
    var list = document.getElementById('deployChannelList');
    if (!stage || !list) return;

    var rows = Array.prototype.slice.call(list.querySelectorAll('.channel-list-row'));
    var spokes = Array.prototype.slice.call(stage.querySelectorAll('.hub-spoke'));
    var lasers = Array.prototype.slice.call(stage.querySelectorAll('.hub-ray-laser'));
    var syncLabel = document.getElementById('hubSyncLabel');
    if (!rows.length || !spokes.length) return;

    var channelData = [
      { name: 'Website', label: 'Real-time sync active with Web Widget (< 12ms)' },
      { name: 'WhatsApp', label: 'Real-time sync active with WhatsApp Business API (< 14ms)' },
      { name: 'Instagram', label: 'Real-time sync active with Instagram Direct (< 18ms)' },
      { name: 'Messenger', label: 'Real-time sync active with Facebook Messenger (< 16ms)' }
    ];

    var activeIdx = 0;
    var autoTimer = null;

    function activateChannel(idx, userInitiated) {
      if (idx < 0 || idx >= rows.length) return;
      activeIdx = idx;

      rows.forEach(function (r, i) {
        if (i === idx) r.classList.add('is-active');
        else r.classList.remove('is-active');
      });

      spokes.forEach(function (s, i) {
        if (i === idx) s.classList.add('is-active');
        else s.classList.remove('is-active');
      });

      lasers.forEach(function (l, i) {
        if (i === idx) l.classList.add('is-active');
        else l.classList.remove('is-active');
      });

      if (syncLabel && channelData[idx]) {
        syncLabel.textContent = channelData[idx].label;
      }

      if (userInitiated) {
        restartTimer();
      }
    }

    function startTimer() {
      stopTimer();
      if (reduceMotion) return;
      autoTimer = setInterval(function () {
        var next = (activeIdx + 1) % rows.length;
        activateChannel(next, false);
      }, 4000);
    }

    function stopTimer() {
      if (autoTimer) clearInterval(autoTimer);
    }

    function restartTimer() {
      stopTimer();
      startTimer();
    }

    rows.forEach(function (row, idx) {
      row.addEventListener('click', function () {
        activateChannel(idx, true);
      });
      row.addEventListener('mouseenter', function () {
        activateChannel(idx, true);
      });
    });

    spokes.forEach(function (spoke, idx) {
      spoke.addEventListener('click', function () {
        activateChannel(idx, true);
      });
      spoke.addEventListener('mouseenter', function () {
        activateChannel(idx, true);
      });
    });

    stage.addEventListener('mouseenter', stopTimer);
    stage.addEventListener('mouseleave', startTimer);
    list.addEventListener('mouseenter', stopTimer);
    list.addEventListener('mouseleave', startTimer);

    // Initial state
    activateChannel(0, false);
    startTimer();
  })();

  /* ---------------------------------------------------------
     ONE-AGENT MOCKUP INTERACTIVITY — date selector, time slots,
     and cart button micro-interactions
     --------------------------------------------------------- */
  (function initOneAgentMockups() {
    var section = document.getElementById('one-agent');
    if (!section) return;

    // Date Chip Selection
    var dateChips = section.querySelectorAll('.oac-date-chip');
    dateChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var parent = chip.closest('.oac-date-row');
        if (parent) {
          parent.querySelectorAll('.oac-date-chip').forEach(function (c) {
            c.classList.remove('is-active');
          });
        }
        chip.classList.add('is-active');
      });
    });

    // Time Slot Selection
    var timeChips = section.querySelectorAll('.oac-time-chip');
    timeChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var parent = chip.closest('.oac-time-grid');
        if (parent) {
          parent.querySelectorAll('.oac-time-chip').forEach(function (c) {
            c.classList.remove('is-active');
          });
        }
        chip.classList.add('is-active');
      });
    });

    // Cart and Action Buttons Feedback
    var cartBtns = section.querySelectorAll('.oac-cart-btn');
    cartBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var origText = btn.innerHTML;
        btn.style.background = '#10B981';
        btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Confirmed!';
        setTimeout(function () {
          btn.style.background = '';
          btn.innerHTML = origText;
        }, 2200);
      });
    });
  })();

})();

