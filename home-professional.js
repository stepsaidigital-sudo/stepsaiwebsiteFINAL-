/* Deliberate, finite product demonstrations. No animation dependencies. */
(() => {
  'use strict';
  // Use the same brand artwork for menus, previews, and channel controls.
  function brandIcon(channel) {
    const icon=document.createElement('span');
    icon.className='channel-brand-icon';
    icon.setAttribute('aria-hidden','true');
    icon.dataset.icon=channel;
    icon.innerHTML=ICONS[channel] || '';
    return icon;
  }
  ['whatsapp','instagram','messenger'].forEach(channel=>{
    document.querySelectorAll(`.nav-mega-row[href="channel-${channel}.html"] .nav-mega-row-icon`).forEach(icon=>icon.replaceChildren(brandIcon(channel)));
  });
  function updatePhoneChannel(channel,label) {
    document.getElementById('phoneChannel')?.replaceChildren(brandIcon(channel),document.createTextNode(label));
  }
  updatePhoneChannel('whatsapp','WhatsApp');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const studio = document.querySelector('.revenue-studio');
  const tabs = [...document.querySelectorAll('[data-revenue-channel]')];
  const replay = document.getElementById('revenueReplay');
  const panel = document.getElementById('revenue-panel');
  const shop=studio?.querySelector('.broadcast-shop');
  shop?.addEventListener('click',()=>{
    const expanded=shop.getAttribute('aria-expanded')==='true';
    shop.setAttribute('aria-expanded',String(!expanded));
    studio.querySelector('.broadcast-shop-note').hidden=expanded;
  });
  let timers = [];
  const triggerStudio=document.createElement('div');
  triggerStudio.className='trigger-studio';
  studio?.querySelector('.campaign-art').append(triggerStudio);
  function explainFeature(key) {
    const whatsapp=key==='whatsapp';
    studio.querySelector('.phone-brand div>span').textContent=whatsapp?'Business Account':'Powered by StepsAI';
    triggerStudio.innerHTML=whatsapp ? `
      <h3>One message.<br>Your whole customer list.</h3>
      <p>Choose a group, write your offer, and send it to their WhatsApp chats in one go.</p>
      <div class="broadcast-example"><div class="example-app-title">${ICONS.whatsapp}<strong>New WhatsApp broadcast</strong><span>Example</span></div>
      <div class="broadcast-field"><span>Send to</span><strong>Customers who subscribed</strong><div class="recipient-chips"><span>Priya</span><span>Sarah</span><span>Arjun</span><span>+ more</span></div></div>
      <div class="broadcast-field"><span>Your message</span><p>Hi {{first_name}}, our new collection is here! Would you like to take a look?</p><div class="broadcast-attachment"><img src="images/product-diamond-necklace.jpg" alt="Collection attached to the broadcast" loading="lazy"><span>New collection<br><b>View collection ↗</b></span></div></div>
      <button type="button" class="trigger-play">Preview broadcast <span aria-hidden="true">↗</span></button></div>
      <div class="trigger-explanation">Each customer receives a personal message. Their replies come back as individual conversations.</div>` : `
      <h3>They comment.<br>Your DM sends itself.</h3><p>Choose a word like “SHOP”. When someone comments with it, StepsAI automatically sends your message privately.</p>
      <div class="comment-example"><div class="example-app-title">${ICONS.instagram}<strong>yourbrand</strong><span>Example Reel</span></div><img class="comment-reel-image" src="images/product-oxford-shirts.jpg" alt="Example Instagram post featuring Oxford shirts" loading="lazy"><div class="comment-rule">When a comment includes <strong>SHOP</strong></div><div class="example-comment"><span class="comment-avatar">S</span><div><strong>sarah</strong><p>SHOP! Can you send me the link?</p></div></div><button type="button" class="trigger-play">Preview automatic DM <span aria-hidden="true">↗</span></button></div><div class="trigger-explanation">A public comment starts a private conversation. You don’t have to send the link yourself.</div>`;
    triggerStudio.querySelector('.trigger-play').addEventListener('click',playFlow);
    const status=document.createElement('p');
    status.className='trigger-status'; status.setAttribute('role','status');
    status.textContent=whatsapp?'Try it: preview a broadcast to these customers.':'Try it: preview what happens after Sarah comments.';
    triggerStudio.querySelector('.trigger-play').after(status);
    const heading=studio.querySelector('.conversation-stage-head>span');
    heading.textContent=whatsapp?'What each customer receives':'The DM sent automatically';
    const steps=whatsapp?[['Choose your customers','Select a group of subscribers.'],['Send one broadcast','Your message reaches each WhatsApp chat.'],['Keep the conversation going','StepsAI answers their replies.']]:[['A customer comments','They write “SHOP” on your post or Reel.'],['StepsAI sends a DM','Your product link arrives privately.'],['Answer the follow-up','Help them choose and buy.']];
    studio.querySelectorAll('[data-journey]').forEach((el,i)=>{el.querySelector('strong').textContent=steps[i][0];el.querySelector('p').textContent=steps[i][1];});
    studio.querySelector('.flow-result strong').textContent=whatsapp?'One broadcast. Individual conversations.':'Comment received. Product link sent by DM.';
    studio.querySelector('.flow-result div>span').textContent=whatsapp?'Customers can reply directly. StepsAI keeps helping.':'StepsAI handles the next question, too.';
    const link=document.querySelector('.revenue-heading .editorial-link');
    link.href=whatsapp?'whatsapp-broadcast.html':'channel-instagram.html';
    link.innerHTML=whatsapp?'Explore WhatsApp automation <span aria-hidden="true">↗</span>':'Explore Instagram automation <span aria-hidden="true">↗</span>';
  }
  const copy = {
    whatsapp: { image:'images/product-diamond-necklace.jpg', alt:'Jewellery collection used in the campaign example', context:'THE PRIVATE PREVIEW', title:'An invitation.<br>A conversation.<br>A new favourite.', subtitle:'Your collection. Their next discovery.', triggerTitle:'A campaign worth replying to', triggerText:'Personalized broadcast · VIP collection', first:'Hi Priya, your invitation to our new collection is here. Would you like a closer look?', reply:'Yes! Can you help me pick a gift?', answer:'Of course. This piece is a lovely place to start. Here’s the collection to explore.', product:'The signature collection', channel:'WhatsApp' },
    instagram: { image:'images/product-oxford-shirts.jpg', alt:'Shirt collection used in the Instagram example', context:'FROM THE FEED TO THE FIT', title:'They see it.<br>They ask.<br>You’re already there.', subtitle:'Make every moment of interest count.', triggerTitle:'A comment starts the conversation', triggerText:'@sarah · “Love this. Can you send the link?”', first:'Hi Sarah! Thanks for your comment. Looking for something from our latest collection?', reply:'Yes, the Oxford shirt. Where can I find it?', answer:'Here’s the Oxford collection you spotted. You can explore the colours and find your fit here.', product:'The Oxford collection', channel:'Instagram' }
  };
  function finishFlow() {
    timers.forEach(clearTimeout); timers=[];
    studio?.classList.remove('flow-playing');
    studio?.querySelectorAll('[data-flow]').forEach(el=>el.classList.remove('flow-pending'));
    studio?.querySelectorAll('[data-journey]').forEach(el=>el.classList.add('journey-complete'));
    if(replay) { replay.disabled=false; replay.setAttribute('aria-label','Replay example conversation flow'); }
    const trigger=triggerStudio.querySelector('.trigger-play');
    if(trigger) trigger.disabled=false;
  }
  function playFlow() {
    finishFlow();
    if(!studio || motion.matches || document.hidden) return;
    studio.classList.add('flow-playing');
    replay.disabled=true;
    const isBroadcast=studio.dataset.channel==='whatsapp';
    const trigger=triggerStudio.querySelector('.trigger-play');
    if(trigger) trigger.disabled=true;
    const status=triggerStudio.querySelector('.trigger-status');
    const statuses=isBroadcast?['Sending the broadcast to your selected customers…','Delivered to each customer’s private WhatsApp chat.','A customer replies. StepsAI answers personally.','Demo complete: one broadcast, separate customer conversations.']:['Sarah commented “SHOP” on your Reel.','StepsAI automatically sends Sarah a private DM.','Sarah asks a question. StepsAI replies with the product link.','Demo complete: a comment became a private conversation.'];
    studio.querySelectorAll('[data-flow]').forEach(el=>el.classList.add('flow-pending'));
    studio.querySelectorAll('[data-journey]').forEach(el=>el.classList.remove('journey-complete'));
    [0,1,2,3].forEach((step)=>{
      timers.push(setTimeout(()=>{
        if(status) status.textContent=statuses[step];
        studio.dataset.demoStep=String(step);
        studio.querySelectorAll(`[data-flow="${step}"]`).forEach(el=>el.classList.remove('flow-pending'));
        studio.querySelector(`[data-journey="${Math.min(step,2)}"]`)?.classList.add('journey-complete');
      }, 200 + step * 1100));
    });
    timers.push(setTimeout(finishFlow,4200));
  }
  function selectChannel(key) {
    const data=copy[key];
    if(!data || !studio) return;
    finishFlow();
    studio.dataset.channel=key;
    tabs.forEach(tab=>{ const active=tab.dataset.revenueChannel===key; tab.setAttribute('aria-selected',String(active)); tab.tabIndex=active?0:-1; });
    panel.setAttribute('aria-labelledby',key==='whatsapp'?'revenue-wa':'revenue-ig');
    const values={campaignContext:data.context,campaignSubtitle:data.subtitle,triggerTitle:data.triggerTitle,triggerText:data.triggerText,flowFirst:data.first,flowReply:data.reply,flowAnswer:data.answer,flowProductName:data.product,phoneChannel:data.channel};
    Object.entries(values).forEach(([id,value])=>{document.getElementById(id).textContent=value;});
    updatePhoneChannel(key,data.channel);
    document.getElementById('campaignTitle').innerHTML=data.title;
    ['campaignImage','flowProductImage'].forEach(id=>{const img=document.getElementById(id); img.src=data.image; img.alt=data.alt;});
    if(key==='instagram') {
      document.getElementById('flowFirst').textContent='Hi Sarah! Thanks for commenting SHOP. Here’s the Oxford collection you asked for.';
      document.getElementById('flowReply').textContent='Thanks! Does it come in blue?';
      document.getElementById('flowAnswer').textContent='Yes! Open the collection below to explore the colours and choose your size.';
    }
    explainFeature(key);
    playFlow();
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>selectChannel(tab.dataset.revenueChannel));
    tab.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      event.preventDefault();
      const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
      tabs[next].focus(); selectChannel(tabs[next].dataset.revenueChannel);
    });
  });
  replay?.addEventListener('click',playFlow);
  explainFeature('whatsapp');
  // The markup already ships the finished conversation, so it must render that
  // way immediately — no scroll-triggered replay. (This used to auto-play the
  // typing sequence the first time the section hit 25% visible, which wiped
  // the already-correct messages to opacity:0 and spent ~4.2 real seconds
  // retyping them back in. Anyone who scrolled through at a normal pace, or
  // didn't linger that long, saw an empty or half-built demo.) Replay stays
  // opt-in: the button below, or switching the WhatsApp/Instagram tab, where
  // content is actually changing and the animation earns its keep.
  finishFlow();
  if(studio && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting) finishFlow();
    }),{threshold:.25}).observe(studio.querySelector('.conversation-stage'));
  }
  document.addEventListener('visibilitychange',()=>{if(document.hidden) finishFlow();});
  motion.addEventListener('change',finishFlow);

  // Message arrival communicates sequence; the content remains visible if JS fails.
  const heroBody=document.getElementById('heroChatBody');
  const heroReplay=document.getElementById('heroReplay');
  function animateConversation() {
    if(heroBody?.closest('[data-cinematic]')) return;
    if(!heroBody || motion.matches) return;
    [...heroBody.children].slice(0,7).forEach((element,index)=>{
      element.getAnimations().forEach(animation=>animation.cancel());
      element.animate([{opacity:.25,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,delay:index*80,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'});
    });
  }
  heroReplay?.addEventListener('click',animateConversation);
  if(heroBody) new MutationObserver(animateConversation).observe(heroBody,{childList:true});
  const heroTabs=[...document.querySelectorAll('[data-hero-ch]')];
  heroTabs.forEach((tab,index)=>{
    tab.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      event.preventDefault();
      const next=event.key==='Home'?0:event.key==='End'?heroTabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+heroTabs.length)%heroTabs.length;
      heroTabs[next].focus(); heroTabs[next].click();
    });
  });
  // The routing pulse runs once on arrival and explains the channel connection.
  const routing=document.querySelector('.cta-routing');
  if(routing && 'IntersectionObserver' in window) {
    const observer=new IntersectionObserver(entries=>{ if(entries.some(e=>e.isIntersecting)) {routing.classList.add('routing-arrived'); observer.disconnect();} },{threshold:.4});
    observer.observe(routing);
  }
})();
