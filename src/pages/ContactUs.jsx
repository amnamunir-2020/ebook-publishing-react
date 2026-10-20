
import { useState } from 'react'
import './ContactUs.css'

function ContactUs() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
  }

  return (
    <main className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">
            WE'RE HERE TO HELP
          </span>

          <h1>
            Let's Bring Your <span>Book to Life</span>
          </h1>

          <p>
            Have a manuscript ready to publish or need help
            choosing the right publishing service? Tell us about
            your project and take the next step in your publishing journey.
          </p>

          <a href="#contact-form" className="contact-hero-btn">
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main-section" id="contact-form">
        <div className="contact-container">
          <div className="contact-layout">

            {/* Left Content */}
            <div className="contact-info">
              <span className="contact-eyebrow">
                CONTACT OUR TEAM
              </span>

              <h2>
                Every Great Book Starts With a <span>Conversation</span>
              </h2>

              <p className="contact-info-description">
                Whether you need eBook formatting, professional
                cover design or worldwide distribution, share your
                requirements with us. We'll help you explore the
                next steps for your book.
              </p>

              <div className="contact-info-card">
                <div className="contact-info-icon">✦</div>
                <div>
                  <h3>Personalized Guidance</h3>
                  <p>
                    Tell us about your manuscript and publishing goals.
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">✎</div>
                <div>
                  <h3>Publishing Solutions</h3>
                  <p>
                    Explore formatting, cover design and distribution.
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">◎</div>
                <div>
                  <h3>Support for Your Journey</h3>
                  <p>
                    Share your questions and let us understand your needs.
                  </p>
                </div>
              </div>

              <div className="contact-note">
                <span className="contact-note-icon">✦</span>
                <p>
                  Your story matters. Let's work towards getting
                  your book ready for readers.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <h2>Send Us a Message</h2>
                <p>
                  Fill out the form below with your project details.
                </p>
              </div>

              {submitted && (
                <div className="contact-success" role="status">
                  <span aria-hidden="true">✓</span>
                  <div>
                    <strong>Thank you for contacting us!</strong>
                    <p>
                      Your form has been submitted successfully
                      in this demo.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="contact-fields-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-fields-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-service">
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="ebook-formatting">
                        eBook Formatting
                      </option>
                      <option value="cover-design">
                        Book Cover Design
                      </option>
                      <option value="publishing">
                        eBook Publishing
                      </option>
                      <option value="distribution">
                        Global Distribution
                      </option>
                      <option value="other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your book and how we can help..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Submit Your Enquiry
                  <span aria-hidden="true">→</span>
                </button>

                <p className="contact-form-disclaimer">
                  * Required fields
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-bottom-cta">
        <div className="contact-container">
          <h2>Your Manuscript Deserves to Be Published</h2>
          <p>
            Take the first step towards sharing your story with the world.
          </p>
          <a href="/#home" className="contact-bottom-btn">
            Explore Our Website
          </a>
        </div>
      </section>

    </main>
  )
}

export default ContactUs
