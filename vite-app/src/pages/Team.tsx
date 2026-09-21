import '../styles/pages/pages.css';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/about.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';

/** Ported 1:1 from team.html's <main>. pages.js only implements the FAQ
 *  accordion and team.html has no FAQ markup, so no behavior hook is needed. */
export function Team() {
  return (
    <Layout title="Team — StepsAI" description="The people building StepsAI — small on purpose, for now. See who's behind it and where the team is headed.">
      <Breadcrumb section="Company" sectionHref="about.html" label="Team" />

      <main id="top">
        {/* HERO */}
        <section className="section section--base page-hero section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="hero-bg-dots" aria-hidden="true"></div>
          <div className="container page-hero-inner">
            <p className="kicker">TEAM</p>
            <h1 className="page-headline">The people building StepsAI.</h1>
            <p className="section-sub page-hero-sub">Small on purpose, for now. Here's who's behind it &mdash; and where it's headed.</p>
          </div>
        </section>

        {/* THE TEAM — same real founder card as about.html; no invented
             team photos or names standing in for people who aren't here. */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">01</span> Who's here today</p>
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
            <p className="role-fallback-note">Read <a href="founders-note.html">why StepsAI exists</a>, or the fuller story on <a href="about.html">About</a>.</p>
          </div>
        </section>

        {/* WHY JOIN EARLY */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <p className="kicker">WHY JOIN EARLY</p>
            <h2 className="section-title">The rest of this page is whoever joins next.</h2>
            <p className="section-sub">No layers, no legacy decisions to work around &mdash; just a real product with real customers, still small enough to shape.</p>

            <div className="step-grid">
              <div>
                <span className="step-card-num">01</span>
                <h3 className="step-card-title">Direct access</h3>
                <p className="step-card-desc">No management layers between you and the founder &mdash; decisions happen in the same conversation.</p>
              </div>
              <div>
                <span className="step-card-num">02</span>
                <h3 className="step-card-title">Real ownership</h3>
                <p className="step-card-desc">Early hires shape what StepsAI becomes, not just execute a roadmap someone else already wrote.</p>
              </div>
              <div>
                <span className="step-card-num">03</span>
                <h3 className="step-card-title">Real customers, today</h3>
                <p className="step-card-desc">Not a lab project &mdash; live businesses already depend on this running correctly, right now.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">Want to be one of the names on this page?</h2>
            <p className="final-cta-sub">See what's open, and what it's actually like to build here.</p>
            <a href="career.html" className="btn btn-cta">See open roles</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
