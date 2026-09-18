import '../styles/pages/pages.css';
import '../styles/pages/industries-deep.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';

/** Ported 1:1 from privacy-policy.html's <main> — the "simple content page" proof-of-pattern. */
export function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy — StepsAI" description="How StepsAI collects, uses, and protects data — for the businesses we serve and the customers who chat with their agents.">
      <Breadcrumb section="Company" sectionHref={null} label="Privacy Policy" />

      <main id="top">
        <section className="section section--base page-hero section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--br"></div>
          </div>
          <div className="hero-bg-dots" aria-hidden="true"></div>
          <div className="container page-hero-inner">
            <p className="kicker">LEGAL</p>
            <h1 className="page-headline">Privacy Policy</h1>
            <p className="section-sub page-hero-sub">Draft template — pending legal review. Replace the bracketed placeholders and have counsel confirm this before it governs real customer data.</p>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="legal-content">
              <p className="legal-updated">Last updated: [Month Day, Year] &middot; This is a starting template, not a finished legal document.</p>

              <div className="legal-toc">
                <span className="legal-toc-title">On this page</span>
                <a href="#overview">1. Overview</a>
                <a href="#collect">2. Information we collect</a>
                <a href="#use">3. How we use information</a>
                <a href="#processor">4. Data we process on behalf of our customers</a>
                <a href="#cookies">5. Cookies &amp; tracking</a>
                <a href="#sharing">6. Sharing &amp; third-party services</a>
                <a href="#retention">7. Data retention</a>
                <a href="#rights">8. Your rights</a>
                <a href="#security">9. Security</a>
                <a href="#children">10. Children's privacy</a>
                <a href="#changes">11. Changes to this policy</a>
                <a href="#contact">12. Contact us</a>
              </div>

              <h2 id="overview">1. Overview</h2>
              <p>StepsAI ("StepsAI," "we," "us") provides an AI agent platform that businesses ("Customers") use to talk to their own customers ("End Users") on channels like WhatsApp, Instagram, Messenger, and a Customer's website. This policy explains what we collect, why, and what choices you have — whether you're a Customer running StepsAI, or an End User chatting with a business that uses it.</p>

              <h2 id="collect">2. Information we collect</h2>
              <p>Depending on how you interact with StepsAI, we may collect:</p>
              <ul>
                <li><strong>Account information</strong> — name, work email, company, and billing details when a Customer signs up.</li>
                <li><strong>Conversation data</strong> — messages, attachments, and metadata exchanged between End Users and a Customer's agent, processed on the Customer's behalf.</li>
                <li><strong>Usage data</strong> — how the platform is used: pages viewed, features used, and performance/error logs.</li>
                <li><strong>Device &amp; connection data</strong> — IP address, browser type, and similar technical identifiers.</li>
              </ul>

              <h2 id="use">3. How we use information</h2>
              <p>We use the information above to:</p>
              <ul>
                <li>Operate, maintain, and improve the platform.</li>
                <li>Power the AI agent's ability to answer, act, and hand off conversations correctly.</li>
                <li>Provide customer support and respond to requests.</li>
                <li>Send account, billing, and product updates — and, where you've agreed to it, marketing communications.</li>
                <li>Detect, prevent, and investigate fraud, abuse, or security incidents.</li>
              </ul>

              <h2 id="processor">4. Data we process on behalf of our customers</h2>
              <p>When an End User messages a business that uses StepsAI, we typically act as a data processor on that Customer's behalf, not as the party who decides why that data is collected. If you're an End User with a question about how your data is used, the business you messaged — our Customer — is usually the right place to start; we act under their instructions and agreement with us.</p>

              <h2 id="cookies">5. Cookies &amp; tracking</h2>
              <p>Our website and product use cookies and similar technologies for authentication, remembering preferences, and understanding how the platform is used. You can control cookies through your browser settings; disabling some may affect how the site works.</p>

              <h2 id="sharing">6. Sharing &amp; third-party services</h2>
              <p>We don't sell personal data. We share information with:</p>
              <ul>
                <li><strong>Channel providers</strong> — WhatsApp Business API, Instagram, and Messenger Platform, to deliver and receive messages.</li>
                <li><strong>Integrations a Customer connects</strong> — CRMs and other tools (for example HubSpot, Zoho, Salesforce) that a Customer chooses to sync data to.</li>
                <li><strong>Infrastructure &amp; sub-processors</strong> — hosting, storage, and analytics providers who process data under contract, only as needed to run the service.</li>
                <li><strong>Legal &amp; safety</strong> — when required by law, or to protect the rights, safety, and property of StepsAI, our Customers, or others.</li>
              </ul>

              <h2 id="retention">7. Data retention</h2>
              <p>We retain data for as long as needed to provide the service, comply with legal obligations, resolve disputes, and enforce our agreements. Customers can request deletion of their account data; conversation data is generally retained per the Customer's own settings and agreement with us.</p>

              <h2 id="rights">8. Your rights</h2>
              <p>Depending on where you're located, you may have rights to access, correct, export, or delete your personal data, and to object to or restrict certain processing. To exercise these rights, contact us using the details below — End Users should also reach out to the business they messaged directly, since they control that relationship.</p>

              <h2 id="security">9. Security</h2>
              <p>We use industry-standard technical and organizational safeguards — encryption in transit, access controls, and regular review — to protect data against unauthorized access, loss, or misuse. No system is completely secure, and we can't guarantee absolute security.</p>

              <h2 id="children">10. Children's privacy</h2>
              <p>StepsAI is not directed at children, and we don't knowingly collect personal data from children under the age required by applicable law. If you believe a child has provided us with personal data, contact us and we'll take appropriate action.</p>

              <h2 id="changes">11. Changes to this policy</h2>
              <p>We may update this policy from time to time. Material changes will be reflected by an updated "Last updated" date above, and where appropriate, communicated directly to Customers.</p>

              <h2 id="contact">12. Contact us</h2>
              <p>Questions about this policy? Reach us at <a href="contact.html">our contact page</a> or [privacy@stepsai.co].</p>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Questions about your data?</h2>
            <p className="final-cta-sub">We're happy to walk through exactly what StepsAI does and doesn't do with it.</p>
            <a href="contact.html" className="btn btn-cta btn-lg">Contact us</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
