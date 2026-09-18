(function () {
  const root = document.querySelector('#one-agent .oa-showcase');
  if (!root) return;

  const botIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 7.5c5 0 5 9 0 9-2.7 0-4.4-2.8-5.5-4.5-1.1-1.7-2.8-4.5-5.5-4.5-5 0-5 9 0 9 2.7 0 4.4-2.8 5.5-4.5 1.1-1.7 2.8-4.5 5.5-4.5Z"/></svg>';
  const campaignIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8v5h4l9 4V4L8 8H4ZM8 13l2 6H7l-2-6M20 8.5a4 4 0 0 1 0 4"/></svg>';

  const scenarios = {
    sales: {
      accent: '#1769ff', ink: '#0f4fc4', soft: '#eaf2ff', channel: 'Website', status: 'Cart ready',
      customer: 'Do you have the Trail Jacket in XL?',
      agent: 'Yes—XL is in stock. I can add it to your cart now.',
      outcome: 'A product question becomes a ready cart.',
      detail: 'The customer gets an answer and the next step in the same conversation.',
      link: 'sales-agent.html', linkLabel: 'Explore Sales Agent',
      result: `
        <div class="oa-result-card">
          <div class="oa-result-top"><span class="oa-result-kicker">Matched from catalog</span><span class="oa-state-pill">In stock</span></div>
          <div class="oa-product">
            <img class="oa-product-image" src="images/hero/trail-jacket.png" width="224" height="284" loading="lazy" alt="Black Trail Jacket">
            <div><h3>Trail Jacket</h3><p>Waterproof · Size XL</p><span class="oa-price">₹10,999</span><span class="oa-action-button">Added to cart</span></div>
          </div>
        </div>`
    },
    support: {
      accent: '#087b6c', ink: '#07685c', soft: '#e5f8f3', channel: 'WhatsApp', status: 'Resolved',
      customer: 'Where is order #8472? I need it before Friday.',
      agent: 'It left the local hub and is scheduled to arrive Thursday.',
      outcome: 'A status question is resolved from live order data.',
      detail: 'The customer receives a clear delivery answer without waiting for a handoff.',
      link: 'support-agent.html', linkLabel: 'Explore Support Agent',
      result: `
        <div class="oa-result-card">
          <div class="oa-result-top"><span class="oa-result-kicker">Order #8472</span><span class="oa-state-pill">In transit</span></div>
          <h3>Arriving Thursday</h3><p>Delivery to the saved office address.</p>
          <div class="oa-timeline"><span class="is-done">Confirmed</span><span class="is-done">Shipped</span><span class="is-current">Arrives Thu</span></div>
        </div>`
    },
    leads: {
      accent: '#7c4dff', ink: '#6134d4', soft: '#f0eaff', channel: 'Website', status: 'Lead qualified',
      customer: 'We need support automation for a 20-person team.',
      agent: 'Got it. I captured your stack and prepared the lead for your sales team.',
      outcome: 'A useful conversation becomes a qualified CRM record.',
      detail: 'The context, requirements, and next step stay attached to the lead.',
      link: 'lead-agent.html', linkLabel: 'Explore Lead Agent',
      result: `
        <div class="oa-result-card">
          <div class="oa-result-top"><span class="oa-result-kicker">New CRM contact</span><span class="oa-state-pill">Qualified</span></div>
          <h3>Maya Rao</h3><p>Northstar Studio</p>
          <ul class="oa-list"><li><span>Team size</span><strong>20 people</strong></li><li><span>Current stack</span><strong>Zendesk + HubSpot</strong></li><li><span>Interest</span><strong>Support automation</strong></li></ul>
        </div>`
    },
    booking: {
      accent: '#4b5df5', ink: '#3546cf', soft: '#e9ecff', channel: 'Instagram', status: 'Confirmed',
      customer: 'Can I book an appointment tomorrow morning?',
      agent: '10:30 AM is open with Dr. Ananya Mehta. I’ve confirmed it for you.',
      outcome: 'An availability question becomes a confirmed appointment.',
      detail: 'The open slot is found and reserved inside the same chat.',
      link: 'meetings-agent.html', linkLabel: 'Explore Booking Agent',
      result: `
        <div class="oa-result-card">
          <div class="oa-result-top"><span class="oa-result-kicker">Appointment</span><span class="oa-state-pill">Confirmed</span></div>
          <h3>Tomorrow, 10:30 AM</h3><p>Dr. Ananya Mehta · Downtown Clinic</p>
          <ul class="oa-list"><li><span>Duration</span><strong>30 minutes</strong></li><li><span>Reminder</span><strong>WhatsApp enabled</strong></li></ul>
        </div>`
    },
    marketing: {
      accent: '#c74b12', ink: '#9f3507', soft: '#fff0e8', channel: 'WhatsApp', status: 'Intent captured',
      customer: 'Does the weekend offer include gift sets?',
      agent: 'Yes, gift sets are included. I’ve shared the eligible collection.',
      outcome: 'A campaign reply continues as a buying conversation.',
      detail: 'The agent answers the question and records what the customer wants.',
      link: 'whatsapp-broadcast.html', linkLabel: 'Explore Marketing Agent',
      result: `
        <div class="oa-result-card">
          <div class="oa-result-top"><span class="oa-result-kicker">Campaign reply</span><span class="oa-state-pill">Buying intent</span></div>
          <div class="oa-campaign"><span class="oa-campaign-icon">${campaignIcon}</span><span><strong>Weekend collection</strong><span>Gift sets included</span></span></div>
          <ul class="oa-list"><li><span>Customer interest</span><strong>Gift sets</strong></li><li><span>Next action</span><strong>Collection shared</strong></li></ul>
        </div>`
    }
  };

  const tabs = Array.from(root.querySelectorAll('[data-oa-scenario]'));
  const stage = root.querySelector('#oa-stage');
  const messages = root.querySelector('[data-oa-messages]');
  const result = root.querySelector('[data-oa-result]');
  const channel = root.querySelector('[data-oa-channel]');
  const status = root.querySelector('[data-oa-status]');
  const outcome = root.querySelector('[data-oa-outcome]');
  const detail = root.querySelector('[data-oa-detail]');
  const link = root.querySelector('[data-oa-link]');
  const outcomeBar = root.querySelector('.oa-outcome');
  const replay = root.querySelector('[data-oa-replay]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let current = 'sales';
  let timers = [];
  let visible = false;
  let initialPlayed = false;

  function clearSequence() {
    timers.forEach(window.clearTimeout);
    timers = [];
  }

  function later(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    timers.push(timer);
  }

  function syncChrome(key) {
    const scenario = scenarios[key];
    root.dataset.scenario = key;
    root.style.setProperty('--oa-accent', scenario.accent);
    root.style.setProperty('--oa-accent-ink', scenario.ink);
    root.style.setProperty('--oa-soft', scenario.soft);
    channel.textContent = scenario.channel;
    status.textContent = scenario.status;
    outcome.textContent = scenario.outcome;
    detail.textContent = scenario.detail;
    link.href = scenario.link;
    link.innerHTML = `${scenario.linkLabel} <span aria-hidden="true">→</span>`;

    tabs.forEach((tab) => {
      const active = tab.dataset.oaScenario === key;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active) stage.setAttribute('aria-labelledby', tab.id);
    });
  }

  function messageMarkup(kind, copy) {
    const avatar = kind === 'agent' ? botIcon : 'C';
    return `<div class="oa-message is-${kind} is-entering"><span class="oa-avatar" aria-hidden="true">${avatar}</span><span class="oa-bubble">${copy}</span></div>`;
  }

  function typingMarkup() {
    return `<div class="oa-message is-agent" data-oa-typing><span class="oa-avatar" aria-hidden="true">${botIcon}</span><span class="oa-typing" aria-label="Agent is typing"><i></i><i></i><i></i></span></div>`;
  }

  function showComplete(key, animate) {
    const scenario = scenarios[key];
    clearSequence();
    syncChrome(key);
    messages.innerHTML = messageMarkup('customer', scenario.customer) + messageMarkup('agent', scenario.agent);
    result.innerHTML = scenario.result;
    const card = result.querySelector('.oa-result-card');
    if (card && animate) card.classList.add('is-entering');
    if (!animate) messages.querySelectorAll('.is-entering').forEach((item) => item.classList.remove('is-entering'));
    outcomeBar.classList.add('is-complete');
  }

  function play(key) {
    const scenario = scenarios[key];
    clearSequence();
    syncChrome(key);
    messages.innerHTML = '';
    result.innerHTML = '<div class="oa-result-card"><div class="oa-result-top"><span class="oa-result-kicker">Agent action</span><span class="oa-state-pill">Working</span></div><h3>Reading the conversation</h3><p>The agent is finding the right next step.</p></div>';
    status.textContent = 'Working';
    outcomeBar.classList.remove('is-complete');

    if (reduceMotion.matches || !visible) {
      showComplete(key, false);
      return;
    }

    later(() => { messages.insertAdjacentHTML('beforeend', messageMarkup('customer', scenario.customer)); }, 120);
    later(() => { messages.insertAdjacentHTML('beforeend', typingMarkup()); }, 650);
    later(() => {
      messages.querySelector('[data-oa-typing]')?.remove();
      messages.insertAdjacentHTML('beforeend', messageMarkup('agent', scenario.agent));
    }, 1250);
    later(() => {
      result.innerHTML = scenario.result;
      result.querySelector('.oa-result-card')?.classList.add('is-entering');
      status.textContent = scenario.status;
    }, 1750);
    later(() => { outcomeBar.classList.add('is-complete'); }, 2150);
  }

  function selectScenario(key, moveFocus) {
    if (!scenarios[key]) return;
    current = key;
    play(key);
    const selected = tabs.find((tab) => tab.dataset.oaScenario === key);
    if (selected) {
      selected.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
      if (moveFocus) selected.focus();
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectScenario(tab.dataset.oaScenario, false));
    tab.addEventListener('keydown', (event) => {
      let next = null;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      selectScenario(tabs[next].dataset.oaScenario, true);
    });
  });

  replay.addEventListener('click', () => play(current));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= .22;
      if (visible && !initialPlayed) {
        initialPlayed = true;
        play(current);
      } else if (!visible && initialPlayed) {
        showComplete(current, false);
      }
    });
  }, { threshold: [0, .22, .6] });

  showComplete(current, false);
  observer.observe(root);
}());
