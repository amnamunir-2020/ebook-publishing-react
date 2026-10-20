
import './TermsConditions.css'

function TermsConditions() {
  return (
    <main className="terms-page">

      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-container">
          <span className="terms-eyebrow">
            LEGAL INFORMATION
          </span>

          <h1>
            Terms & <span>Conditions</span>
          </h1>

          <p>
            Please read these terms carefully before using our
            website or purchasing our eBook publishing services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content-section">
        <div className="terms-container">
          <div className="terms-layout">

            {/* Sidebar */}
            <aside className="terms-sidebar">
              <h3>On This Page</h3>

              <a href="#acceptance">Acceptance of Terms</a>
              <a href="#services">Our Services</a>
              <a href="#responsibilities">Customer Responsibilities</a>
              <a href="#payments">Payments & Pricing</a>
              <a href="#refunds">Refund Policy</a>
              <a href="#intellectual-property">Intellectual Property</a>
              <a href="#revisions">Revisions & Approvals</a>
              <a href="#disclaimer">Disclaimers</a>
              <a href="#liability">Limitation of Liability</a>
              <a href="#privacy">Privacy</a>
              <a href="#termination">Termination</a>
              <a href="#changes">Changes to These Terms</a>
              <a href="#contact-terms">Contact Us</a>
            </aside>

            {/* Main Legal Content */}
            <article className="terms-article">

              <p className="terms-intro">
                These Terms and Conditions govern your access to
                and use of our website and eBook publishing services.
                By using our website or purchasing a service, you
                agree to these terms. If you do not agree, please
                discontinue using our services.
              </p>

              <section id="acceptance" className="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing this website, submitting an enquiry,
                  or placing an order, you acknowledge that you have
                  read and understood these Terms and Conditions.
                  Additional terms may apply to specific services
                  or individual project agreements.
                </p>
              </section>

              <section id="services" className="terms-section">
                <h2>2. Our Services</h2>
                <p>
                  We may provide eBook publishing-related services,
                  including manuscript formatting, book cover design,
                  publishing preparation, distribution assistance,
                  and other services described on our website or
                  agreed upon with you.
                </p>
                <p>
                  The scope, deliverables, estimated timelines, and
                  applicable fees for each project should be confirmed
                  before work begins. Service availability may vary
                  according to the project requirements.
                </p>
              </section>

              <section id="responsibilities" className="terms-section">
                <h2>3. Customer Responsibilities</h2>
                <p>
                  You are responsible for providing accurate contact
                  information, project details, manuscript files,
                  instructions, and feedback required to complete
                  your order.
                </p>
                <ul>
                  <li>
                    Ensure that submitted content is accurate and
                    that you have permission to use it.
                  </li>
                  <li>
                    Review drafts and proofs before approving final
                    deliverables.
                  </li>
                  <li>
                    Respond to requests for information or approvals
                    within a reasonable period.
                  </li>
                  <li>
                    Do not submit unlawful, infringing, or otherwise
                    prohibited material.
                  </li>
                </ul>
              </section>

              <section id="payments" className="terms-section">
                <h2>4. Payments & Pricing</h2>
                <p>
                  Prices, payment schedules, and any applicable taxes
                  or additional charges should be communicated before
                  an order is confirmed. You agree to pay the amounts
                  specified in your order or written project agreement.
                </p>
                <p>
                  Work may be paused if a required payment is overdue,
                  subject to the applicable agreement and law.
                  Any additional work outside the agreed scope may
                  require a separate quotation.
                </p>
              </section>

              <section id="refunds" className="terms-section">
                <h2>5. Refund Policy</h2>
                <p>
                  Refund eligibility depends on the service purchased,
                  the stage of work, the applicable order terms, and
                  any rights provided by law. Before purchasing, review
                  the refund terms presented for your specific service.
                </p>
                <p>
                  If a service includes a publishing guarantee or
                  refund promise, the exact eligibility criteria,
                  exclusions, deadlines, and claim process must be
                  set out in the relevant written offer or agreement.
                  Nothing in these terms removes rights that cannot
                  legally be excluded.
                </p>
              </section>

              <section
                id="intellectual-property"
                className="terms-section"
              >
                <h2>6. Intellectual Property</h2>
                <p>
                  You retain the rights you own in your original
                  manuscript and other materials you supply, subject
                  to any separate written agreement.
                </p>
                <p>
                  Ownership, licensing, and permitted use of newly
                  created designs, formatted files, and other
                  deliverables should be specified in your project
                  agreement. You must not use third-party material
                  without the necessary rights or permissions.
                </p>
                <p>
                  The website's branding, design, text, and other
                  website materials may be protected by applicable
                  intellectual property laws.
                </p>
              </section>

              <section id="revisions" className="terms-section">
                <h2>7. Revisions & Approvals</h2>
                <p>
                  The number of revisions included, the permitted
                  scope of changes, and the timeframe for requesting
                  revisions should be confirmed with your order.
                  Requests beyond the agreed scope may incur extra
                  charges.
                </p>
                <p>
                  You are responsible for checking final files and
                  approving them before publication or distribution.
                </p>
              </section>

              <section id="disclaimer" className="terms-section">
                <h2>8. Disclaimers</h2>
                <p>
                  We aim to provide services with reasonable care
                  and skill. However, we cannot guarantee specific
                  sales figures, reader engagement, bestseller
                  rankings, or commercial success unless a particular
                  written agreement expressly provides otherwise.
                </p>
                <p>
                  Third-party publishing platforms have their own
                  policies, technical requirements, review processes,
                  and distribution decisions. We do not control those
                  independent decisions.
                </p>
              </section>

              <section id="liability" className="terms-section">
                <h2>9. Limitation of Liability</h2>
                <p>
                  To the extent permitted by applicable law, each
                  party's liability will be governed by the relevant
                  service agreement and applicable legal requirements.
                  Nothing in these terms excludes or limits liability
                  where doing so would be unlawful.
                </p>
              </section>

              <section id="privacy" className="terms-section">
                <h2>10. Privacy</h2>
                <p>
                  Personal information submitted through our website
                  should be handled in accordance with our Privacy
                  Policy and applicable data protection laws. Please
                  review the Privacy Policy to understand how
                  information is collected, used, and protected.
                </p>
              </section>

              <section id="termination" className="terms-section">
                <h2>11. Termination</h2>
                <p>
                  We may suspend access to our website or discontinue
                  a service where permitted by law and the applicable
                  agreement, including in cases of misuse, unlawful
                  activity, or material breach of these terms.
                  Any outstanding payment obligations and applicable
                  contractual rights remain subject to the agreement.
                </p>
              </section>

              <section id="changes" className="terms-section">
                <h2>12. Changes to These Terms</h2>
                <p>
                  We may update these Terms and Conditions from time
                  to time. The updated version will be published on
                  this page with a revised effective date. Changes
                  apply as permitted by law and any existing agreement.
                </p>
              </section>

              <section id="contact-terms" className="terms-section">
                <h2>13. Contact Us</h2>
                <p>
                  If you have questions about these Terms and
                  Conditions or your publishing order, please contact
                  us through our Contact Us page.
                </p>

                <a
                  href="/contact-us"
                  className="terms-contact-btn"
                >
                  Contact Our Team <span aria-hidden="true">→</span>
                </a>
              </section>

              <p className="terms-disclaimer">
                This page provides a general terms template and is
                not a substitute for legal advice. It should be
                reviewed and adapted to your actual business,
                contracts, refund policy, and applicable law before
                publication.
              </p>

            </article>
          </div>
        </div>
      </section>

    </main>
  )
}

export default TermsConditions
