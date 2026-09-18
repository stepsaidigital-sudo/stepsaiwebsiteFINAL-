import { useLayoutEffect, useRef, useState } from 'react';
import '../styles/pages/pricing.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';

type Period = 'monthly' | 'annual';

const ROI_INDUSTRIES = [
  { label: '🛍️ E-Commerce', rate: 0.18 },
  { label: '🏢 Real Estate', rate: 0.12 },
  { label: '🏥 Healthcare', rate: 0.15 },
  { label: '💻 SaaS / Tech', rate: 0.14 },
];

function formatINR(num: number) {
  return num.toLocaleString('en-IN');
}

function recommendedPlan(inquiries: number) {
  if (inquiries > 15000) return { name: 'Enterprise (Custom)', cost: 35000 };
  if (inquiries > 5000) return { name: 'Scale (₹18,999/mo)', cost: 18999 };
  if (inquiries > 1000) return { name: 'Growth (₹6,999/mo)', cost: 6999 };
  return { name: 'Starter (₹2,499/mo)', cost: 2499 };
}

const PRICING_FAQS = [
  { q: "What happens when my plan expires?", a: "Your agent keeps running until the end of the billing period you've already paid for. If it isn't renewed, the agent pauses — it doesn't delete your data or history." },
  { q: 'What happens if I exceed my message limit?', a: "We'll notify you before you run out. You can top up with an add-on credit pack any time, or upgrade a tier — nothing shuts off mid-conversation." },
  { q: 'Can I upgrade or downgrade my plan any time?', a: 'Yes, any time. Upgrades apply immediately; downgrades take effect at the start of your next billing cycle so you keep what you paid for.' },
  { q: 'How does billing work?', a: 'Monthly plans bill every 30 days. Annual plans bill once a year at 20% off the monthly rate. Add-on credit packs are billed once, on purchase.' },
  { q: 'Do you offer refunds?', a: "Every paid plan starts with a 14-day free trial, so you can test it before you're billed. Once billed, we don't offer pro-rated refunds for partial months." },
  { q: "What's included in the Starter plan?", a: 'Everything you need to launch on one storefront or site: 1,000 credits, all three channels, order tracking, and a custom AI persona — see the full comparison table above.' },
  { q: "What's the difference between support levels?", a: 'Starter gets email support. Growth and Scale get priority response times. Scale adds a dedicated account manager; Enterprise adds dedicated engineering plus phone and Slack support.' },
  { q: 'Do you offer enterprise custom pricing?', a: 'Yes — for 50,000+ credits a month, multi-brand accounts, or white-label deployments, we price by volume and use case. Talk to sales for a quote.' },
  { q: 'Is there a setup fee?', a: 'No. Paste your website link and connect the tools you already use — no setup fee on any plan, including Enterprise.' },
];

