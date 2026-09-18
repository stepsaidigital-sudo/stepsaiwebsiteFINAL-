import { useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, InstagramMockup, ChatTick } from '../components/PhoneMockup';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';

const ECOMMERCE_FAQS = [
  { q: 'Does it work with Shopify and WooCommerce?', a: 'Yes — it connects directly to your catalogue, stock, and order status, and checks them live before it answers.' },
  { q: "Will it promise stock it doesn't have?", a: "No. It only answers from your live inventory. When it doesn't know, it says so and brings in your team." },
  { q: 'Can it handle returns and exchanges?', a: 'Yes — it walks customers through your actual return policy and starts the process, then hands disputes to your team.' },
  { q: 'How fast can I set this up?', a: 'Minutes. Connect your store, review what it learned, and turn it on — most stores are live in under an hour.' },
];

const SHOPIFY_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M19.349 7.086c-.035-.047-.07-.082-.105-.117a.64.64 0 0 0-.258-.164L15.342.152a.774.774 0 0 0-.305-.129A1.066 1.066 0 0 0 14.628 0h-.012c-.105 0-.2.023-.293.047L8.694 1.84c-.035.012-.059.023-.082.047a.9.9 0 0 0-.305.21c-.047.059-.094.106-.117.165l-2.027 6.164a61.16 61.16 0 0 0-1.418.176c-.539.082-.926.152-1.125.21a.7.7 0 0 0-.504.657 1.83 1.83 0 0 0 .14.62c.188.458.551 1.043 1.137 1.77 1.348 1.64 3.012 3.328 4.887 5.086 2.309 2.156 4.793 4.254 7.277 6.28.188.153.422.235.656.235h.023c.27 0 .528-.117.715-.317a364.5 364.5 0 0 0 3.328-3.668c.95-1.078 1.758-2.086 2.309-2.918.574-.879.797-1.547.785-2.051v-.012a.855.855 0 0 0-.27-.61 5.92 5.92 0 0 0-.761-.597c-.668-.469-1.63-.996-2.73-1.57-1.442-.762-3.13-1.559-4.302-2.156 2.051-1.395 3.305-2.285 3.305-2.285a.732.732 0 0 0 .152-1.02Zm-11.414 1.85L9.67 3.513c-.024-.035-.047-.046-.07-.07a2.533 2.533 0 0 0-.469.153l-2.004.61-1.031 3.104a37.398 37.398 0 0 1 1.84-.374Zm8.168-1.523a1.443 1.443 0 0 0-1.066.457c-2.11 2.015-3.082 3.656-3.235 3.937a.64.64 0 0 0 .422.95 240.24 240.24 0 0 0 5.461 1.183c-1.535-1.523-2.344-3.164-2.508-4.101a1.278 1.278 0 0 0 .164 0c.281 0 .527.152.715.35.492.54 1.195 1.548 1.886 2.872a56.544 56.544 0 0 0 1.266-3.575l-3.105-2.074ZM15 1.196L18.42 6.84c-1.36-.61-3.657-1.22-6.528-1.56L15 1.195Zm-4.3 1.3a74.1 74.1 0 0 1 6.809 1.63 70.083 70.083 0 0 0-4.043-4.501c-.13-.153-.305-.153-.352-.14l-2.414.807Z" /></svg>
);

