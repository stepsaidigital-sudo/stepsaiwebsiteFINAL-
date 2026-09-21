import type { CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/career-contact.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';

/** Ported 1:1 from career.html's <main>. */
export function Career() {
  useIndustryPageBehavior();
  return (
    <Layout title="Careers — StepsAI | Join the team" description="A small team shipping to thousands of businesses. Open roles in Marketing and Sales, based in Hyderabad.">
      <Breadcrumb section="Company" sectionHref="about.html" label="Careers" />

      <main id="top">
        {/* 1. HERO — Join Our Team */}
        <section className="vertical-hero">
          <div className="container reveal" style={{ maxWidth: '800px' }}>
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Careers</span>
            <h1 className="vertical-headline">What you build here goes live in days, not quarters.</h1>
            <p className="vertical-tagline">Small team, big scope &mdash; you're shipping for thousands of businesses, not a handful of pilot users.</p>
          </div>
        </section>

        {/* 2. OPEN ROLES */}
        <section className="section section--raised section--atmo" id="roles">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Open roles</p>
              <h2 className="section-title">Hyderabad, on-site.</h2>
              <p className="section-sub">Every role below works from the same office &mdash; we've found close collaboration beats async pings for a team this size.</p>
            </div>

            <div className="role-group reveal reveal-stagger">
              <h3 className="role-group-title">Marketing</h3>
              <div className="role-row" style={{ '--i': 0 } as CSSProperties}><span className="role-row-name">Social Media Manager</span><span className="role-row-type">Full-time</span><a href="#apply" className="role-row-apply">Apply &rarr;</a></div>
              <div className="role-row" style={{ '--i': 1 } as CSSProperties}><span className="role-row-name">Motion Graphics / Video Editor</span><span className="role-row-type">Full-time</span><a href="#apply" className="role-row-apply">Apply &rarr;</a></div>
              <div className="role-row" style={{ '--i': 2 } as CSSProperties}><span className="role-row-name">SEO Specialist</span><span className="role-row-type">Full-time</span><a href="#apply" className="role-row-apply">Apply &rarr;</a></div>
              <div className="role-row" style={{ '--i': 3 } as CSSProperties}><span className="role-row-name">Performance Marketer</span><span className="role-row-type">Full-time</span><a href="#apply" className="role-row-apply">Apply &rarr;</a></div>
              <div className="role-row" style={{ '--i': 4 } as CSSProperties}><span className="role-row-name">UGC Content Creator</span><span className="role-row-type">Contract</span><a href="#apply" className="role-row-apply">Apply &rarr;</a></div>
            </div>

            <div className="role-group reveal reveal-stagger" style={{ marginTop: '40px' }}>
              <h3 className="role-group-title">Sales</h3>
              <div className="role-row" style={{ '--i': 0 } as CSSProperties}><span className="role-row-name">Account Executive</span><span className="role-row-type">Full-time</span><a href="#apply" className="role-row-apply">Apply &rarr;</a></div>
              <div className="role-row" style={{ '--i': 1 } as CSSProperties}><span className="role-row-name">SDR / Cold Calling Specialist</span><span className="role-row-type">Full-time</span><a href="#apply" className="role-row-apply">Apply &rarr;</a></div>
            </div>

            <p className="role-fallback-note reveal">Don't see your role listed? We hire great people first and find the right seat second &mdash; apply anyway below.</p>
          </div>
        </section>

        {/* 3. WHY JOIN STEPSAI */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Why join</p>
              <h2 className="section-title">Small team. Real ownership.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>High ownership</h4><p>Small team, big scope. Your work ships directly to thousands of businesses &mdash; not a queue behind five approvals.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>One room, not five timezones</h4><p>The whole team works from the same Hyderabad office. Decisions happen in a conversation, not a thread.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Grow as we grow</h4><p>Early joiners grow with the company. Your scope compounds the same way the product does.</p></div>
            </div>
          </div>
        </section>

        {/* 4. WHAT WE OFFER */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> What we offer</p>
              <h2 className="section-title">What you actually get, day to day.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>Real ownership</h4><p>You'll own a feature, a channel, or a number &mdash; not a slice of one someone else owns.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>Direct access</h4><p>No layer of management between you and the founder. Ideas get heard the day you have them.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Room to grow</h4><p>A rocket-trajectory company means your role today isn't the ceiling &mdash; it's the starting point.</p></div>
            </div>
          </div>
        </section>

        {/* 5. LIFE HERE */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Life here</p>
              <h2 className="section-title">What a day actually looks like.</h2>
              <p className="section-sub">Photos of the team and the office go here once we have a real set to show &mdash; not stock photography standing in for people who don't work here. See who's already here on the <a href="team.html">team page</a>.</p>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>Co-located, not remote-first</h4><p>Everyone works from the same Hyderabad office. You'll know who's shipping what, in real time.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>Small enough to move fast</h4><p>A feature you ship on Monday can be live for real customers by Wednesday.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Built by people who use it</h4><p>The team runs the product on its own outreach and support before asking a single customer to.</p></div>
            </div>
          </div>
        </section>

        {/* 6. HOW HIRING WORKS */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">06</span> How hiring works</p>
              <h2 className="section-title">One form. A real conversation. A fast answer.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>1. Apply</h4><p>Send your resume and a short note on what you'd want to work on &mdash; same form, whichever role you're closest to.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>2. Talk</h4><p>A real conversation with the team, not a multi-stage panel. We're deciding if this is a fit, both ways.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>3. Decide</h4><p>We hire great people first and find the right seat second &mdash; you'll hear back either way, quickly.</p></div>
            </div>
          </div>
        </section>

        {/* 7. CTA — send your resume + a short note
             Form has no backend wired yet — inert on submit, matches
             the same convention as pricing.html's pricing-card-cta. */}
        <section className="section section--dark" id="apply">
          <div className="container" style={{ maxWidth: '640px' }}>
            <div className="section-head center reveal">
              <p className="kicker">Apply</p>
              <h2 className="section-title">Tell us who you are and what you'd work on.</h2>
              <p className="section-sub">One form, every role. Attach your resume and a couple of lines on what you'd want to own here.</p>
            </div>
            <form className="career-apply-form reveal" onSubmit={(event) => event.preventDefault()}>
              <div className="career-apply-row">
                <div><label htmlFor="applyName">Name</label><input id="applyName" type="text" required placeholder="Your name" /></div>
                <div><label htmlFor="applyEmail">Email</label><input id="applyEmail" type="email" required placeholder="you@email.com" /></div>
              </div>
              <div><label htmlFor="applyRole">Role you're applying for</label>
                <select id="applyRole">
                  <option>Social Media Manager</option>
                  <option>Motion Graphics / Video Editor</option>
                  <option>SEO Specialist</option>
                  <option>Performance Marketer</option>
                  <option>UGC Content Creator</option>
                  <option>Account Executive</option>
                  <option>SDR / Cold Calling Specialist</option>
                  <option>Something else</option>
                </select>
              </div>
              <div><label htmlFor="applyResume">Resume link</label><input id="applyResume" type="url" placeholder="Link to your resume or portfolio" /></div>
              <div><label htmlFor="applyNote">A short note</label><textarea id="applyNote" rows={4} placeholder="What would you want to work on here?"></textarea></div>
              <button type="submit" className="btn btn-accent btn-lg" style={{ width: '100%' }}>Send application</button>
              <p className="career-apply-note">This form isn't wired to a backend yet &mdash; swap in the real application destination before this page goes live.</p>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
