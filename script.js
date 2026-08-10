/* ============================================================
   STEPSAI LANDING — SCRIPT
   Step 1 scope: Step Line layout (static, fully drawn), Nav scroll
   state, mobile menu toggle. Scroll-linked draw + section entrance
   motion are wired in later build steps.
   ============================================================ */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- STEP LINE ---------- */
  var layer = document.querySelector('.step-line-layer');
  var track = document.querySelector('.step-line-track');
  var drawn = document.querySelector('.step-line-drawn');
  var dotsHost = document.querySelector('.step-line-dots');
  var referenceContainer = document.querySelector('.container');

  function isMobile() {
    return window.innerWidth <= 640;
  }

  function buildStepLine() {
    if (!track || !drawn || !referenceContainer) return;

    var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section-boundary]'));
    if (!sections.length) return;

    var docHeight = document.documentElement.scrollHeight;
    var containerRect = referenceContainer.getBoundingClientRect();
    var scrollY = window.scrollY || window.pageYOffset;
    var mobile = isMobile();
    var inset = mobile ? 16 : 40;
    var x = containerRect.left + scrollY + inset;
    var jogSize = 32;

    var boundaries = sections.map(function (el) {
      var r = el.getBoundingClientRect();
      return r.top + scrollY;
    });

    var d = 'M ' + x + ' 0';
    var dots = [];
    var currentX = x;
    var jogSign = 1;

    sections.forEach(function (el, i) {
      if (i === 0) return; // page top is the first boundary — no jog before content starts
      var y = boundaries[i];
      d += ' L ' + currentX + ' ' + y;
      if (!mobile) {
        var nextX = currentX + jogSize * jogSign;
        d += ' L ' + nextX + ' ' + y;
        currentX = nextX;
        jogSign *= -1;
      }
      dots.push({ x: currentX, y: y });

    });

    d += ' L ' + currentX + ' ' + docHeight;

    track.setAttribute('d', d);
    drawn.setAttribute('d', d);

    // Store total length for the scroll-linked draw (updateStepLineDraw).
    // Reduced motion renders fully drawn regardless of scroll position.
    stepLineLength = drawn.getTotalLength ? drawn.getTotalLength() : 0;
    drawn.style.strokeDasharray = stepLineLength;
    drawn.style.strokeDashoffset = prefersReducedMotion ? 0 : stepLineLength;

    dotsHost.innerHTML = '';
    dots.forEach(function (pt) {
      var dot = document.createElement('span');
      dot.className = 'step-line-dot';
      dot.style.left = (pt.x - (referenceContainer.getBoundingClientRect().left + scrollY - inset) + inset) + 'px';
      // Position relative to layer (absolute, top:0 left:0 of document flow container)
      dot.style.left = pt.x + 'px';
      dot.style.top = pt.y + 'px';
      dotsHost.appendChild(dot);
    });

    var svg = document.querySelector('.step-line-svg');
    if (svg) {
      svg.setAttribute('width', document.documentElement.scrollWidth);
      svg.setAttribute('height', docHeight);
      svg.setAttribute('viewBox', '0 0 ' + document.documentElement.scrollWidth + ' ' + docHeight);
    }
    layer.style.height = docHeight + 'px';
  }

  var stepLineLength = 0;

  function updateStepLineDraw() {
    if (!drawn) return;
    if (prefersReducedMotion) {
      drawn.style.strokeDashoffset = 0;
      return;
    }
    var docHeight = document.documentElement.scrollHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var drawnTo = Math.min(scrollY + window.innerHeight, docHeight);
    var progress = docHeight > 0 ? drawnTo / docHeight : 0;
    drawn.style.strokeDashoffset = String(stepLineLength * (1 - progress));
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      buildStepLine();
      updateStepLineDraw();
    }, 150);
  });
  window.addEventListener('load', function () {
    buildStepLine();
    updateStepLineDraw();
  });
  document.addEventListener('DOMContentLoaded', function () {
    buildStepLine();
    updateStepLineDraw();
  });

  /* ---------- STEP LINE SCROLL DRAW ----------
     Nav scroll state, the mobile menu, and the Product/Solutions
     dropdowns now live in the shared nav.js (loaded before this file)
     so that logic isn't duplicated across every page's script. This
     file only needs its own scroll listener for the Step Line draw,
     which is homepage-only. */
  window.addEventListener('scroll', updateStepLineDraw, { passive: true });
  updateStepLineDraw();

  /* ============================================================
     SECTION 2 — HERO: THE MORPHING CHANNEL CARD
     One card, one DOM structure. The header swaps channel identity;
     bubbles stay in brand colors across all three (Addendum A §3.1 —
     branded consistency in the Hero vs. platform-native fidelity in
     the Channels section later). ~8s per channel, looping.
     ============================================================ */
  var card = document.getElementById('channelCard');
  if (card) {
    var headerEl = document.getElementById('channelHeader');
    var avatarEl = document.getElementById('channelAvatar');
    var nameEl = document.getElementById('channelName');
    var statusEl = document.getElementById('channelStatus');
    var bubblesEl = document.getElementById('channelBubbles');
    var receiptStripEl = document.getElementById('channelReceiptStrip');
    var dotsEl = document.getElementById('channelDots');
    var dotButtons = dotsEl ? Array.prototype.slice.call(dotsEl.querySelectorAll('.channel-dot')) : [];

    var CHANNELS = [
      {
        headerClass: 'header-whatsapp',
        avatar: 'N',
        name: 'Nyra Store',
        status: 'online',
        customer1: { text: 'Do you have the linen shirt in medium?', time: '10:42 PM' },
        agent1:    { text: 'Yes — two left in medium. Want me to hold one?', time: '10:42 PM' },
        customer2: { text: 'Yes please', time: '10:43 PM' },
        agent2:    { text: 'Reserved and added to your cart.', time: '10:43 PM' },
        richBlockAfter: 'agent2',
        richBlock: 'product',
        richBlockData: { name: 'Linen Shirt · Medium', price: '₹2,400' },
        receipt: { source: 'SHOPIFY', action: 'CART UPDATED' }
      },
      {
        headerClass: 'header-instagram',
        avatar: 'N',
        name: 'nyra.store',
        status: 'Active now',
        customer1: { text: 'Is the 3BHK still available?', time: '9:15 PM' },
        agent1:    { text: 'It is. Want to see it this weekend?', time: '9:15 PM' },
        customer2: { text: 'Saturday works', time: '9:16 PM' },
        agent2:    { text: 'Booked — Saturday 11 AM. Sending the address.', time: '9:16 PM' },
        richBlockAfter: 'agent2',
        richBlock: 'chips',
        richBlockData: { options: ['Sat 11:00', 'Sat 4:00', 'Sun 11:00'], selected: 0 },
        receipt: { source: 'CALENDAR', action: 'SITE VISIT BOOKED' }
      },
      {
        headerClass: 'header-website',
        avatar: 'N',
        name: 'Nyra Store',
        status: 'Typically replies instantly',
        customer1: { text: 'Where is my order?', time: '11:58 PM' },
        agent1:    { text: 'Order #2453 is out for delivery — arriving tomorrow before 6 PM.', time: '11:58 PM' },
        customer2: { text: 'Perfect, thanks', time: '11:59 PM' },
        agent2:    { text: "Anytime. I'll message you when it's delivered.", time: '11:59 PM' },
        richBlockAfter: 'agent1',
        richBlock: 'order',
        richBlockData: { number: '#2453', status: 'Out for delivery', eta: 'ETA tomorrow 6 PM' },
        receipt: { source: 'ORDER', action: 'TRACKED & CUSTOMER NOTIFIED' }
      }
    ];

    var hero = {
      index: 0,
      timers: [],
      pauseReasons: new Set(),
      manualLockUntil: 0
    };

    function schedule(fn, delay) {
      var id = setTimeout(fn, delay);
      hero.timers.push(id);
      return id;
    }
    function clearTimers() {
      hero.timers.forEach(clearTimeout);
      hero.timers = [];
    }

    function makeBubble(role, msg) {
      var el = document.createElement('div');
      el.className = 'bubble ' + role;
      var textEl = document.createElement('div');
      textEl.textContent = msg.text;
      el.appendChild(textEl);
      var meta = document.createElement('div');
      meta.className = 'bubble-meta';
      var time = document.createElement('span');
      time.className = 'bubble-time';
      time.textContent = msg.time;
      meta.appendChild(time);
      el.appendChild(meta);
      return el;
    }

    function makeRichBlock(channel) {
      var wrap = document.createElement('div');
      wrap.className = 'rich-block';
      if (channel.richBlock === 'product') {
        wrap.innerHTML =
          '<div class="rich-product-card">' +
            '<div class="rich-product-thumb">' +
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 8L8 4H16L18 8" stroke="#8B95A9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="8" width="16" height="12" rx="2" stroke="#8B95A9" stroke-width="1.5"/></svg>' +
            '</div>' +
            '<div class="rich-product-info">' +
              '<div class="rich-product-name">' + channel.richBlockData.name + '</div>' +
              '<div class="rich-product-price">' + channel.richBlockData.price + '</div>' +
            '</div>' +
            '<span class="rich-product-cta" data-role="interaction-target">Add to cart</span>' +
          '</div>';
      } else if (channel.richBlock === 'chips') {
        var chips = channel.richBlockData.options.map(function (label) {
          return '<span class="rich-chip">' + label + '</span>';
        }).join('');
        wrap.innerHTML = '<div class="rich-time-chips">' + chips + '</div>';
      } else if (channel.richBlock === 'order') {
        wrap.innerHTML =
          '<div class="rich-order-card">' +
            '<div class="rich-order-number">' + channel.richBlockData.number + '</div>' +
            '<div class="rich-order-row">' +
              '<span class="rich-order-status" data-role="interaction-target">' + channel.richBlockData.status + '</span>' +
              '<span class="rich-order-eta">' + channel.richBlockData.eta + '</span>' +
            '</div>' +
          '</div>';
      }
      return wrap;
    }

    function makeTyping() {
      var el = document.createElement('div');
      el.className = 'typing-indicator';
      el.innerHTML = '<span></span><span></span><span></span>';
      return el;
    }

    function renderBase(index) {
      var channel = CHANNELS[index];
      headerEl.className = 'channel-card-header ' + channel.headerClass;
      avatarEl.textContent = channel.avatar;
      nameEl.textContent = channel.name;
      statusEl.textContent = channel.status;
      bubblesEl.innerHTML = '';
      receiptStripEl.classList.remove('is-visible');
      receiptStripEl.innerHTML = '';
    }

    function updateDots(index) {
      dotButtons.forEach(function (btn, i) {
        btn.classList.toggle('is-active', i === index);
        btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
    }

    function insertRichBlock(channel) {
      bubblesEl.appendChild(makeRichBlock(channel));
    }

    function runInteractionBeat(channel) {
      var target = bubblesEl.querySelector('[data-role="interaction-target"]');
      if (!target) return;
      if (channel.richBlock === 'product') {
        target.classList.add('is-active');
        schedule(function () { target.classList.remove('is-active'); }, 240);
      } else if (channel.richBlock === 'chips') {
        var chips = bubblesEl.querySelectorAll('.rich-chip');
        var idx = channel.richBlockData.selected;
        if (chips[idx]) chips[idx].classList.add('is-selected');
      } else if (channel.richBlock === 'order') {
        target.classList.add('is-pulse');
        schedule(function () { target.classList.remove('is-pulse'); }, 500);
      }
    }

    function showReceipt(channel) {
      var el = document.createElement('span');
      el.className = 'receipt';
      el.innerHTML =
        '<svg class="receipt-check" width="14" height="14" viewBox="0 0 14 14" fill="none">' +
          '<circle cx="7" cy="7" r="7" fill="currentColor" opacity="0.16"/>' +
          '<path d="M4 7.2L6 9L10 4.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg>' +
        '<span class="receipt-source">' + channel.receipt.source + '</span>' +
        '<span class="receipt-dot">·</span>' +
        '<span class="receipt-action">' + channel.receipt.action + '</span>';
      receiptStripEl.appendChild(el);
      receiptStripEl.classList.add('is-visible');
    }

    /* ============================================================
       ONE-TIME INTRO: "Connect your website" — a SEPARATE card of its
       own (#setupCard), not the chat mockup. Plays once, then fades/
       scales out while the channel card (hidden until now) fades/
       scales in and starts its normal WhatsApp → Instagram → Website
       loop. Two distinct cards handing off, not one card repurposed —
       makes the "this is a different step" read clearly.
       ============================================================ */
    var setupCardEl = document.getElementById('setupCard');

    function playSetupIntro() {
      if (!setupCardEl) { playChannel(0, 300); return; }
      clearTimers();

      var urlEl = document.getElementById('setupIntroUrl');
      var connectedRow = document.getElementById('setupIntroConnected');
      var pagesRow = document.getElementById('setupIntroPages');
      var proceedBtn = document.getElementById('setupIntroProceed');
      var url = 'https://nyrastore.com';

      function typeChar(idx) {
        if (urlEl) urlEl.textContent = url.slice(0, idx);
        if (idx < url.length) {
          schedule(function () { typeChar(idx + 1); }, 45);
        } else {
          schedule(showConnected, 400);
        }
      }
      function showConnected() {
        if (connectedRow) connectedRow.classList.add('is-visible');
        schedule(showPages, 700);
      }
      function showPages() {
        if (pagesRow) pagesRow.classList.add('is-visible');
        schedule(showProceed, 700);
      }
      function showProceed() {
        if (proceedBtn) proceedBtn.classList.add('is-visible');
        schedule(pressProceed, 700);
      }
      function pressProceed() {
        if (proceedBtn) proceedBtn.classList.add('is-pressed');
        schedule(showLoading, 260);
      }

      // ---- New: a beat of loading, then an explicit success state,
      // before the chat card appears — instead of jumping straight from
      // Proceed to the chat. The success state also names all three
      // channels so it's clear one setup step covers all of them. ----
      var contentEl = document.getElementById('setupCardContent');

      function swapContent(html, cb) {
        if (!contentEl) { if (cb) cb(); return; }
        contentEl.classList.add('is-swapping');
        schedule(function () {
          contentEl.innerHTML = html;
          contentEl.classList.remove('is-swapping');
          if (cb) cb();
        }, 200);
      }

      function showLoading() {
        swapContent(
          '<div class="setup-card-loading">' +
            '<span class="setup-card-spinner"></span>' +
            '<p>Setting up your agent…</p>' +
          '</div>',
          function () { schedule(showSuccess, 1000); }
        );
      }
      function showSuccess() {
        swapContent(
          '<div class="setup-card-success">' +
            '<span class="setup-card-success-icon">' +
              '<svg width="20" height="20" viewBox="0 0 14 14" fill="none"><path d="M3 7.2L6 10.2L11 3.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            '</span>' +
            '<h3>Successfully connected</h3>' +
            '<p>Your agent is live on WhatsApp, Instagram, and your website.</p>' +
          '</div>',
          function () { schedule(handOff, 900); }
        );
      }
      function handOff() {
        setupCardEl.classList.add('is-leaving');
        card.classList.remove('is-hidden');
        card.classList.add('is-entering');
        if (dotsEl) dotsEl.classList.remove('is-hidden');
        schedule(function () {
          setupCardEl.style.display = 'none';
          card.classList.remove('is-entering');
          playChannel(0, 300);
          attachHeroPauseListeners();
        }, 420);
      }

      typeChar(1);
    }

    function playChannel(index, initialDelay) {
      clearTimers();
      hero.index = index;
      var channel = CHANNELS[index];
      renderBase(index);
      updateDots(index);

      if (prefersReducedMotion) return; // reduced-motion path renders the static end-state elsewhere

      schedule(function () { bubblesEl.appendChild(makeBubble('customer', channel.customer1)); }, initialDelay);
      schedule(function () { bubblesEl.appendChild(makeTyping()); }, initialDelay + 700);
      schedule(function () {
        var typing = bubblesEl.querySelector('.typing-indicator');
        if (typing) typing.remove();
        bubblesEl.appendChild(makeBubble('agent', channel.agent1));
        if (channel.richBlockAfter === 'agent1') {
          schedule(function () { insertRichBlock(channel); }, 80);
        }
      }, initialDelay + 1600);
      schedule(function () { bubblesEl.appendChild(makeBubble('customer', channel.customer2)); }, initialDelay + 2500);
      schedule(function () { bubblesEl.appendChild(makeTyping()); }, initialDelay + 3300);
      schedule(function () {
        var typing = bubblesEl.querySelector('.typing-indicator');
        if (typing) typing.remove();
        bubblesEl.appendChild(makeBubble('agent', channel.agent2));
        if (channel.richBlockAfter === 'agent2') {
          schedule(function () { insertRichBlock(channel); }, 80);
        }
      }, initialDelay + 4100);
      schedule(function () { runInteractionBeat(channel); }, initialDelay + 5300);
      schedule(function () { showReceipt(channel); }, initialDelay + 5900);
      schedule(function () { startMorph(index); }, initialDelay + 7700);
    }

    function startMorph(index) {
      bubblesEl.style.transition = 'opacity 200ms var(--ease), transform 200ms var(--ease)';
      bubblesEl.style.opacity = '0';
      bubblesEl.style.transform = 'translateY(-6px)';
      receiptStripEl.classList.remove('is-visible');
      headerEl.classList.add('morphing');

      schedule(function () {
        bubblesEl.innerHTML = '';
        bubblesEl.style.transition = 'none';
        bubblesEl.style.opacity = '';
        bubblesEl.style.transform = '';
      }, 200);

      schedule(function () {
        var manualLockActive = Date.now() < hero.manualLockUntil;
        var nextIndex = manualLockActive ? index : (index + 1) % CHANNELS.length;
        headerEl.classList.remove('morphing');
        playChannel(nextIndex, 0);
      }, 520);
    }

    function addPauseReason(reason) {
      var wasEmpty = hero.pauseReasons.size === 0;
      hero.pauseReasons.add(reason);
      if (wasEmpty) clearTimers();
    }
    function removePauseReason(reason) {
      hero.pauseReasons.delete(reason);
      if (hero.pauseReasons.size === 0) {
        playChannel(hero.index, 300);
      }
    }

    var pauseListenersAttached = false;

    // Attached only once the channel card is actually showing (called
    // from playSetupIntro's hand-off, after playChannel already started
    // it). Attaching this any earlier — while the card is still
    // display:none during the setup card — means the IntersectionObserver's
    // "became visible" callback on reveal would call removePauseReason()
    // and trigger a second, redundant playChannel() racing with the
    // explicit one below, restarting the channel a moment after it began.
    function attachHeroPauseListeners() {
      if (pauseListenersAttached) return;
      pauseListenersAttached = true;

      card.addEventListener('mouseenter', function () { addPauseReason('hover'); });
      card.addEventListener('mouseleave', function () { removePauseReason('hover'); });

      document.addEventListener('visibilitychange', function () {
        if (document.hidden) addPauseReason('hidden');
        else removePauseReason('hidden');
      });

      if ('IntersectionObserver' in window) {
        var offscreenBaselineSet = false;
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            var isVisible = entry.intersectionRatio >= 0.3;
            if (!offscreenBaselineSet) {
              // First callback just reports current state — not a
              // "scrolled back into view" event. The card is already
              // showing by the time we attach this (see comment above),
              // so this baseline should simply be "visible, no reason
              // to pause" and nothing needs to happen.
              offscreenBaselineSet = true;
              if (!isVisible) hero.pauseReasons.add('offscreen');
              return;
            }
            if (!isVisible) addPauseReason('offscreen');
            else removePauseReason('offscreen');
          });
        }, { threshold: [0, 0.3, 1] });
        io.observe(card);
      }
    }

    if (prefersReducedMotion) {
      // Zero information lost: skip the setup card and the animated
      // hand-off — show the channel card and the completed website-chat
      // state immediately. Channel dots become static labelled markers.
      if (setupCardEl) setupCardEl.style.display = 'none';
      card.classList.remove('is-hidden');
      if (dotsEl) dotsEl.classList.remove('is-hidden');
      var website = CHANNELS[2];
      renderBase(2);
      bubblesEl.appendChild(makeBubble('customer', website.customer1));
      bubblesEl.appendChild(makeBubble('agent', website.agent1));
      insertRichBlock(website);
      bubblesEl.appendChild(makeBubble('customer', website.customer2));
      bubblesEl.appendChild(makeBubble('agent', website.agent2));
      showReceipt(website);
      updateDots(2);
      if (dotsEl) dotsEl.classList.add('is-static');
      var staticLabels = ['WhatsApp', 'Instagram', 'Website'];
      dotButtons.forEach(function (btn, i) {
        btn.textContent = staticLabels[i];
        btn.setAttribute('tabindex', '-1');
      });
    } else {
      playSetupIntro();

      dotButtons.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
          hero.manualLockUntil = Date.now() + 20000;
          playChannel(i, 300);
        });
      });
    }
  }

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

})();