/** Ported 1:1 from industry-ecommerce.html's <main> — the "recurring template" proof-of-pattern (shared by all 7 industry-*.html pages). Phone-mockup markup factored into <WhatsAppMockup>/<InstagramMockup>. */
export function IndustryEcommerce() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  return (
    <Layout title="E-Commerce — StepsAI | Answer the question. Save the sale." description="StepsAI for e-commerce: product discovery, order and shipping Q&A, cart recovery, and returns, on WhatsApp, Instagram, and your website.">
      <Breadcrumb section="Industries" sectionHref="industries.html" label="E-Commerce & D2C" />

      <main id="top">
        <section className="vertical-hero" style={{ backgroundImage: "url('/images/hero-ecommerce.jpg')" }}>
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>E-Commerce <span className="nav-badge" style={{ marginLeft: '6px' }}>Flagship</span></span>
              <h1 className="vertical-headline">Answer the question. Save the sale.</h1>
              <p className="vertical-tagline">Every unanswered size or shipping question is a customer who buys somewhere else. StepsAI answers instantly, checks your real stock, and keeps the sale moving — on WhatsApp, Instagram, or your website.</p>
              <div className="vertical-hero-actions">
                <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                <a href="industries.html" className="vertical-hero-link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  All industries
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="mock-annotation" style={{ marginBottom: '14px' }}><span className="ig-mock-avatar">N</span><p>Direct message &mdash; <strong>Nyra Store</strong></p></div>
              <InstagramMockup handle="nyra.store" status="Active now">
                <div className="ig-real-bubble in">Does this come in size M?</div>
                <div className="ig-real-bubble out">Yes — 3 left in medium. It runs slightly small, most people size up.</div>
                <div className="ig-real-bubble in">Perfect, is COD available?</div>
                <div className="ig-real-bubble out">Yes, cash on delivery is available. Want me to hold one?</div>
                <div className="ig-real-bubble in">Yes please, hold it</div>
                <div className="ig-real-bubble out">Held for 20 minutes &mdash; here's your order link with COD already selected.</div>
              </InstagramMockup>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> What customers actually ask</p>
              <h2 className="section-title">Real questions, the way they actually get typed.</h2>
              <p className="section-sub">Straight from Nyra Store's inbox — not paraphrased marketing copy.</p>
            </div>
            <div className="quote-cards reveal reveal-stagger">
              <div className="quote-card" style={{ '--i': 0 } as CSSProperties}><span className="quote-card-mark">&ldquo;</span><p className="quote-card-text">Does this come in size M?</p><p className="quote-card-source">Instagram DM</p></div>
              <div className="quote-card" style={{ '--i': 1 } as CSSProperties}><span className="quote-card-mark">&ldquo;</span><p className="quote-card-text">Is this true to size or should I go up?</p><p className="quote-card-source">WhatsApp</p></div>
              <div className="quote-card" style={{ '--i': 2 } as CSSProperties}><span className="quote-card-mark">&ldquo;</span><p className="quote-card-text">Can I return this if it doesn't fit?</p><p className="quote-card-source">Website chat</p></div>
              <div className="quote-card" style={{ '--i': 3 } as CSSProperties}><span className="quote-card-mark">&ldquo;</span><p className="quote-card-text">Do you ship cash on delivery?</p><p className="quote-card-source">WhatsApp</p></div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> What it does for your store</p>
              <h2 className="section-title">Four jobs. One agent.</h2>
            </div>

            <div className="spread reveal">
              <div>
                <div className="spread-index">01 / Discover &amp; buy</div>
                <h3>Recommends by size, budget, and stock — accurately.</h3>
                <p>Checks your real Shopify or WooCommerce inventory before it promises anything, and turns Instagram comments into private, closeable conversations.</p>
              </div>
              <div className="spread-visual">
                <WhatsAppMockup name="Nyra Store" status="online">
                  <div className="wa-real-bubble in">Looking for something under &#8377;2,000, casual<span className="wa-real-time">2:18 PM</span></div>
                  <div className="wa-real-bubble out">Got a few options &mdash; this one's a favorite this month:<span className="wa-real-time">2:18 PM<ChatTick /></span></div>
                  <div className="chat-card">
                    <div className="chat-card-media"><img src="/images/product-oxford-shirts.jpg" alt="Aria Linen Shirt" className="chat-card-img" /></div>
                    <div className="chat-card-body">
                      <p className="chat-card-title">Aria Linen Shirt</p>
                      <p className="chat-card-sub">In stock &middot; Size M</p>
                      <p className="chat-card-price">&#8377;1,799<span>&#8377;2,199</span></p>
                      <a href="#" className="chat-card-cta">View product</a>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">Does it run true to size? I'm usually a size M<span className="wa-real-time">2:19 PM</span></div>
                  <div className="wa-real-bubble out">Runs slightly small &mdash; most people size up to L for a relaxed fit. Want me to hold an L for you?<span className="wa-real-time">2:19 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Yes please, hold the L<span className="wa-real-time">2:20 PM</span></div>
                  <div className="wa-real-bubble out">Reserved for 15 minutes &mdash; here's your checkout link with the reservation applied.<span className="wa-real-time">2:20 PM<ChatTick /></span></div>
                </WhatsAppMockup>
              </div>
            </div>

            <div className="spread reverse reveal">
              <div>
                <div className="spread-index">02 / Cart &amp; checkout recovery</div>
                <h3>Reaches out before the cart goes cold.</h3>
                <p>Waits, checks the cart, and answers the exact question that was blocking checkout — not a generic "still interested?" nudge.</p>
              </div>
              <div className="spread-visual">
                <WhatsAppMockup name="Nyra Store" status="online">
                  <div className="wa-real-bubble out">Still deciding on the jacket in your cart? It ships in 2 days and returns are free.<span className="wa-real-time">7:40 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Honestly I was worried the colour looks different in person<span className="wa-real-time">7:42 PM</span></div>
                  <div className="wa-real-bubble out">Totally fair, we hear that a lot. It's true-to-photo, and since returns are free you can send it back within 15 days if it's not right.<span className="wa-real-time">7:42 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Ok that helps — completing checkout now<span className="wa-real-time">7:43 PM</span></div>
                  <div className="wa-real-bubble out">Nice &mdash; here's 10% off if you check out in the next hour: code CART10.<span className="wa-real-time">7:43 PM<ChatTick /></span></div>
                </WhatsAppMockup>
              </div>
            </div>

            <div className="spread reveal">
              <div>
                <div className="spread-index">03 / Order tracking &amp; support</div>
                <h3>"Where is my order" gets a real answer.</h3>
                <p>Pulls live status from your store, walks customers through your actual return policy, and escalates disputes with the full order and conversation attached.</p>
              </div>
              <div className="spread-visual">
                <InstagramMockup handle="nyra.store" status="Active now">
                  <div className="ig-real-bubble in">Hey, where's my order? It's #4821</div>
                  <div className="ig-real-bubble out">Checking that now, one sec.</div>
                  <div className="chat-card">
                    <div className="chat-card-media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="14" height="12" rx="1.5" /><path d="M16 10.5L22 7v10l-6-3.5" /></svg></div>
                    <div className="chat-card-body">
                      <p className="chat-card-title">Order #4821</p>
                      <p className="chat-card-sub">Aria Linen Shirt &middot; Size M</p>
                      <div className="chat-card-steps">
                        <span className="chat-card-step done"></span><span className="chat-card-step done"></span><span className="chat-card-step done"></span><span className="chat-card-step"></span>
                      </div>
                      <div className="chat-card-labels"><span>Packed</span><span>Shipped</span><span className="active">Out for delivery</span><span>Delivered</span></div>
                      <p className="chat-card-eta">Arriving today by 7pm<span>Live tracking updates automatically</span></p>
                      <a href="#" className="chat-card-cta">Track order</a>
                    </div>
                  </div>
                  <div className="ig-real-bubble in">Oh perfect, thank you! Can I get it changed to a different address though?</div>
                  <div className="ig-real-bubble out">It's already out for delivery, so I can't reroute it myself &mdash; but I can ask the courier to redirect if the new address is close by. What's the address?</div>
                  <div className="ig-real-bubble in">123 MG Road, Indiranagar &mdash; it's like 2km from the original one</div>
                  <div className="ig-real-bubble out">Requested the redirect. You'll get an SMS from the courier confirming it within 10 minutes.</div>
                </InstagramMockup>
              </div>
            </div>

            <div className="spread reverse reveal">
              <div>
                <div className="spread-index">04 / Bulk &amp; broadcast</div>
                <h3>Spots a wholesale enquiry before it gets buried.</h3>
                <p>Recognizes bulk-sized questions and routes them to sales with the details attached, and announces restocks to the customers who actually asked.</p>
              </div>
              <div className="spread-visual">
                <WhatsAppMockup name="Nyra Store" status="online">
                  <div className="wa-real-bubble in">Can I order 60 units for a store?<span className="wa-real-time">11:20 AM</span></div>
                  <div className="wa-real-bubble out">Yes &mdash; that qualifies for wholesale pricing. Which item, and do you have a GST number for the invoice?<span className="wa-real-time">11:20 AM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">The Aria linen shirt, mixed sizes. GST is 29AACCN1234R1Z0<span className="wa-real-time">11:22 AM</span></div>
                  <div className="wa-real-bubble out">Got it &mdash; 60 units of the Aria shirt qualifies for our 12% wholesale discount. I've flagged this for our wholesale team with your details attached, they'll send a formal quote within the hour.<span className="wa-real-time">11:22 AM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Perfect, thank you<span className="wa-real-time">11:23 AM</span></div>
                </WhatsAppMockup>
              </div>
            </div>
          </div>
        </section>

        <section className="wf-section">
          <div className="container">
            <div className="section-head center reveal">
              <p className="kicker"><span className="n">04</span> Real automation</p>
              <h2 className="section-title">What follow-up looks like after the cart.</h2>
              <p className="section-sub">This isn't a mockup — it's the exact logic behind the "Shopify — Cart Abandonment" template.</p>
            </div>

            <div className="wf-canvas-wrap reveal">
              <div className="wf-canvas">
                <div className="wf-live-tag">Live example — Shopify cart recovery</div>

                <div className="wf-trunk">
                  <div className="wf-node" data-wf-step="1">
                    <span className="wf-node-icon">{SHOPIFY_ICON}</span>
                    <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">Shopify: cart active</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="2"></div>
                  <div className="wf-node" data-wf-step="2">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                    <div><div className="wf-node-kind">Action &middot; Wait</div><div className="wf-node-title">Wait 30 minutes</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="3"></div>
                  <div className="wf-node" data-wf-step="3">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                    <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check cart status</div></div>
                  </div>
                </div>

                <div className="wf-fork">
                  <div className="wf-fork-stub" data-wf-step="4"></div>
                  <div className="wf-fork-bar"></div>
                  <div className="wf-fork-row">
                    <div className="wf-branch">
                      <div className="wf-branch-stub"></div>
                      <span className="wf-badge completed">COMPLETED</span>
                      <div className="wf-node dim">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /></svg></span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">End</div></div>
                      </div>
                    </div>
                    <div className="wf-branch">
                      <div className="wf-branch-stub" data-wf-step="4"></div>
                      <span className="wf-badge abandoned">ABANDONED</span>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5V15M18 6H10a4 4 0 0 0-4 4" /><circle cx="18" cy="6" r="2.5" /></svg></span>
                        <div><div className="wf-node-kind">Condition</div><div className="wf-node-title">Email known?</div></div>
                      </div>

                      <div className="wf-fork">
                        <div className="wf-fork-stub" data-wf-step="5"></div>
                        <div className="wf-fork-bar"></div>
                        <div className="wf-fork-row">
                          <div className="wf-branch">
                            <div className="wf-branch-stub"></div>
                            <span className="wf-badge no">NO</span>
                            <div className="wf-node dim">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Widget popup</div></div>
                            </div>
                          </div>
                          <div className="wf-branch">
                            <div className="wf-branch-stub" data-wf-step="5"></div>
                            <span className="wf-badge yes">YES</span>
                            <div className="wf-node" data-wf-step="5">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Recovery email</div></div>
                            </div>
                            <div className="wf-line" data-wf-step="6"></div>
                            <div className="wf-node" data-wf-step="6">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Widget popup</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wf-legend reveal">
              <span className="wf-legend-item"><span className="wf-legend-dot" style={{ background: 'var(--accent-on-dark)' }}></span>This conversation's path</span>
              <span className="wf-legend-item"><span className="wf-legend-dot" style={{ background: 'rgba(255,255,255,.2)' }}></span>Alternate branch, ready either way</span>
            </div>

            <div className="template-row reveal">
              <div className="template-pill"><div className="tp-tag">E-commerce</div><div className="tp-name">Cart Abandonment</div><div className="tp-steps">8 steps</div></div>
              <div className="template-pill"><div className="tp-tag">E-commerce</div><div className="tp-name">Checkout Abandonment</div><div className="tp-steps">7 steps</div></div>
              <div className="template-pill"><div className="tp-tag">E-commerce</div><div className="tp-name">Order Confirmation</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">E-commerce</div><div className="tp-name">High Value Order Alert</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">E-commerce</div><div className="tp-name">New Customer Welcome Series</div><div className="tp-steps">6 steps</div></div>
              <div className="template-pill"><div className="tp-tag">E-commerce</div><div className="tp-name">Shipping + Review Request</div><div className="tp-steps">6 steps</div></div>
              <div className="template-pill"><div className="tp-tag">E-commerce</div><div className="tp-name">Cancellation Win-Back</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">E-commerce</div><div className="tp-name">Browse Abandonment</div><div className="tp-steps">8 steps</div></div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--mid"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> More, when you need it</p>
              <h2 className="section-title">Every moment in the customer journey, covered.</h2>
            </div>
            <div className="scenario-strip reveal reveal-stagger">
              <div className="scenario-card" style={{ '--i': 0 } as CSSProperties}>
                <span className="scenario-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="currentColor" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" /></svg></span>
                <h4>Back-in-stock notify</h4>
                <p>Messages everyone who asked about a sold-out item the moment it's back — automatically.</p>
              </div>
              <div className="scenario-card" style={{ '--i': 1 } as CSSProperties}>
                <span className="scenario-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg></span>
                <h4>Post-purchase check-in</h4>
                <p>Checks in after delivery, surfaces sizing issues early, and asks for a review at the right moment.</p>
              </div>
              <div className="scenario-card" style={{ '--i': 2 } as CSSProperties}>
                <span className="scenario-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8L12 3L20 8V16L12 21L4 16V8Z" /><path d="M4 8L12 13L20 8M12 13V21" /></svg></span>
                <h4>New customer welcome</h4>
                <p>A welcome email, a follow-up two days later, and an optional WhatsApp opt-in — sequenced automatically.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="container">
            <div className="integ-band">
              <div className="reveal">
                <p className="kicker"><span className="n">06</span> Integrations</p>
                <h2 className="section-title">It checks your real store before it speaks.</h2>
                <p className="section-sub">Connected directly to your catalogue and order data — never guessing what's in stock.</p>
              </div>
              <div className="reveal">
                <div className="integ-logos">
                  <div className="integ-logo-row">{SHOPIFY_ICON}<div className="integ-logo-row-text"><div className="t1">Shopify</div><div className="t2">Live stock, orders, checkout status</div></div><span className="integ-logo-row-badge">Connected</span></div>
                  <div className="integ-logo-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /><path d="M3 4h2l2.4 12a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.6L21 8H6.6" /></svg><div className="integ-logo-row-text"><div className="t1">WooCommerce</div><div className="t2">Product catalogue, order status</div></div><span className="integ-logo-row-badge">Connected</span></div>
                  <div className="integ-logo-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="17" r="3" /><circle cx="17" cy="7" r="3" /><path d="M9.5 14.5 14.5 9.5" /></svg><div className="integ-logo-row-text"><div className="t1">HubSpot</div><div className="t2">Bulk &amp; wholesale leads, attached conversation</div></div><span className="integ-logo-row-badge">Connected</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="stats-grid reveal reveal-stagger" data-count-container="">
              <div className="stat-cell" style={{ '--i': 0 } as CSSProperties}><div className="stat-value">900,000+</div><div className="stat-label">Chats handled across StepsAI stores</div></div>
              <div className="stat-cell" style={{ '--i': 1 } as CSSProperties}><div className="stat-value">8 in 10</div><div className="stat-label">Messages answered without you</div></div>
              <div className="stat-cell" style={{ '--i': 2 } as CSSProperties}><div className="stat-value" data-count="0.5" data-decimal="1" data-suffix="s">0</div><div className="stat-label">Average first reply</div></div>
              <div className="stat-cell" style={{ '--i': 3 } as CSSProperties}><div className="stat-value" data-count="11" data-suffix="&times;">0</div><div className="stat-label">Return on cost in the first quarter</div></div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">07</span> Why StepsAI, not a generic chatbot</p>
              <h2 className="section-title">It never promises something you don't have.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>Checks real stock, live</h4><p>Every answer about size, color, or availability comes from your actual inventory — not a script.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>Recovers in-channel</h4><p>Follows up on WhatsApp and Instagram, not just email — where your customers actually check first.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Escalates only when it matters</h4><p>Disputes and refunds go to your team with the full order and conversation attached — nothing repeated.</p></div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--tl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">08</span> FAQ</p>
              <h2 className="section-title">Questions e-commerce teams ask us.</h2>
            </div>
            <div className="faq-grid reveal">
              <div>
                {ECOMMERCE_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {ECOMMERCE_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <FaqItem key={item.q} question={item.q} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}>
                      <p>{item.a}</p>
                    </FaqItem>
                  );
                })}
              </div>
            </div>

            <div className="ind-crosslink">
              <p>Every industry runs on the same platform capabilities, tracked the same way.</p>
              <a href="agents.html">See the platform capabilities <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Your next sale is one answered question away.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Stop losing carts to slow replies tonight.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
