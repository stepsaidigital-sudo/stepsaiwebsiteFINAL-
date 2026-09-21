import type { CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';

/** Ported 1:1 from founders-note.html's <main>. */
export function FoundersNote() {
  useIndustryPageBehavior();
  return (
    <Layout title="Founder's Note — StepsAI | Reshmanth Jonnalagadda" description="Why we built StepsAI — a note from our founder on the moment a missed question costs a business the sale.">
      <Breadcrumb section="Company" sectionHref="about.html" label="Founder's Note" />

      <main id="top">

        <section className="vertical-hero" style={{ paddingBottom: '40px' }}>

          <div className="container reveal" style={{ maxWidth: '760px' }}>
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Founder&#39;s Note</span>
            <h1 className="vertical-headline">The moment a question goes unanswered.</h1>
            <p className="vertical-tagline">A note from Reshmanth Jonnalagadda, Founder &amp; CEO of StepsAI.</p>
          </div>
        </section>

        <section className="section section--base section--atmo" style={{ paddingTop: 0 }}>
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container" style={{ maxWidth: '720px' }}>
            <div className="reveal" style={{ fontSize: '17px', lineHeight: '1.75', color: 'var(--text-secondary)' }}>
              <p style={{ marginBottom: '22px' }}>Most businesses lose the sale the moment a question goes unanswered. Not because the product was wrong, or the price was too high — because nobody was there to answer "is this in stock?" at 11pm on a Tuesday.</p>
              <p style={{ marginBottom: '22px' }}>I watched it happen over and over: a customer messages, gets no reply for hours, and buys somewhere else. Not out of impatience — out of necessity. They needed an answer, and someone else gave it to them first.</p>
              <p style={{ marginBottom: '22px' }}>We built StepsAI so that never happens. Not a chatbot that reads from a script and gives up the moment a question gets specific — an agent that actually knows your business, checks your real stock and your real calendar, and takes the action itself. Books the meeting. Updates the order. Saves the lead. The conversation doesn't end with "let me check and get back to you."</p>
              <p style={{ marginBottom: '22px' }}>It answers only from what you've actually told it — your website, your documents, your policies. When it doesn't know something, it says so, plainly, and brings in a person. No invented prices. No guessed policies. That's not a limitation we accepted reluctantly — it's the whole point. Trust is the product.</p>
              <p>Every business we've talked to has the same story, just with different words: a customer who almost left, and someone on the team who wishes they'd been faster. We're building the thing that's faster, every time, for everyone.</p>
            </div>

            <div className="reveal" style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--text-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 650, fontSize: '17px', flexShrink: 0 }}>RJ</span>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 650 }}>Reshmanth Jonnalagadda</div>
                <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginTop: '2px' }}>Founder &amp; CEO, StepsAI</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>Why StepsAI exists</h4><p>A missed message is a lost customer. We close that gap, on every channel, at every hour.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>What we won't do</h4><p>Invent an answer to look helpful. If it doesn't know, it says so — every time.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Where we're headed</h4><p>One agent your customers trust, wherever they already are — website, WhatsApp, Instagram, and beyond.</p></div>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">See it answer your first question.</h2>
            <p className="final-cta-sub">Set it up this afternoon. No credit card required.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">Or read more <a href="about.html" style={{ color: 'inherit', textDecoration: 'underline' }}>about StepsAI &rarr;</a></p>
          </div>
        </section>

      </main>
    </Layout>
  );
}
