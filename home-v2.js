/* ============================================================
   HOME v2 — new landing page interactions (per client-provided
   design file). Behavior is unchanged from the source; only
   extracted into its own file to match this repo's convention
   of external, cached script files.
   ============================================================ */
document.documentElement.classList.add('js');

/* ---------- Split-word text reveal (hero headline + "how" title) ----------
   Wraps each word of the target headline in its own <span class="split-word">
   carrying a --i index (used by home-v2.css for the stagger delay). Elements
   like the hero's <span class="grad-text"> are left un-split and just added
   to the same stagger instead: -webkit-background-clip:text gradient text
   doesn't paint through nested display:inline-block children (the browser
   treats them as their own opaque box), so splitting its words individually
   silently makes them invisible -- keeping it as one atomic unit sidesteps
   that entirely while still fading/sliding in with the rest of the line. */
(function initSplitText(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;

  const ATOMIC_SELECTOR = '.grad-text';

  function splitWords(el){
    let i = 0;
    function walk(node){
      if(node.nodeType === Node.TEXT_NODE){
        const text = node.textContent;
        if(!text.trim()) return;
        const parts = text.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach(part=>{
          if(part.trim() === ''){
            frag.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement('span');
            span.className = 'split-word';
            span.style.setProperty('--i', i++);
            span.textContent = part;
            frag.appendChild(span);
          }
        });
        node.parentNode.replaceChild(frag, node);
      } else if(node.nodeType === Node.ELEMENT_NODE){
        if(node.matches && node.matches(ATOMIC_SELECTOR)){
          node.classList.add('split-word');
          node.style.setProperty('--i', i++);
          return;
        }
        Array.prototype.slice.call(node.childNodes).forEach(walk);
      }
    }
    Array.prototype.slice.call(el.childNodes).forEach(walk);
  }

  document.querySelectorAll('.hero-title, .how .sec-title, .knowledge-sec .sec-title').forEach(splitWords);

  // The hero headline is above the fold, so it isn't gated behind the
  // scroll-triggered .reveal system (that would hide LCP content until an
  // IntersectionObserver fires) -- just play its entrance shortly after load.
  const heroTitle = document.querySelector('.hero-title');
  if(heroTitle){
    requestAnimationFrame(()=>{
      setTimeout(()=>heroTitle.classList.add('split-ready'), 120);
    });
  }
})();

