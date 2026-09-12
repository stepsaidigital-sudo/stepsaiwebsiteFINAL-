/* Benefit illustrations are real interface fragments, with useful destinations. */
(() => {
  const grid=document.querySelector('.sia-tabs');
  if(!grid) return;
  grid.removeAttribute('role');
  const routes=['sales-agent.html','support-agent.html','lead-agent.html','meetings-agent.html','whatsapp-broadcast.html'];
  const descriptions=['Picks the right product, answers the doubt, and adds it to the cart.','Opens the real order, gives the real status, and keeps the customer calm.','Turns a chat into a named contact in your CRM, with the full conversation attached.','Shows your open slots and confirms the appointment inside the chat.','Starts with a WhatsApp broadcast and keeps going as a real conversation.'];
  [...grid.querySelectorAll('.sia-tab')].forEach((old,index)=>{
    const card=document.createElement('a');
    card.className='benefit-card'; card.href=routes[index]; card.innerHTML=old.innerHTML;
    const heading=card.querySelector('.sia-tab-name');
    const label=document.createElement('h3');label.className=heading.className;label.textContent=heading.textContent;heading.replaceWith(label);
    card.querySelector('.sia-tab-desc').textContent=descriptions[index];
    const detail=document.createElement('span');detail.className='benefit-detail';detail.textContent='Explore '+label.textContent.toLowerCase()+' ↗';card.append(detail);
    old.replaceWith(card);
  });
  const cards=[...grid.children];
  cards[0].querySelector('.tp-ic').innerHTML='<img src="images/product-oxford-shirts.jpg" alt="Oxford shirt product example" width="90" height="100" loading="lazy">';
  cards[0].querySelector('.tp-lines b').textContent='Oxford shirt';
  cards[0].querySelector('.tp-lines span').textContent='Your catalogue · In stock';
  const paths=['','<path d="M3 7h11v10H3zM14 11h4l3 4v2h-7M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>','','<rect x="4" y="5" width="16" height="16" rx="3"/><path d="M8 3v4m8-4v4M4 11h16m-11 5 2 2 4-4"/>'];
  cards.forEach((card,index)=>{
    const icon=card.querySelector('.tp-ic');
    if(icon && paths[index]) icon.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">'+paths[index]+'</svg>';
    const tag=card.querySelector('.tp-tag');
    if(index<4) tag.textContent=['Product recommendation','Order tracking','CRM qualification','Appointment booking'][index];
  });
})();
