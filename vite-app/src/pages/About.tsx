import type { CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/about.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';

/** Ported 1:1 from about.html's <main>. */
export function About() {
  useIndustryPageBehavior();
  return (
    <Layout title="About — StepsAI | Answers shouldn't wait for office hours." description="StepsAI builds AI agents that answer, act, and convert for businesses — so no customer question ever goes unanswered.">
      <Breadcrumb section="Company" sectionHref={null} label="About" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container reveal" style={{ maxWidth: '800px' }}>
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>About StepsAI</span>
            <h1 className="vertical-headline">Answers shouldn't wait for office hours.</h1>
            <p className="vertical-tagline">Most businesses lose the sale the moment a question goes unanswered. We build AI agents that answer, act, and convert &mdash; on WhatsApp, Instagram, and your website &mdash; at 2am on a Sunday just as well as 2pm on a Tuesday.</p>
          </div>
        </section>

        {/* 2. FOUNDER'S NOTE — carries the origin; the full essay lives
             on founders-note.html, this is the on-page carrier + link */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Founder's note</p>
              <h2 className="section-title">Why we built this in the first place.</h2>
            </div>
            <div className="founder-quote reveal">
              <blockquote>Most businesses lose the sale the moment a question goes unanswered. We built StepsAI so that never happens.</blockquote>
              <cite><b>Reshmanth Jonnalagadda</b> &mdash; Founder &amp; CEO, StepsAI &middot; <a href="founders-note.html">Read the founder's note &rarr;</a></cite>
            </div>
          </div>
        </section>

        {/* 3. WHAT WE PROMISE — merges the old "What we believe" cards
             (same content, reframed as commitments rather than beliefs) */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> What we promise</p>
              <h2 className="section-title">Not a chatbot. An agent that acts.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>It never invents an answer</h4><p>It answers only from your website and your documents. When it doesn't know, it says so and calls a person &mdash; no guessed prices, no invented policies.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>It takes the action, not just the reply</h4><p>Books the meeting. Updates the order. Saves the lead. The conversation isn't finished until something actually happened.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>You stay in control</h4><p>Every conversation is visible. Step in any time &mdash; the handover keeps the full history, so nobody repeats themselves.</p></div>
            </div>
          </div>
        </section>

        {/* 4. THE PEOPLE BEHIND STEPSAI — real founder only; no invented
             team photos or names standing in for people who aren't here */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> The people behind it</p>
              <h2 className="section-title">A small team, building in the open.</h2>
            </div>
            <div className="about-people-card reveal">
              <span className="about-people-avatar">RJ</span>
              <div>
                <div className="about-people-name">Reshmanth Jonnalagadda</div>
                <div className="about-people-role">Founder &amp; CEO</div>
                <a href="https://www.linkedin.com/in/reshmanth-jonnalagadda/" className="about-people-link" target="_blank" rel="noopener">Connect on LinkedIn &rarr;</a>
              </div>
            </div>
            <p className="role-fallback-note">The rest of the team's profiles go here as we grow past a one-person founding story &mdash; see the <a href="team.html">team page</a> or <a href="career.html">open roles</a> if you'd rather be one of them.</p>
          </div>
        </section>

        {/* 5. OUR STORY — grounded in what's actually confirmed: the
             founder's own stated reason, the real verticals covered,
             no invented funding/headcount/founding-date claims */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Our story</p>
              <h2 className="section-title">Started with one unanswered question.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>Where we started</h4><p>Watching businesses lose real customers to something completely fixable: a question that sat unanswered for a few hours too long.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>Where we are now</h4><p>The same agent runs today across e-commerce, healthcare, real estate, education, and beyond &mdash; answering, deciding, and acting without waiting for a human to be free.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Where we're going</h4><p>Every business, however small, deserves the same thing a large call center gives its biggest customers: an answer, immediately, every time.</p></div>
            </div>
            <div className="stats-grid reveal reveal-stagger" data-count-container="" style={{ marginTop: '48px' }}>
              <div className="stat-cell" style={{ '--i': 0 } as CSSProperties}><div className="stat-value" data-count="900" data-suffix="K+">0</div><div className="stat-label">Chats handled</div></div>
              <div className="stat-cell" style={{ '--i': 1 } as CSSProperties}><div className="stat-value" data-count="80" data-suffix="%">0</div><div className="stat-label">Messages answered without a human</div></div>
              <div className="stat-cell" style={{ '--i': 2 } as CSSProperties}><div className="stat-value" data-count="0.5" data-decimal="1" data-suffix="s">0</div><div className="stat-label">Average first reply</div></div>
              <div className="stat-cell" style={{ '--i': 3 } as CSSProperties}><div className="stat-value" data-count="95" data-suffix="+">0</div><div className="stat-label">Languages understood</div></div>
            </div>
          </div>
        </section>

        {/* 6. CONTACT US — carrier section; the real form and real
             emails live on contact.html, this just points there clearly */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--mid"></div>
          </div>
          <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
            <p className="kicker"><span className="n">06</span> Contact us</p>
            <h2 className="section-title">Sales question, support issue, or just curious?</h2>
            <p className="section-sub">Real inboxes, no ticket maze &mdash; <a href="contact.html">see every way to reach us &rarr;</a></p>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Your next customer is already typing.</h2>
            <p className="final-cta-sub">Set it up this afternoon. See what it handles tonight.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