const BOT = '<span class="avatar bot" style="background:#fff;border:1px solid #e6eaf2"><span class="logo-mark" style="width:17px;height:9px"></span></span>';
const CHANNELS = {
  website:{
    name:'Your website',
    sub:'Guide visitors and convert more of them',
    icon:'website',
    custom:`
    <div class="ch-scene-grid">
      <div class="ch-panel">
        <div class="ch-panel-head">
          <span class="ci" data-icon="website"></span>
          <div><h5>Acme Outdoor — Web Concierge</h5><p>Active on storefront · replies in &lt;1s</p></div>
          <span class="status-dot"></span>
        </div>
        <div class="ch-panel-body">
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer"></span>
            <span class="bub cust">I need a waterproof jacket for hiking. Which one should I get?</span>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">The Summit Trail Pro is our top-rated choice! It features 3-layer Gore-Tex, ultra-breathable vents, and is in stock in your size.</span>
          </div>
          <div class="ch-card">
            <div class="ch-card-head">
              <span class="ch-badge">⭐ Top Pick · 4.9/5</span>
              <span style="font-size:11px;font-weight:700;color:var(--green);margin-left:auto">In Stock</span>
            </div>
            <div style="display:flex;gap:12px;align-items:center">
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=250&q=80" style="width:54px;height:54px;border-radius:10px;object-fit:cover;border:1px solid #e2e8f0" alt="Summit Trail Pro">
              <div>
                <h6>Summit Trail Pro</h6>
                <div style="font-size:13px;font-weight:800;color:#1e293b">$149 <span style="font-size:11px;color:#64748b;font-weight:500;text-decoration:line-through">$189</span></div>
              </div>
            </div>
            <div class="ch-card-row">
              <span style="color:#64748b;font-weight:600">Selected Size:</span>
              <span style="background:#e0f2fe;color:#0284c7;font-weight:800;padding:2px 8px;border-radius:6px">Medium (M)</span>
            </div>
            <button class="ch-card-btn" onclick="this.innerHTML='✓ Added to Cart! (1 item)';this.style.background='#16a34a'">⚡ Add to Cart &amp; Checkout</button>
          </div>
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer"></span>
            <span class="bub cust">Size M in Navy looks great! Adding now.</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:10px;padding:6px 12px;font-size:11.5px;color:#065f46;font-weight:700;margin-left:38px">
            <span>✓</span> Synced with Web Session &amp; Cart Total ($149)
          </div>
          <div class="ch-input">Type a message… <span class="snd">➤</span></div>
        </div>
      </div>
      <div>
        <div class="browser-mock">
          <div class="browser-top">
            <div class="browser-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="browser-url">🔒 https://acme-outdoors.com/gear/summit-trail</div>
          </div>
          <div class="browser-body">
            <div class="browser-hero" style="background:linear-gradient(rgba(15,23,42,.75),rgba(15,23,42,.88)),url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80') center/cover;color:#fff;padding:16px;border-radius:12px;margin-bottom:12px">
              <span class="bh-pill" style="background:rgba(59,130,246,.25);color:#93c5fd;border:1px solid rgba(147,197,253,.3)">NEW RELEASE</span>
              <h6 style="color:#ffffff;font-size:14px;font-weight:800;margin-top:6px;text-shadow:0 1px 3px rgba(0,0,0,0.5)">Autumn 2026 Trail Collection</h6>
              <p style="color:#e2e8f0;font-size:11px;margin-top:2px">Engineered for high peaks and heavy rain.</p>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
              <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px;text-align:center">
                <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=150&q=80" style="width:100%;height:60px;object-fit:cover;border-radius:6px" alt="Jacket">
                <div style="font-size:11px;font-weight:700;margin-top:4px">Trail Jacket</div>
                <div style="font-size:10px;color:#64748b">$149</div>
              </div>
              <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:8px;text-align:center">
                <img src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=150&q=80" style="width:100%;height:60px;object-fit:cover;border-radius:6px" alt="Boots">
                <div style="font-size:11px;font-weight:700;margin-top:4px">Alpine Boots</div>
                <div style="font-size:10px;color:#64748b">$189</div>
              </div>
            </div>
            <div class="browser-widget-pill">
              <span style="width:7px;height:7px;border-radius:50%;background:#4ade80"></span>
              StepsAI Active
            </div>
          </div>
        </div>
        <span class="scene-note hand">Floating on your site 24/7.<br>Answers questions, closes carts. ↗</span>
      </div>
    </div>`
  },
  shopify:{
    name:'Your store',
    sub:'Help shoppers choose, buy and track orders',
    icon:'shopify',
    custom:`
    <div class="ch-scene-grid">
      <div class="ch-panel">
        <div class="ch-panel-head" style="background:#f0fdf4;border-bottom-color:#dcfce7">
          <span class="ci" data-icon="shopify"></span>
          <div><h5 style="color:#065f46">Shopify Store Assistant</h5><p style="color:#047857">Live catalog &amp; inventory sync</p></div>
          <span class="status-dot" style="background:#10b981"></span>
        </div>
        <div class="ch-panel-body">
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Elena"></span>
            <span class="bub cust">Can I exchange order #SH-9281 for size L before it ships?</span>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">Let me check your order details and live stock in Shopify right away...</span>
          </div>
          <div class="ch-card">
            <div class="ch-card-head">
              <span class="ch-badge green">Shopify Order #SH-9281</span>
              <span style="font-size:11px;font-weight:700;color:#b45309;margin-left:auto">Awaiting Fulfillment</span>
            </div>
            <div style="display:flex;gap:12px;align-items:center">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=250&q=80" style="width:54px;height:54px;border-radius:10px;object-fit:cover;border:1px solid #e2e8f0" alt="CloudRunner Pro">
              <div style="font-size:12px;color:#334155;line-height:1.4">
                <b>CloudRunner Pro Running Shoes</b><br>
                <span style="color:#64748b">Size M → Requested: Size L</span>
              </div>
            </div>
            <div class="ch-card-row">
              <span style="color:#047857;font-weight:700">✓ Warehouse Stock:</span>
              <span style="font-weight:800;color:#065f46">14 units in stock</span>
            </div>
            <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:6px 10px;font-size:11.5px;color:#065f46;font-weight:700;margin-top:8px;text-align:center">
              ✓ Order size updated to L in Shopify Admin
            </div>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">All done! I updated your order to Size L and emailed your updated confirmation slip.</span>
          </div>
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Elena"></span>
            <span class="bub cust">Wow, that was completely instant! Thank you! 🙌</span>
          </div>
          <div class="ch-input">Type a message… <span class="snd" style="background:#10b981">➤</span></div>
        </div>
      </div>
      <div>
        <div class="shopify-mock">
          <div class="shopify-head">
            <div class="shopify-logo"><span class="ci" style="width:24px;height:24px" data-icon="shopify"></span> Shopify Admin Sync</div>
            <span class="shopify-tag">LIVE API</span>
          </div>
          <div class="shopify-item">
            <div class="st-title"><span>Order #SH-9281</span><b style="color:#047857">$149.00</b></div>
            <div class="st-meta">Customer: Elena Rostova · CloudRunner Pro</div>
            <div style="font-size:10.5px;font-weight:700;color:#2563eb;margin-top:4px">Item variant adjusted: Size M ➔ Size L</div>
          </div>
          <div class="shopify-sync-pill">
            <span style="font-size:14px">⚡</span> Stock deducted from Warehouse A (14 left)
          </div>
          <div style="margin-top:14px;background:#f8fafc;border-radius:10px;padding:10px;font-size:11.5px;color:#475569">
            <b>Automated Actions:</b>
            <div style="margin-top:4px;color:#047857">✓ Shopify Order Note Tagged</div>
            <div style="color:#047857">✓ Confirmation Email Re-triggered</div>
            <div style="color:#047857">✓ Zero Agent Touch Required</div>
          </div>
        </div>
        <span class="scene-note hand">Real-time stock checks &amp; order updates without manual support tickets. ↗</span>
      </div>
    </div>`
  },
  instagram:{
    name:'Instagram',
    sub:'From a comment to a customer',
    icon:'instagram',
    custom:`
    <div class="ig-scene">
      <div class="ch-panel">
        <div class="ch-panel-head brand-ig">
          <span class="ig-head-grad" data-icon="instagram"></span>
          <div><h5>Instagram Direct</h5><p>Comments &amp; Story Mentions</p></div>
          <span class="status-dot" style="background:#fff"></span>
        </div>
        <div class="ch-panel-body">
          <div class="ch-card" style="margin-left:0;max-width:100%;background:#fdf2f8;border-color:#fbcfe8">
            <div style="font-size:11px;color:#9d174d;font-weight:700">💬 Comment on your latest Reel</div>
            <b style="font-size:12.5px;color:#831843">priya.s: "How much is this jacket? 😍"</b>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">Hey Priya! 👋 This jacket is $129. It’s 100% waterproof, lightweight, and perfect for hiking. Want me to send the direct link?</span>
          </div>
          <div class="ch-card">
            <div style="display:flex;gap:12px;align-items:center">
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=250&q=80" style="width:54px;height:54px;border-radius:10px;object-fit:cover;border:1px solid #e2e8f0" alt="Alpine Jacket">
              <div>
                <h6>Alpine Trail Jacket</h6>
                <div style="font-size:12px;font-weight:700;color:#1e293b">$129 <span class="stars" style="color:#f59e0b">★★★★★ 4.8</span></div>
              </div>
            </div>
            <button class="ch-card-btn" style="background:linear-gradient(45deg,#f09433,#dc2743,#bc1888)">View in Instagram Shop</button>
          </div>
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Priya"></span>
            <span class="bub cust">Looks great! Do you have this in black?</span>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">Yes! Black is in stock in Medium. Want me to reserve it for your cart?</span>
          </div>
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Priya"></span>
            <span class="bub cust">Yes please! 🙌</span>
          </div>
          <div class="ch-input">📷 Send a message… <span class="snd" style="background:#dc2743">➤</span></div>
        </div>
      </div>
      <div class="ig-right">
        <div class="phone">
          <div class="p-status"><span>9:41</span><span class="sbi">
            <svg viewBox="0 0 16 11" fill="#1b1b24"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="4.5" width="3" height="6.5" rx="1"/><rect x="9" y="2" width="3" height="9" rx="1"/><rect x="13.5" y="0" width="2.5" height="11" rx="1"/></svg>
            <svg viewBox="0 0 16 11" fill="none" stroke="#1b1b24" stroke-width="1.6" stroke-linecap="round"><path d="M1.5 4.2a9 9 0 0 1 13 0M4 6.8a5.5 5.5 0 0 1 8 0"/><circle cx="8" cy="9.4" r="1.3" fill="#1b1b24" stroke="none"/></svg>
            <svg viewBox="0 0 18 11" fill="none"><rect x="0.7" y="0.7" width="14" height="9.6" rx="2.6" stroke="#1b1b24" stroke-width="1.2"/><rect x="2.4" y="2.4" width="9" height="6.2" rx="1.4" fill="#1b1b24"/><path d="M16.2 3.8v3.4a1.9 1.9 0 0 0 0-3.4z" fill="#1b1b24"/></svg>
          </span></div>
          <div class="p-stories">
            <span class="story"><span class="ring"><span class="inner"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" style="width:100%;height:100%;object-fit:cover"></span></span><p>Your Brand</p></span>
            <span class="story"><span class="ring"><span class="inner"><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" style="width:100%;height:100%;object-fit:cover"></span></span><p>hannas</p></span>
            <span class="story"><span class="ring grey"><span class="inner"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" style="width:100%;height:100%;object-fit:cover"></span></span><p>marco</p></span>
            <span class="story"><span class="ring"><span class="inner"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" style="width:100%;height:100%;object-fit:cover"></span></span><p>trailco</p></span>
            <span class="story"><span class="ring"><span class="inner"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=80&q=80" style="width:100%;height:100%;object-fit:cover"></span></span><p>ridge</p></span>
          </div>
          <div class="p-post-head"><span class="pa"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></span>yourbrand<span class="dots">···</span></div>
          <div class="p-img" style="background:url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80') center/cover no-repeat"></div>
          <div class="p-actions">
            <svg viewBox="0 0 24 24" fill="#ff2d55"><path d="M12 21s-7.5-4.7-9.9-9C.5 9 1.9 5.6 5 4.7c2-.6 4.2.2 5.4 2 .4.6 1 .6 1.4 0 1.2-1.8 3.4-2.6 5.4-2 3.1.9 4.5 4.3 2.9 7.3-2.4 4.3-8.1 9-8.1 9z"/></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="#1b1b24" stroke-width="1.8"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3 8.9 8.9 0 0 1-3.2-.6L4 20.5l1.4-4.2a8 8 0 0 1-1.4-4.8A8.4 8.4 0 0 1 12.5 3.2 8.4 8.4 0 0 1 21 11.5z"/></svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="#1b1b24" stroke-width="1.8"><path d="M21 3 3 10.5l7 2.5 2.5 7L21 3z"/><path d="M10 13 21 3"/></svg>
            <svg class="save" viewBox="0 0 24 24" fill="none" stroke="#1b1b24" stroke-width="1.8"><path d="M6 3h12v18l-6-4.5L6 21V3z"/></svg>
          </div>
          <div class="p-meta">
            <p class="lk">1,428 likes</p>
            <p class="cp"><b>yourbrand</b> Built for rainy trails. Ready for your next journey. 🌲</p>
          </div>
        </div>
        <div class="p-comment">
          <span class="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Priya"></span>
          <div class="pc-body"><b>priya.s</b> How much is this jacket? 😍<div class="pc-meta">Just now · StepsAI Replied</div></div>
        </div>
        <span class="scene-note hand" style="position:absolute;bottom:0;left:0">A comment today.<br>A buyer in seconds. ⤺</span>
      </div>
    </div>`
  },
  whatsapp:{
    name:'WhatsApp',
    sub:'Sell, book, follow up and support',
    icon:'whatsapp',
    custom:`
    <div class="ch-scene-grid">
      <div class="ch-panel">
        <div class="ch-panel-head brand-wa">
          <span class="ci" data-icon="whatsapp"></span>
          <div><h5>Apex Clinic — Official WhatsApp</h5><p>Verified Business Account · Instant Booking</p></div>
          <span class="status-dot" style="background:#4ade80"></span>
        </div>
        <div class="ch-panel-body" style="background:#efeae2">
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rahul"></span>
            <span class="bub cust-wa">Hi! I want to book a dermatologist consultation for tomorrow. <span style="font-size:10px;color:#667781;margin-left:4px">10:14 AM ✓✓</span></span>
          </div>
          <div class="msg-row">
            <span class="avatar bot" style="background:#25d366;color:#fff">✔</span>
            <span class="bub ai-wa">Hi Rahul! Dr. Ananya Mehta has 2 available consultation slots at our Downtown Clinic tomorrow:</span>
          </div>
          <div class="doc-card" style="margin-left:0;max-width:100%;border-radius:12px;border:none;box-shadow:0 2px 8px rgba(0,0,0,.08)">
            <div class="doc-top">
              <img class="doc-avatar" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=250&q=80" alt="Dr. Ananya Mehta">
              <div class="doc-info">
                <h6>Dr. Ananya Mehta, MD</h6>
                <p>Board-Certified Dermatologist · 14 Yrs Exp</p>
                <span class="doc-badge">✓ Verified Provider · Apex Clinic</span>
              </div>
            </div>
            <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px">
              <div style="background:#f0fdf4;border:1.5px solid #22c55e;border-radius:8px;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;cursor:pointer">
                <div><b style="font-size:13px;color:#14532d">10:30 AM</b><span style="font-size:11px;color:#166534;display:block">Downtown Clinic · 402 Health Hub</span></div>
                <span style="color:#16a34a;font-weight:800;font-size:13px">● Selected</span>
              </div>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:8px 12px;display:flex;justify-content:space-between;align-items:center;cursor:pointer">
                <div><b style="font-size:13px;color:#334155">03:15 PM</b><span style="font-size:11px;color:#64748b;display:block">Downtown Clinic · 402 Health Hub</span></div>
                <span style="color:#94a3b8;font-size:12px">Select</span>
              </div>
            </div>
          </div>
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rahul"></span>
            <span class="bub cust-wa">10:30 AM works great for me. <span style="font-size:10px;color:#667781;margin-left:4px">10:15 AM ✓✓</span></span>
          </div>
          <div class="ch-card" style="border-radius:12px;border:none;background:#f0fdf4;box-shadow:0 2px 8px rgba(0,0,0,.08)">
            <div style="font-size:12px;font-weight:800;color:#15803d">✓ Appointment Confirmed with Dr. Mehta!</div>
            <p style="font-size:11.5px;color:#166534;margin-top:2px">Tomorrow at 10:30 AM · 402 Downtown Health Hub<br>Google &amp; Apple Calendar invite sent to your phone</p>
          </div>
          <div class="ch-input" style="background:#fff">Type a message… <span class="snd" style="background:#25d366">➤</span></div>
        </div>
      </div>
      <div>
        <div class="wa-mock">
          <div class="wa-mock-head">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80" style="width:38px;height:38px;border-radius:10px;object-fit:cover" alt="Dr. Mehta">
            <div class="wa-mock-title">
              <h6>Dr. Mehta — Appointment Synced</h6>
              <p>98% open rate · 100% automated booking</p>
            </div>
          </div>
          <div class="wa-cal-card">
            <span class="wc-date">TOMORROW · 10:30 AM</span>
            <h5>Dermatology Consultation</h5>
            <p>Patient: Rahul M. · Dr. Ananya Mehta<br>Location: 402 Downtown Health Hub</p>
          </div>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:12px;font-size:11.5px;color:#334155">
            <b>WhatsApp Features:</b>
            <div style="margin-top:4px;color:#15803d">✓ Calendar invite attached (.ics)</div>
            <div style="color:#15803d">✓ Automated 2-hour reminder message</div>
            <div style="color:#15803d">✓ Zero receptionist phone calls</div>
          </div>
        </div>
        <span class="scene-note hand">Books meetings &amp; appointments while your team sleeps. ↗</span>
      </div>
    </div>`
  },
  messenger:{
    name:'Messenger',
    sub:'Answer customers and capture enquiries',
    icon:'messenger',
    custom:`
    <div class="ch-scene-grid">
      <div class="ch-panel">
        <div class="ch-panel-head brand-msg">
          <span class="ci" data-icon="messenger"></span>
          <div><h5>Messenger Support Assistant</h5><p>Order Resolution &amp; Tracking</p></div>
          <span class="status-dot" style="background:#fff"></span>
        </div>
        <div class="ch-panel-body">
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Customer"></span>
            <span class="bub cust">Where is my order #8472? It was supposed to arrive yesterday.</span>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">I checked your package with FedEx Express. Here is your live delivery status:</span>
          </div>
          <div class="ch-card">
            <div class="ch-card-head">
              <span class="ch-badge purple">FedEx Tracking #FX-88391</span>
              <span style="font-size:11px;color:#16a34a;font-weight:800;margin-left:auto">Out for Delivery</span>
            </div>
            <div style="display:flex;gap:12px;align-items:center">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=250&q=80" style="width:54px;height:54px;border-radius:10px;object-fit:cover;border:1px solid #e2e8f0" alt="FedEx Parcel">
              <div style="font-size:12px;color:#1e293b;line-height:1.4">
                <b>Estimated Delivery: Today by 3:30 PM</b><br>
                <span style="color:#64748b">Courier is 3 stops away from your address.</span>
              </div>
            </div>
            <div style="height:6px;background:#e2e8f0;border-radius:99px;margin:8px 0;overflow:hidden">
              <div style="width:82%;height:100%;background:linear-gradient(90deg,#00B2FF,#7000FF);border-radius:99px"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10.5px;color:#64748b">
              <span>Shipped</span><span>In Transit</span><b>Out for Delivery</b>
            </div>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">Would you like me to send you an SMS alert as soon as the driver marks it delivered?</span>
          </div>
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Customer"></span>
            <span class="bub cust">Yes please! That is super helpful. 🙌</span>
          </div>
          <div class="ch-input">Type a message… <span class="snd" style="background:#006AFF">➤</span></div>
        </div>
      </div>
      <div>
        <div class="msg-mock">
          <div class="msg-mock-head">
            <div style="font-size:13px;font-weight:800;color:#1e293b">⚡ Real-time Resolution SLA</div>
            <span style="background:#f3e8ff;color:#7e22ce;font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:999px">2.1s Avg</span>
          </div>
          <div class="msg-radar">
            <div class="msg-radar-title"><span>📍</span> Live Courier Radar</div>
            <h5>FedEx Express Delivery</h5>
            <div class="msg-radar-prog"><div class="msg-radar-bar"></div></div>
            <div class="msg-radar-stat"><span>3 stops away</span><span>ETA: 3:30 PM</span></div>
          </div>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:12px;font-size:11.5px;color:#334155">
            <b>Messenger Resolution Impact:</b>
            <div style="margin-top:4px;color:#2563eb">✓ 94% of "Where is my order" queries solved</div>
            <div style="color:#2563eb">✓ Zero human ticket escalation</div>
            <div style="color:#2563eb">✓ Automatic SMS &amp; Messenger dispatch</div>
          </div>
        </div>
        <span class="scene-note hand">Turn customer anxiety into instant 5-star reviews. ↗</span>
      </div>
    </div>`
  },
  standalone:{
    name:'Your branded page',
    sub:'No website yet? Live in minutes, shareable anywhere',
    icon:'standalone',
    custom:`
    <div class="ch-scene-grid">
      <div class="ch-panel">
        <div class="ch-panel-head" style="background:#eff6ff;border-bottom-color:#bfdbfe">
          <span class="ci" data-icon="standalone"></span>
          <div><h5 style="color:#1e3a8a">Northgate Realty · Ask Us</h5><p style="color:#1d4ed8">Your own branded page</p></div>
          <span class="status-dot" style="background:#2563eb"></span>
        </div>
        <div class="ch-panel-body">
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Visitor"></span>
            <span class="bub cust">Hi, I saw your page on Instagram — is the 2BHK on Lake Road still available?</span>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">Yes, it's still open. Want the floor plan and a site visit booked in?</span>
          </div>
          <div class="msg-row right">
            <span class="avatar"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Visitor"></span>
            <span class="bub cust">Yes — tomorrow evening if possible.</span>
          </div>
          <div class="msg-row">
            ${BOT}
            <span class="bub ai">Booked for 6:00 PM tomorrow. You'll get a reminder an hour before.</span>
          </div>
          <div class="ch-input">Type a message… <span class="snd" style="background:#2563eb">➤</span></div>
        </div>
      </div>
      <div>
        <div class="browser-mock">
          <div class="browser-top">
            <div class="browser-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
            <div class="browser-url">🔒 steps.ai/northgate-realty</div>
          </div>
          <div class="browser-body">
            <div class="browser-hero" style="background:linear-gradient(rgba(15,23,42,.75),rgba(15,23,42,.88)),url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80') center/cover;color:#fff;padding:16px;border-radius:12px;margin-bottom:12px">
              <span class="bh-pill" style="background:rgba(59,130,246,.25);color:#93c5fd;border:1px solid rgba(147,197,253,.3)">NORTHGATE REALTY</span>
              <h6 style="color:#ffffff;font-size:14px;font-weight:800;margin-top:6px;text-shadow:0 1px 3px rgba(0,0,0,0.5)">Ask about any listing, anytime.</h6>
              <p style="color:#e2e8f0;font-size:11px;margin-top:2px">No app to download, no form to fill.</p>
            </div>
            <div class="browser-widget-pill">
              <span style="width:7px;height:7px;border-radius:50%;background:#4ade80"></span>
              StepsAI Active
            </div>
          </div>
        </div>
        <span class="scene-note hand">Branded, shareable in a bio link, a QR code, or a WhatsApp broadcast. ↗</span>
      </div>
    </div>`
  }
};
const chPanel = document.getElementById('chPanel');
function renderChannel(key){
  const c = CHANNELS[key];
  if(!c) return;
  chPanel.innerHTML = c.custom ? c.custom : `
    <div class="ch-panel" style="max-width:480px;margin:0 auto">
      <div class="ch-panel-head"><span class="ci" data-icon="${c.icon}"></span><div><h5>${c.name}</h5><p>${c.sub}</p></div></div>
      <div class="ch-panel-body">${c.body}</div>
    </div>`;
  chPanel.querySelectorAll('[data-icon]').forEach(el=>{ const k=el.getAttribute('data-icon'); if(ICONS[k]) el.innerHTML=ICONS[k]; });
}
document.querySelectorAll('.ch-item').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.ch-item').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    chPanel.classList.add('fading');
    setTimeout(()=>{ renderChannel(btn.dataset.ch); chPanel.classList.remove('fading'); },250);
  });
});
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
},{threshold:.1});
// Matches nav.js's revealSelector so reveal-left/right/grow/pop/stagger get
// the same fallback coverage plain .reveal already had via this observer.
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-grow, .reveal-pop, .reveal-stagger').forEach(el=>io.observe(el));
const ICONS = {
  website:`<svg viewBox="0 0 34 34" width="100%" height="100%"><circle cx="17" cy="17" r="15" fill="none" stroke="#3c3c48" stroke-width="2"/><path d="M2 17h30M17 2c-5 4-7 9.5-7 15s2 11 7 15c5-4 7-9.5 7-15S22 6 17 2z" fill="none" stroke="#3c3c48" stroke-width="2"/></svg>`,
  shopify:`<svg viewBox="0 0 34 34" width="100%" height="100%"><path d="M9 10.5 22.5 8l4 22-19.5 3.5L9 10.5z" fill="#95BF47"/><path d="M22.5 8l3 1 3.5 21-6 2.5L22.5 8z" fill="#5E8E3E"/><path d="M18.5 16.5c-.8-.4-2.6-.6-3.4.4-1.5-2 1.4-4.4 2.9-3.6l.5 3.2zm-2.8 4.2c1 .7 3 1 2.6 3-.3 2.2-3.6 2.4-5.3 1l.7-2c.9.6 2.3 1 2.5.3.2-.8-1.7-1.1-2.3-2.9-.7-2.2 1.6-4.5 4.4-3.6l-.5 2.4c-.7-.3-2.4-.5-2.4.7 0 .5.1.7.3 1.1z" fill="#fff"/></svg>`,
  instagram:`<svg viewBox="0 0 34 34" width="100%" height="100%"><rect x="2" y="2" width="30" height="30" rx="9" fill="url(#igg)"/><circle cx="17" cy="17" r="7" fill="none" stroke="#fff" stroke-width="2.4"/><circle cx="25.2" cy="8.8" r="2" fill="#fff"/></svg>`,
  whatsapp:`<svg viewBox="0 0 34 34" width="100%" height="100%"><circle cx="17" cy="17" r="15.5" fill="#25D366"/><path d="M17 7.5c-5.2 0-9.4 4.2-9.4 9.4 0 1.8.5 3.4 1.4 4.9L7.5 26.5l4.9-1.4a9.4 9.4 0 1 0 4.6-17.6z" fill="#fff"/><path d="M13.6 11.9c.9-.2 1 .3 1.4 1.3.4.9.5 1-.1 1.7-.4.5-.3.9.2 1.6.8 1.1 1.8 1.9 3 2.4.7.3 1 .2 1.4-.3.5-.7.7-.9 1.6-.5 1 .5 1.6.7 1.3 1.6-.9 2.6-4.6 1.6-7-.6-2.3-2.2-3.6-6.4-1.8-7.2z" fill="#25D366"/></svg>`,
  messenger:`<svg viewBox="0 0 34 34" width="100%" height="100%"><circle cx="17" cy="17" r="15.5" fill="url(#msg)"/><path d="M8.5 16.4c0-4.9 3.8-8.4 8.5-8.4s8.5 3.5 8.5 8.4-3.8 8.4-8.5 8.4c-.9 0-1.8-.1-2.6-.4l-2.9 1.3.1-2.9c-1.9-1.5-3.1-3.8-3.1-6.4z" fill="#fff"/><path d="m12 19.5 3.6-5.6 3 2.4 3.4-2.4-3.6 5.6-3-2.4-3.4 2.4z" fill="url(#msg)"/></svg>`,
  standalone:`<svg viewBox="0 0 34 34" width="100%" height="100%"><rect x="4" y="3" width="26" height="28" rx="6" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M11 12h12M11 17h12M11 22h7" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/></svg>`
};
document.querySelectorAll('[data-icon]').forEach(el=>{ const k=el.getAttribute('data-icon'); if(ICONS[k]) el.innerHTML=ICONS[k]; });
renderChannel('website');

