import { useState } from 'react';
import '../styles/pages/pages.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7.2L5.5 9.7L11 4" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const PARTNER_FAQS = [
  { q: 'Who can become a white-label partner?', a: "Agencies, consultants, and freelancers who already manage client accounts and want to fold StepsAI into what they offer — there's no minimum client count to start." },
  { q: 'How does billing work?', a: "You're billed at wholesale for each client you run. What you charge them, and how you invoice, is entirely up to you." },
  { q: 'Is there a cost to become a partner?', a: 'No. Joining is free either way — as a white-label reseller or as an affiliate.' },
  { q: 'Can I switch between white-label and referral?', a: 'Yes. Plenty of partners start as an affiliate and move to white-label once they have a few clients running on it, or run both at once.' },
  { q: 'Do I handle support for my clients?', a: "You're the face of support to your client — we support you directly behind the scenes, so you're never stuck." },
  { q: 'Is the branding fully mine, everywhere?', a: 'Yes — your logo and name on the widget and any client-facing surface. "Powered by StepsAI" doesn’t appear.' },
];

/** Ported 1:1 from partner.html's <main>; FAQ accordion reimplemented via <FaqItem>. */
export function Partner() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout title="Partner with StepsAI | White-label it under your own brand" description="Resell StepsAI under your own brand and price — you own the client relationship, we handle the platform. Free to join.">
      <Breadcrumb section="Partnership" sectionHref={null} label="Partner With Us" />

      <main id="top">
        {/* HERO */}
        <section className="section section--base page-hero section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="hero-bg-dots" aria-hidden="true"></div>
          <div className="container page-hero-inner">
            <p className="kicker">PARTNER WITH US</p>
            <h1 className="page-headline">Your brand, your price, our platform.</h1>
            <p className="section-sub page-hero-sub">White-label StepsAI under your own name — set your own price above wholesale, own the client relationship end to end, and keep the difference.</p>

            <div className="page-hero-cta-row">
              {/* No partner-application backend yet — intentionally inert. */}
              <button className="btn btn-accent btn-lg" type="button">Become a partner</button>
              <button className="btn btn-outline btn-lg" type="button">Book a call</button>
            </div>

            <div className="stat-row">
              <div className="stat-item"><strong>White-label</strong><span>Your name, not ours</span></div>
              <div className="stat-item"><strong>Your price</strong><span>Set above wholesale</span></div>
              <div className="stat-item"><strong>Free</strong><span>To join</span></div>
            </div>

            <p style={{ marginTop: '24px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>Just want to refer clients and earn commission without reselling? <a href="become-an-affiliate.html" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Become an affiliate instead &rarr;</a></p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <p className="kicker">HOW IT WORKS</p>
            <h2 className="section-title">Your brand on the front. Our platform behind it.</h2>
            <p className="section-sub">You set it up under your own name, at your own price. We run the platform underneath — support, uptime, and updates included.</p>

            <div className="step-grid">
              <div>
                <span className="step-card-num">01</span>
                <h3 className="step-card-title">White-label setup</h3>
                <p className="step-card-desc">Your logo, your name on the widget — "Powered by StepsAI" doesn't appear anywhere your clients see.</p>
              </div>
              <div>
                <span className="step-card-num">02</span>
                <h3 className="step-card-title">Set your price</h3>
                <p className="step-card-desc">You buy at wholesale and price it however you want for your clients — the markup is yours to keep.</p>
              </div>
              <div>
                <span className="step-card-num">03</span>
                <h3 className="step-card-title">You own the relationship</h3>
                <p className="step-card-desc">Your client is your client — billing, contact, and account all sit under your business, not ours.</p>
              </div>
              <div>
                <span className="step-card-num">04</span>
                <h3 className="step-card-title">We handle the platform</h3>
                <p className="step-card-desc">Uptime, updates, and the underlying AI stay on us, so you're not maintaining infrastructure to resell it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TWO WAYS TO PARTNER */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <p className="kicker">WHAT'S INCLUDED</p>
            <h2 className="section-title">Everything a reseller needs, nothing you have to build.</h2>
            <p className="section-sub">This is the deep-end option — full ownership of the client, in exchange for actually running the relationship.</p>

            <div className="who-columns">
              <div className="who-column">
                <h3 className="who-column-title">Your brand, your price</h3>
                <ul className="who-list who-list--good">
                  <li><CheckIcon />White-label it — your name on the widget, not "Powered by StepsAI"</li>
                  <li><CheckIcon />Set your own price above wholesale and keep the difference</li>
                  <li><CheckIcon />You own the client relationship end to end</li>
                </ul>
              </div>
              <div className="who-column">
                <h3 className="who-column-title">Not ready to resell?</h3>
                <ul className="who-list who-list--good">
                  <li><CheckIcon />Send us the client instead — we handle setup, billing, and support</li>
                  <li><CheckIcon />15% recurring commission for 24 months, paid monthly, no support burden</li>
                  <li><a href="become-an-affiliate.html" style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: 600 }}>See the affiliate program &rarr;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* YOUR CLIENT STAYS YOURS */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <p className="kicker">NO CATCH</p>
            <h2 className="section-title">Your client stays yours.</h2>
            <p className="section-sub">We respect the relationship you built. We don't compete with you for the account, upsell behind your back, or cut you out after the introduction.</p>

            <div className="callout-card">
              <span className="callout-avatar">RJ</span>
              <div className="callout-body">
                <p className="callout-name">Founding partners deal with me directly.</p>
                <p className="callout-quote">Reshmanth Jonnalagadda, Founder. Partners skip the support ticket queue: if something's wrong, you reach me directly.</p>
              </div>
              {/* No scheduling backend wired yet — intentionally inert. */}
              <button className="btn btn-outline btn-sm" type="button">Book a call with me</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--base faq section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--br"></div>
          </div>
          <div className="container">
            <p className="kicker">QUESTIONS</p>
            <h2 className="section-title">Partner questions, answered.</h2>

            <div className="faq-grid">
              {PARTNER_FAQS.map((item, i) => (
                <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} chevronClassName="faq-chevron">
                  <p>{item.a}</p>
                </FaqItem>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">Start with one client. We'll set them up free, with you.</h2>
            <p className="final-cta-sub">No cost to join. No minimum. Your first white-label client can go live today.</p>
            {/* No partner-application backend yet — intentionally inert. */}
            <button className="btn btn-cta" type="button">Become a partner</button>
            <p className="final-cta-note">Free to join. Your brand, your price, from day one.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
