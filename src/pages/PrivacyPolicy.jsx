
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <main className="privacy-page">

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-container">
          <span className="privacy-eyebrow">
            YOUR PRIVACY MATTERS
          </span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            Learn how we collect, use, protect, and manage
            your personal information when you visit our
            website or use our eBook publishing services.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="privacy-content-section">
        <div className="privacy-container">
          <div className="privacy-layout">

            {/* Sidebar */}
            <aside className="privacy-sidebar">
              <h3>On This Page</h3>

              <a href="#privacy-introduction">Introduction</a>
              <a href="#information-collected">Information We Collect</a>
              <a href="#information-use">How We Use Information</a>
              <a href="#information-sharing">Sharing Information</a>
              <a href="#cookies">Cookies & Tracking</a>
              <a href="#data-security">Data Security</a>
              <a href="#data-retention">Data Retention</a>
              <a href="#your-rights">Your Privacy Rights</a>
              <a href="#third-party-links">Third-Party Links</a>
              <a href="#children-privacy">Children's Privacy</a>
              <a href="#policy-changes">Policy Changes</a>
              <a href="#privacy-contact">Contact Us</a>
            </aside>

            {/* Main Content */}
            <article className="privacy-article">

              <p className="privacy-intro">
                This Privacy Policy explains how we may collect,
                use, store, and protect personal information when
                you visit our website, contact our team, or enquire
                about our eBook publishing services.
              </p>

              <section
                id="privacy-introduction"
                className="privacy-section"
              >
                <h2>1. Introduction</h2>
                <p>
                  We respect your privacy and aim to handle personal
                  information responsibly. This policy applies to
                  information collected through our website and
                  related communications.
                </p>
                <p>
                  By using our website, you acknowledge this policy.
                  Where consent is legally required, we will seek
                  your consent separately.
                </p>
              </section>

              <section
                id="information-collected"
                className="privacy-section"
              >
                <h2>2. Information We Collect</h2>
                <p>
                  Depending on how you interact with us, we may
                  collect the following categories of information:
                </p>
                <ul>
                  <li>
                    <strong>Contact information:</strong> such as
                    your name, email address, and phone number when
                    you submit an enquiry.
                  </li>
                  <li>
                    <strong>Project information:</strong> such as
                    publishing requirements, service preferences,
                    manuscript details, and messages you send us.
                  </li>
                  <li>
                    <strong>Technical information:</strong> such as
                    browser type, device information, IP address,
                    and website usage data where collected.
                  </li>
                  <li>
                    <strong>Transaction information:</strong> order
                    and payment-related records when you purchase
                    a service. Payment card details may be handled
                    directly by a payment provider.
                  </li>
                </ul>
                <p>
                  Please avoid including sensitive personal
                  information in website forms unless it is
                  necessary for your request.
                </p>
              </section>

              <section
                id="information-use"
                className="privacy-section"
              >
                <h2>3. How We Use Your Information</h2>
                <p>
                  We may use personal information for purposes
                  such as:
                </p>
                <ul>
                  <li>Responding to enquiries and support requests.</li>
                  <li>Preparing quotations and managing projects.</li>
                  <li>Providing and improving our services.</li>
                  <li>Processing payments and maintaining records.</li>
                  <li>
                    Protecting our website against fraud, misuse,
                    and security threats.
                  </li>
                  <li>
                    Meeting legal obligations and resolving disputes.
                  </li>
                </ul>
                <p>
                  We will use personal information only where we
                  have an appropriate legal basis, as required by
                  applicable data protection law.
                </p>
              </section>

              <section
                id="information-sharing"
                className="privacy-section"
              >
                <h2>4. Sharing Your Information</h2>
                <p>
                  We do not sell personal information. We may share
                  relevant information where necessary with:
                </p>
                <ul>
                  <li>
                    Service providers who support our website,
                    communications, hosting, or business operations.
                  </li>
                  <li>
                    Payment providers when processing transactions.
                  </li>
                  <li>
                    Publishing or distribution platforms when
                    required to deliver a service you requested.
                  </li>
                  <li>
                    Legal or regulatory authorities when required
                    by law or necessary to protect legal rights.
                  </li>
                </ul>
                <p>
                  Where appropriate, we take steps to ensure that
                  service providers handle information securely
                  and only for permitted purposes.
                </p>
              </section>

              <section
                id="cookies"
                className="privacy-section"
              >
                <h2>5. Cookies & Tracking Technologies</h2>
                <p>
                  Our website may use cookies and similar
                  technologies to support essential functionality,
                  remember preferences, understand website usage,
                  or measure marketing performance.
                </p>
                <p>
                  Where required, non-essential cookies will only
                  be used after the necessary consent has been
                  obtained. You can also manage cookies through
                  your browser settings.
                </p>
              </section>

              <section
                id="data-security"
                className="privacy-section"
              >
                <h2>6. Data Security</h2>
                <p>
                  We aim to use reasonable technical and
                  organisational safeguards to protect personal
                  information against unauthorised access,
                  alteration, disclosure, or loss.
                </p>
                <p>
                  However, no method of internet transmission or
                  electronic storage is completely secure. We
                  cannot guarantee absolute security.
                </p>
              </section>

              <section
                id="data-retention"
                className="privacy-section"
              >
                <h2>7. Data Retention</h2>
                <p>
                  We retain personal information only for as long
                  as reasonably necessary for the purposes described
                  in this policy, including providing services,
                  maintaining business records, meeting legal
                  requirements, and resolving disputes.
                </p>
                <p>
                  Retention periods may vary depending on the type
                  of information and our legal obligations.
                </p>
              </section>

              <section
                id="your-rights"
                className="privacy-section"
              >
                <h2>8. Your Privacy Rights</h2>
                <p>
                  Depending on your location and applicable law,
                  you may have rights to:
                </p>
                <ul>
                  <li>Request access to personal information.</li>
                  <li>Ask us to correct inaccurate information.</li>
                  <li>
                    Request deletion or restriction of certain
                    personal information.
                  </li>
                  <li>
                    Object to certain processing or withdraw
                    consent where processing relies on consent.
                  </li>
                  <li>
                    Request a copy of information in a portable
                    format where applicable.
                  </li>
                </ul>
                <p>
                  These rights may be subject to legal conditions
                  and exceptions. Contact us to make a privacy
                  request.
                </p>
              </section>

              <section
                id="third-party-links"
                className="privacy-section"
              >
                <h2>9. Third-Party Websites</h2>
                <p>
                  Our website may contain links to third-party
                  websites, including publishing platforms and
                  service providers. Those websites operate under
                  their own privacy policies and practices.
                </p>
                <p>
                  We are not responsible for the privacy practices
                  of websites that we do not control. Please review
                  their policies before sharing personal information.
                </p>
              </section>

              <section
                id="children-privacy"
                className="privacy-section"
              >
                <h2>10. Children's Privacy</h2>
                <p>
                  Our website and services are not intended to
                  collect personal information from children
                  without appropriate authorisation or another
                  lawful basis. If you believe a child has
                  provided personal information improperly,
                  please contact us so we can review the matter.
                </p>
              </section>

              <section
                id="policy-changes"
                className="privacy-section"
              >
                <h2>11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to
                  time to reflect changes in our practices,
                  services, or legal obligations. Any updated
                  policy will be published on this page.
                </p>
                <p>
                  Please review this page periodically for updates.
                </p>
              </section>

              <section
                id="privacy-contact"
                className="privacy-section"
              >
                <h2>12. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy,
                  would like to make a privacy request, or want
                  to learn more about our information practices,
                  please contact us through our Contact Us page.
                </p>

                <a
                  href="/contact-us"
                  className="privacy-contact-btn"
                >
                  Contact Our Team
                  <span aria-hidden="true">→</span>
                </a>
              </section>

              <p className="privacy-disclaimer">
                This is a general Privacy Policy template. Before
                publishing, update it to reflect your actual data
                collection practices, cookies, analytics, contact
                details, service providers, and applicable legal
                obligations.
              </p>

            </article>
          </div>
        </div>
      </section>

    </main>
  )
}

export default PrivacyPolicy