/* FAQ accordion */
document.querySelectorAll('.faq-item').forEach(item=>{
  const btn = item.querySelector('.faq-q');
  const ans = item.querySelector('.faq-a');
  btn.addEventListener('click', ()=>{
    const isOpen = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    ans.style.maxHeight = isOpen ? ans.scrollHeight + 'px' : null;
  });
});

function switchTab(which){
  const a = which === 'analytics';
  document.getElementById('viewAnalytics').style.display = a ? '' : 'none';
  document.getElementById('viewInbox').style.display = a ? 'none' : '';
  document.getElementById('tabAnalytics').classList.toggle('active', a);
  document.getElementById('tabInbox').classList.toggle('active', !a);
  document.getElementById('tabAnalytics').setAttribute('aria-selected', a);
  document.getElementById('tabInbox').setAttribute('aria-selected', !a);
}
(function(){
  const heat = document.getElementById('heatmap');
  if(!heat) return;
  const cols = 18;
  for(let d=0; d<7; d++){
    for(let c=0; c<cols; c++){
      const hour = (c/cols)*24;
      let v = 0.08
        + 0.35*Math.exp(-Math.pow((hour-13)/3.2,2))
        + 0.75*Math.exp(-Math.pow((hour-19.5)/2.6,2));
      if(d>=5) v *= 0.72;
      v *= 0.85 + 0.3*Math.abs(Math.sin(d*3.7 + c*1.3));
      const cell = document.createElement('span');
      cell.style.opacity = Math.max(.07, Math.min(1, v)).toFixed(2);
      heat.appendChild(cell);
    }
  }
})();
const SIA = [
 {
  brand:'Pixel Peak Electronics', channel:'🛍️ Online store',
  note:'Steps AI recommends what is in stock, answers the price question, and clears the doubt that was about to end the chat.',
  time:'Decision made in 34 seconds · no human needed',
  msgs:[
   {t:'cust', av:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80', x:'Which laptop is best for video editing?'},
   {t:'ai', x:'Happy to help! Roughly what’s your budget, and do you edit 4K footage?'},
   {t:'cust', av:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80', x:'Under $2,000, and yes — 4K.'},
   {t:'ai', x:'Then these three fit perfectly. The middle one is the best value for 4K timelines:'},
   {t:'rich', x:'<div class="r-label">Matched to 4K editing · under $2,000</div><div class="sia-opts"><div class="sia-opt"><div class="oi"><img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=100&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:6px"></div><b>Air 14</b><span>$1,299</span></div><div class="sia-opt best"><div class="oi"><img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=100&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:6px"></div><b>Studio 16</b><span>$1,899</span><span class="pick">Best match</span></div><div class="sia-opt"><div class="oi"><img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=100&q=80" style="width:100%;height:100%;object-fit:cover;border-radius:6px"></div><b>Pro 16</b><span>$2,499</span></div></div>'},
   {t:'cust', av:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80', x:'The Studio 16 it is — adding to cart.'}
  ],
  steps:[
   {k:'UNDERSTAND', c:'--purple', bg:'var(--purple-soft)', i:'💬', h:'Needs a laptop for 4K editing', p:'Budget and use case captured in two questions'},
   {k:'CHECK', c:'--blue', bg:'var(--blue-soft)', i:'🏷️', h:'Searched the live catalog', p:'Specs · price · stock checked in real time'},
   {k:'ACT', c:'--green', bg:'var(--green-soft)', i:'⚡', h:'Recommended three and named the best', p:'Explained the trade-offs, not just a list'},
   {k:'DONE', c:'--orange', bg:'var(--orange-soft)', i:'✔️', h:'Shopper chose with confidence', p:'Added to cart in the same conversation'}
  ],
  outcome:{i:'🛒', h:'Added to cart', p:'Studio 16 · $1,899 · in stock'}
 },
 {
  brand:'Veloce Home &amp; Kitchen', channel:'📸 Instagram DM',
  note:'Timings, shipping, returns, order status. The questions your team answers all day, answered in half a second.',
  time:'Resolved in 19 seconds · no ticket created',
  msgs:[
   {t:'cust', av:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80', x:'Where is my order #8472?'},
   {t:'ai', x:'Let me check that for you…'},
   {t:'rich', x:'<div class="r-label">ORDER #8472 · SHIPPED</div><div class="sia-track"><div class="tp done"><span>Ordered</span></div><div class="tl on"></div><div class="tp now"><span>Shipped</span></div><div class="tl"></div><div class="tp"><span>Out for delivery</span></div><div class="tl"></div><div class="tp"><span>Arriving Thu</span></div></div>'},
   {t:'ai', x:'It shipped yesterday and arrives Thursday, Jul 24. Want the tracking link?'},
   {t:'cust', av:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80', x:'Yes please. Can it go to my office instead?'},
   {t:'ai', x:'Updated — it’s now heading to your office address. Tracking sent to your email.'}
  ],
  steps:[
   {k:'UNDERSTAND', c:'--purple', bg:'var(--purple-soft)', i:'💬', h:'Asking where order #8472 is', p:'Customer identified from the conversation'},
   {k:'CHECK', c:'--blue', bg:'var(--blue-soft)', i:'📦', h:'Pulled live order and shipping status', p:'Store system · carrier tracking'},
   {k:'ACT', c:'--green', bg:'var(--green-soft)', i:'⚡', h:'Answered and changed the address', p:'Delivery updated · tracking emailed'},
   {k:'DONE', c:'--orange', bg:'var(--orange-soft)', i:'✔️', h:'Question resolved instantly', p:'Never reached your support queue'}
  ],
  outcome:{i:'✅', h:'Issue resolved', p:'Arriving Thursday · delivered to office'}
 },
 {
  brand:'Northwind Software', channel:'💬 Live chat',
  note:'Who they are, what they need, how soon they need it. Saved to your CRM with the conversation attached.',
  time:'Qualified and booked in 52 seconds · CRM updated',
  msgs:[
   {t:'cust', av:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', x:'Would this work for a 20-person support team?'},
   {t:'ai', x:'Absolutely. Teams that size usually care most about shared inboxes and handoffs. What tools are you using today?'},
   {t:'cust', av:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', x:'Zendesk, and we’re on HubSpot for sales.'},
   {t:'ai', x:'Both connect natively. I’ve noted your setup — want a 20-minute walkthrough with our team?'},
   {t:'cust', av:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', x:'Yes, Monday morning if possible.'},
   {t:'rich', x:'<div class="r-label">Lead captured · CRM synced</div><div class="sia-form"><div class="fr"><span>Company size</span><b>20 seats</b></div><div class="fr"><span>Stack</span><b>Zendesk · HubSpot</b></div><div class="fr"><span>Demo</span><b>Mon, 11:00 AM</b></div></div>'},
   {t:'ai', x:'Done — invite sent, and your account team has the full conversation.'}
  ],
  steps:[
   {k:'UNDERSTAND', c:'--purple', bg:'var(--purple-soft)', i:'💬', h:'Evaluating for a 20-person team', p:'Intent: buying · stage: evaluation'},
   {k:'CHECK', c:'--blue', bg:'var(--blue-soft)', i:'🗄️', h:'Matched their stack to integrations', p:'Zendesk ✓ · HubSpot ✓ · fit confirmed'},
   {k:'ACT', c:'--green', bg:'var(--green-soft)', i:'⚡', h:'Qualified, captured and booked', p:'Lead pushed to HubSpot · demo on the calendar'},
   {k:'DONE', c:'--orange', bg:'var(--orange-soft)', i:'✔️', h:'Sales team notified with context', p:'Full transcript attached to the record'}
  ],
  outcome:{i:'🗓️', h:'Demo booked', p:'Monday · 11:00 AM · lead synced to HubSpot'}
 },
 {
  brand:'Apex Dermatology Clinic', channel:'🌐 Website',
  note:'Steps AI offers your open slots and confirms the time. The customer never leaves the chat to do it.',
  time:'Booked in 41 seconds · no human needed',
  msgs:[
   {t:'cust', av:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80', x:'Can I see a dermatologist tomorrow?'},
   {t:'ai', x:'Of course! Dr. Ananya Mehta has available slots at our Downtown Clinic tomorrow:'},
   {t:'rich', x:`<div class="doc-card" style="margin:4px 0 6px 0">
     <div class="doc-top">
       <img class="doc-avatar" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=250&q=80" alt="Dr. Ananya Mehta">
       <div class="doc-info">
         <h6>Dr. Ananya Mehta, MD</h6>
         <p>Board-Certified Dermatologist · 14 Yrs Exp</p>
         <span class="doc-badge">✓ Verified Provider</span>
       </div>
     </div>
     <div class="r-label" style="margin-top:10px">Tomorrow · Downtown Health Hub</div>
     <div class="sia-slots"><span>9:00 AM</span><span class="sel">10:30 AM (Selected)</span><span>12:00 PM</span><span>2:30 PM</span></div>
   </div>`},
   {t:'cust', av:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80', x:'10:30 works!'},
   {t:'ai', x:'Booked with Dr. Mehta! You’ll get a confirmation by email and a reminder the night before.'}
  ],
  steps:[
   {k:'UNDERSTAND', c:'--purple', bg:'var(--purple-soft)', i:'💬', h:'Wants a dermatology appointment', p:'Intent: booking · urgency: tomorrow'},
   {k:'CHECK', c:'--blue', bg:'var(--blue-soft)', i:'📅', h:'Checked live calendar availability', p:'Dr. Mehta · 4 slots available tomorrow'},
   {k:'ACT', c:'--green', bg:'var(--green-soft)', i:'⚡', h:'Booked and confirmed the slot', p:'Calendar updated · confirmation sent · added to CRM'},
   {k:'DONE', c:'--orange', bg:'var(--orange-soft)', i:'✔️', h:'Patient has an appointment', p:'No calls, no forms, no waiting'}
  ],
  outcome:{i:'📅', h:'Appointment booked', p:'Tomorrow · 10:30 AM · Dr. Mehta, Downtown'}
 },
 {
  brand:'Aurora Skincare', channel:'💬 WhatsApp broadcast',
  note:'Reach a thousand customers with one WhatsApp message. Every reply gets answered, so a campaign becomes conversations instead of unread messages.',
  time:'Reply answered in 6 seconds · 1 of 1,240 sent',
  msgs:[
   {t:'ai', x:'📣 Broadcast sent: "Weekend Sale — 20% off everything" to 1,240 customers.'},
   {t:'cust', av:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80', x:'Does the 20% off include the Botanical Glow gift sets?'},
   {t:'rich', x:`<div class="ch-card" style="margin:4px 0 6px 0">
     <div style="display:flex;gap:10px;align-items:center">
       <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=250&q=80" style="width:52px;height:52px;border-radius:10px;object-fit:cover;border:1px solid #e2e8f0" alt="Botanical Glow">
       <div>
         <h6>Botanical Glow Set</h6>
         <div style="font-size:12px;font-weight:700;color:#1e293b">$79.20 <span style="font-size:10.5px;color:#16a34a;font-weight:700">20% OFF Applied</span></div>
       </div>
     </div>
   </div>`},
   {t:'ai', x:'Yes — everything in the store is included this weekend, gift sets too!'},
   {t:'cust', av:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80', x:'Perfect, I’ll grab two before Sunday.'}
  ],
  steps:[
   {k:'UNDERSTAND', c:'--purple', bg:'var(--purple-soft)', i:'💬', h:'Reply to the weekend-sale broadcast', p:'Intent: clarifying what the offer covers'},
   {k:'CHECK', c:'--blue', bg:'var(--blue-soft)', i:'🏷️', h:'Matched the offer terms to the catalog', p:'Confirmed which products are included'},
   {k:'ACT', c:'--green', bg:'var(--green-soft)', i:'⚡', h:'Answered instantly, kept it conversational', p:'No wait, no "reply during business hours" message'},
   {k:'DONE', c:'--orange', bg:'var(--orange-soft)', i:'✔️', h:'Reply handled, customer ready to buy', p:'1 of 1,240 replies — each answered the same way'}
  ],
  outcome:{i:'📣', h:'Reply answered', p:'1,240 sent · every reply gets a real answer'}
 }
];
const siaMsgs=document.getElementById('siaMsgs'), siaSteps=document.getElementById('siaSteps'),
      siaOutcome=document.getElementById('siaOutcome'), siaDots=document.getElementById('siaDots');
let siaIdx=0, siaTimers=[], siaAuto=null;
const BOT_SVG = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.178 8c5.096 0 5.096 8 0 8-2.67 0-4.664-2.868-6.178-5.333C10.486 8.2 8.492 8 5.822 8c-5.096 0-5.096 8 0 8 2.67 0 4.664-2.868 6.178-5.333C13.514 13.8 15.508 16 18.178 16z"/></svg>';
function siaClear(){ siaTimers.forEach(clearTimeout); siaTimers=[]; }
function siaLater(fn,ms){ siaTimers.push(setTimeout(fn,ms)); }
function siaRenderStatic(s){
  document.getElementById('siaBrand').innerHTML = s.brand;
  document.getElementById('siaCh').textContent = s.channel;
  document.getElementById('siaNote').textContent = s.note;
  document.getElementById('siaTime').textContent = s.time;
  siaSteps.innerHTML = s.steps.map(st=>`
    <div class="sia-step">
      <div class="rail"><span class="rd" style="background:${st.bg.startsWith('--')?'var('+st.bg+'-soft)':st.bg}">${st.i}</span><span class="rl"></span></div>
      <div class="sc"><div class="k" style="color:var(${st.c})">${st.k}</div><h6>${st.h}</h6><p>${st.p}</p></div>
    </div>`).join('');
  siaOutcome.className='sia-outcome';
  siaOutcome.innerHTML = `<span class="oc-ic">${s.outcome.i}</span><div><h6>${s.outcome.h}</h6><p>${s.outcome.p}</p></div><span class="tick">✓</span>`;
  [...siaDots.children].forEach((d,i)=>d.classList.toggle('active', i===siaIdx));
  document.querySelectorAll('.sia-tab').forEach((t,i)=>{
    t.classList.toggle('active', i===siaIdx); t.setAttribute('aria-selected', i===siaIdx);
  });
}
function siaPlay(i){
  siaClear(); siaIdx=i;
  const s=SIA[i];
  siaMsgs.innerHTML=''; siaRenderStatic(s);
  const scrollChat=()=>{
    requestAnimationFrame(()=>{
      siaMsgs.scrollTo({top:siaMsgs.scrollHeight, behavior:'smooth'});
    });
  };
  const stepEls=[...siaSteps.children];
  let delay=180;
  s.msgs.forEach((m,mi)=>{
    if(m.t==='ai'){
      siaLater(()=>{
        const t=document.createElement('div'); t.className='msg-row';
        t.innerHTML='<span class="avatar bot">'+BOT_SVG+'</span><span class="sia-typing"><i></i><i></i><i></i></span>';
        siaMsgs.appendChild(t);
        scrollChat();
      }, delay);
      delay+=520;
      siaLater(()=>{
        if(siaMsgs.lastChild && siaMsgs.lastChild.querySelector('.sia-typing')) siaMsgs.lastChild.remove();
        const r=document.createElement('div'); r.className='msg-row';
        r.innerHTML='<span class="avatar bot">'+BOT_SVG+'</span><span class="bub ai">'+m.x+'</span>';
        siaMsgs.appendChild(r);
        scrollChat();
      }, delay);
    } else if(m.t==='rich'){
      siaLater(()=>{
        const r=document.createElement('div'); r.className='sia-rich'; r.innerHTML=m.x; siaMsgs.appendChild(r);
        scrollChat();
      }, delay);
    } else {
      siaLater(()=>{
        const r=document.createElement('div'); r.className='msg-row right';
        const avHtml = m.av.startsWith('http') ? `<img src="${m.av}" alt="User">` : m.av;
        r.innerHTML='<span class="avatar">'+avHtml+'</span><span class="bub cust">'+m.x+'</span>';
        siaMsgs.appendChild(r);
        scrollChat();
      }, delay);
    }
    const stepAt = Math.min(stepEls.length-1, Math.floor(mi/Math.max(1,(s.msgs.length-1)/stepEls.length)));
    siaLater(()=>{ for(let k=0;k<=stepAt;k++) stepEls[k]?.classList.add('on'); }, delay+60);
    delay += 620;
  });
  siaLater(()=>{ stepEls.forEach(e=>e.classList.add('on')); siaOutcome.classList.add('on'); }, delay);
  return delay + 3200;
}

function siaGo(i, manual){
  clearTimeout(siaAuto);
  const total = siaPlay(i);
  siaAuto = setTimeout(()=>siaGo((siaIdx+1)%SIA.length), total);
}

SIA.forEach((_,i)=>{
  const b=document.createElement('button'); b.setAttribute('aria-label','Scenario '+(i+1));
  b.onclick=()=>siaGo(i,true); siaDots.appendChild(b);
});
document.querySelectorAll('.sia-tab').forEach(t=>t.addEventListener('click',()=>siaGo(+t.dataset.sia,true)));

/* start only when scrolled into view, so the animation isn't missed */
const siaObs=new IntersectionObserver((es)=>{
  es.forEach(e=>{ if(e.isIntersecting){ siaGo(0); siaObs.disconnect(); } });
},{threshold:.25});
siaObs.observe(document.querySelector('.sia-wrap'));

/* ---------- Nav: transparent over the hero, frosted once you scroll past it ---------- */
(function(){
  const nav = document.getElementById('mainNav');
  const hero = document.getElementById('hero');
  if(!nav || !hero) return;
  const onScroll = () => {
    const threshold = hero.offsetHeight - nav.offsetHeight;
    nav.classList.toggle('on-hero', window.scrollY < threshold);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
})();

/* ---------- Hero mockup: Interactive Destinations & Channels ---------- */
const HERO_SCENARIOS = {
  website: {
    featureTab: 'sales',
    brandAv: '🏔️',
    brandNm: 'Acme Outdoor (Store)',
    brandOn: 'Online · Replies in &lt;1s',
    headClass: '',
    html: `
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer"></span><span class="bub cust">I need a waterproof jacket for hiking. Which one should I get?</span></div>
      <div class="msg-row">${BOT}<span class="bub ai">The Trail Jacket is a great fit — waterproof, lightweight, and available in your size.</span></div>
      <div class="prod-card"><span class="prod-thumb"><img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=150&q=80" alt="Trail Jacket"></span><div><h6>Trail Jacket</h6><div class="pr">$129 <span class="stars">★★★★★ 4.8</span></div><span class="mini-btn">Add to cart</span></div></div>
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer"></span><span class="bub cust">Perfect, I'll take it!</span></div>`
  },
  shopify: {
    featureTab: 'sales',
    brandAv: '<span class="ci" data-icon="shopify" style="width:22px;height:22px"></span>',
    brandNm: 'Shopify Store Concierge',
    brandOn: 'Live Stock &amp; Cart Sync',
    headClass: 'brand-shop',
    html: `
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Elena"></span><span class="bub cust">Can I swap order #SH-9281 to size L before it ships?</span></div>
      <div class="msg-row">${BOT}<span class="bub ai">Checking live inventory in Shopify... Size L has 14 units left in stock.</span></div>
      <div class="prod-card" style="margin:4px 0 10px 42px;max-width:280px;background:#f0fdf4;border-color:#bbf7d0">
        <span class="prod-thumb" style="background:#fff"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=150&q=80" alt="Shoes"></span>
        <div><h6 style="color:#065f46">Order Size Updated: L</h6><div class="pr" style="color:#047857;font-weight:700">✓ Synced with Shopify Admin</div></div>
      </div>
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Elena"></span><span class="bub cust">That was completely instant! Thank you! 🙌</span></div>`
  },
  instagram: {
    featureTab: 'sales',
    brandAv: '<span class="ci" data-icon="instagram" style="width:22px;height:22px"></span>',
    brandNm: '@yourbrand (Instagram DM)',
    brandOn: 'Active now · Instant Reply',
    headClass: 'brand-ig',
    html: `
      <div style="background:#fdf2f8;border:1px solid #fbcfe8;border-radius:12px;padding:8px 12px;margin-bottom:8px;font-size:11.5px">
        <span style="color:#be185d;font-weight:700">💬 Reel Comment from priya.s:</span>
        <div style="font-weight:750;color:#831843">"How much is this jacket? 😍"</div>
      </div>
      <div class="msg-row">${BOT}<span class="bub ai">Hey Priya! 👋 It’s $129, 100% waterproof and in stock in M. Direct checkout link below:</span></div>
      <div class="prod-card" style="margin:4px 0 10px 42px;max-width:280px">
        <span class="prod-thumb"><img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=150&q=80" alt="Jacket"></span>
        <div><h6>Alpine Trail Jacket</h6><span class="mini-btn" style="background:linear-gradient(45deg,#f09433,#dc2743,#bc1888)">View in IG Shop</span></div>
      </div>
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Priya"></span><span class="bub cust">Just ordered! Thank you! ✨</span></div>`
  },
  whatsapp: {
    featureTab: 'book',
    brandAv: '<span class="ci" data-icon="whatsapp" style="width:22px;height:22px"></span>',
    brandNm: 'Apex Clinic (WhatsApp)',
    brandOn: 'Verified Business Account',
    headClass: 'brand-wa',
    html: `
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Patient"></span><span class="bub cust-wa">Can I book a consultation with Dr. Mehta tomorrow?</span></div>
      <div class="msg-row"><span class="avatar bot" style="background:#25d366;color:#fff">✔</span><span class="bub ai-wa">Of course! Here are available slots with Dr. Ananya Mehta:</span></div>
      <div class="doc-card" style="margin:4px 0 10px 42px;max-width:280px">
        <div class="doc-top">
          <img class="doc-avatar" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80" alt="Dr. Mehta">
          <div class="doc-info">
            <h6>Dr. Ananya Mehta, MD</h6>
            <p>Dermatologist · ★ 4.9</p>
          </div>
        </div>
        <div class="sia-slots" style="margin-top:8px"><span>9:00 AM</span><span class="sel">10:30 AM</span><span>2:30 PM</span></div>
      </div>
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Patient"></span><span class="bub cust-wa">10:30 AM works, thanks!</span></div>`
  },
  messenger: {
    featureTab: 'support',
    brandAv: '<span class="ci" data-icon="messenger" style="width:22px;height:22px"></span>',
    brandNm: 'StepsAI Concierge (Messenger)',
    brandOn: 'Instant Resolution · Active',
    headClass: 'brand-msg',
    html: `
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Customer"></span><span class="bub cust">Where is my order #8472?</span></div>
      <div class="msg-row">${BOT}<span class="bub ai">It shipped yesterday via FedEx and arrives Thursday by 3:30 PM.</span></div>
      <div class="prod-card" style="margin:4px 0 10px 42px;max-width:280px">
        <span class="prod-thumb"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=150&q=80" alt="Parcel"></span>
        <div><h6>FedEx #FX-88391</h6><div class="pr" style="color:#16a34a;font-weight:700">Out for Delivery (3 stops away)</div></div>
      </div>
      <div class="msg-row right"><span class="avatar"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Customer"></span><span class="bub cust">Awesome, thank you!</span></div>`
  }
};

const heroChatBody = document.getElementById('heroChatBody');
const heroChatHead = document.getElementById('heroChatHead');
const heroBrandAv = document.getElementById('heroBrandAv');
const heroBrandNm = document.getElementById('heroBrandNm');
const heroBrandOn = document.getElementById('heroBrandOn');

function renderHeroDestination(channelKey){
  const sc = HERO_SCENARIOS[channelKey];
  if(!sc || !heroChatBody) return;

  // Update active state on channel buttons
  document.querySelectorAll('.hero-channels button.ch').forEach(btn=>{
    const isActive = btn.dataset.heroCh === channelKey;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update active state on mini-feature cards
  if(sc.featureTab){
    document.querySelectorAll('.mini-feature[data-tab]').forEach(c=>{
      const isFeatureActive = c.dataset.tab === sc.featureTab;
      c.classList.toggle('active', isFeatureActive);
      c.setAttribute('aria-pressed', isFeatureActive ? 'true' : 'false');
    });
  }

  // Smooth fade swap
  heroChatBody.style.opacity = 0;
  setTimeout(()=>{
    if(heroChatHead){
      heroChatHead.className = 'hero-chat-head ' + (sc.headClass || '');
      if(heroBrandAv) heroBrandAv.innerHTML = sc.brandAv;
      if(heroBrandNm) heroBrandNm.innerHTML = sc.brandNm;
      if(heroBrandOn) heroBrandOn.innerHTML = sc.brandOn;
      heroChatHead.querySelectorAll('[data-icon]').forEach(el=>{
        const k = el.getAttribute('data-icon');
        if(ICONS[k]) el.innerHTML = ICONS[k];
      });
    }
    heroChatBody.innerHTML = sc.html;
    heroChatBody.style.opacity = 1;
  }, 160);
}

// Attach click handlers to Hero Channel buttons
document.querySelectorAll('.hero-channels button.ch[data-hero-ch]').forEach(btn=>{
  const chKey = btn.dataset.heroCh;
  btn.addEventListener('click', ()=>renderHeroDestination(chKey));
});

// Map feature tabs to destinations
const FEATURE_TO_CHANNEL = {
  sales: 'website',
  book: 'whatsapp',
  support: 'messenger'
};

document.querySelectorAll('.mini-feature[data-tab]').forEach(card=>{
  const select = () => {
    const tabKey = card.dataset.tab;
    const dest = FEATURE_TO_CHANNEL[tabKey] || 'website';
    renderHeroDestination(dest);
  };
  card.addEventListener('click', select);
  card.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); select(); } });
});
if(heroChatBody) heroChatBody.style.transition='opacity .16s ease';

/* ---------- Hero chat: auto-cycle channels on hover ----------
   Static until the visitor's mouse is actually over the widget, then it
   comes alive and steps through the channel scenarios on its own (like a
   looping product demo) instead of sitting still waiting to be clicked.
   Stops and holds on whatever channel it landed on when the mouse leaves. */
(function heroChatAutoCycle(){
  const widget = document.querySelector('.hero-chat');
  const channelKeys = Object.keys(HERO_SCENARIOS);
  if(!widget || !channelKeys.length) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;

  let timer = null;
  function currentIndex(){
    const activeBtn = document.querySelector('.hero-channels button.ch.active');
    const key = activeBtn && activeBtn.dataset.heroCh;
    const i = channelKeys.indexOf(key);
    return i === -1 ? 0 : i;
  }
  function start(){
    if(timer) return;
    let i = currentIndex();
    timer = setInterval(()=>{
      i = (i + 1) % channelKeys.length;
      renderHeroDestination(channelKeys[i]);
    }, 2400);
  }
  function stop(){
    clearInterval(timer);
    timer = null;
  }
  widget.addEventListener('mouseenter', start);
  widget.addEventListener('mouseleave', stop);
  widget.addEventListener('focusin', start);
  widget.addEventListener('focusout', stop);
})();

/* ---------- WhatsApp Broadcast Studio Interactivity (Pixel-to-Pixel) ---------- */
const WA_STUDIO_DATA = [
  {
    name: "All Contacts",
    customerName: "Priya Sharma",
    customerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    selectedPill: "✓ 12,842 contacts selected",
    deliveredCount: "12,842 messages delivered",
    toPill: "👤 All Contacts (12,842)",
    editorHtml: "Hey {{First Name}}! 👋<br><br>Our <b>Mid-Season Lumina Showcase</b> is live! Discover our full handcrafted collection with complimentary doorstep delivery.<br><br>Use code <b>SEASON20</b> for 20% off your entire order today:",
    mediaImg: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    mediaTagTitle: "MID-SEASON SHOWCASE",
    mediaTagSub: "Handcrafted 2026 Collection",
    mediaCta: "🔗 Explore Collection ▾",
    phoneInMsg: "Hey Priya! 👋<br><br>Our <b>Mid-Season Lumina Showcase</b> is live! Discover our full handcrafted collection with complimentary doorstep delivery.<br><br>Use code <b>SEASON20</b> for 20% off your entire order today:",
    phoneInImg: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
    phoneTagTitle: "MID-SEASON SHOWCASE",
    phoneTagSub: "Handcrafted 2026 Collection",
    phoneBtn: "🔗 Explore Collection",
    phoneOutMsg: "Just ordered the Gold Aviators! Thank you! ✨",
    stats: {
      sentRaw: 12842, sent: "12,842",
      deliveredRaw: 12180, delivered: "12,180", deliveredPill: "95%",
      readRaw: 8940, read: "8,940", readPill: "69%",
      clickedRaw: 4420, clicked: "4,420", clickedPill: "34%",
      purchasesRaw: 1540, purchases: "1,540", convRate: "🟢 12.0%",
      rev: "₹52,02,120", revBadge: "▲ 28.4% vs email broadcast",
      tt: { sent: "12,842", delivered: "12,180", read: "8,940", clicked: "4,420", purchased: "1,540" }
    }
  },
  {
    name: "Repeat Luxury Buyers",
    customerName: "Priya Sharma",
    customerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    selectedPill: "✓ 4,125 contacts selected",
    deliveredCount: "4,125 messages delivered",
    toPill: "💎 Repeat Luxury Buyers (4,125)",
    editorHtml: "Hey {{First Name}}! 👋<br><br>As a valued customer, you get early access to our new Titanium collection.<br><br>Enjoy complimentary polarized cases on any order today.",
    mediaImg: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    mediaTagTitle: "TITANIUM HAUTE",
    mediaTagSub: "New Collection",
    mediaCta: "🔗 Shop Now ▾",
    phoneInMsg: "Hey Priya! 👋<br><br>As a valued customer, you get early access to our new Titanium collection.<br><br>Enjoy complimentary polarized cases on any order today.",
    phoneInImg: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=500&q=80",
    phoneTagTitle: "TITANIUM HAUTE",
    phoneTagSub: "New Collection",
    phoneBtn: "🔗 Shop Now",
    phoneOutMsg: "This looks amazing! 😍<br>Just placed my order. Thank you!",
    stats: {
      sentRaw: 4125, sent: "4,125",
      deliveredRaw: 3980, delivered: "3,980", deliveredPill: "96%",
      readRaw: 2880, read: "2,880", readPill: "70%",
      clickedRaw: 1650, clicked: "1,650", clickedPill: "40%",
      purchasesRaw: 784, purchases: "784", convRate: "↑ 19.0%",
      rev: "₹42,83,752", revBadge: "↑ 32.6% vs previous campaign",
      tt: { sent: "4,125", delivered: "3,980", read: "2,880", clicked: "1,650", purchased: "784" }
    }
  },
  {
    name: "Abandoned Carts",
    customerName: "Sarah Jenkins",
    customerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    selectedPill: "✓ 2,312 contacts selected",
    deliveredCount: "2,312 messages delivered",
    toPill: "🛒 Abandoned Carts (2,312)",
    editorHtml: "Hey {{First Name}}! ✨ We saved your reserved <b>Polarized Aviators</b>. Complete your checkout in the next 2 hours and enjoy <b>free express shipping + 15% off</b> with code <b>CART15</b>:",
    mediaImg: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=600&q=80",
    mediaTagTitle: "RESERVED IN CART",
    mediaTagSub: "Flash 15% Perk Active",
    mediaCta: "⚡ Complete Checkout ▾",
    phoneInMsg: "Hey Sarah! ✨ We saved your reserved <b>Polarized Aviators</b>. Complete your checkout in the next 2 hours and enjoy <b>free express shipping + 15% off</b> with code <b>CART15</b>:",
    phoneInImg: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=500&q=80",
    phoneTagTitle: "RESERVED IN CART",
    phoneTagSub: "Flash 15% Perk Active",
    phoneBtn: "⚡ Complete Checkout",
    phoneOutMsg: "Awesome! Just completed checkout 🎉",
    stats: {
      sentRaw: 2312, sent: "2,312",
      deliveredRaw: 2240, delivered: "2,240", deliveredPill: "97%",
      readRaw: 1620, read: "1,620", readPill: "70%",
      clickedRaw: 1040, clicked: "1,040", clickedPill: "45%",
      purchasesRaw: 554, purchases: "554", convRate: "🟢 24.0%",
      rev: "₹18,71,412", revBadge: "▲ 41.2% recovered GMV",
      tt: { sent: "2,312", delivered: "2,240", read: "1,620", clicked: "1,040", purchased: "554" }
    }
  },
  {
    name: "VIP / High LTV",
    customerName: "Elena Rostova",
    customerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
    selectedPill: "✓ 1,024 contacts selected",
    deliveredCount: "1,024 messages delivered",
    toPill: "⭐ VIP / High LTV (1,024)",
    editorHtml: "Hello {{First Name}}! 💎 You're cordially invited to the private runway preview of our <b>Bespoke Diamond Acetate</b> collection. Only 50 numbered pieces handcrafted worldwide:",
    mediaImg: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    mediaTagTitle: "BESPOKE DIAMOND",
    mediaTagSub: "Limited 50 Pieces Worldwide",
    mediaCta: "💎 Reserve Numbered Piece ▾",
    phoneInMsg: "Hello Elena! 💎 You're cordially invited to the private runway preview of our <b>Bespoke Diamond Acetate</b> collection. Only 50 numbered pieces handcrafted worldwide:",
    phoneInImg: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80",
    phoneTagTitle: "BESPOKE DIAMOND",
    phoneTagSub: "Limited 50 Pieces Worldwide",
    phoneBtn: "💎 Reserve Numbered Piece",
    phoneOutMsg: "Please hold piece #07 for me! 🥂",
    stats: {
      sentRaw: 1024, sent: "1,024",
      deliveredRaw: 1010, delivered: "1,010", deliveredPill: "99%",
      readRaw: 870, read: "870", readPill: "85%",
      clickedRaw: 560, clicked: "560", clickedPill: "55%",
      purchasesRaw: 318, purchases: "318", convRate: "🟢 31.0%",
      rev: "₹29,86,020", revBadge: "▲ 56.8% high-ticket ROI",
      tt: { sent: "1,024", delivered: "1,010", read: "870", clicked: "560", purchased: "318" }
    }
  },
  {
    name: "New Leads",
    customerName: "Rohan Patel",
    customerAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    selectedPill: "✓ 3,981 contacts selected",
    deliveredCount: "3,981 messages delivered",
    toPill: "👤 New Leads (3,981)",
    editorHtml: "Hey {{First Name}}! 👓 Thanks for visiting Lumina. Discover which frame shape perfectly complements your face with our <b>AI Frame Stylist</b>, plus get <b>₹500 off</b> your first order:",
    mediaImg: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80",
    mediaTagTitle: "AI FRAME FINDER",
    mediaTagSub: "Find Your Perfect Fit",
    mediaCta: "💬 Try AI Frame Stylist ▾",
    phoneInMsg: "Hey Rohan! 👓 Thanks for visiting Lumina. Discover which frame shape perfectly complements your face with our <b>AI Frame Stylist</b>, plus get <b>₹500 off</b> your first order:",
    phoneInImg: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=500&q=80",
    phoneTagTitle: "AI FRAME FINDER",
    phoneTagSub: "Find Your Perfect Fit",
    phoneBtn: "💬 Try AI Frame Stylist",
    phoneOutMsg: "Loved the style quiz, ordered the Matte Black! 🕶️",
    stats: {
      sentRaw: 3981, sent: "3,981",
      deliveredRaw: 3790, delivered: "3,790", deliveredPill: "95%",
      readRaw: 2540, read: "2,540", readPill: "64%",
      clickedRaw: 1420, clicked: "1,420", clickedPill: "36%",
      purchasesRaw: 492, purchases: "492", convRate: "🟢 12.4%",
      rev: "₹16,61,976", revBadge: "▲ 38.2% lead conversion",
      tt: { sent: "3,981", delivered: "3,790", read: "2,540", clicked: "1,420", purchased: "492" }
    }
  }
];

let currentWaStep = 1;
let currentWaSegIdx = 1;
let waStepTimer = null;
let isWaLoopPaused = false;
const WA_STEP_DURATION = 3800; // 3.8s per step

const WA_STEP_TITLES = {
  1: "Step 1: Choose Your Target Audience",
  2: "Step 2: Create WhatsApp Broadcast",
  3: "Step 3: Real Customers Receive It on WhatsApp"
};

// Smooth Animated Number Counter
function animateCount(el, start, end, prefix='', suffix='', duration=700){
  if(!el) return;
  const startTime = performance.now();
  const startNum = Number(start) || 0;
  const endNum = Number(end) || 0;
  function update(time){
    const progress = Math.min((time - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out
    const current = Math.round(startNum + (endNum - startNum) * ease);
    el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
    if(progress < 1){
      requestAnimationFrame(update);
    } else {
      el.textContent = prefix + endNum.toLocaleString('en-IN') + suffix;
    }
  }
  requestAnimationFrame(update);
}

// Master Step Switcher for Single-Mockup Stage (3 Steps)
function goToWaStep(stepNum, manual = false){
  const step = Math.max(1, Math.min(3, Number(stepNum) || 1));
  currentWaStep = step;

  // 1. Update Top Step Tabs
  document.querySelectorAll('.was-step').forEach((s)=>{
    const sNum = Number(s.dataset.step);
    s.classList.toggle('active-step', sNum === step);
  });

  // 2. Update Flow Arrows
  const a1 = document.querySelector('.was-arrow.arrow-1');
  const a2 = document.querySelector('.was-arrow.arrow-2');
  if(a1) a1.classList.toggle('active-arrow', step >= 2);
  if(a2) a2.classList.toggle('active-arrow', step >= 3);

  // 3. Update Stage Header Branding & Badge
  const stageTitle = document.getElementById('waStageStepTitle');
  if(stageTitle) stageTitle.textContent = WA_STEP_TITLES[step] || `Step ${step}`;
  const badgeLabel = document.getElementById('waStepBadgeLabel');
  if(badgeLabel) badgeLabel.textContent = `Step ${step} of 3`;

  // 4. Update Single Mockup View
  document.querySelectorAll('.wa-step-view').forEach((view)=>{
    const vStep = Number(view.dataset.step);
    view.classList.toggle('active', vStep === step);
  });

  // 5. Update Bottom Dots
  document.querySelectorAll('#waStepDots .wa-dot').forEach((dot)=>{
    const dStep = Number(dot.dataset.step);
    dot.classList.toggle('active', dStep === step);
  });

  // 6. Execute Step-Specific Micro-Animations
  const data = WA_STUDIO_DATA[currentWaSegIdx] || WA_STUDIO_DATA[1];
  
  if(step === 1){
    // Audience View
    document.querySelectorAll('#wacAudList .wac-aud-item').forEach((item, i)=>{
      item.classList.toggle('active', i === currentWaSegIdx);
    });
    const selTag = document.getElementById('wacSelectedTag');
    if(selTag) selTag.innerHTML = '<span class="badge-dot"></span>' + data.selectedPill;
    const delCnt = document.getElementById('waDeliveredCount');
    if(delCnt) delCnt.textContent = data.deliveredCount;
  }
  else if(step === 2){
    // Composer View
    const toPill = document.getElementById('wacToPill');
    if(toPill) toPill.textContent = data.toPill;
    const edBox = document.getElementById('wacEditorBox');
    if(edBox) edBox.innerHTML = data.editorHtml;
    const mImg = document.getElementById('wacMediaImg');
    if(mImg) {
      mImg.style.transition = 'opacity .2s ease';
      mImg.style.opacity = '0.4';
      setTimeout(()=>{ mImg.src = data.mediaImg; mImg.style.opacity = '1'; }, 80);
    }
    const mTagTitle = document.getElementById('wacMediaTagTitle');
    if(mTagTitle) mTagTitle.textContent = data.mediaTagTitle;
    const mTagSub = document.getElementById('wacMediaTagSub');
    if(mTagSub) mTagSub.textContent = data.mediaTagSub;
    const mCta = document.getElementById('wacMediaCta');
    if(mCta) mCta.textContent = data.mediaCta;

    // Pulse send broadcast button at halfway mark
    setTimeout(()=>{
      const sendBtn = document.getElementById('wacSendBtn');
      if(sendBtn && currentWaStep === 2){
        const origHtml = sendBtn.innerHTML;
        sendBtn.innerHTML = '✓ Broadcast Dispatched!';
        sendBtn.style.background = 'linear-gradient(135deg,#059669 0%,#10b981 100%)';
        setTimeout(()=>{
          if(sendBtn){
            sendBtn.innerHTML = origHtml;
            sendBtn.style.background = '';
          }
        }, 1600);
      }
    }, 1200);
  }
  else if(step === 3){
    // Phone View
    const phAv = document.getElementById('waPhAvImg');
    if(phAv) phAv.src = data.customerAvatar;
    const phName = document.getElementById('waPhName');
    if(phName) phName.textContent = data.customerName;
    const phStatus = document.getElementById('waPhStatus');
    const typingBox = document.getElementById('waTypingBox');
    const inBubble = document.getElementById('waBubbleIn');
    const outBubble = document.getElementById('waBubbleOut');
    const ticks = document.getElementById('waPhoneTicks');

    if(phStatus) phStatus.textContent = 'typing...';
    if(typingBox) typingBox.classList.add('active');
    if(inBubble) inBubble.style.opacity = '0.2';
    if(outBubble) outBubble.style.opacity = '0';
    if(ticks) { ticks.textContent = '✓'; ticks.className = 'ticks'; }

    setTimeout(()=>{
      if(currentWaStep !== 3) return;
      if(phStatus) phStatus.textContent = 'online';
      if(typingBox) typingBox.classList.remove('active');

      const phInMsg = document.getElementById('waPhoneInMsg');
      if(phInMsg) phInMsg.innerHTML = data.phoneInMsg;
      const phInImg = document.getElementById('waPhoneInImg');
      if(phInImg) phInImg.src = data.phoneInImg;
      const phTagTitle = document.getElementById('waPhoneTagTitle');
      if(phTagTitle) phTagTitle.textContent = data.phoneTagTitle;
      const phTagSub = document.getElementById('waPhoneTagSub');
      if(phTagSub) phTagSub.textContent = data.phoneTagSub;
      const phBtn = document.getElementById('waPhoneBtn');
      if(phBtn) phBtn.textContent = data.phoneBtn;

      if(inBubble){
        inBubble.style.opacity = '1';
        inBubble.style.animation = 'none';
        inBubble.offsetHeight;
        inBubble.style.animation = 'waBubbleIn .4s cubic-bezier(.16,1,.3,1)';
      }

      // Ticks progression
      setTimeout(()=>{ if(ticks && currentWaStep === 3) ticks.textContent = '✓✓'; }, 400);
      setTimeout(()=>{
        if(ticks && currentWaStep === 3){
          ticks.className = 'ticks read';
        }
      }, 900);

      // Customer reply swooshes in
      setTimeout(()=>{
        if(currentWaStep !== 3) return;
        const phOutMsg = document.getElementById('waPhoneOutMsg');
        if(phOutMsg) phOutMsg.innerHTML = data.phoneOutMsg;
        if(outBubble){
          outBubble.style.opacity = '1';
          outBubble.style.animation = 'none';
          outBubble.offsetHeight;
          outBubble.style.animation = 'waBubbleOutIn .45s cubic-bezier(.16,1,.3,1) both';
        }
      }, 1300);
    }, 600);
  }

  // Schedule Next Step in Loop (1 -> 2 -> 3 -> 1)
  if(waStepTimer) clearTimeout(waStepTimer);
  if(!isWaLoopPaused){
    waStepTimer = setTimeout(()=>{
      const nextStep = (currentWaStep % 3) + 1;
      // When cycling back to Step 1, cycle through the audience profiles
      if(nextStep === 1){
        currentWaSegIdx = (currentWaSegIdx + 1) % WA_STUDIO_DATA.length;
      }
      goToWaStep(nextStep);
    }, WA_STEP_DURATION);
  }
}

// Attach Top Process Step Click Listeners
document.querySelectorAll('.was-step').forEach(stepEl => {
  const handler = () => {
    const sNum = Number(stepEl.dataset.step);
    if(sNum) goToWaStep(sNum, true);
  };
  stepEl.addEventListener('click', handler);
  stepEl.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  });
});

// Attach Bottom Step Dots Click Listeners
document.querySelectorAll('#waStepDots .wa-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    const dStep = Number(dot.dataset.step);
    if(dStep) goToWaStep(dStep, true);
  });
});

// Prev / Next Navigation Buttons
const waPrevBtn = document.getElementById('waPrevStepBtn');
if(waPrevBtn){
  waPrevBtn.addEventListener('click', ()=>{
    const prev = currentWaStep === 1 ? 3 : currentWaStep - 1;
    goToWaStep(prev, true);
  });
}
const waNextBtn = document.getElementById('waNextStepBtn');
if(waNextBtn){
  waNextBtn.addEventListener('click', ()=>{
    const next = (currentWaStep % 3) + 1;
    goToWaStep(next, true);
  });
}

// Auto Loop Toggle Button
function toggleWaLoop(){
  isWaLoopPaused = !isWaLoopPaused;
  const pill = document.getElementById('waAutoPill');
  const txt = document.getElementById('waAutoStatusText');
  const replayBtn = document.getElementById('waReplayBtn');
  
  if(isWaLoopPaused){
    if(waStepTimer) clearTimeout(waStepTimer);
    if(txt) txt.textContent = 'Paused (Click to Play)';
    if(pill) pill.style.color = '#64748b';
    if(replayBtn) replayBtn.classList.add('paused');
  } else {
    if(txt) txt.textContent = 'Auto-Looping';
    if(pill) pill.style.color = '#059669';
    if(replayBtn) replayBtn.classList.remove('paused');
    goToWaStep((currentWaStep % 3) + 1);
  }
}

const waAutoPill = document.getElementById('waAutoPill');
if(waAutoPill) waAutoPill.addEventListener('click', toggleWaLoop);
const waReplayBtn = document.getElementById('waReplayBtn');
if(waReplayBtn) waReplayBtn.addEventListener('click', toggleWaLoop);

// Audience segment selection within Step 1
document.querySelectorAll('#wacAudList .wac-aud-item').forEach(item => {
  item.addEventListener('click', () => {
    const audId = Number(item.dataset.aud);
    if(!isNaN(audId) && audId < WA_STUDIO_DATA.length){
      currentWaSegIdx = audId;
      goToWaStep(1, true);
    }
  });
});

// Send Broadcast button click in Step 2 advances to Step 3 (Phone)
const sendBroadcastBtn = document.getElementById('wacSendBtn');
if(sendBroadcastBtn){
  sendBroadcastBtn.addEventListener('click', () => {
    goToWaStep(3, true);
  });
}

// Pause looping when user hovers over stage to interact
const stageWrap = document.querySelector('#whatsapp .wa-mockup-frame');
if(stageWrap){
  stageWrap.addEventListener('mouseenter', ()=>{
    if(!isWaLoopPaused && waStepTimer){
      clearTimeout(waStepTimer);
    }
  });
  stageWrap.addEventListener('mouseleave', ()=>{
    if(!isWaLoopPaused){
      if(waStepTimer) clearTimeout(waStepTimer);
      waStepTimer = setTimeout(()=>{
        goToWaStep((currentWaStep % 3) + 1);
      }, 2500);
    }
  });
}

// 3D Perspective Phone Physics on Mouse Move
const phoneWrap = document.getElementById('waPhoneWrap');
const phoneMock = document.getElementById('waPhoneMock');
if(phoneWrap && phoneMock){
  phoneWrap.addEventListener('mousemove', (e)=>{
    const rect = phoneWrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / (rect.height / 2)) * 9;
    const rotY = (x / (rect.width / 2)) * 9;
    phoneMock.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.02)`;
  });
  phoneWrap.addEventListener('mouseleave', ()=>{
    phoneMock.style.transform = '';
  });
}

// Trigger initial flow on Scroll Intersection with WhatsApp section
const waSection = document.getElementById('whatsapp');
if(waSection && 'IntersectionObserver' in window){
  let waTriggered = false;
  const waObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting && !waTriggered){
        waTriggered = true;
        goToWaStep(1);
      }
    });
  }, { threshold: 0.25 });
  waObserver.observe(waSection);
}

// Industries Accordion Fluid Expansion Handler
(function initIndustriesAccordion() {
  const accordion = document.getElementById('indAccordion');
  if (!accordion) return;
  const cards = accordion.querySelectorAll('.ind-card');
  if (!cards.length) return;

  function setActiveCard(targetCard) {
    cards.forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-expanded', 'false');
    });
    targetCard.classList.add('active');
    targetCard.setAttribute('aria-expanded', 'true');
  }

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => setActiveCard(card));
    card.addEventListener('click', () => setActiveCard(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActiveCard(card);
      }
    });
  });
})();

// 3D Spatial Live Perspective Physics for All Dashboard Mockups
(function initDashboard3DPhysics() {
  const stages = document.querySelectorAll('.dash-stage');
  if (!stages.length) return;

  stages.forEach(stage => {
    const card = stage.querySelector('.dash');
    const bg = stage.querySelector('.dash-stage-bg');
    if (!card) return;

    let isHovered = false;
    let reqId = null;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    function updatePhysics() {
      // Smooth lerp physics
      currentRotX += (targetRotX - currentRotX) * 0.12;
      currentRotY += (targetRotY - currentRotY) * 0.12;

      if (isHovered) {
        card.style.transform = `perspective(1200px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateZ(24px) scale3d(1.01, 1.01, 1.01)`;
        if (bg) {
          bg.style.transform = `translate3d(${(-currentRotY * 1.8).toFixed(1)}px, ${(currentRotX * 1.8).toFixed(1)}px, 0) scale(1.06)`;
        }
      } else {
        card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`;
        if (bg) {
          bg.style.transform = `translate3d(0, 0, 0) scale(1.04)`;
        }
      }

      if (isHovered || Math.abs(currentRotX) > 0.05 || Math.abs(currentRotY) > 0.05) {
        reqId = requestAnimationFrame(updatePhysics);
      }
    }

    stage.addEventListener('mouseenter', () => {
      isHovered = true;
      if (!reqId) reqId = requestAnimationFrame(updatePhysics);
    });

    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Controlled, refined tilt angle (max 7 degrees)
      targetRotX = -(y / (rect.height / 2)) * 7.5;
      targetRotY = (x / (rect.width / 2)) * 7.5;
      if (!reqId) reqId = requestAnimationFrame(updatePhysics);
    });

    stage.addEventListener('mouseleave', () => {
      isHovered = false;
      targetRotX = 0;
      targetRotY = 0;
    });
  });

  // Time pill interactive filter demo in Analytics
  const timePills = document.querySelectorAll('.an-time-pill');
  timePills.forEach(pill => {
    pill.addEventListener('click', () => {
      timePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });
})();

// ============================================================
// AUTOMATION WORKFLOW BUILDER INTERACTIVE CONTROLLER
// ============================================================
(function initAutomationStudio() {
  const WF_DATA = {
    cart: {
      title: "Cart recovery · Multi-Channel Flow",
      banner: "₹11,64,871 recovered by this flow · 1,420 orders saved on auto-pilot",
      node1: { ic: "🛒", bg: "#eff6ff", col: "#2563eb", tag: "TRIGGER", title: "The cart they walked away from", desc: "Shopper left items in checkout without completing purchase (Shopify Storefront)" },
      node2: { ic: "⏱️", bg: "#f5f3ff", col: "#7c3aed", tag: "TIMED DELAY", title: "Holding for thirty minutes, so they can finish on their own", delay: "⏳ 30 mins" },
      node3: { tag: "CONDITION", title: "Check order checkout status", condLabel: "Has completed purchase?", condVal: "False (Cart Unpaid)", condCol: "#dc2626" },
      actionLeft: {
        badge: "⚡ IF UNPAID · ACTION",
        ic: "💬",
        header: "The message that actually goes out",
        msg: '"Hi Priya, you left items in your cart. Still interested?"',
        img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=150&q=80",
        title: "Titanium Polarized Aviators",
        sub: "✓ 10% Discount: CART10",
        cta: "🔗 View Cart"
      },
      actionRight: {
        badge: "✓ IF PAID · RESOLVED",
        desc: "Customer already bought. Loyalty points & CRM data synced."
      }
    },
    lead: {
      title: "Lead routing · High-Value Pipeline",
      banner: "⚡ 4.2x Faster Response Time · 84% Discovery Call Booking Rate",
      node1: { ic: "💬", bg: "#f5f3ff", col: "#7c3aed", tag: "TRIGGER", title: "The conversation that just started", desc: "Prospect begins high-intent inquiry on website, Instagram or WhatsApp" },
      node2: { ic: "🎯", bg: "#eff6ff", col: "#1d4ed8", tag: "AI ENRICHMENT", title: "Enriching company profile & tech stack", delay: "⚡ < 3 seconds" },
      node3: { tag: "AI SCORING", title: "Scoring budget, timeline and company size against your bar", condLabel: "Qualifies as Tier 1 Enterprise?", condVal: "True (High Value ICP)", condCol: "#16a34a" },
      actionLeft: {
        badge: "🚨 IF QUALIFIED · INSTANT DISPATCH",
        ic: "⚡",
        header: "The alert your sales team sees",
        msg: '"🔥 Hot Lead: Priya Sharma (VP Tech, Acme Corp, 250+ seats). Routing to Enterprise AE now."',
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        title: "Priya Sharma · VP Tech",
        sub: "⚡ $50k+ Budget · Slack & WhatsApp Paged",
        cta: "🚨 Claim Lead"
      },
      actionRight: {
        badge: "📅 IF SELF-SERVE · CALENDAR",
        desc: "Sends instant self-serve calendar booking link & interactive product video."
      }
    },
    booking: {
      title: "Appointment booking · 24/7 Calendar Sync",
      banner: "🛡️ 0% No-Shows · 99.1% On-Time Meeting Attendance",
      node1: { ic: "🌙", bg: "#eff6ff", col: "#1d4ed8", tag: "TRIGGER", title: "The request that came in after hours", desc: "Customer requests strategy call at 11:30 PM when team is offline" },
      node2: { ic: "📅", bg: "#f5f3ff", col: "#7c3aed", tag: "CALENDAR SCAN", title: "Checking Thursday against every calendar", delay: "⚡ Real-time" },
      node3: { tag: "CONFLICT CHECK", title: "Checking calendar availability & timezone", condLabel: "Selected slot available?", condVal: "True (Thu 3:00 PM Open)", condCol: "#16a34a" },
      actionLeft: {
        badge: "📅 IF CONFIRMED · CALENDAR INVITE",
        ic: "📆",
        header: "The invite that lands in both calendars",
        msg: '"You\'re all set! Confirmed for Thursday at 3:00 PM IST with Nitish. Google Meet link attached."',
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=150&q=80",
        title: "Product Strategy Consultation",
        sub: "✓ Google Meet & Calendar Invite Synced",
        cta: "📅 Add to Calendar"
      },
      actionRight: {
        badge: "🔄 IF CONFLICT · AUTO-RESCHEDULE",
        desc: "Offers customer the next 3 optimal open slots automatically."
      }
    }
  };

  let activeWfKey = 'cart';

  function applyWorkflow(key) {
    const data = WF_DATA[key];
    if (!data) return;
    activeWfKey = key;

    // Update Tab Pills in Header
    document.querySelectorAll('#autoTabsBar .auto-tab-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.wf === key);
    });

    // Update Bottom Preset Chips
    document.querySelectorAll('#autoChipsPreset .ac').forEach(chip => {
      if (chip.dataset.wf) {
        chip.style.borderColor = chip.dataset.wf === key ? '#2563eb' : '';
        chip.style.background = chip.dataset.wf === key ? '#eff6ff' : '';
        chip.style.color = chip.dataset.wf === key ? '#1d4ed8' : '';
      }
    });

    // Update Canvas Toolbar & Banner
    const canvasTitle = document.getElementById('wfCanvasTitle');
    if (canvasTitle) canvasTitle.textContent = data.title;
    const bannerText = document.getElementById('wfBannerText');
    if (bannerText) bannerText.textContent = data.banner;

    // Update Node 1 (Trigger)
    const tag1 = document.querySelector('#wfFTag1 span');
    if (tag1) tag1.textContent = data.node1.tag;
    const ic1 = document.getElementById('wfFIc1');
    if (ic1) { ic1.textContent = data.node1.ic; ic1.style.background = data.node1.bg; ic1.style.color = data.node1.col; }
    const title1 = document.getElementById('wfFTitle1');
    if (title1) title1.textContent = data.node1.title;
    const desc1 = document.getElementById('wfFDesc1');
    if (desc1) desc1.textContent = data.node1.desc;

    // Update Node 2 (Delay)
    const tag2 = document.querySelector('#wfFTag2 span');
    if (tag2) tag2.textContent = data.node2.tag;
    const ic2 = document.getElementById('wfFIc2');
    if (ic2) { ic2.textContent = data.node2.ic; ic2.style.background = data.node2.bg; ic2.style.color = data.node2.col; }
    const title2 = document.getElementById('wfFTitle2');
    if (title2) title2.textContent = data.node2.title;
    const delayBadge = document.getElementById('wfFDelayBadge');
    if (delayBadge) delayBadge.textContent = data.node2.delay;

    // Update Node 3 (Condition)
    const tag3 = document.querySelector('#wfFTag3 span');
    if (tag3) tag3.textContent = data.node3.tag;
    const title3 = document.getElementById('wfFTitle3');
    if (title3) title3.textContent = data.node3.title;
    const condLabel = document.getElementById('wfCondLabel');
    if (condLabel) condLabel.textContent = data.node3.condLabel;
    const condVal = document.getElementById('wfCondVal');
    if (condVal) {
      condVal.textContent = data.node3.condVal;
      condVal.style.color = data.node3.condCol || '#0f172a';
    }

    // Update Left Action Node
    const ifNoTag = document.getElementById('wfIfNoTag');
    if (ifNoTag) ifNoTag.textContent = data.actionLeft.badge;
    const actionHeaderTitle = document.getElementById('wfActionHeaderTitle');
    if (actionHeaderTitle) actionHeaderTitle.textContent = data.actionLeft.header;
    const actionMsgText = document.getElementById('wfActionMsgText');
    if (actionMsgText) actionMsgText.textContent = data.actionLeft.msg;
    const actionImg = document.getElementById('wfActionImg');
    if (actionImg) actionImg.src = data.actionLeft.img;
    const actionMediaTitle = document.getElementById('wfActionMediaTitle');
    if (actionMediaTitle) actionMediaTitle.textContent = data.actionLeft.title;
    const actionMediaSub = document.getElementById('wfActionMediaSub');
    if (actionMediaSub) actionMediaSub.textContent = data.actionLeft.sub;
    const actionMediaCta = document.getElementById('wfActionMediaCta');
    if (actionMediaCta) actionMediaCta.textContent = data.actionLeft.cta;

    // Update Right Action Node
    const ifYesTag = document.getElementById('wfIfYesTag');
    if (ifYesTag) ifYesTag.textContent = data.actionRight.badge;
    const resolvedDesc = document.getElementById('wfResolvedDesc');
    if (resolvedDesc) resolvedDesc.textContent = data.actionRight.desc;
  }

  // Tab pills click listeners
  document.querySelectorAll('#autoTabsBar .auto-tab-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const key = pill.dataset.wf;
      if (key) applyWorkflow(key);
    });
  });

  // Preset chips click listeners
  document.querySelectorAll('#autoChipsPreset .ac').forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.dataset.wf;
      if (key) applyWorkflow(key);
    });
  });

  // Live Simulation Button Pulse Engine
  const simBtn = document.getElementById('wfSimulateBtn');
  if (simBtn) {
    let isSimulating = false;
    simBtn.addEventListener('click', () => {
      if (isSimulating) return;
      isSimulating = true;
      const origText = simBtn.innerHTML;
      simBtn.innerHTML = '⚡ Simulating Event...';
      simBtn.style.background = 'linear-gradient(135deg,#059669,#10b981)';

      const n1 = document.getElementById('wfFNode1');
      const p1 = document.getElementById('wfFPipe1');
      const n2 = document.getElementById('wfFNode2');
      const p2 = document.getElementById('wfFPipe2');
      const n3 = document.getElementById('wfFNode3');
      const bSvg = document.getElementById('wfFBranchSvg');
      const cardAction = document.getElementById('wfFCardAction');

      if (n1) n1.classList.add('executing');

      setTimeout(() => {
        if (p1) p1.style.color = '#2563eb';
        if (n2) n2.classList.add('executing');
      }, 350);

      setTimeout(() => {
        if (p2) p2.style.color = '#7c3aed';
        if (n3) n3.classList.add('executing');
      }, 700);

      setTimeout(() => {
        if (bSvg) bSvg.style.stroke = '#2563eb';
        if (cardAction) cardAction.classList.add('executing');
      }, 1050);

      setTimeout(() => {
        simBtn.innerHTML = '✓ Run Succeeded (200 OK)';
        setTimeout(() => {
          simBtn.innerHTML = origText;
          simBtn.style.background = '';
          isSimulating = false;
          [n1, n2, n3, cardAction].forEach(n => n && n.classList.remove('executing'));
          if (p1) p1.style.color = '';
          if (p2) p2.style.color = '';
          if (bSvg) bSvg.style.stroke = '';
        }, 1800);
      }, 1600);
    });
  }
})();

