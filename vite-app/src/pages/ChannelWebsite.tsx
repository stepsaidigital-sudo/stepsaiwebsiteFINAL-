import { useEffect, useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-website.css';
import '../styles/pages/website-pilot.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';
import { useWebsitePilot } from '../hooks/useWebsitePilot';

const AGENT_LOGO = (
  <span className="wp-agent-logo"><svg viewBox="0 0 24 24"><path d="M17.5 7.5c5 0 5 9 0 9-2.7 0-4.4-2.8-5.5-4.5-1.1-1.7-2.8-4.5-5.5-4.5-5 0-5 9 0 9 2.7 0 4.4-2.8 5.5-4.5 1.1-1.7 2.8-4.5 5.5-4.5Z" /></svg></span>
);

const STORY_STEPS = [
  'Visitor asks a question',
  'StepsAI finds the right answer',
  'The next step is completed',
];

const WP_FAQS = [
  { id: 'wp-faq-performance', q: 'How does it affect site performance?', a: 'The widget is designed as a lightweight embed. Final performance depends on your website and implementation.' },
  { id: 'wp-faq-customize', q: 'Can I customize its position and colors?', a: 'The interface is designed to support brand-aligned placement and appearance; available options depend on your plan and setup.' },
  { id: 'wp-faq-mobile', q: 'Does it work on mobile?', a: 'The widget includes a compact mobile presentation designed for smaller screens.' },
  { id: 'wp-faq-install', q: 'How do I install it?', a: 'Use the provided website embed or an available platform integration. The final steps depend on your website platform.' },
];

const LEGACY_FAQS = [
  { q: 'Does it slow down my site?', a: "No. It loads asynchronously after your page, so it never blocks your site's own load time." },
  { q: 'Can I customize the position and colors?', a: 'Yes — position, accent color, avatar, and welcome message are all yours to set, any time.' },
  { q: 'Does it work on mobile?', a: "Yes, it's fully responsive and adapts to small screens automatically — no separate setup needed." },
  { q: 'How do I install it?', a: 'Copy one script tag into your site’s HTML — most platforms (Shopify, WordPress, Webflow) take under two minutes.' },
];

/** Ported 1:1 from channel-website.html's <main>. The scroll-triggered story player comes from useWebsitePilot. */
export function ChannelWebsite() {
  const [openWpFaq, setOpenWpFaq] = useState<number | null>(null);
  const [openLegacyFaq, setOpenLegacyFaq] = useState<number | null>(null);
  const { storyRef, completed, activeStep, playStory, selectStep, scrollToDemo } = useWebsitePilot();
  useIndustryPageBehavior();
  useChannelPremium();

  // The whole brand-colour token set in channel-premium.css keys off
  // body[data-brand]; in the static site it came from <body data-brand="website">.
  useEffect(() => {
    document.body.dataset.brand = 'website';
    return () => {
      delete document.body.dataset.brand;
    };
  }, []);

  const partClass = (base: string, index: number) => (index > completed ? `${base} is-pending` : base);

  return (
    <Layout title="Website Widget — StepsAI | Answer before they leave the page." description="Right on your site, in your brand colors, capturing a lead inline without sending anyone to a separate contact page.">
      <Breadcrumb section="Channels" sectionHref="channels.html" label="Website Channel" />

      <main id="top">

        <div className="wp-page">
          <section className="wp-hero" aria-labelledby="wp-hero-title">
            <div className="wp-shell wp-hero-grid">
              <div className="wp-hero-copy">
                <span className="wp-chip">Website widget</span>
                <h1 id="wp-hero-title">Answer visitors before they leave your site.</h1>
                <p>Give every visitor an immediate answer, a useful recommendation, or the next step—without sending them away from your website.</p>
                <div className="wp-hero-actions">
                  <a className="wp-btn wp-btn-primary" href="pricing.html">Start free trial <span aria-hidden="true">→</span></a>
                  <button className="wp-text-action" type="button" data-wp-scroll-demo="" onClick={scrollToDemo}><span className="wp-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m9 7 8 5-8 5Z" /></svg></span>See it in action</button>
                </div>
                <ul className="wp-assurance" aria-label="Trial details">
                  <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 12 3 3 7-7" /><circle cx="12" cy="12" r="9" /></svg>No credit card required</li>
                  <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 12 3 3 7-7" /><circle cx="12" cy="12" r="9" /></svg>Guided setup</li>
                  <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 12 3 3 7-7" /><circle cx="12" cy="12" r="9" /></svg>Embeddable widget</li>
                </ul>
              </div>

              <div className="wp-hero-visual" aria-label="Illustrative StepsAI website conversation">
                <span className="wp-hero-note" aria-hidden="true">Your AI agent<br />on your website<svg viewBox="0 0 52 42"><path d="M6 4c21 5 34 15 37 30M35 28l8 6 3-10" /></svg></span>
                <div className="wp-browser wp-browser-hero">
                  <div className="wp-browser-bar"><span></span><span></span><span></span><b>yourwebsite.com</b></div>
                  <div className="wp-site-scene">
                    <div className="wp-site-copy"><span>Designed for everyday business</span><strong>Better service,<br />right when it matters.</strong><i></i></div>
                    <img src="/images/brand-01.jpg" width="640" height="360" alt="Illustrative retail business website" />
                  </div>
                </div>
                <div className="wp-chat" data-wp-hero-chat="">
                  <div className="wp-chat-head">{AGENT_LOGO}<span><strong>StepsAI</strong><small><i></i> Online</small></span><span className="wp-chat-chrome" aria-hidden="true">−</span></div>
                  <div className="wp-chat-body">
                    <div className="wp-msg wp-msg-agent">Hi there. How can I help you today?</div>
                    <div className="wp-msg wp-msg-user">Do you offer a free trial?</div>
                    <div className="wp-msg wp-msg-agent">Yes. You can start free and explore it on your own website.</div>
                    <a href="pricing.html" className="wp-chat-cta">Start free trial</a>
                  </div>
                  <div className="wp-chat-input"><span>Ask anything…</span><span className="wp-chat-send" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 12 14-7-4 14-3-5Z" /></svg></span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="wp-trust" aria-label="Supported platforms and partnerships">
            <div className="wp-shell wp-trust-grid">
              <div className="wp-trust-group">
                <span className="wp-trust-label">Works with modern websites</span>
                <div className="wp-wordmarks">
                  <span><img src="/images/partners/shopify.svg" alt="Shopify" /></span>
                  <span><img src="/images/partners/meta.svg" alt="Meta" /></span>
                  <b><i className="wp-zap-mark"></i>zapier</b>
                  <b><i className="wp-wp-mark">W</i>WordPress</b>
                  <b>WIX</b><b><em>webflow</em></b>
                </div>
              </div>
              <div className="wp-partner-group">
                <span className="wp-trust-label">Partner programs</span>
                <div><span><img src="/images/partners/meta.svg" alt="Meta" />Business Partner</span><span><img src="/images/partners/shopify.svg" alt="Shopify" />Partner</span></div>
              </div>
            </div>
          </section>

          <section className="wp-feature wp-feature-conversations" id="wp-live-demo">
            <div className="wp-shell wp-feature-grid">
              <div className="wp-product-window wp-inbox-window" aria-label="Illustrative conversation dashboard">
                <span className="wp-demo-label">Illustrative product preview</span>
                <div className="wp-window-top">{AGENT_LOGO}<strong>StepsAI</strong><span className="wp-window-tools"><i></i><i></i><i></i></span></div>
                <div className="wp-app-grid">
                  <aside className="wp-app-nav"><b>Analytics</b><b className="is-active">Conversations</b><b>Leads</b><b>Knowledge</b><b>Settings</b></aside>
                  <div className="wp-conversations">
                    <div className="wp-app-title"><h3>Conversations</h3><p>See what visitors are asking and how your agent responds.</p></div>
                    <div className="wp-filter-row"><span className="is-active">All</span><span>Unresolved</span><span>Leads</span><span>Sales</span></div>
                    <div className="wp-conversation-row"><i>R</i><span><strong>Rohit Sharma</strong><small>2 min ago</small></span><p>Do you offer a free trial?</p><em className="is-lead">Lead</em></div>
                    <div className="wp-conversation-row"><i>P</i><span><strong>Priya Mehta</strong><small>12 min ago</small></span><p>What are your pricing plans?</p><em className="is-sale">Sales</em></div>
                    <div className="wp-conversation-row"><i>S</i><span><strong>Sarah Khan</strong><small>28 min ago</small></span><p>Can I integrate this with Shopify?</p><em>Support</em></div>
                    <div className="wp-conversation-row"><i>A</i><span><strong>Arjun Nair</strong><small>1 hour ago</small></span><p>Do you have an API?</p><em>Support</em></div>
                  </div>
                </div>
              </div>
              <div className="wp-feature-copy">
                <span className="wp-sequence">Monitor in real time</span>
                <h2>Turn conversations into opportunities.</h2>
                <p>See what visitors ask, understand intent, and capture useful details directly from your website.</p>
                <ul className="wp-check-list"><li>Track active conversations</li><li>Identify high-intent questions</li><li>Keep the full context with each lead</li></ul>
                <a href="analytics.html">Explore analytics <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </section>

          <section className="wp-feature wp-feature-knowledge">
            <div className="wp-shell wp-feature-grid wp-feature-grid-reverse">
              <div className="wp-feature-copy">
                <span className="wp-sequence">Grounded in your content</span>
                <h2>Give accurate answers using your business knowledge.</h2>
                <p>Connect your website, help content, documents, and FAQs so the agent answers from information you control.</p>
                <ul className="wp-check-list"><li>Sync public website content</li><li>Add FAQs, PDFs, and documents</li><li>Review connected sources and status</li></ul>
                <a href="skills.html">Learn how knowledge works <span aria-hidden="true">→</span></a>
              </div>
              <div className="wp-product-window wp-knowledge-window">
                <span className="wp-demo-label">Illustrative product preview</span>
                <div className="wp-kb-head"><span><strong>Knowledge base</strong><small>Content sources available to your agent</small></span><a href="skills.html">Add source</a></div>
                <div className="wp-source-row"><span className="wp-source-icon is-web"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" /></svg></span><span><strong>Website</strong><small>Public pages</small></span><em className="is-connected">Connected</em><time>Synced recently</time></div>
                <div className="wp-source-row"><span className="wp-source-icon is-blue"><svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7zM14 3v5h5M10 12h5M10 16h5" /></svg></span><span><strong>Help center</strong><small>12 articles</small></span><em>Ready</em><time>Updated today</time></div>
                <div className="wp-source-row"><span className="wp-source-icon is-red"><svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7zM14 3v5h5M10 13h5M10 17h3" /></svg></span><span><strong>PDF documents</strong><small>3 files</small></span><em>Ready</em><time>Updated recently</time></div>
                <div className="wp-source-row"><span className="wp-source-icon is-violet"><svg viewBox="0 0 24 24"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4M12 17h.01" /></svg></span><span><strong>Custom FAQs</strong><small>24 questions</small></span><em>Ready</em><time>Updated recently</time></div>
              </div>
            </div>
          </section>

          <section className="wp-story" data-wp-story="" ref={storyRef}>
            <div className="wp-shell wp-story-grid">
              <div className="wp-story-copy">
                <span className="wp-sequence">See it in action</span>
                <h2>A better experience for every visitor.</h2>
                <p>Answer questions, recommend products, book meetings, or capture leads in a natural conversation.</p>
                <ol className="wp-story-steps">
                  {STORY_STEPS.map((label, index) => (
                    <li key={label} className={activeStep === index ? 'is-active' : undefined} data-wp-step={index}>
                      <button type="button" aria-pressed={activeStep === index} onClick={() => selectStep(index)}><span>{index + 1}</span>{label}</button>
                    </li>
                  ))}
                </ol>
                <button className="wp-btn wp-btn-primary" type="button" data-wp-replay="" onClick={playStory}>Replay example <span aria-hidden="true">→</span></button>
              </div>
              <div className="wp-story-demo" aria-live="polite">
                <span className="wp-demo-label">Illustrative product preview</span>
                <div className="wp-browser wp-booking-browser">
                  <div className="wp-browser-bar"><span></span><span></span><span></span><b>yourwebsite.com</b></div>
                  <div className="wp-booking-scene">
                    <div className={partClass('wp-demo-message is-user', 0)} data-wp-demo-part="0">Hi. Can I book a product demo?</div>
                    <div className={partClass('wp-demo-message is-agent', 1)} data-wp-demo-part="1">{AGENT_LOGO}<p>Yes. I can help you choose an available time.</p></div>
                    <div className={partClass('wp-booking-card', 2)} data-wp-demo-part="2"><span className="wp-calendar-icon"><svg viewBox="0 0 24 24"><path d="M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2ZM7 2v4M17 2v4M3 9h18M8 14h3M14 14h2" /></svg></span><span><strong>Book a demo</strong><small>Choose a time that works for you</small><a href="contact.html">Select time <b aria-hidden="true">→</b></a></span></div>
                    <div className={partClass('wp-demo-message is-user is-final', 3)} data-wp-demo-part="3">That works. Thanks!</div>
                  </div>
                </div>
                <span className="wp-story-note" aria-hidden="true">From question<br />to confirmed action<svg viewBox="0 0 58 44"><path d="M51 5C29 9 17 18 10 34M18 29l-8 5 1-10" /></svg></span>
              </div>
            </div>
          </section>

          <section className="wp-integrations">
            <div className="wp-shell">
              <header className="wp-section-center"><span className="wp-sequence">Integrations</span><h2>Works with your favourite tools.</h2><p>Connect StepsAI to the tools you already use. No complex setup required.</p></header>
              <div className="wp-integration-list">
                <a href="integrations.html"><img src="/images/partners/shopify.svg" alt="" /><span><strong>Shopify</strong><small>Sync products and orders</small><b>Connect →</b></span></a>
                <a href="integrations.html"><span className="wp-platform-mark is-wordpress">W</span><span><strong>WordPress</strong><small>Add the widget to your site</small><b>Connect →</b></span></a>
                <a href="integrations.html"><span className="wp-platform-mark is-zapier"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" /></svg></span><span><strong>Zapier</strong><small>Connect automated workflows</small><b>Connect →</b></span></a>
                <a href="integrations.html"><span className="wp-platform-mark is-webflow">W</span><span><strong>Webflow</strong><small>Add it to your published site</small><b>Connect →</b></span></a>
              </div>
            </div>
          </section>

          <section className="wp-faq" id="faq">
            <div className="wp-shell wp-faq-grid">
              <header><span className="wp-sequence">FAQ</span><h2>Frequently asked questions.</h2><p>What businesses usually want to know about the website agent.</p><a href="help-center.html">View all questions <span aria-hidden="true">→</span></a></header>
              <div className="wp-faq-list">
                {WP_FAQS.map((item, index) => {
                  const isOpen = openWpFaq === index;
                  return (
                    <div key={item.id} className={isOpen ? 'wp-faq-item is-open' : 'wp-faq-item'}>
                      <button type="button" aria-expanded={isOpen} aria-controls={item.id} onClick={() => setOpenWpFaq(isOpen ? null : index)}>{item.q}<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg></button>
                      <div id={item.id} hidden={!isOpen}><p>{item.a}</p></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="wp-final">
            <div className="wp-shell"><span className="wp-sequence">Ready to get started?</span><h2>Give your website an agent, not a contact form.</h2><p>Start with a guided setup and give visitors a clearer path to answers.</p><a className="wp-btn wp-btn-primary" href="pricing.html">Start free trial <span aria-hidden="true">→</span></a></div>
          </section>

          <footer className="wp-mini-footer" aria-label="Website agent footer">
            <div className="wp-shell">
              <div className="wp-mini-brand"><a href="index.html#top"><img src="/images/logo.png" alt="" width="36" height="25" /><strong>StepsAI</strong></a><p>AI agents for customer conversations, follow-up, and support.</p></div>
              <nav className="wp-mini-links" aria-label="Footer navigation">
                <div><strong>Product</strong><a href="agents.html">AI Agents</a><a href="analytics.html">Analytics</a><a href="integrations.html">Integrations</a><a href="pricing.html">Pricing</a></div>
                <div><strong>Solutions</strong><a href="industry-ecommerce.html">E-commerce</a><a href="industry-healthcare.html">Healthcare</a><a href="industry-real-estate.html">Real Estate</a><a href="industries.html">All industries</a></div>
                <div><strong>Resources</strong><a href="help-center.html">Help Center</a><a href="blog.html">Blog</a><a href="case-studies.html">Case Studies</a><a href="academy.html">Academy</a></div>
                <div><strong>Company</strong><a href="about.html">About</a><a href="partner.html">Partners</a><a href="contact.html">Contact</a><a href="team.html">Team</a></div>
              </nav>
              <div className="wp-mini-legal"><span>© 2026 StepsAI. All rights reserved.</span><span><a href="privacy-policy.html">Privacy</a><a href="terms-of-service.html">Terms</a><a href="security.html">Security</a></span></div>
            </div>
          </footer>
        </div>

        <div className="legacy-website-page" hidden aria-hidden="true">

          <section className="vertical-hero">
            <div className="container vertical-hero-inner">
              <div className="reveal">
                <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Website</span>
                <h1 className="vertical-headline">Right on your site, before they leave the page.</h1>
                <p className="vertical-tagline">In your brand colors, answering inline and capturing the lead — no redirect to a separate contact page.</p>
                <div className="vertical-hero-actions">
                  <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                  <a href="agents.html#channels" className="vertical-hero-link">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    All channels
                  </a>
                </div>
              </div>
              <div className="reveal">
                <div className="browser-mock">
                  <div className="browser-mock-bar"><span></span><span></span><span></span></div>
                  <div className="browser-mock-body">
                    <div className="widget-launcher">
                      <div className="widget-launcher-head">Nyra Store<span>Typically replies instantly</span></div>
                      <div className="widget-launcher-body">
                        <div className="widget-launcher-bubble">Want us to reach out with today's offers?</div>
                        <div className="widget-lead-row"><span>Email</span><strong>aarav@nyra.co</strong></div>
                        <span className="widget-lead-submit">Notify me</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--raised section--atmo">
            <div className="atmo-mesh" aria-hidden="true">
              <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
              <div className="atmo-blob atmo-blob--emerald atmo-blob--br"></div>
            </div>
            <div className="container">
              <div className="spread reveal">
                <div>
                  <div className="spread-index">02 / Inline, not a redirect</div>
                  <h3>Nobody leaves your page to ask a question.</h3>
                  <p>The widget answers right where they already are — product questions, shipping, availability — and captures the lead in the same breath, no contact form, no new tab.</p>
                </div>
                <div className="spread-visual">
                  <div className="live-widget">
                    <div className="lw-head"><span className="lw-avatar">N</span><div><div className="lw-name">Agent</div><div className="lw-status">Nyra Store · Active</div></div></div>
                    <div className="lw-body">
                      <div className="lw-bubble user">Do you ship to Bangalore?</div>
                      <div className="lw-bubble agent">Yes — 2-3 days, free above ₹999. Want me to check a specific pincode?</div>
                      <div className="lw-bubble user">560068</div>
                      <div className="lw-bubble agent">That's serviceable, 2-day delivery. Since your cart's above ₹999, shipping is free.</div>
                    </div>
                    <div className="lw-footer">
                      <div className="lw-input">Ask me anything</div>
                      <span className="lw-send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 18 9-18 9 4-9-4-9Z" /></svg></span>
                    </div>
                    <div className="lw-powered">Powered by <b>StepsAI</b></div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="section section--raised">
            <div className="container">
              <div className="section-head reveal">
                <p className="kicker"><span className="n">03</span> No redirect, ever</p>
                <h2 className="section-title">The widget answers before they leave the page.</h2>
                <p className="section-sub">No popup window, no new tab, no separate contact page. The question gets answered and the lead gets captured right where the visitor already is.</p>
              </div>
              <div className="sig-web-diagram reveal">
                <div className="sig-web-frame">
                  <p className="sig-web-frame-label">Before &middot; visitor lands on the page</p>
                  <div className="browser-mock sig-web-browser">
                    <div className="browser-mock-bar"><span></span><span></span><span></span></div>
                    <div className="browser-mock-body sig-web-page">
                      <div className="sig-web-page-block sig-web-page-block--img"></div>
                      <div className="sig-web-page-block sig-web-page-block--text"></div>
                      <div className="sig-web-page-block sig-web-page-block--text short"></div>
                      <span className="sig-web-launcher-dot">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
                <svg className="sig-web-connector" viewBox="0 0 64 32" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2,16 H54" />
                  <path d="M46,8 L56,16 L46,24" />
                </svg>
                <div className="sig-web-frame">
                  <p className="sig-web-frame-label">After &middot; same page, still on it</p>
                  <div className="browser-mock sig-web-browser">
                    <div className="browser-mock-bar"><span></span><span></span><span></span></div>
                    <div className="browser-mock-body sig-web-page sig-web-page--open">
                      <div className="live-widget sig-web-widget">
                        <div className="lw-head"><span className="lw-avatar">N</span><div><div className="lw-name">Agent</div><div className="lw-status">Nyra Store &middot; Active</div></div></div>
                        <div className="lw-body">
                          <div className="lw-bubble user">Does this run true to size?</div>
                          <div className="lw-bubble agent">Runs slightly small &mdash; most people size up. Want me to hold one for you?</div>
                          <span className="sig-web-pill sig-web-pill--captured">Lead captured</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--base section--atmo">
            <div className="atmo-mesh" aria-hidden="true">
              <div className="atmo-blob atmo-blob--rose atmo-blob--tr"></div>
              <div className="atmo-blob atmo-blob--blue atmo-blob--bl"></div>
            </div>
            <div className="container">
              <div className="spread reverse reveal">
                <div>
                  <div className="spread-index">04 / Your colors, your logo</div>
                  <h3>It looks like it was built for your site — because it was.</h3>
                  <p>Pick your accent color, set the position, and it renders in your brand from the first visitor. No StepsAI branding forced on you.</p>
                </div>
                <div className="setup-visual">
                  <div className="setup-field-label">Accent color</div>
                  <div className="setup-swatches">
                    <span className="setup-swatch active" style={{ background: '#1A56DB' }}></span>
                    <span className="setup-swatch" style={{ background: '#0B9E58' }}></span>
                    <span className="setup-swatch" style={{ background: '#D97917' }}></span>
                  </div>
                  <div className="setup-field-label">Widget position</div>
                  <div className="setup-field">Bottom right</div>
                  <div className="setup-field-label">Welcome message</div>
                  <div className="setup-field">Hi! Ask me anything about Nyra Store.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--raised section--atmo" id="faq">
            <div className="atmo-mesh" aria-hidden="true">
              <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
              <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
            </div>
            <div className="container">
              <div className="section-head reveal">
                <p className="kicker"><span className="n">05</span> Questions</p>
                <h2 className="section-title">About the website widget.</h2>
              </div>

              <div className="faq-grid reveal">
                <div>
                  {LEGACY_FAQS.slice(0, 2).map((item, i) => (
                    <FaqItem key={item.q} question={item.q} isOpen={openLegacyFaq === i} onToggle={() => setOpenLegacyFaq(openLegacyFaq === i ? null : i)}>
                      <p>{item.a}</p>
                    </FaqItem>
                  ))}
                </div>
                <div>
                  {LEGACY_FAQS.slice(2, 4).map((item, i) => {
                    const idx = i + 2;
                    return (
                      <FaqItem key={item.q} question={item.q} isOpen={openLegacyFaq === idx} onToggle={() => setOpenLegacyFaq(openLegacyFaq === idx ? null : idx)}>
                        <p>{item.a}</p>
                      </FaqItem>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="section section--dark final-cta" id="final-cta">
            <div className="container reveal" style={{ textAlign: 'center' }}>
              <h2 className="final-cta-headline">Give your website an agent, not a contact form.</h2>
              <p className="final-cta-sub">Same afternoon setup. One script tag.</p>
              <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
              <p className="final-cta-note">No credit card. Cancel any time.</p>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}