/** Ported 1:1 from pricing.html's <main>; pricing.js's DOM manipulation reimplemented as React state. */
export function Pricing() {
  const [period, setPeriod] = useState<Period>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [roiInquiries, setRoiInquiries] = useState(3000);
  const [roiOrderVal, setRoiOrderVal] = useState(2500);
  const [roiIndustry, setRoiIndustry] = useState(0);

  const monthlyBtnRef = useRef<HTMLButtonElement>(null);
  const annualBtnRef = useRef<HTMLButtonElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    function moveHighlight() {
      const btn = period === 'monthly' ? monthlyBtnRef.current : annualBtnRef.current;
      const highlight = highlightRef.current;
      if (!btn || !highlight) return;
      highlight.style.width = `${btn.offsetWidth}px`;
      highlight.style.transform = `translateX(${btn.offsetLeft}px)`;
    }
    moveHighlight();
    window.addEventListener('resize', moveHighlight);
    return () => window.removeEventListener('resize', moveHighlight);
  }, [period]);

  const rate = ROI_INDUSTRIES[roiIndustry].rate;
  const convertedOrders = roiInquiries * rate;
  const totalRevenue = Math.round(convertedOrders * roiOrderVal);
  const hoursSaved = Math.round((roiInquiries * 3.5) / 60);
  const plan = recommendedPlan(roiInquiries);
  const roiMultiplier = (totalRevenue / plan.cost).toFixed(1);

  return (
    <Layout title="Pricing — StepsAI | Plans that scale with every reply" description="Simple, credit-based pricing for the StepsAI agent. Every plan includes every channel — you only pay when it actually answers.">
      <Breadcrumb section={null} sectionHref={null} label="Pricing" />

      <main id="top">
        <section className="section section--base pricing-hero section--atmo">
          <div className="hero-bg-dots" aria-hidden="true"></div>
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container pricing-hero-inner">
            <p className="kicker">PRICING</p>
            <h1 className="pricing-headline">Plans that scale with every reply.</h1>
            <p className="section-sub pricing-hero-sub">Pick the credit volume you need — from a single storefront to a multi-brand support desk. Billed monthly or annually. Every plan includes every channel.</p>

            <div className="billing-toggle" role="tablist" aria-label="Billing period" id="billingToggle">
              <span className="billing-toggle-highlight" aria-hidden="true" ref={highlightRef}></span>
              <button ref={monthlyBtnRef} className={`billing-toggle-option${period === 'monthly' ? ' is-active' : ''}`} role="tab" aria-selected={period === 'monthly'} data-period="monthly" type="button" onClick={() => setPeriod('monthly')}>Monthly</button>
              <button ref={annualBtnRef} className={`billing-toggle-option${period === 'annual' ? ' is-active' : ''}`} role="tab" aria-selected={period === 'annual'} data-period="annual" type="button" onClick={() => setPeriod('annual')}>Annual <span className="billing-toggle-save">Save 20%</span></button>
            </div>

            <div className="credit-explainer">
              <span className="credit-explainer-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#1A56DB" strokeWidth="1.6" /><path d="M12 8V12L14.5 14.5" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </span>
              <p><strong>1 credit = 1 AI reply.</strong> Customer messages are always free — you only pay when the agent actually answers.</p>
            </div>
          </div>
        </section>

        <section className="section section--raised pricing-plans" id="plans">
          <div className={`container${period === 'annual' ? ' is-annual' : ''}`} id="pricingStage">
            <div className="pricing-cards">
              <article className="pricing-card">
                <h2 className="pricing-card-name">Starter</h2>
                <p className="pricing-card-desc">For small teams testing the water.</p>
                <div className="pricing-card-price">
                  <span className="pricing-price-monthly">₹2,499</span>
                  <span className="pricing-price-annual">₹1,999</span>
                  <span className="pricing-card-period">/mo</span>
                </div>
                <p className="pricing-card-billing-note">
                  <span className="note-monthly">Billed monthly</span>
                  <span className="note-annual">Billed annually</span>
                </p>
                <p className="pricing-card-credits">1,000 credits / month</p>
                <button className="btn btn-accent btn-sm pricing-card-cta" type="button">Start 14-day free trial</button>
                <p className="pricing-card-cta-note">No credit card required</p>
                <ul className="pricing-card-features">
                  <li>50MB storage</li>
                  <li>20 web crawls / month</li>
                  <li>Basic analytics</li>
                  <li>Product recommendations</li>
                  <li>Order tracking</li>
                  <li>Custom AI persona</li>
                  <li>Human handoff</li>
                  <li>All 5 channels — Website, WhatsApp, Instagram, Messenger, Standalone Page</li>
                  <li>Email support</li>
                </ul>
              </article>

              <article className="pricing-card pricing-card--popular">
                <span className="pricing-card-badge">Most popular</span>
                <h2 className="pricing-card-name">Growth</h2>
                <p className="pricing-card-desc">For teams past "just testing."</p>
                <div className="pricing-card-price">
                  <span className="pricing-price-monthly">₹6,999</span>
                  <span className="pricing-price-annual">₹5,599</span>
                  <span className="pricing-card-period">/mo</span>
                </div>
                <p className="pricing-card-billing-note">
                  <span className="note-monthly">Billed monthly</span>
                  <span className="note-annual">Billed annually</span>
                </p>
                <p className="pricing-card-credits">4,000 credits / month</p>
                <button className="btn btn-accent btn-sm pricing-card-cta" type="button">Start 14-day free trial</button>
                <p className="pricing-card-cta-note">No credit card required</p>
                <ul className="pricing-card-features">
                  <li className="pricing-feature-heading">Everything in Starter, plus:</li>
                  <li>500MB storage</li>
                  <li>100 web crawls / month</li>
                  <li>Ticketing system</li>
                  <li>Ticket &amp; lead management</li>
                  <li>Cart abandonment recovery</li>
                  <li>Priority support</li>
                </ul>
              </article>

              <article className="pricing-card">
                <h2 className="pricing-card-name">Scale</h2>
                <p className="pricing-card-desc">For teams running the business on it.</p>
                <div className="pricing-card-price">
                  <span className="pricing-price-monthly">₹18,999</span>
                  <span className="pricing-price-annual">₹15,199</span>
                  <span className="pricing-card-period">/mo</span>
                </div>
                <p className="pricing-card-billing-note">
                  <span className="note-monthly">Billed monthly</span>
                  <span className="note-annual">Billed annually</span>
                </p>
                <p className="pricing-card-credits">15,000 credits / month</p>
                <button className="btn btn-accent btn-sm pricing-card-cta" type="button">Start 14-day free trial</button>
                <p className="pricing-card-cta-note">No credit card required</p>
                <ul className="pricing-card-features">
                  <li className="pricing-feature-heading">Everything in Growth, plus:</li>
                  <li>2GB storage</li>
                  <li>250 web crawls / month</li>
                  <li>White-label platform</li>
                  <li>Remove "Powered by StepsAI"</li>
                  <li>SSO / SAML</li>
                  <li>Custom SLA &amp; 99.9% uptime</li>
                  <li>Multi-brand management</li>
                  <li>Custom integrations &amp; API</li>
                  <li>Dedicated engineering + phone &amp; Slack support</li>
                </ul>
              </article>

              <article className="pricing-card pricing-card--enterprise">
                <h2 className="pricing-card-name">Enterprise</h2>
                <p className="pricing-card-desc">Custom solutions for large organizations.</p>
                <div className="pricing-card-price">
                  <span className="pricing-card-custom">Custom</span>
                </div>
                <p className="pricing-card-billing-note">Talk to sales for a quote</p>
                <p className="pricing-card-credits">50,000+ credits / month</p>
                <a href="#pricing-faq" className="btn btn-outline btn-sm pricing-card-cta">Talk to sales</a>
                <ul className="pricing-card-features">
                  <li className="pricing-feature-heading">Everything in Scale, plus:</li>
                  <li>Unlimited storage &amp; crawls</li>
                  <li>Dedicated account manager</li>
                  <li>Custom integrations &amp; API</li>
                  <li>Volume-based credit pricing</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--base roi-section section--atmo" id="roi-calculator">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">INTERACTIVE ROI CALCULATOR</p>
              <h2 className="section-title">Calculate your exact return on investment.</h2>
              <p className="section-sub">See how much revenue StepsAI recovers from abandoned carts, midnight queries, and instant bookings.</p>
            </div>

            <div className="roi-card reveal">
              <div className="roi-controls">
                <div className="roi-control-group">
                  <div className="roi-control-header">
                    <label htmlFor="roiInquiries" className="roi-label">Monthly Customer Inquiries</label>
                    <span className="roi-val-badge" id="roiInquiriesVal">{formatINR(roiInquiries)} / mo</span>
                  </div>
                  <input type="range" id="roiInquiries" min="500" max="25000" step="500" value={roiInquiries} className="roi-slider" onChange={(e) => setRoiInquiries(Number(e.target.value))} />
                  <div className="roi-range-limits">
                    <span>500</span>
                    <span>10,000</span>
                    <span>25,000+</span>
                  </div>
                </div>

                <div className="roi-control-group">
                  <div className="roi-control-header">
                    <label htmlFor="roiOrderVal" className="roi-label">Average Order / Lead Value (₹)</label>
                    <span className="roi-val-badge" id="roiOrderValDisplay">₹{formatINR(roiOrderVal)}</span>
                  </div>
                  <input type="range" id="roiOrderVal" min="500" max="20000" step="250" value={roiOrderVal} className="roi-slider" onChange={(e) => setRoiOrderVal(Number(e.target.value))} />
                  <div className="roi-range-limits">
                    <span>₹500</span>
                    <span>₹10,000</span>
                    <span>₹20,000</span>
                  </div>
                </div>

                <div className="roi-control-group">
                  <label className="roi-label">Your Business Type</label>
                  <div className="roi-industry-pills" role="radiogroup">
                    {ROI_INDUSTRIES.map((ind, i) => (
                      <button key={ind.label} type="button" className={`roi-ind-pill${i === roiIndustry ? ' is-active' : ''}`} data-rate={ind.rate} onClick={() => setRoiIndustry(i)}>{ind.label}</button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="roi-result-panel">
                <div className="roi-result-glow" aria-hidden="true"></div>
                <div className="roi-result-header">
                  <span className="roi-result-kicker">PROJECTED MONTHLY VALUE</span>
                  <div className="roi-result-big">
                    <span className="roi-currency">₹</span><strong id="roiMonthlyRev">{formatINR(totalRevenue)}</strong>
                  </div>
                  <p className="roi-result-sub">Recovered revenue &amp; closed sales every month</p>
                </div>

                <div className="roi-metrics-grid">
                  <div className="roi-metric-item">
                    <span className="roi-metric-num" id="roiHoursSaved">{formatINR(hoursSaved)} hrs</span>
                    <span className="roi-metric-lbl">Agent Time Saved</span>
                  </div>
                  <div className="roi-metric-item">
                    <span className="roi-metric-num" id="roiRoiMultiplier">{roiMultiplier}x</span>
                    <span className="roi-metric-lbl">Estimated ROI</span>
                  </div>
                </div>

                <div className="roi-recommendation">
                  <span>Recommended Plan:</span>
                  <strong id="roiRecPlan" className="roi-rec-badge">{plan.name}</strong>
                </div>

                <a href="#plans" className="btn btn-accent btn-sm roi-cta-btn">Select this plan &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base addon-credits section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--mid"></div>
          </div>
          <div className="container">
            <p className="kicker">ADD-ON CREDITS</p>
            <h2 className="section-title">Need more credits for a busy month?</h2>
            <p className="section-sub">Buy additional credit packs any time. They work with any plan and let you handle bursts without jumping tiers.</p>

            <div className="addon-cards">
              <div className="addon-card">
                <span className="addon-card-credits">500 credits</span>
                <span className="addon-card-price">₹999</span>
                <span className="addon-card-note">One-time purchase</span>
              </div>
              <div className="addon-card">
                <span className="addon-card-credits">1,000 credits</span>
                <span className="addon-card-price">₹1,799</span>
                <span className="addon-card-note">One-time purchase</span>
              </div>
              <div className="addon-card addon-card--locked">
                <span className="addon-card-credits">2,500 credits</span>
                <span className="addon-card-price">Contact us</span>
                <span className="addon-card-note">Available on Scale &amp; Enterprise</span>
              </div>
            </div>
            <p className="addon-fineprint">Add-on credits expire at the end of the billing cycle. Works with any plan.</p>
          </div>
        </section>

        <section className="section section--raised feature-comparison">
          <div className="container">
            <p className="kicker">COMPARE PLANS</p>
            <h2 className="section-title">Full feature comparison.</h2>
            <p className="section-sub">See how each plan expands your channels, analytics, automation, and support.</p>

            <p className="comparison-scroll-hint" aria-hidden="true">Swipe to compare plans →</p>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Starter</th>
                    <th scope="col">Growth</th>
                    <th scope="col">Scale</th>
                    <th scope="col">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="comparison-category"><th scope="colgroup" colSpan={5}>AI &amp; Credits</th></tr>
                  <tr><th scope="row">AI message credits / month</th><td>1,000</td><td>4,000</td><td>15,000</td><td>50,000+</td></tr>
                  <tr><th scope="row">Storage</th><td>50MB</td><td>500MB</td><td>2GB</td><td>Unlimited</td></tr>
                  <tr><th scope="row">Web crawls / month</th><td>20</td><td>100</td><td>250</td><td>Unlimited</td></tr>
                  <tr><th scope="row">AI sales agent</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Custom AI persona</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>

                  <tr className="comparison-category"><th scope="colgroup" colSpan={5}>Ticketing &amp; Support</th></tr>
                  <tr><th scope="row">Unified chat inbox</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Ticketing system</th><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Enhanced CRM &amp; customer history</th><td>—</td><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Human handoff</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>

                  <tr className="comparison-category"><th scope="colgroup" colSpan={5}>E-Commerce</th></tr>
                  <tr><th scope="row">Product cards &amp; recommendations in chat</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Order tracking</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Cart abandonment recovery</th><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>

                  <tr className="comparison-category"><th scope="colgroup" colSpan={5}>Channels &amp; Integrations</th></tr>
                  <tr><th scope="row">Website, WhatsApp, Instagram, Messenger &amp; Standalone Page</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Integrations</th><td>Core</td><td>All</td><td>All</td><td>Custom &amp; API</td></tr>

                  <tr className="comparison-category"><th scope="colgroup" colSpan={5}>Analytics</th></tr>
                  <tr><th scope="row">Basic analytics</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Advanced &amp; website analytics</th><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>

                  <tr className="comparison-category"><th scope="colgroup" colSpan={5}>Support</th></tr>
                  <tr><th scope="row">Email support</th><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Priority support</th><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Dedicated account &amp; engineering manager</th><td>—</td><td>—</td><td>—</td><td className="is-check">✓</td></tr>

                  <tr className="comparison-category"><th scope="colgroup" colSpan={5}>Platform &amp; Enterprise</th></tr>
                  <tr><th scope="row">White-label platform, remove branding</th><td>—</td><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">SSO / SAML</th><td>—</td><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Custom SLA &amp; 99.9% uptime</th><td>—</td><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Multi-brand management</th><td>—</td><td>—</td><td className="is-check">✓</td><td className="is-check">✓</td></tr>
                  <tr><th scope="row">Custom integrations &amp; API</th><td>—</td><td>—</td><td>—</td><td className="is-check">✓</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section section--base faq section--atmo" id="pricing-faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
          </div>
          <div className="container">
            <p className="kicker">QUESTIONS</p>
            <h2 className="section-title">Questions about plans, billing, and credits.</h2>
            <p className="section-sub">Everything you need to know before you launch, upgrade, or scale your agent.</p>

            <div className="faq-grid" id="pricingFaqGrid">
              {PRICING_FAQS.map((item, i) => (
                <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} chevronClassName="faq-chevron">
                  <p>{item.a}</p>
                </FaqItem>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">Not sure which plan? Let's figure it out.</h2>
            <p className="final-cta-sub">Start with a free trial. No credit card required. Upgrade when you're ready.</p>
            <div className="final-cta-btn-row">
              <button className="btn btn-cta" type="button">Start Free Trial</button>
              <button className="btn btn-cta-outline" type="button">Book a Demo</button>
            </div>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
