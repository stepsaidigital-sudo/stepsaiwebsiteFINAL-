/* ============================================================
   STEPSAI — AI AGENTS PAGE SCRIPT
   Extracted from script.js: everything below is the interactive
   logic for Four Agents, Industries, Channels, Setup, Workflows,
   Analytics, and FAQ — moved here along with those sections so this
   page doesn't need script.js's Step Line + hero morphing-card code,
   which is homepage-only. Nav scroll/burger/dropdowns live in the
   shared nav.js (loaded before this file).
   ============================================================ */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     GLOBAL — STANDARD SECTION ENTRANCE
     Rise 20px + fade, staggered 60ms within a data-reveal-group,
     capped at 4. Fires once at 20% viewport entry.
     ============================================================ */
  (function initRevealSystem() {
    var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!els.length) return;

    var groups = {};
    var soloCounter = 0;
    els.forEach(function (el) {
      var group = el.getAttribute('data-reveal-group') || ('__solo-' + (soloCounter++));
      (groups[group] = groups[group] || []).push(el);
    });
    Object.keys(groups).forEach(function (key) {
      groups[key].forEach(function (el, i) {
        el.style.transitionDelay = (Math.min(i, 3) * 60) + 'ms';
      });
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    els.forEach(function (el) { observer.observe(el); });
  })();

  /* ============================================================
     FOUR AGENTS: brain-node connectors
     Positions computed from real DOM rects, same approach as the
     Step Line. On card hover: connector illuminates, a dot travels
     card → node, and the node ring pulses once. Siblings hold still.
     ============================================================ */
  (function initAgentConnectors() {
    var stage = document.getElementById('agentsStage');
    var connectorsSvg = document.getElementById('agentsConnectorsSvg');
    var node = document.getElementById('brainNode');
    var ring = document.getElementById('brainNodeRing');
    if (!stage || !connectorsSvg || !node) return;

    var cards = Array.prototype.slice.call(document.querySelectorAll('.agent-card'));
    var lines = Array.prototype.slice.call(connectorsSvg.querySelectorAll('.agents-connector'));

    function connectorsEnabled() {
      return window.innerWidth > 860;
    }

    function buildConnectors() {
      if (!connectorsEnabled()) return;
      var stageRect = stage.getBoundingClientRect();
      var nodeRect = node.getBoundingClientRect();
      var nodeCenter = {
        x: nodeRect.left + nodeRect.width / 2 - stageRect.left,
        y: nodeRect.top + nodeRect.height / 2 - stageRect.top
      };

      cards.forEach(function (cardEl, i) {
        var r = cardEl.getBoundingClientRect();
        var cornerX = (i % 2 === 0) ? r.right : r.left;   // left column → right edge, right column → left edge
        var cornerY = (i < 2) ? r.bottom : r.top;         // top row → bottom edge, bottom row → top edge
        var line = lines[i];
        if (!line) return;
        line.setAttribute('x1', cornerX - stageRect.left);
        line.setAttribute('y1', cornerY - stageRect.top);
        line.setAttribute('x2', nodeCenter.x);
        line.setAttribute('y2', nodeCenter.y);
      });

      connectorsSvg.setAttribute('width', stageRect.width);
      connectorsSvg.setAttribute('height', stageRect.height);
    }

    function travelDot(index) {
      if (prefersReducedMotion) return;
      var line = lines[index];
      if (!line) return;
      var x1 = parseFloat(line.getAttribute('x1'));
      var y1 = parseFloat(line.getAttribute('y1'));
      var x2 = parseFloat(line.getAttribute('x2'));
      var y2 = parseFloat(line.getAttribute('y2'));
      var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('r', '4');
      dot.setAttribute('class', 'agents-connector-dot');
      dot.style.opacity = '1';
      connectorsSvg.appendChild(dot);

      var start = null;
      var duration = 500;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        dot.setAttribute('cx', x1 + (x2 - x1) * progress);
        dot.setAttribute('cy', y1 + (y2 - y1) * progress);
        if (progress < 1) requestAnimationFrame(step);
        else dot.remove();
      }
      requestAnimationFrame(step);
    }

    /* -------- One agent is always "active": its own position shows a
       heading (job name only); the other three positions always show
       that SAME job applied to three fixed industries — E-commerce,
       Real Estate, Education — not steps of one conversation, not
       their own separate job identity. Content is rendered fresh into
       each card's .agent-card-content on every rotation tick. -------- */
    var INDUSTRY_ICONS = {
      ecommerce: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 8H18L17 19H7L6 8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 8V6C9 4.3 10.3 3 12 3C13.7 3 15 4.3 15 6V8" stroke="currentColor" stroke-width="1.6"/></svg>',
      realEstate: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 11L12 4L20 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10V20H18V10" stroke="currentColor" stroke-width="1.6"/></svg>',
      education: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 4L22 9L12 14L2 9L12 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 11V17C6 17 8.5 19.5 12 19.5C15.5 19.5 18 17 18 17V11" stroke="currentColor" stroke-width="1.6"/></svg>'
    };

    function industryTag(key, label) {
      return '<div class="industry-tag">' + INDUSTRY_ICONS[key] + '<span>' + label + '</span></div>';
    }
    function miniReceipt(source, action) {
      return '<span class="receipt receipt--mini"><svg class="receipt-check" width="12" height="12" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="currentColor" opacity="0.16"/><path d="M4 7.2L6 9L10 4.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="receipt-source">' + source + '</span><span class="receipt-dot">·</span><span class="receipt-action">' + action + '</span></span>';
    }
    function industryCard(key, label, line, source, action) {
      return industryTag(key, label) + '<div class="step-bubble agent">' + line + '</div>' + miniReceipt(source, action);
    }

    var AGENTS = [
      {
        name: 'Sales',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6 8H18L17 19H7L6 8Z" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 8V6C9 4.3 10.3 3 12 3C13.7 3 15 4.3 15 6V8" stroke="#fff" stroke-width="1.6"/></svg>',
        steps: [
          industryCard('ecommerce', 'E-commerce', 'Reserved the linen shirt for you.', 'SHOPIFY', 'CART UPDATED'),
          industryCard('realEstate', 'Real Estate', 'Sent you the 3BHK details.', 'CRM', 'SITE VISIT SCHEDULED'),
          industryCard('education', 'Education', "Here's the course fee and dates.", 'CRM', 'ENQUIRY CAPTURED')
        ]
      },
      {
        name: 'Lead',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="10" cy="8" r="3.2" stroke="#fff" stroke-width="1.6"/><path d="M4 19C4 15.5 6.5 13.5 10 13.5C13.5 13.5 16 15.5 16 19" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M17 8H21M19 6V10" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
        steps: [
          industryCard('ecommerce', 'E-commerce', 'Got your email — sending the discount code.', 'HUBSPOT', 'LEAD CREATED'),
          industryCard('realEstate', 'Real Estate', 'Saved your budget and preferred locality.', 'HUBSPOT', 'LEAD CREATED'),
          industryCard('education', 'Education', 'Noted your course interest and budget.', 'HUBSPOT', 'LEAD CREATED')
        ]
      },
      {
        name: 'Meetings',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="#fff" stroke-width="1.6"/><path d="M4 9.5H20M8 3V6M16 3V6" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
        steps: [
          industryCard('ecommerce', 'E-commerce', 'Booked a styling call — Thursday 3 PM.', 'CALENDAR', 'MEETING BOOKED'),
          industryCard('realEstate', 'Real Estate', 'Booked your site visit — Saturday 11 AM.', 'CALENDAR', 'MEETING BOOKED'),
          industryCard('education', 'Education', 'Booked a counsellor call — tomorrow 5 PM.', 'CALENDAR', 'MEETING BOOKED')
        ]
      },
      {
        name: 'Support',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="#fff" stroke-width="1.6"/><rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="#fff" stroke-width="1.6"/></svg>',
        steps: [
          industryCard('ecommerce', 'E-commerce', 'Found your delayed order — it’s out for delivery today.', 'ZENDESK', 'TICKET RESOLVED'),
          industryCard('realEstate', 'Real Estate', 'Logged and resolved your maintenance request.', 'ZENDESK', 'TICKET RESOLVED'),
          industryCard('education', 'Education', 'Fixed the certificate issue and re-issued it.', 'ZENDESK', 'TICKET RESOLVED')
        ]
      }
    ];

    function applyCardContent(cardEl, html, isHeading, instant, delay) {
      var content = cardEl.querySelector('.agent-card-content');
      if (!content) return;
      function commit() {
        content.innerHTML = html;
        cardEl.classList.toggle('is-heading', isHeading);
      }
      if (instant || prefersReducedMotion) { commit(); return; }

      // Real 3D flip using a single face: rotate to 90° (edge-on, so
      // nothing readable is visible), swap the content invisibly at
      // that midpoint, jump to -90° with no transition, then rotate
      // back to 0° — reads as one continuous flip-through rather than
      // a flat fade, without needing a duplicate front/back face in
      // the markup.
      setTimeout(function () {
        content.style.transition = 'transform 260ms var(--ease)';
        content.style.transform = 'rotateY(90deg)';
        setTimeout(function () {
          commit();
          content.style.transition = 'none';
          content.style.transform = 'rotateY(-90deg)';
          void content.offsetWidth; // force reflow so the jump registers before re-enabling the transition
          content.style.transition = 'transform 260ms var(--ease)';
          content.style.transform = 'rotateY(0deg)';
        }, 260);
      }, delay || 0);
    }

    /* -------- Auto-rotating heading: one agent "active" at a time.
       The three industry cards reveal one after another (not all at
       once) so each gets its own moment before the next appears —
       "complete" the full set, then switch to the next agent. Hovering/
       focusing a card takes over immediately and pauses rotation until
       you leave it; scrolling away or hiding the tab pauses it too —
       same pause-reasons pattern as the Hero engine, so this still
       isn't a free-running timer once it's out of view. -------- */
    var rotation = { index: -1, timer: null, pauseReasons: new Set() };
    var CARD_STAGGER_MS = 320; // gap between each industry card's reveal

    function setActiveCard(index, instant) {
      rotation.index = index;
      var agent = AGENTS[index];
      if (!agent) return;
      var stepPos = 0;
      cards.forEach(function (c, i) {
        var line = lines[i];
        if (line) line.classList.toggle('is-active', i === index);
        if (i === index) {
          applyCardContent(c, '<span class="agent-heading-icon">' + agent.icon + '</span><h3 class="agent-heading-title">' + agent.name + '</h3>', true, instant, 0);
        } else {
          applyCardContent(c, agent.steps[stepPos] || '', false, instant, stepPos * CARD_STAGGER_MS);
          stepPos++;
        }
      });
      if (connectorsEnabled()) {
        travelDot(index);
        if (ring && !prefersReducedMotion) {
          ring.classList.remove('is-pulsing');
          void ring.offsetWidth; // restart the keyframe
          ring.classList.add('is-pulsing');
        }
      }
    }

    function clearRotationTimer() {
      if (rotation.timer) { clearTimeout(rotation.timer); rotation.timer = null; }
    }

    function scheduleNextCard() {
      clearRotationTimer();
      // ~1.2s for all three industry cards to finish flipping in, then a
      // solid ~4.8s of pure reading time before switching — more delay
      // than before, on purpose, so nothing feels rushed past.
      rotation.timer = setTimeout(function () {
        setActiveCard((rotation.index + 1) % cards.length);
        scheduleNextCard();
      }, 6000);
    }

    function startRotation() {
      if (prefersReducedMotion || rotation.pauseReasons.size > 0) return;
      setActiveCard(rotation.index < 0 ? 0 : rotation.index);
      scheduleNextCard();
    }

    function pauseRotation(reason) {
      var wasRunning = rotation.pauseReasons.size === 0;
      rotation.pauseReasons.add(reason);
      if (wasRunning) clearRotationTimer();
    }

    function resumeRotation(reason) {
      rotation.pauseReasons.delete(reason);
      if (rotation.pauseReasons.size === 0) startRotation();
    }

    cards.forEach(function (cardEl, i) {
      cardEl.addEventListener('mouseenter', function () {
        pauseRotation('hover');
        setActiveCard(i);
      });
      cardEl.addEventListener('mouseleave', function () { resumeRotation('hover'); });
      cardEl.addEventListener('focusin', function () {
        pauseRotation('focus');
        setActiveCard(i);
      });
      cardEl.addEventListener('focusout', function () { resumeRotation('focus'); });
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) pauseRotation('hidden');
      else resumeRotation('hidden');
    });

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      var rotationObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio < 0.3) pauseRotation('offscreen');
          else resumeRotation('offscreen');
        });
      }, { threshold: [0, 0.3, 1] });
      rotationObserver.observe(stage);
    } else if (!prefersReducedMotion) {
      startRotation();
    }

    var agentResizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(agentResizeTimer);
      agentResizeTimer = setTimeout(buildConnectors, 150);
    });
    window.addEventListener('load', buildConnectors);
    document.addEventListener('DOMContentLoaded', buildConnectors);
    // Safety net: rebuild once more after web fonts settle and can shift layout.
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(buildConnectors);
    }
  })();

  /* ============================================================
     INDUSTRIES
     Six tabs, sliding underline, locked-height crossfade stage.
     Auto-advances every 6s until the visitor's first interaction,
     then stays permanently manual — matches the Master Prompt spec.
     ============================================================ */
  (function initIndustries() {
    var tabsWrap = document.getElementById('industriesTabs');
    var indicator = document.getElementById('industriesTabIndicator');
    var bulletsEl = document.getElementById('industriesBullets');
    var screensWrap = document.getElementById('industriesScreens');
    var stageEl = document.getElementById('industriesStage');
    if (!tabsWrap || !indicator || !bulletsEl || !screensWrap) return;

    var tabs = Array.prototype.slice.call(tabsWrap.querySelectorAll('.industries-tab'));
    var screens = Array.prototype.slice.call(screensWrap.querySelectorAll('.industries-screen'));

    var BULLETS = [
      ['Answers size, stock and shipping questions instantly.', 'Recommends the right product from your catalog.', 'Adds items to cart and shares checkout.'],
      ['Explains services and doctor availability.', 'Offers real open slots, not just a booking form.', 'Confirms the appointment and sends reminders.'],
      ['Shares price, BHK and floor plan on request.', 'Offers site-visit slots that are actually free.', 'Books the visit and saves the lead to your CRM.'],
      ['Answers fee, duration and eligibility questions.', 'Recommends the right course for what they asked.', 'Books a counsellor callback automatically.'],
      ['Compares plans based on what they actually need.', 'Answers integration and security questions.', 'Starts the trial and hands off a qualified lead.'],
      ['Checks real room availability for their dates.', 'Answers questions about amenities and policies.', 'Confirms the booking with details, instantly.']
    ];

    var activeIndex = 0;
    var switching = false;
    var userInteracted = false;
    var autoTimer = null;
    var pauseReasons = new Set();

    function positionIndicator(index) {
      var tab = tabs[index];
      if (!tab) return;
      indicator.style.left = tab.offsetLeft + 'px';
      indicator.style.width = tab.offsetWidth + 'px';
    }

    function setBullets(index) {
      var lines = BULLETS[index] || [];
      bulletsEl.innerHTML = lines.map(function (text) {
        return '<p class="industries-bullet"><span>' + text + '</span></p>';
      }).join('');
    }

    function switchTo(index) {
      if (index === activeIndex || switching || !screens[index]) return;
      switching = true;
      var outgoing = screens[activeIndex];
      var incoming = screens[index];

      tabs.forEach(function (t, i) {
        t.classList.toggle('is-active', i === index);
        t.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
      positionIndicator(index);
      if (stageEl) stageEl.setAttribute('data-industry', index);

      if (outgoing) {
        outgoing.classList.remove('is-active');
        outgoing.classList.add('is-leaving');
      }
      setTimeout(function () {
        if (outgoing) outgoing.classList.remove('is-leaving');
        setBullets(index);
        if (incoming) incoming.classList.add('is-active');
        activeIndex = index;
        switching = false;
      }, 160);
    }

    function clearAutoAdvance() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }
    function startAutoAdvance() {
      if (userInteracted || prefersReducedMotion || autoTimer || pauseReasons.size > 0) return;
      autoTimer = setInterval(function () {
        if (userInteracted) { clearAutoAdvance(); return; }
        switchTo((activeIndex + 1) % tabs.length);
      }, 6000);
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        userInteracted = true; // auto-advance stops permanently, per spec
        clearAutoAdvance();
        switchTo(i);
      });
    });

    window.addEventListener('load', function () { positionIndicator(activeIndex); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { positionIndicator(activeIndex); });
    }
    var industriesResizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(industriesResizeTimer);
      industriesResizeTimer = setTimeout(function () { positionIndicator(activeIndex); }, 150);
    });

    if (!prefersReducedMotion && stageEl && 'IntersectionObserver' in window) {
      var baselineSet = false;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var isVisible = entry.intersectionRatio >= 0.3;
          if (!baselineSet) {
            baselineSet = true;
            if (isVisible) startAutoAdvance();
            return;
          }
          if (!isVisible) { pauseReasons.add('offscreen'); clearAutoAdvance(); }
          else { pauseReasons.delete('offscreen'); startAutoAdvance(); }
        });
      }, { threshold: [0, 0.3, 1] });
      io.observe(stageEl);
    } else if (!prefersReducedMotion) {
      startAutoAdvance();
    }
  })();

  /* ============================================================
     SETUP
     Four tabs, sliding underline, locked-height crossfade — same
     pattern as Industries. Swatch clicks also update the live preview.
     ============================================================ */
  (function initSetup() {
    var tabsWrap = document.getElementById('setupTabs');
    var indicator = document.getElementById('setupTabIndicator');
    var stage = document.getElementById('setupStage');
    if (!tabsWrap || !indicator || !stage) return;

    var tabs = Array.prototype.slice.call(tabsWrap.querySelectorAll('.setup-tab'));
    var panels = Array.prototype.slice.call(stage.querySelectorAll('.setup-panel'));
    var activeIndex = 0;
    var switching = false;

    function positionIndicator(index) {
      var tab = tabs[index];
      if (!tab) return;
      indicator.style.left = tab.offsetLeft + 'px';
      indicator.style.width = tab.offsetWidth + 'px';
    }

    function switchTo(index) {
      if (index === activeIndex || switching || !panels[index]) return;
      switching = true;
      var outgoing = panels[activeIndex];
      var incoming = panels[index];

      tabs.forEach(function (t, i) {
        t.classList.toggle('is-active', i === index);
        t.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
      positionIndicator(index);

      if (outgoing) { outgoing.classList.remove('is-active'); outgoing.classList.add('is-leaving'); }
      setTimeout(function () {
        if (outgoing) outgoing.classList.remove('is-leaving');
        if (incoming) incoming.classList.add('is-active');
        activeIndex = index;
        switching = false;
      }, 160);
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { switchTo(i); });
    });

    // Swatch click updates the live preview — "the one place a visitor
    // changes something and sees it respond."
    var swatches = Array.prototype.slice.call(stage.querySelectorAll('.setup-swatch'));
    var previewHeader = document.getElementById('setupPreviewHeader');
    swatches.forEach(function (swatch) {
      swatch.addEventListener('click', function () {
        swatches.forEach(function (s) { s.classList.remove('is-active'); });
        swatch.classList.add('is-active');
        if (previewHeader) previewHeader.style.background = swatch.getAttribute('data-swatch');
      });
    });

    window.addEventListener('load', function () { positionIndicator(activeIndex); });
    var setupResizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(setupResizeTimer);
      setupResizeTimer = setTimeout(function () { positionIndicator(activeIndex); }, 150);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { positionIndicator(activeIndex); });
    }
  })();

  /* ============================================================
     WORKFLOWS
     Tab select runs the five nodes in sequence, ~180ms apart, then
     lands the Receipt — reads as the workflow running, not a diagram.
     ============================================================ */
  (function initWorkflows() {
    var tabsWrap = document.getElementById('workflowTabs');
    var indicator = document.getElementById('workflowTabIndicator');
    var builder = document.getElementById('workflowBuilder');
    var conversationEl = document.getElementById('workflowConversation');
    var receiptEl = document.getElementById('workflowReceipt');
    if (!tabsWrap || !indicator || !builder) return;

    var tabs = Array.prototype.slice.call(tabsWrap.querySelectorAll('.workflow-tab'));
    var nodes = Array.prototype.slice.call(builder.querySelectorAll('.workflow-node'));
    var activeIndex = 0;
    var runTimers = [];

    var WORKFLOWS = [
      {
        steps: ['Cart left behind · ₹2,400', 'Wait 30 minutes', 'Check — order not placed', 'Send WhatsApp message', 'Answer questions, share checkout'],
        conversation: [
          { role: 'incoming', text: 'You left a linen shirt in your cart — still want it?' },
          { role: 'outgoing', text: 'Can it still arrive by Friday?' },
          { role: 'incoming', text: "Yes — here's your checkout link." }
        ],
        receiptAction: 'CHECKOUT REOPENED'
      },
      {
        steps: ['New lead captured', 'Check — qualified', 'Save to CRM', 'Send follow-up', 'Offer open times'],
        conversation: [
          { role: 'incoming', text: 'Thanks for your interest — what are you looking for?' },
          { role: 'outgoing', text: 'A 2BHK, budget around ₹80L' },
          { role: 'incoming', text: 'Got it — saved. Here are two open slots this week.' }
        ],
        receiptAction: 'FOLLOW-UP SENT'
      },
      {
        steps: ['Meeting booked', 'Wait until 24h before', 'Send reminder', 'Allow confirm or reschedule'],
        conversation: [
          { role: 'incoming', text: 'Reminder — your appointment is tomorrow at 4 PM.' },
          { role: 'outgoing', text: 'Can we push it to 5?' },
          { role: 'incoming', text: 'Done — moved to 5 PM.' }
        ],
        receiptAction: 'REMINDER SENT'
      },
      {
        steps: ['Customer inactive 30 days', 'Match segment', 'Send relevant offer', 'Handle replies', 'Track clicks'],
        conversation: [
          { role: 'incoming', text: "It's been a while — here's 15% off your next order." },
          { role: 'outgoing', text: 'Does this work on the linen collection?' },
          { role: 'incoming', text: "Yes, on everything — here's your code." }
        ],
        receiptAction: 'CAMPAIGN LIVE'
      }
    ];

    function positionIndicator(index) {
      var tab = tabs[index];
      if (!tab) return;
      indicator.style.left = tab.offsetLeft + 'px';
      indicator.style.width = tab.offsetWidth + 'px';
    }

    function clearRunTimers() {
      runTimers.forEach(clearTimeout);
      runTimers = [];
    }

    function renderBuilder(workflow) {
      // Rebuild the node list to match this workflow's step count (4 or 5).
      builder.querySelectorAll('.workflow-node').forEach(function (n) { n.remove(); });
      nodes = workflow.steps.map(function (label, i) {
        var node = document.createElement('div');
        node.className = 'workflow-node';
        node.setAttribute('data-node', i);
        node.innerHTML = '<span class="workflow-node-dot">' + (i + 1) + '</span><span class="workflow-node-label">' + label + '</span>';
        builder.appendChild(node);
        return node;
      });
    }

    function renderConversationShell(workflow) {
      if (!conversationEl) return;
      conversationEl.innerHTML = '';
    }

    function runWorkflow(workflow, instant) {
      clearRunTimers();
      nodes.forEach(function (n) { n.classList.remove('is-active'); });
      renderConversationShell(workflow);
      if (receiptEl) receiptEl.classList.remove('is-visible');

      if (instant || prefersReducedMotion) {
        nodes.forEach(function (n) { n.classList.add('is-active'); });
        workflow.conversation.forEach(function (msg) {
          var bubble = document.createElement('div');
          bubble.className = 'wa-bubble ' + (msg.role === 'outgoing' ? 'outgoing' : 'incoming');
          bubble.textContent = msg.text;
          conversationEl.appendChild(bubble);
        });
        if (receiptEl) receiptEl.classList.add('is-visible');
        return;
      }

      nodes.forEach(function (node, i) {
        var t = setTimeout(function () { node.classList.add('is-active'); }, i * 180);
        runTimers.push(t);
      });

      workflow.conversation.forEach(function (msg, i) {
        var t = setTimeout(function () {
          var bubble = document.createElement('div');
          bubble.className = 'wa-bubble ' + (msg.role === 'outgoing' ? 'outgoing' : 'incoming');
          bubble.style.opacity = '0';
          bubble.style.transform = 'translateY(6px)';
          bubble.style.transition = 'opacity 260ms var(--ease), transform 260ms var(--ease)';
          bubble.textContent = msg.text;
          conversationEl.appendChild(bubble);
          requestAnimationFrame(function () {
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
          });
        }, nodes.length * 180 + i * 350);
        runTimers.push(t);
      });

      var receiptDelay = nodes.length * 180 + workflow.conversation.length * 350 + 300;
      var t2 = setTimeout(function () { if (receiptEl) receiptEl.classList.add('is-visible'); }, receiptDelay);
      runTimers.push(t2);
    }

    function switchTo(index, instant) {
      if ((index === activeIndex && !instant) || !WORKFLOWS[index]) return;
      var workflow = WORKFLOWS[index];
      tabs.forEach(function (t, i) {
        t.classList.toggle('is-active', i === index);
        t.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
      positionIndicator(index);
      renderBuilder(workflow);
      runWorkflow(workflow, instant);
      activeIndex = index;
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { switchTo(i); });
    });

    window.addEventListener('load', function () { positionIndicator(activeIndex); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { positionIndicator(activeIndex); });
    }

    // Play the default workflow once it scrolls into view.
    var stageEl = document.getElementById('workflowStage');
    if (stageEl && 'IntersectionObserver' in window) {
      var played = false;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !played) {
            played = true;
            switchTo(0, prefersReducedMotion);
            io.disconnect();
          }
        });
      }, { threshold: 0.3 });
      io.observe(stageEl);
    } else {
      switchTo(0, true);
    }
  })();

  /* ============================================================
     ANALYTICS
     Summary types on sentence by sentence on scroll-in. Charts (the
     bars) never animate — data that animates looks performed.
     ============================================================ */
  (function initAnalytics() {
    var textEl = document.getElementById('analyticsSummaryText');
    var summaryEl = document.querySelector('.analytics-summary');
    if (!textEl || !summaryEl) return;

    var SENTENCES = [
      'This week your agent handled 412 conversations.',
      'It answered 358 on its own, booked 24 meetings, and passed 30 to your team.',
      "Three customers asked about a product you don't stock yet."
    ];

    function revealAll() {
      textEl.textContent = SENTENCES.join(' ');
    }

    function typeOn() {
      if (prefersReducedMotion) { revealAll(); return; }
      SENTENCES.forEach(function (sentence, i) {
        setTimeout(function () {
          textEl.textContent += (i > 0 ? ' ' : '') + sentence;
        }, i * 400);
      });
    }

    if ('IntersectionObserver' in window) {
      var played = false;
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !played) {
            played = true;
            typeOn();
            io.disconnect();
          }
        });
      }, { threshold: 0.3 });
      io.observe(summaryEl);
    } else {
      revealAll();
    }
  })();

  /* ============================================================
     FAQ
     One open at a time. Height animates, chevron rotates, text fades
     in behind the height change so it never appears to stretch.
     ============================================================ */
  (function initFaq() {
    var grid = document.getElementById('faqGrid');
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
