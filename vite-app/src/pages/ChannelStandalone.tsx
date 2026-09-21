import { useEffect, useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-standalone.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';

const STANDALONE_FAQS = [
  { q: 'Can I use my own domain?', a: 'Yes — point any domain or subdomain you own at your page, or use the free stepsai.link address to start.' },
  { q: 'Does it work without any other setup?', a: "Yes — it's the fastest way to go live. Give it your business details, and the page is ready in minutes, no website required." },
  { q: 'Is it indexed by search engines?', a: 'Yes, by default — you can also set it to private if you only want it reachable via your own shared link or QR code.' },
  { q: 'Can I brand it to match my business?', a: 'Yes — logo, colors, and welcome message are all yours, same as every other channel.' },
];

/**
 * Ports industries.js's initLiveWidgetTilt, which useIndustryPageBehavior
 * does not cover — the lerp-smoothed 3D hover tilt on .live-widget cards.
 */
function useLiveWidgetTilt() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const widgets = Array.from(document.querySelectorAll<HTMLElement>('.live-widget')).filter(
      (widget) => !widget.closest('[data-feature-demo]')
    );
    if (!widgets.length) return;

    const teardown: Array<() => void> = [];

    widgets.forEach((widget) => {
      let isHovered = false;
      let reqId: number | null = null;
      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;

      function updatePhysics() {
        currentRotX += (targetRotX - currentRotX) * 0.12;
        currentRotY += (targetRotY - currentRotY) * 0.12;

        widget.style.transform = isHovered
          ? `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateZ(14px) translateY(-3px) scale3d(1.012, 1.012, 1.012)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px) scale3d(1, 1, 1)';

        if (isHovered || Math.abs(currentRotX) > 0.05 || Math.abs(currentRotY) > 0.05) {
          reqId = requestAnimationFrame(updatePhysics);
        } else {
          reqId = null;
        }
      }

      function onEnter() {
        isHovered = true;
        if (!reqId) reqId = requestAnimationFrame(updatePhysics);
      }
      function onMove(e: MouseEvent) {
        const rect = widget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        targetRotX = -(y / (rect.height / 2)) * 6;
        targetRotY = (x / (rect.width / 2)) * 6;
        if (!reqId) reqId = requestAnimationFrame(updatePhysics);
      }
      function onLeave() {
        isHovered = false;
        targetRotX = 0;
        targetRotY = 0;
        if (!reqId) reqId = requestAnimationFrame(updatePhysics);
      }

      widget.addEventListener('mouseenter', onEnter);
      widget.addEventListener('mousemove', onMove);
      widget.addEventListener('mouseleave', onLeave);
      teardown.push(() => {
        widget.removeEventListener('mouseenter', onEnter);
        widget.removeEventListener('mousemove', onMove);
        widget.removeEventListener('mouseleave', onLeave);
        if (reqId) cancelAnimationFrame(reqId);
      });
    });

    return () => teardown.forEach((fn) => fn());
  }, []);
}

/** Ported 1:1 from channel-standalone.html's <main>. */
export function ChannelStandalone() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useLiveWidgetTilt();

  return (
    <Layout
      title="Agent Page — StepsAI | A shareable link for your AI agent"
      description="A public URL where your agent lives on its own — for businesses without a website, a link-in-bio, or a QR code at the counter."
    >
      <Breadcrumb section="Channels" sectionHref="channels.html" label="Agent Page" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Agent Page</span>
              <h1 className="vertical-headline">Give your agent a place to live — no website required.</h1>
              <p className="vertical-tagline">A public URL where your agent lives on its own — for businesses without a website, a link-in-bio, or a QR code at the counter.</p>
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
                <div className="url-bar-row"><span className="url-bar-pill"><b>stepsai.link</b>/nyra-store</span></div>
                <div className="browser-mock-body" style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <div className="widget-launcher" style={{ maxWidth: '280px' }}>
                    <div className="widget-launcher-head">Nyra Store<span>Typically replies instantly</span></div>
                    <div className="widget-launcher-body">
                      <div className="widget-launcher-bubble">Hi! Ask me anything about Nyra Store.</div>
                      <div className="widget-lead-row"><span>Powered by</span><strong>StepsAI</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> When you need it</p>
              <h2 className="section-title">For everywhere a website doesn't reach.</h2>
            </div>
            <div className="scenario-strip reveal reveal-stagger">
              <div className="scenario-card" style={{ '--i': 0 } as CSSProperties}>
                <span className="scenario-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9Z" /></svg></span>
                <h4>No website yet</h4>
                <p>Skip building one. Your agent's own page becomes your storefront, live in minutes.</p>
              </div>
              <div className="scenario-card" style={{ '--i': 1 } as CSSProperties}>
                <span className="scenario-card-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></span>
                <h4>Link-in-bio</h4>
                <p>Drop it straight into your Instagram bio — one link that actually answers questions, not just a menu of other links.</p>
              </div>
              <div className="scenario-card" style={{ '--i': 2 } as CSSProperties}>
                <span className="scenario-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><path d="M14 14h3v3M20 14v3h-3M14 20h3v-3" /></svg></span>
                <h4>QR code at the counter</h4>
                <p>Print it on a table tent or storefront sticker — a customer scans, and your agent is already answering.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="spread reveal">
              <div>
                <div className="spread-index">03 / Not a separate setup</div>
                <h3>Same brain, same answers, one more surface.</h3>
                <p>It's trained once and knows everything your website or WhatsApp agent knows — the standalone page just gives it a URL of its own.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">N</span><div><div className="lw-name">Agent</div><div className="lw-status">Nyra Store · Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">Are you open on Sundays?</div>
                    <div className="lw-bubble agent">Yes, 11am to 6pm. Want directions or to book ahead?</div>
                    <div className="lw-bubble user">Can I book a table for 4, this Sunday at 1pm?</div>
                    <div className="lw-bubble agent">Booked &mdash; table for 4, Sunday at 1pm. You'll get a confirmation text shortly.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Questions</p>
              <h2 className="section-title">About the standalone page.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {STANDALONE_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {STANDALONE_FAQS.slice(2, 4).map((item, i) => {
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

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Give your business a page, even without a website.</h2>
            <p className="final-cta-sub">Same afternoon setup. Live at a URL of your own.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
