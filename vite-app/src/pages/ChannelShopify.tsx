import { useEffect, useRef, useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-shopify.css';
import { Layout } from '../components/Layout';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const SHOPIFY_FAQS = [
  { q: "What happens if it can't find the order?", a: "It says so, and hands the conversation to a person instead of guessing. Wrong information is worse than no information, so it doesn't fill the gap with one." },
  { q: 'Does it create discount codes for customers?', a: "No. It checks whether a code you've already created is still valid, then applies it. It doesn't generate new discounts on its own." },
  { q: 'I already have a tracking or returns app installed.', a: 'Most stores do. The difference is where the answer comes from: this checks the actual order in Shopify, in the same conversation as everything else, instead of sending a customer to another page.' },
  { q: 'Does it only work with Shopify?', a: "No, it also connects to WooCommerce. Ask if you're on a different platform and aren't sure it's supported yet." },
];

/** channel-*.html FAQ rows use the `.faq-chev` plus-glyph (CSS rotates it 45deg into an ×), not the caret baked into the shared <FaqItem>. */
function PlusFaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button className="faq-question" type="button" onClick={onToggle}>{question}<svg className="faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></button>
      <div className="faq-answer" ref={answerRef}><p>{answer}</p></div>
    </div>
  );
}

/**
 * Ported 1:1 from channel-shopify.html's <main>.
 * That page has no #breadcrumbBar placeholder and never loaded breadcrumbs.js,
 * so unlike its sibling channel pages it renders no breadcrumb bar.
 */
