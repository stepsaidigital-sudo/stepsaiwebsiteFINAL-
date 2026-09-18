import { useState, type FormEvent } from 'react';

/** Ported 1:1 from index.html's footer#siteFooter, duplicated across all 56 pages. */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <footer className="footer footer--9" id="siteFooter">
      <div className="footer-bg-atmosphere" aria-hidden="true">
        <div className="footer-blob footer-blob--indigo"></div>
        <div className="footer-blob footer-blob--violet"></div>
        <div className="footer-blob footer-blob--cyan"></div>
        <div className="footer-blob footer-blob--rose"></div>
        <svg className="footer-bg-waves" viewBox="0 0 1920 900" fill="none" preserveAspectRatio="none">
          <path className="footer-wave-path footer-wave-path--1"
            d="M -300 200 C 260 60, 660 460, 1120 280 C 1520 140, 1780 500, 2220 360" stroke="url(#footerWaveGrad1)"
            strokeWidth="42" strokeLinecap="round" />
          <path className="footer-wave-path footer-wave-path--2"
            d="M -300 720 C 240 840, 720 420, 1180 680 C 1560 880, 1800 600, 2220 740" stroke="url(#footerWaveGrad2)"
            strokeWidth="32" strokeLinecap="round" />
          <defs>
            <linearGradient id="footerWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.20" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.20" />
            </linearGradient>
            <linearGradient id="footerWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.18" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="footer-9-container container">
        <div className="footer-9-top">
          <div className="footer-9-brand-box">
            <a href="index.html#top" className="nav-logo">
              <img src="/images/stepsai-logo-blue-transparent.png" alt="StepsAI Logo" className="nav-logo-img" width="44" height="30" />
              <span>StepsAI</span>
            </a>
            <p className="footer-9-tagline">The complete AI agent platform for modern businesses. Instant sales, 24/7 customer
              support, and autonomous follow-ups across every customer channel.</p>
            <div className="footer-9-status-pill">
              <span className="footer-9-status-dot" aria-hidden="true"></span>
              <span>All Systems Operational</span>
            </div>
          </div>

          <div className="footer-9-newsletter-card">
            <div className="footer-9-nl-head">
              <span className="footer-capsule-badge footer-capsule-badge--accent">Newsletter</span>
              <h3 className="footer-9-nl-title">Stay in the loop</h3>
              <p className="footer-9-nl-desc">Get monthly product drops, AI conversion playbooks, and industry benchmarks.</p>
            </div>
            <form className="footer-9-nl-form" onSubmit={handleSubscribe}>
              <div className="footer-9-input-wrap">
                <input type="email" placeholder="Enter your work email" required className="footer-9-input"
                  aria-label="Email address" />
                <button type="submit" className="btn btn-accent footer-9-submit-btn" style={subscribed ? { background: '#10B981' } : undefined}>
                  <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
            <span className="footer-9-nl-note">No spam. Unsubscribe anytime in one click.</span>
          </div>
        </div>

        <div className="footer-9-sitemap">
          <div className="footer-9-col">
            <span className="footer-capsule-badge">Product</span>
            <a href="agents.html">AI Agents</a>
            <a href="workflows.html">Workflows</a>
            <a href="one-inbox.html">One Inbox</a>
            <a href="analytics.html">Analytics &amp; Insights</a>
            <a href="integrations.html">Integrations</a>
            <a href="pricing.html">Pricing Plans</a>
          </div>

          <div className="footer-9-col">
            <span className="footer-capsule-badge">Solutions</span>
            <a href="industry-ecommerce.html">E-Commerce &amp; D2C</a>
            <a href="industry-healthcare.html">Healthcare &amp; Clinics</a>
            <a href="industry-real-estate.html">Real Estate</a>
            <a href="industry-edtech.html">Education &amp; EdTech</a>
            <a href="industry-hotels.html">Travel &amp; Hospitality</a>
            <a href="industries.html">All 12 Industries</a>
          </div>

          <div className="footer-9-col">
            <span className="footer-capsule-badge">Roles</span>
            <a href="role-growth.html">Growth &amp; Founders</a>
            <a href="role-marketing.html">Marketing Teams</a>
            <a href="role-sales.html">Sales Pipeline</a>
            <a href="role-support.html">Customer Support</a>
            <a href="role-appointments.html">Appointment Booking</a>
            <a href="solutions.html">All Solutions</a>
          </div>

          <div className="footer-9-col">
            <span className="footer-capsule-badge">Channels</span>
            <a href="channel-website.html">Website Agent</a>
            <a href="channel-whatsapp.html">WhatsApp AI</a>
            <a href="channel-instagram.html">Instagram DMs</a>
            <a href="channel-messenger.html">Messenger DMs</a>
            <a href="channel-standalone.html">Standalone Landing</a>
            <a href="agents.html#channels">All Channels</a>
          </div>

          <div className="footer-9-col">
            <span className="footer-capsule-badge">Resources</span>
            <a href="blog.html">Blog &amp; Updates</a>
            <a href="academy.html">Academy</a>
            <a href="help-center.html">Help Center</a>
            <a href="case-studies.html">Case Studies</a>
            <a href="partner.html">Partner Program</a>
            <a href="founders-note.html">Founder's Note</a>
            <a href="about.html">About Company</a>
            <a href="team.html">Team</a>
            <a href="contact.html">Contact Sales</a>
          </div>
        </div>

        <div className="footer-9-bottom">
          <div className="footer-9-legal-wrap">
            <span>&copy; 2026 StepsAI, Inc. All rights reserved.</span>
            <div className="footer-9-legal-links">
              <a href="privacy-policy.html">Privacy Policy</a>
              <span className="footer-9-divider">&middot;</span>
              <a href="terms-of-service.html">Terms of Service</a>
              <span className="footer-9-divider">&middot;</span>
              <a href="security.html">Security</a>
            </div>
          </div>

          <div className="footer-9-social-strip">
            <a href="index.html#top" className="footer-9-social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 11V16M8 8V8.01M12 16V11M12 11C12 11 12.5 10 14 10C15.5 10 16 11 16 12.5V16"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
            <a href="index.html#top" className="footer-9-social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="index.html#top" className="footer-9-social-link" aria-label="X / Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4L20 20M20 4L4 20" strokeLinecap="round" />
              </svg>
            </a>
            <a href="index.html#top" className="footer-9-social-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
