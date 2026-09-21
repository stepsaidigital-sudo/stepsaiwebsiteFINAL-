import { useEffect, useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-sales.css';
import '../styles/pages/sales-agent-polish.css';
import '../styles/pages/feature-demos.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';
import { useFeatureDemos } from '../hooks/useFeatureDemos';

const SALES_FAQS = [
  { q: 'Does it work with Shopify and WooCommerce?', a: 'Yes — it connects directly to your catalogue, stock, and order status, and checks them live before it answers.' },
  { q: 'Will it invent a discount to close a sale?', a: "No. It only offers discounts and codes you've explicitly configured — it never invents a price or a promotion." },
  { q: 'Can it upsell or cross-sell?', a: 'Yes — it can suggest pairings and higher-tier options from your catalogue, based on rules you set, not guesswork.' },
  { q: 'What happens after it closes a sale?', a: 'Order confirmation, shipping updates, and any follow-up are handled by the Support Agent and Workflows — the same conversation, no repeating themselves.' },
];

const LOADING_DOTS = (
  <span className="feature-demo-loading-icon"><span></span><span></span><span></span></span>
);

/** Ported 1:1 from sales-agent.html's <main>. The three .feature-demo players come from feature-demos.js, ported to useFeatureDemos. */
export function SalesAgent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();
  useFeatureDemos();

  // sales-agent-polish.css and feature-demos.css scope every rule under
  // .sales-agent-page; in the static site that came from <body class="sales-agent-page">.
  useEffect(() => {
    document.body.classList.add('sales-agent-page');
    return () => {
      document.body.classList.remove('sales-agent-page');
    };
  }, []);

  return (
    <Layout
      title="Sales Agent — StepsAI | It doesn't just chat. It sells."
      description="Recommends products by size, fit and budget, checks your real stock, and closes the sale inside the conversation — on WhatsApp, Instagram, and your website."
    >
      <Breadcrumb section="Product" sectionHref="agents.html" label="Sales Agent" />

      <main id="top">

        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Sales Agent</span>
              <h1 className="vertical-headline">It doesn't just chat. It sells.</h1>
              <p className="vertical-tagline">Recommends products by size, fit and budget, checks your real stock, and closes the sale — right inside the conversation, on WhatsApp, Instagram, or your website.</p>
              <div className="vertical-hero-actions">
                <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                <a href="agents.html#four-agents" className="vertical-hero-link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  All four agents
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="live-widget">
                <div className="lw-head">
                  <span className="lw-avatar">N</span>
                  <div><div className="lw-name">Agent</div><div className="lw-status">Nyra Store · Active</div></div>
                </div>
                <div className="lw-body">
                  <div className="lw-bubble user">Looking for something under ₹2,000, casual</div>
                  <div className="lw-bubble agent">The Aria linen shirt is ₹1,799 and in stock in your size. Want a photo?</div>
                  <div className="lw-bubble user">Yes, and is it true to size?</div>
                  <div className="lw-bubble agent">Runs slightly small — most people size up. Want me to reserve one?</div>
                  <div className="lw-bubble user">Yes, reserve it in L</div>
                  <div className="lw-bubble agent">Reserved for 15 minutes — here's your checkout link, size L already selected.</div>
                </div>
                <div className="lw-footer">
                  <div className="lw-input">Ask me anything</div>
                  <span className="lw-send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 18 9-18 9 4-9-4-9Z" /></svg></span>
                </div>
                <div className="lw-powered">Powered by <b>StepsAI</b></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo sales-feature-section">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl atmo-blob--soft"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--br atmo-blob--soft"></div>
          </div>
          <div className="container">
            <div className="section-head reveal-left">
              <p className="kicker"><span className="n">02</span> What it does</p>
              <h2 className="section-title">A salesperson who's read your entire catalogue.</h2>
              <p className="section-sub">Not a script of canned responses — it recommends from what you actually sell.</p>
            </div>

            <div className="spread reveal-left">
              <div>
                <div className="spread-index">01 / Recommends</div>
                <h3>Reads your catalogue, not a script.</h3>
                <p>It knows your products, prices, sizes and what pairs well together — so a "what should I get" question gets a real answer, not a deflection to your homepage.</p>
              </div>
              <div className="spread-visual">
                <div className="feature-demo feature-demo--recommend" data-feature-demo="recommendation">
                  <div className="feature-demo-bar">
                    <span className="feature-demo-label"><span className="feature-demo-live" aria-hidden="true"></span>Example conversation</span>
                    <span className="feature-demo-state" data-demo-status="" aria-live="polite">Ready to play</span>
                  </div>
                  <div className="feature-demo-canvas" aria-hidden="true">
                    <div className="feature-demo-message feature-demo-message--customer" data-demo-step="">A casual shirt under ₹2,000. Do you have medium?</div>
                    <div className="feature-demo-loading" data-demo-step="" data-demo-loading="">
                      {LOADING_DOTS}
                      <span>Checking the catalogue</span>
                    </div>
                    <div className="feature-demo-message feature-demo-message--agent" data-demo-step="">This Classic Oxford Shirt is ₹1,799. Navy in medium is available.</div>
                    <article className="feature-product-card" data-demo-step="">
                      <img src="/images/product-oxford-shirts-card.webp" width="640" height="640" loading="lazy" alt="Three folded Oxford shirts in burgundy, white and navy" />
                      <div className="feature-product-copy">
                        <div className="feature-product-top"><span>Classic Oxford Shirt</span><strong>₹1,799</strong></div>
                        <p>Navy · Medium</p>
                        <span className="feature-stock feature-stock--available"><span></span>In stock</span>
                      </div>
                    </article>
                  </div>
                  <div className="feature-demo-controls">
                    <button type="button" className="feature-demo-control feature-demo-control--primary" data-demo-toggle="" aria-label="Play recommendation example">Play</button>
                    <button type="button" className="feature-demo-control" data-demo-replay="" aria-label="Replay recommendation example">Replay</button>
                    <span>Illustrative example</span>
                  </div>
                  <p className="feature-demo-transcript">Example: A shopper asks for a casual shirt under ₹2,000 in medium. The agent checks the catalogue and presents the Classic Oxford Shirt for ₹1,799, with navy in medium shown as available.</p>
                </div>
              </div>
            </div>

            <div className="spread reverse reveal-right">
              <div>
                <div className="spread-index">02 / Checks real stock</div>
                <h3>It never promises something you don't have.</h3>
                <p>Connected directly to Shopify or WooCommerce, it checks live inventory before it answers a size or availability question — no overselling, no awkward follow-up email.</p>
              </div>
              <div className="spread-visual">
                <div className="feature-demo feature-demo--stock" data-feature-demo="inventory">
                  <div className="feature-demo-bar">
                    <span className="feature-demo-label"><span className="feature-demo-live" aria-hidden="true"></span>Example conversation</span>
                    <span className="feature-demo-state" data-demo-status="" aria-live="polite">Ready to play</span>
                  </div>
                  <div className="feature-demo-canvas" aria-hidden="true">
                    <div className="feature-demo-message feature-demo-message--customer" data-demo-step="">Is medium available in navy?</div>
                    <div className="feature-demo-loading" data-demo-step="" data-demo-loading="">
                      {LOADING_DOTS}
                      <span>Checking inventory</span>
                    </div>
                    <article className="feature-inventory-card" data-demo-step="">
                      <img src="/images/product-oxford-shirts-card.webp" width="640" height="640" loading="lazy" alt="Three folded Oxford shirts including a navy shirt" />
                      <div className="feature-inventory-copy">
                        <span className="feature-inventory-caption">Live inventory example</span>
                        <strong>Classic Oxford Shirt</strong>
                        <div className="feature-inventory-specs"><span>Navy</span><span>Size M</span><span className="is-available">Available</span></div>
                      </div>
                    </article>
                    <div className="feature-demo-message feature-demo-message--agent" data-demo-step="">Yes—navy in medium is available. I can prepare it for checkout.</div>
                  </div>
                  <div className="feature-demo-controls">
                    <button type="button" className="feature-demo-control feature-demo-control--primary" data-demo-toggle="" aria-label="Play inventory example">Play</button>
                    <button type="button" className="feature-demo-control" data-demo-replay="" aria-label="Replay inventory example">Replay</button>
                    <span>Illustrative example</span>
                  </div>
                  <p className="feature-demo-transcript">Example: A shopper asks whether the navy Oxford shirt is available in medium. The agent checks inventory, displays the selected variant as available, and offers to prepare checkout.</p>
                </div>
              </div>
            </div>

            <div className="spread reveal-left">
              <div>
                <div className="spread-index">03 / Closes the sale</div>
                <h3>The conversation ends at checkout, not at "let me check."</h3>
                <p>It clears the doubt that was about to end the chat, then shares the checkout link right there — no separate cart-recovery email needed for a sale that could've closed in the moment.</p>
              </div>
              <div className="spread-visual">
                <div className="feature-demo feature-demo--checkout" data-feature-demo="checkout">
                  <div className="feature-demo-bar">
                    <span className="feature-demo-label"><span className="feature-demo-live" aria-hidden="true"></span>Example conversation</span>
                    <span className="feature-demo-state" data-demo-status="" aria-live="polite">Ready to play</span>
                  </div>
                  <div className="feature-demo-canvas" aria-hidden="true">
                    <div className="feature-demo-message feature-demo-message--customer" data-demo-step="">I’ll take the navy shirt in medium.</div>
                    <div className="feature-demo-loading" data-demo-step="" data-demo-loading="">
                      {LOADING_DOTS}
                      <span>Preparing checkout</span>
                    </div>
                    <article className="feature-order-card" data-demo-step="">
                      <img src="/images/product-oxford-shirts-card.webp" width="640" height="640" loading="lazy" alt="Three folded Oxford shirts including a navy shirt" />
                      <div className="feature-order-copy"><span>Classic Oxford Shirt</span><small>Navy · Medium · Qty 1</small></div>
                      <strong>₹1,799</strong>
                      <span className="feature-order-state">Ready for checkout</span>
                    </article>
                    <div className="feature-demo-message feature-demo-message--customer" data-demo-step="">Payment is complete.</div>
                    <div className="feature-demo-loading" data-demo-step="" data-demo-loading="">
                      {LOADING_DOTS}
                      <span>Checking payment</span>
                    </div>
                    <div className="feature-confirmation" data-demo-step="">
                      <span className="feature-confirmation-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m7 12 3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                      <div><strong>Payment confirmed</strong><span>Example order #5193 · ₹1,799</span></div>
                    </div>
                  </div>
                  <div className="feature-demo-controls">
                    <button type="button" className="feature-demo-control feature-demo-control--primary" data-demo-toggle="" aria-label="Play checkout example">Play</button>
                    <button type="button" className="feature-demo-control" data-demo-replay="" aria-label="Replay checkout example">Replay</button>
                    <span>Illustrative example</span>
                  </div>
                  <p className="feature-demo-transcript">Example: A shopper selects the navy Oxford shirt in medium. The agent prepares a ₹1,799 checkout summary. After the example shopper reports payment, the demonstration checks payment and displays example order 5193 as confirmed.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="section section--base">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> One conversation, start to finish</p>
              <h2 className="section-title">Follow one customer from "does this exist" to "order placed."</h2>
              <p className="section-sub">No separate chats and no lost thread. Discovery, the stock check, the recommendation, and checkout all happen in the same conversation.</p>
            </div>

            <div className="sig-sales-thread reveal reveal-stagger">
              <div className="sig-sales-beat" style={{ '--i': 0 } as CSSProperties}>
                <span className="sig-sales-num">1</span>
                <div className="sig-sales-card">
                  <span className="sig-sales-status sig-sales-status--ask">Discovery</span>
                  <div className="sig-sales-bubble in">Do you have the Aria linen shirt, under &#8377;2,000?</div>
                </div>
              </div>
              <div className="sig-sales-beat" style={{ '--i': 1 } as CSSProperties}>
                <span className="sig-sales-num">2</span>
                <div className="sig-sales-card">
                  <span className="sig-sales-status sig-sales-status--check">Checking stock</span>
                  <div className="sig-sales-bubble out">Checking your size and colour against live inventory&hellip;</div>
                </div>
              </div>
              <div className="sig-sales-beat" style={{ '--i': 2 } as CSSProperties}>
                <span className="sig-sales-num">3</span>
                <div className="sig-sales-card sig-sales-card--product">
                  <span className="sig-sales-status sig-sales-status--recommend">Recommended</span>
                  <div className="sig-sales-product">
                    <span className="sig-sales-product-name">Aria Linen Shirt &middot; Size M</span>
                    <span className="sig-sales-product-meta">&#8377;1,799 &middot; In stock</span>
                  </div>
                  <div className="sig-sales-bubble out">In stock in M, &#8377;1,799. It runs slightly small, so I'd size up if you're in between.</div>
                </div>
              </div>
              <div className="sig-sales-beat" style={{ '--i': 3 } as CSSProperties}>
                <span className="sig-sales-num">4</span>
                <div className="sig-sales-card">
                  <span className="sig-sales-status sig-sales-status--ask">Buying</span>
                  <div className="sig-sales-bubble in">Perfect, I'll take it in M</div>
                </div>
              </div>
              <div className="sig-sales-beat sig-sales-beat--final" style={{ '--i': 4 } as CSSProperties}>
                <span className="sig-sales-num">5</span>
                <div className="sig-sales-card sig-sales-card--success">
                  <span className="sig-sales-status sig-sales-status--placed">Order placed</span>
                  <div className="sig-sales-bubble out">Reserved for 15 minutes &mdash; here's your checkout link, size M already selected.</div>
                  <div className="sig-sales-order">Order #5193 &middot; &#8377;1,799</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--integrations-light sales-integrations">
          <div className="container">
            <div className="integ-band">
              <div className="reveal-right">
                <p className="kicker"><span className="n">04</span> Built to work with</p>
                <h2 className="section-title">Connects to the store and CRM you already run.</h2>
                <p className="section-sub">It doesn't just talk about your catalogue — it checks it, live, before it recommends anything.</p>
              </div>
              <div className="integ-logos reveal-stagger">
                <div className="integ-logo-row" style={{ '--i': 0 } as CSSProperties}>
                  <span className="provider-mark provider-mark--shopify" aria-hidden="true"><img src="/images/partners/shopify.svg" alt="" /></span>
                  <div className="integ-logo-row-text"><div className="t1">Shopify</div><div className="t2">Live stock, orders and checkout status</div></div>
                  <span className="integ-logo-row-badge">Supported</span>
                </div>
                <div className="integ-logo-row" style={{ '--i': 1 } as CSSProperties}>
                  <span className="provider-mark provider-mark--hubspot" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M8.2 5.2v5.1a4.6 4.6 0 1 0 2.4-1.1V6.4l2.1-1.6a2.4 2.4 0 1 0-1.2-1.7L8.2 5.2Z" fill="currentColor" /><circle cx="8.2" cy="13.7" r="2.1" fill="#fff" /><path d="m12 12.2 3.8-3" stroke="currentColor" strokeWidth="2" /><circle cx="18" cy="7.5" r="2.5" fill="currentColor" /></svg></span>
                  <div className="integ-logo-row-text"><div className="t1">HubSpot</div><div className="t2">Qualified conversations arrive with full context</div></div>
                  <span className="integ-logo-row-badge">Supported</span>
                </div>
                <div className="integ-logo-row" style={{ '--i': 2 } as CSSProperties}>
                  <span className="provider-mark provider-mark--salesforce" aria-hidden="true"><svg viewBox="0 0 28 22" fill="none"><path d="M8.2 20.1a6.1 6.1 0 0 1-1.5-12 7.4 7.4 0 0 1 13.7-1.6 5.7 5.7 0 1 1 1.4 11.2 7 7 0 0 1-5.7 2.4H8.2Z" fill="currentColor" /></svg></span>
                  <div className="integ-logo-row-text"><div className="t1">Salesforce</div><div className="t2">Leads and conversation history sync both ways</div></div>
                  <span className="integ-logo-row-badge">Supported</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr atmo-blob--soft"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl atmo-blob--soft"></div>
          </div>
          <div className="container">
            <div className="section-head reveal-grow">
              <p className="kicker"><span className="n">05</span> FAQ</p>
              <h2 className="section-title">Questions about the Sales Agent.</h2>
            </div>
            <div className="faq-grid reveal">
              <div style={{ '--i': 0 } as CSSProperties}>
                {SALES_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div style={{ '--i': 1 } as CSSProperties}>
                {SALES_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <FaqItem key={item.q} question={item.q} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}>
                      <p>{item.a}</p>
                    </FaqItem>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section final-cta final-cta--light" id="final-cta">
          <div className="container reveal-pop" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Your next sale is one recommendation away.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Stop losing sales to slow replies tonight.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>

      </main>
    </Layout>
  );
}
