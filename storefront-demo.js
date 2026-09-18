(function () {
  'use strict';
  const deck = document.getElementById('heroLaptopDeck');
  if (!deck) return;
  const widget = deck.querySelector('.laptop-chat-widget');
  const body = deck.querySelector('.lcw-body');
  const input = deck.querySelector('.lcw-input-bar input');
  const add = deck.querySelector('.lcw-add-btn');
  const status = deck.querySelector('.lcw-status');
  const sequence = [...body.children];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let timers = [], started = false, added = false, visible = false;
  const later = (fn, delay) => { timers.push(setTimeout(fn, delay)); };
  function clear() { timers.forEach(clearTimeout); timers = []; }
  function typing(on) {
    body.querySelector('.store-demo-typing')?.remove();
    status.textContent = on ? 'Typing…' : '● Online · Demo';
    if (on) {
      const dots = document.createElement('div');
      dots.className = 'store-demo-typing';
      dots.setAttribute('aria-label', 'StepsAI is typing');
      dots.innerHTML = '<i></i><i></i><i></i>';
      body.append(dots);
    }
  }
  function show(el) { el.hidden = false; el.classList.add('store-demo-arrive'); }
  function finish() { clear(); sequence.forEach(show); typing(false); }
  function start() {
    if (started || !visible || deck.getAttribute('aria-hidden') === 'true' || document.hidden) return;
    started = true;
    if (reduced.matches) { finish(); return; }
    sequence.forEach(el => { el.hidden = true; });
    later(() => show(sequence[0]), 250);
    later(() => typing(true), 800);
    later(() => { typing(false); show(sequence[1]); }, 2200);
    later(() => show(sequence[2]), 2850);
    later(() => show(sequence[3]), 3200);
  }
  const response = document.createElement('div');
  response.className = 'store-demo-response';
  response.setAttribute('role', 'status');
  response.hidden = true;
  body.append(response);
  function reply(text) {
    finish();
    response.hidden = true;
    typing(true);
    later(() => {
      typing(false);
      response.textContent = text;
      show(response);
      body.scrollTop = body.scrollHeight;
    }, reduced.matches ? 0 : 650);
  }
  add.addEventListener('click', () => {
    if (added) return;
    added = true;
    add.textContent = 'Added ✓';
    add.setAttribute('aria-disabled', 'true');
    deck.querySelector('.store-icons').setAttribute('data-cart-count', '1');
    reply('Trail Jacket · XL added to your demo cart. No purchase has been made.');
  });
  const answers = [
    'This demo shows delivery by the weekend. In your store, StepsAI checks the customer’s postcode and your shipping options.',
    'Need help with XL? Ask for chest and sleeve measurements. Your store’s size guide supplies the exact fit.',
    'Demo handoff: the conversation and product details are ready for your team.'
  ];
  deck.querySelectorAll('.lcw-chips button').forEach((button, index) => button.addEventListener('click', () => reply(answers[index])));
  input.readOnly = false;
  input.setAttribute('aria-label', 'Try a message in the store demo');
  function send() {
    const message = input.value.trim();
    if (!message) { input.focus(); return; }
    input.value = '';
    reply(/size|fit|xl/i.test(message) ? answers[1] : /deliver|ship/i.test(message) ? answers[0] : /human|person|help/i.test(message) ? answers[2] : 'Try asking about size or delivery, or add the Trail Jacket to the demo cart.');
  }
  deck.querySelector('.lcw-send').addEventListener('click', send);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); send(); } });
  deck.querySelectorAll('.lcw-controls span').forEach((span, index) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = span.textContent;
    button.setAttribute('aria-label', index ? 'Close chat preview' : 'Minimize chat preview');
    button.addEventListener('click', () => { finish(); widget.classList.add('store-demo-minimized'); launcher.hidden = false; });
    span.replaceWith(button);
  });
  const launcher = document.createElement('button');
  launcher.type = 'button'; launcher.className = 'store-demo-launcher'; launcher.textContent = 'Chat with StepsAI'; launcher.hidden = true;
  widget.after(launcher);
  launcher.addEventListener('click', () => { widget.classList.remove('store-demo-minimized'); launcher.hidden = true; input.focus(); });
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) start(); else if (started) finish(); }, { threshold: .2 }).observe(deck);
  new MutationObserver(() => { if (deck.getAttribute('aria-hidden') === 'true') { if (started) finish(); } else start(); }).observe(deck, { attributes: true, attributeFilter: ['aria-hidden'] });
  document.addEventListener('visibilitychange', () => { if (document.hidden && started) finish(); else start(); });
  reduced.addEventListener('change', () => { if (reduced.matches && started) finish(); });
}());