export function ChannelShopify() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();

  // The whole brand-colour token set in channel-premium.css keys off
  // body[data-brand]; in the static site it came from <body data-brand="shopify">.
  useEffect(() => {
    document.body.dataset.brand = 'shopify';
    return () => {
      delete document.body.dataset.brand;
    };
  }, []);

  return (
    <Layout title="Shopify — StepsAI | Answers with the order in front of it." description="Connected straight to your Shopify store, so it checks the real order, discount code and stock instead of reciting a policy page.">
      <main id="top">
        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Shopify</span>
              <h1 className="vertical-headline">Answers with the order in front of it.</h1>
              <p className="vertical-tagline">Connected straight to your Shopify store, so it doesn't answer from a policy page. It checks the order, the stock and the discount code, then replies with what's actually true.</p>
              <div className="vertical-hero-actions">
                <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                <a href="agents.html#channels" className="vertical-hero-link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  All channels
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="shop-widget">
                <div className="shop-widget-head">
                  <span className="shop-widget-dot"></span><span className="shop-widget-dot"></span><span className="shop-widget-dot"></span>
                  <span className="shop-widget-url">nyrastore.com</span>
                </div>
                <div className="shop-widget-body">
                  <div className="shop-bubble in">Hey, where's order #10482?</div>
                  <div className="shop-bubble out">Checking your Shopify order now.</div>
                  <div className="shop-order-card">
                    <span className="shop-order-label">Order #10482</span>
                    <strong>Out for delivery</strong>
                    <p>Arriving by 6:00 PM today &middot; Bluedart</p>
                    <div className="shop-order-line"><i></i></div>
                  </div>
                  <div className="shop-bubble out">Want me to text you when it's delivered?</div>
                </div>
              </div>
              <div className="mock-annotation" style={{ marginTop: '14px' }}>
                <span className="wa-mock-avatar" style={{ width: '26px', height: '26px', fontSize: '10px', background: 'var(--brand-deep)' }}>N</span>
                <p>It didn't recite a policy page. It checked the real order in <strong>Shopify</strong> and answered with today's status.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Cart abandonment, automatically</p>
              <h2 className="section-title">The cart gets checked before the customer forgets it.</h2>
              <p className="section-sub">A workflow already built for this: item added, ten minutes pass with no purchase, a nudge goes out naming the exact item still sitting in the cart.</p>
            </div>
            <div className="wflow-rail-wrap reveal">
              <div className="wflow-rail">
                <div className="wflow-rail-node done">Item added to cart, no purchase in 10 minutes</div>
                <div className="wflow-rail-node done">Widget nudge shows what's still in the cart</div>
                <div className="wflow-rail-node done">No response in 2 hours &rarr; recovery email sent</div>
                <div className="wflow-rail-node done">Reply lands in the same inbox as any other question</div>
              </div>
              <div className="shop-widget">
                <div className="shop-widget-head">
                  <span className="shop-widget-dot"></span><span className="shop-widget-dot"></span><span className="shop-widget-dot"></span>
                  <span className="shop-widget-url">nyrastore.com</span>
                </div>
                <div className="shop-widget-body">
                  <div className="shop-bubble out">Still deciding on the Oxford shirt in Medium?</div>
                  <div className="shop-order-card">
                    <span className="shop-order-label">Still in your cart</span>
                    <strong>Oxford Shirt &mdash; Medium</strong>
                    <p>$68.00 &middot; 2 left in stock</p>
                  </div>
                  <div className="shop-bubble in">yes still deciding</div>
                  <div className="shop-bubble out">No rush. Here's 10% off if you check out today.</div>
                </div>
              </div>
            </div>
            <div className="ind-crosslink">
              <p>This is one tab inside the full Workflows builder.</p>
              <a href="workflows.html">See all workflow types <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        <section className="section section--raised">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> One question, three different checks</p>
              <h2 className="section-title">One question becomes three different lookups.</h2>
              <p className="section-sub">A discount code, a stock count and a return each live in a different part of Shopify. Whatever the question is actually about, that's the one it checks.</p>
            </div>
            <div className="sig-shop-diagram reveal">
              <div className="sig-shop-question">
                <span className="sig-shop-question-label">Connected to your Shopify store</span>
                <p className="sig-shop-question-msg">Orders. Discount codes. Stock, by variant.</p>
              </div>
              <svg className="sig-shop-connectors" viewBox="0 0 800 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M400,0 C400,55 150,45 150,100" />
                <path d="M400,0 L400,100" />
                <path d="M400,0 C400,55 650,45 650,100" />
              </svg>
              <div className="sig-shop-threads reveal reveal-stagger">
                <div className="sig-shop-thread" style={{ '--i': 0 } as CSSProperties}>
                  <div className="sig-shop-thread-head"><span className="sig-shop-status sig-shop-status--discount">Discount checked</span></div>
                  <div className="sig-shop-bubble in">Is SAVE20 still valid?</div>
                  <div className="sig-shop-bubble out">Yes. 12% off, expires in 2 days.</div>
                </div>
                <div className="sig-shop-thread" style={{ '--i': 1 } as CSSProperties}>
                  <div className="sig-shop-thread-head"><span className="sig-shop-status sig-shop-status--stock">Stock checked</span></div>
                  <div className="sig-shop-bubble in">Any of the Oxford shirt left in Medium?</div>
                  <div className="sig-shop-bubble out">3 left. Restocking Friday if you'd rather wait.</div>
                </div>
                <div className="sig-shop-thread" style={{ '--i': 2 } as CSSProperties}>
                  <div className="sig-shop-thread-head"><span className="sig-shop-status sig-shop-status--return">Return started</span></div>
                  <div className="sig-shop-bubble in">This doesn't fit. Can I return it?</div>
                  <div className="sig-shop-bubble out">Return started for order #10482. Label emailed.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base">
          <div className="container">
            <div className="spread reverse reveal">
              <div>
                <div className="spread-index">04 / Connected to the real thing</div>
                <h3>It reads your Shopify store. It doesn't create discount codes or override your return policy.</h3>
                <p>Paste your store URL and it connects through the Shopify API: products, orders, discount codes and inventory by variant. What it tells a customer is only ever what's already true in your store, checked in real time, not a guess dressed up as an answer.</p>
              </div>
              <div className="setup-visual">
                <div className="setup-integ-row"><span>Shopify store</span><span className="state">Connected</span></div>
                <div className="setup-integ-row"><span>Product &amp; inventory data</span><span className="state">Synced</span></div>
                <div className="setup-integ-row"><span>Order &amp; fulfillment status</span><span className="state">Connected</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Questions</p>
              <h2 className="section-title">About the Shopify channel.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {SHOPIFY_FAQS.slice(0, 2).map((item, i) => (
                  <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div>
                {SHOPIFY_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Every order question, answered before it becomes a refund.</h2>
            <p className="final-cta-sub">Connects to Shopify in minutes. No developer needed.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