/* ---------- Hero ambient tunnel canvas ----------
   Rebuilt from animate-ui's "hole" background (registry/components/backgrounds/
   hole) as plain <canvas> + rAF, no React/Motion runtime available here.
   Recolored to the site's own --accent blue ramp only (the reference used
   purple/cyan/pink) -- reads the live custom properties so it stays in sync
   if the brand ramp ever changes. Mounts on #heroTunnel, a decorative layer
   behind .hero-chat (see .hero-blob in home-v2.css); never touches the real
   hero-bg-img photo. Skipped entirely under reduced motion or the mobile
   breakpoint that hides .hero-blob, matching the data-parallax convention
   already documented in DESIGN_ANIMATION_SYSTEM.md §5. */
(function initHeroTunnel(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const narrow = window.matchMedia('(max-width:1100px)').matches;
  const canvas = document.getElementById('heroTunnel');
  if (!canvas || reduceMotion || narrow) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function hexToRgb(hex){
    const clean = (hex || '').trim().replace('#', '');
    const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
    const n = parseInt(full, 16);
    return isNaN(n) ? [59, 130, 246] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const rootStyles = getComputedStyle(document.documentElement);
  const rgb = hexToRgb(rootStyles.getPropertyValue('--accent') || '#2563EB');

  const RING_COUNT = 24;
  const PARTICLE_COUNT = 40;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

  let width = 0, height = 0, rings = [], particles = [], rafId = 0, running = false;

  function spawnParticle(atRandomHeight){
    return {
      x: 0.5 + (Math.random() - 0.5) * 0.55,
      y: atRandomHeight ? Math.random() : 1,
      vy: 0.0022 + Math.random() * 0.0032,
      r: 0.6 + Math.random() * 2,
      a: 0.15 + Math.random() * 0.5,
    };
  }

  function resize(){
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(width * dpr, 1);
    canvas.height = Math.max(height * dpr, 1);
  }

  function buildRings(){
    rings = [];
    for (let i = 0; i < RING_COUNT; i++) rings.push({ p: i / RING_COUNT });
  }

  function buildParticles(){
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(spawnParticle(true));
  }

  // p: 0 = wide ring nearest the viewer, 1 = vanishing point -- eased so
  // rings accelerate as they recede, the core "tunnel" perspective cue.
  function ringGeometry(p){
    const easeIn = p * p;
    return {
      cx: width * 0.5,
      cy: height * 0.42 + easeIn * height * 0.5,
      w: Math.max(width * 0.62 * (1 - p), 0),
      h: Math.max(height * 0.5 * (1 - easeIn), 0),
    };
  }

  function draw(){
    if (width <= 0 || height <= 0) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    rings.forEach((ring) => {
      const g = ringGeometry(ring.p);
      if (g.w <= 1 || g.h <= 1) return;
      const nearness = 1 - ring.p;
      ctx.beginPath();
      ctx.ellipse(g.cx, g.cy, g.w, g.h, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${(0.14 + nearness * 0.4).toFixed(3)})`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    });

    particles.forEach((pt) => {
      const px = width * 0.5 + (pt.x - 0.5) * width * 0.5 * (1 - pt.y * 0.4);
      const py = height * (0.92 - pt.y * 0.75);
      ctx.beginPath();
      ctx.arc(px, py, pt.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${(0.25 + pt.a * (1 - pt.y * 0.6)).toFixed(3)})`;
      ctx.fill();
    });
  }

  function tick(){
    rings.forEach((r) => { r.p = (r.p + 0.0016) % 1; });
    particles.forEach((pt, i) => {
      pt.y += pt.vy;
      if (pt.y > 1) particles[i] = spawnParticle(false);
    });
    draw();
    rafId = requestAnimationFrame(tick);
  }

  function start(){
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(tick);
  }
  function stop(){
    running = false;
    cancelAnimationFrame(rafId);
  }

  resize();
  buildRings();
  buildParticles();
  draw();

  const heroEl = document.getElementById('hero');
  if ('IntersectionObserver' in window && heroEl) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
    }, { threshold: 0.05 });
    io.observe(heroEl);
  } else {
    start();
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      buildRings();
      buildParticles();
      if (!running) draw();
    }, 150);
  });
})();

/*__JS3__*/
