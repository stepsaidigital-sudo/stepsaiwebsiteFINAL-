/* StepsAI hero channel controller: deterministic, cancellable, keyboard accessible. */
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const phoneScreen = hero.querySelector('#phoneScreen');
  const phonesDeck = hero.querySelector('#heroPhonesDeck');
  const laptopDeck = hero.querySelector('#heroLaptopDeck');
  const tabs = [...hero.querySelectorAll('.channel-pill[data-hero-ch]')];
  const validChannels = new Set(['website', 'whatsapp', 'messenger', 'instagram']);
  const query = new URLSearchParams(window.location.search);
  const requestedChannel = query.get('heroChannel');
  const motionOff = query.get('heroMotion') === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeChannel = validChannels.has(requestedChannel) ? requestedChannel : 'whatsapp';
  let runId = 0;
  let timers = [];
  let inView = true;

  const icons = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="14" height="14" rx="3"/><path d="m16 10 6-3v10l-6-3"/></svg>'
  };

  const avatar = (label = 'S') => `<span class="chat-avatar"><img src="images/logo.png" alt=""><span class="sr-only">${label}</span></span>`;
  const head = (status) => `
    <div class="chat-head">
      <span class="chat-back" aria-hidden="true">‹</span>
      ${avatar('StepsAI')}
      <span class="chat-identity"><span class="chat-name">StepsAI</span><span class="chat-status">${status}</span></span>
      <span class="chat-actions" aria-hidden="true">${icons.phone}${icons.video}</span>
    </div>`;
  const productCard = (action = 'View product') => `
    <div class="product-card hero-seq" data-seq="3">
      <img src="images/hero/trail-jacket.png" alt="Black Trail Jacket">
      <div class="product-info">
        <span class="product-title">Trail Jacket</span>
        <span class="product-price">₹10,999</span>
        <span class="product-rating">★★★★★ <span>4.8 (320)</span></span>
        <span class="product-action">${action}</span>
      </div>
    </div>`;
  const composer = (camera = '◎') => `
    <div class="chat-composer" aria-hidden="true">
      <span class="composer-camera">${camera}</span><span class="composer-placeholder">Message…</span>
      <span class="composer-icons">⌁ ◇ ＋</span>
    </div>`;

  const templates = {
    instagram: `
      <div class="chat-app ig-app" aria-label="Instagram direct message example">
        ${head('Active now')}
        <div class="chat-body">
          <span class="chat-day">Today 9:41 AM</span>
          <div class="msg msg--out hero-seq" data-seq="0"><div class="bubble">Hi! Do you have the Trail Jacket in XL?</div></div>
          <div class="msg msg--in hero-seq" data-seq="1"><span class="msg-avatar">S</span><div class="bubble"><p>Yes — it’s available in XL and can be delivered this weekend.</p><p>Here’s the product:</p></div></div>
          ${productCard('View product')}
          <div class="msg msg--out hero-seq" data-seq="4"><div class="bubble">What colours are available?<span class="msg-time">Seen</span></div></div>
          <div class="msg msg--in hero-seq" data-seq="5"><span class="msg-avatar">S</span><div class="bubble">Black, blue and olive. Which would you like?</div></div>
          <div class="quick-replies hero-seq" data-seq="6"><span>Black</span><span>Blue</span><span>Olive</span></div>
        </div>${composer('◉')}
      </div>`,
    messenger: `
      <div class="chat-app ms-app" aria-label="Messenger conversation example">
        ${head('Active now')}
        <div class="chat-body">
          <span class="chat-day">Today 9:41 AM</span>
          <div class="msg msg--out hero-seq" data-seq="0"><div class="bubble">Do you have the Trail Jacket in XL?</div></div>
          <div class="msg msg--in hero-seq" data-seq="1"><span class="msg-avatar">S</span><div class="bubble">Yes — XL is in stock. Here are the details.</div></div>
          ${productCard('View product')}
          <div class="msg msg--out hero-seq" data-seq="4"><div class="bubble">Can you deliver it by Friday?</div></div>
          <div class="msg msg--in hero-seq" data-seq="5"><span class="msg-avatar">S</span><div class="bubble">Yes. Order today and it will arrive by Friday.</div></div>
        </div>${composer('◉')}
      </div>`,
    whatsapp: `
      <div class="chat-app wa-app" aria-label="WhatsApp Business conversation example">
        ${head('Business account')}
        <div class="chat-body">
          <div class="msg msg--out hero-seq" data-seq="0"><div class="bubble">Hi! Do you have the Trail Jacket in XL?<span class="msg-time">9:41 AM ✓✓</span></div></div>
          <div class="msg msg--in hero-seq" data-seq="1"><span class="msg-avatar">S</span><div class="bubble"><p>Yes — XL is available and can be delivered this weekend.</p><p>Would you like to see it?</p><span class="msg-time">9:41 AM</span></div></div>
          ${productCard('View product')}
          <div class="msg msg--out hero-seq" data-seq="4"><div class="bubble">Yes, please add it.<span class="msg-time">9:42 AM ✓✓</span></div></div>
          <div class="msg msg--in hero-seq" data-seq="5"><span class="msg-avatar">S</span><div class="bubble">Done. The Trail Jacket (XL) is ready in your cart.<span class="msg-time">9:42 AM</span></div></div>
          <div class="quick-replies hero-seq" data-seq="6"><span>View cart</span><span>Keep shopping</span></div>
        </div>${composer('⌁')}
      </div>`
  };

  function clearRun() {
    runId += 1;
    timers.forEach(window.clearTimeout);
    timers = [];
  }

  function setSequenceComplete() {
    if (!phoneScreen) return;
    phoneScreen.querySelectorAll('.hero-seq').forEach((element) => element.classList.add('is-visible'));
  }

  function playSequence(localRun) {
    const steps = [...phoneScreen.querySelectorAll('.hero-seq')];
    if (motionOff || !inView || document.hidden) {
      setSequenceComplete();
      return;
    }
    steps.forEach((element) => {
      const step = Number(element.dataset.seq || 0);
      timers.push(window.setTimeout(() => {
        if (localRun !== runId) return;
        element.classList.add('is-visible');
      }, 300 + step * 460));
    });
  }

  function updateTabs(channel) {
    tabs.forEach((tab) => {
      const selected = tab.dataset.heroCh === channel;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
  }

  function setDeck(channel) {
    const website = channel === 'website';
    phonesDeck.classList.toggle('is-hidden', website);
    laptopDeck.classList.toggle('is-hidden', !website);
    phonesDeck.setAttribute('aria-hidden', String(website));
    laptopDeck.setAttribute('aria-hidden', String(!website));
  }

  function renderChannel(channel, { immediate = false } = {}) {
    if (!validChannels.has(channel)) return;
    clearRun();
    const localRun = runId;
    activeChannel = channel;
    updateTabs(channel);
    setDeck(channel);

    if (channel === 'website') return;
    const render = () => {
      if (localRun !== runId) return;
      phoneScreen.innerHTML = templates[channel];
      phoneScreen.classList.add('is-entering');
      phoneScreen.classList.remove('is-switching');
      if (immediate || motionOff) {
        phoneScreen.classList.remove('is-entering');
        playSequence(localRun);
        return;
      }
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (localRun !== runId) return;
          phoneScreen.classList.remove('is-entering');
          playSequence(localRun);
        });
      });
    };
    if (immediate || motionOff || !phoneScreen.firstElementChild) render();
    else {
      phoneScreen.classList.add('is-switching');
      timers.push(window.setTimeout(render, 180));
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const channel = tab.dataset.heroCh;
      if (channel !== activeChannel) renderChannel(channel);
    });
    tab.addEventListener('keydown', (event) => {
      let nextIndex = null;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      tabs[nextIndex].focus();
      renderChannel(tabs[nextIndex].dataset.heroCh);
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearRun();
    else if (activeChannel !== 'website') {
      renderChannel(activeChannel, { immediate: true });
      setSequenceComplete();
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (!inView) clearRun();
      else if (activeChannel !== 'website' && phoneScreen.firstElementChild) setSequenceComplete();
    }, { threshold: .12 });
    observer.observe(hero);
  }

  renderChannel(activeChannel, { immediate: true });
});
