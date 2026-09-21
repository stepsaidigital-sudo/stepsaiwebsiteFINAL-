import '../styles/pages/pages.css';
import '../styles/pages/industries-deep.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';

/** Ported 1:1 from terms-of-service.html's <main> — same .legal-content pattern as <PrivacyPolicy>. */
export function TermsOfService() {
  return (
    <Layout title="Terms of Service — StepsAI" description="The terms that govern using the StepsAI platform, for the businesses that run it and the agents it powers.">
      <Breadcrumb section="Company" sectionHref={null} label="Terms of Service" />

      <main id="top">
        <section className="section section--base page-hero section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
          </div>
          <div className="hero-bg-dots" aria-hidden="true"></div>
          <div className="container page-hero-inner">
            <p className="kicker">LEGAL</p>
            <h1 className="page-headline">Terms of Service</h1>
            <p className="section-sub page-hero-sub">Draft template — pending legal review. Replace the bracketed placeholders and have counsel confirm this before it governs a real account.</p>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="legal-content">
              <p className="legal-updated">Last updated: [Month Day, Year] &middot; This is a starting template, not a finished legal document.</p>

              <div className="legal-toc">
                <span className="legal-toc-title">On this page</span>
                <a href="#acceptance">1. Acceptance of terms</a>
                <a href="#service">2. The service</a>
                <a href="#accounts">3. Accounts &amp; registration</a>
                <a href="#billing">4. Subscriptions &amp; billing</a>
                <a href="#use">5. Acceptable use</a>
                <a href="#content">6. Your content &amp; data</a>
                <a href="#integrations">7. Third-party integrations</a>
                <a href="#ip">8. Intellectual property</a>
                <a href="#disclaimer">9. Disclaimers &amp; limitation of liability</a>
                <a href="#termination">10. Termination</a>
                <a href="#law">11. Governing law</a>
                <a href="#changes">12. Changes to these terms</a>
                <a href="#contact">13. Contact us</a>
              </div>

              <h2 id="acceptance">1. Acceptance of terms</h2>
              <p>By creating an account or using StepsAI, you agree to these Terms of Service and our <a href="privacy-policy.html">Privacy Policy</a>. If you're accepting on behalf of a company, you confirm you have the authority to bind that company to these terms.</p>

              <h2 id="service">2. The service</h2>
              <p>StepsAI provides an AI agent platform that helps businesses answer, qualify, and act on conversations across channels like WhatsApp, Instagram, Messenger, and their own website. Features, availability, and pricing may change as the platform evolves.</p>

              <h2 id="accounts">3. Accounts &amp; registration</h2>
              <p>You're responsible for the accuracy of the information you provide when creating an account, and for keeping your login credentials secure. You're responsible for activity that happens under your account, including anything your team members do.</p>

              <h2 id="billing">4. Subscriptions &amp; billing</h2>
              <p>Paid plans are billed in advance on the cycle you choose at signup. Unless stated otherwise:</p>
              <ul>
                <li>Fees are non-refundable except where required by law.</li>
                <li>Prices may change with advance notice before your next billing cycle.</li>
                <li>Failure to pay may result in suspension or downgrade of your account.</li>
              </ul>

              <h2 id="use">5. Acceptable use</h2>
              <p>You agree not to use StepsAI to:</p>
              <ul>
                <li>Send unsolicited, deceptive, or unlawful messages, including in violation of WhatsApp, Instagram, or Messenger platform policies.</li>
                <li>Collect or process personal data unlawfully, or without the rights needed to do so.</li>
                <li>Attempt to reverse-engineer, disrupt, or gain unauthorized access to the platform.</li>
                <li>Use the service in a way that infringes someone else's rights, or breaks applicable law.</li>
              </ul>

              <h2 id="content">6. Your content &amp; data</h2>
              <p>You retain ownership of your business data and the conversation content your agent handles. You grant StepsAI a license to process that data solely to provide and improve the service on your behalf, consistent with our <a href="privacy-policy.html">Privacy Policy</a>.</p>

              <h2 id="integrations">7. Third-party integrations</h2>
              <p>StepsAI connects to third-party services you choose to enable — CRMs, messaging platforms, and similar tools. Your use of those integrations is also subject to that provider's own terms, and we aren't responsible for their availability or behavior.</p>

              <h2 id="ip">8. Intellectual property</h2>
              <p>StepsAI and its underlying technology, design, and branding remain our property. Nothing in these terms transfers ownership of our platform to you — you're granted a license to use it, not a sale of it.</p>

              <h2 id="disclaimer">9. Disclaimers &amp; limitation of liability</h2>
              <p>StepsAI is provided "as is." To the maximum extent permitted by law, we disclaim warranties of any kind, and our liability for any claim relating to the service is limited to the amount you paid us in the [12] months before the claim arose.</p>

              <h2 id="termination">10. Termination</h2>
              <p>You may cancel your account at any time. We may suspend or terminate access if these terms are violated, or if required to comply with law or platform policies (for example WhatsApp's Business API terms).</p>

              <h2 id="law">11. Governing law</h2>
              <p>These terms are governed by the laws of [jurisdiction], without regard to conflict-of-law principles. [Add dispute resolution / arbitration clause here if applicable.]</p>

              <h2 id="changes">12. Changes to these terms</h2>
              <p>We may update these terms from time to time. Continued use of StepsAI after changes take effect means you accept the updated terms; material changes will be communicated directly to account owners.</p>

              <h2 id="contact">13. Contact us</h2>
              <p>Questions about these terms? Reach us at <a href="contact.html">our contact page</a> or [legal@stepsai.co].</p>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Questions before you sign up?</h2>
            <p className="final-cta-sub">Happy to walk through anything here before you commit to a plan.</p>
            <a href="contact.html" className="btn btn-cta btn-lg">Contact us</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
