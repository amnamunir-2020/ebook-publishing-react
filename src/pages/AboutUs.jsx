
import './AboutUs.css'
import heroBook from '../assets/ebook-publishing.webp'

function AboutUs() {
  return (
    <main className="about-page">

      {/* About Hero Section */}
      <section className="hero-section about-hero-section">
        <div className="container">
          <div className="hero-content">

            <div className="hero-text">
              <span className="hero-tag">
                About Our Company
              </span>

              <h1>
                Helping Authors <span>Bring Their Stories</span> to Life
              </h1>

              <p>
                We help authors turn their manuscripts into
                professionally published eBooks. From formatting
                and cover design to worldwide distribution, our
                team supports you throughout your publishing journey.
              </p>

              <div className="hero-buttons">
                <a href="/#contact" className="primary-btn">
                  Get Started
                </a>

                <a href="/#services" className="secondary-btn">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src={heroBook}
                alt="Professional eBook publishing services"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-company-section">
        <div className="container">
          <div className="about-company-grid">

            <div className="about-company-image">
              <img
                src={heroBook}
                alt="Our eBook publishing work"
              />
            </div>

            <div className="about-company-text">
              <span className="hero-tag">Who We Are</span>

              <h2>
                Your Partner in <span>eBook Publishing</span>
              </h2>

              <p>
                Every book begins with an idea and a story worth
                sharing. We help authors prepare their manuscripts
                for publication through professional publishing
                services tailored to their needs.
              </p>

              <p>
                Whether you are publishing your first book or
                expanding your collection, we make the process
                simpler with support for formatting, cover design
                and distribution.
              </p>

              <a href="/#contact" className="primary-btn">
                Talk to Our Team
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-values-section">
        <div className="container">

          <div className="about-section-heading">
            <span className="hero-tag">What Drives Us</span>
            <h2>Our Mission, Vision & Commitment</h2>
            <p>
              We want authors to feel supported at every stage
              of their publishing journey.
            </p>
          </div>

          <div className="about-values-grid">
            <article className="about-value-card">
              <span className="about-value-number">01</span>
              <h3>Our Mission</h3>
              <p>
                To make professional publishing services
                accessible and straightforward for authors.
              </p>
            </article>

            <article className="about-value-card">
              <span className="about-value-number">02</span>
              <h3>Our Vision</h3>
              <p>
                To help authors share their stories with readers
                around the world.
              </p>
            </article>

            <article className="about-value-card">
              <span className="about-value-number">03</span>
              <h3>Our Commitment</h3>
              <p>
                To provide thoughtful support and publishing
                solutions that match each author's goals.
              </p>
            </article>
          </div>

        </div>
      </section>

      {/* Publishing Services */}
      <section className="about-what-we-do" id="about-services">
        <div className="container">

          <div className="about-section-heading">
            <span className="hero-tag">What We Do</span>
            <h2>Services That Bring Your Book to Life</h2>
            <p>
              Get the professional support you need to prepare
              your book for publication.
            </p>
          </div>

          <div className="about-services-grid">

            <article className="about-service-card">
              <div className="about-service-icon">✦</div>
              <h3>eBook Formatting</h3>
              <p>
                Professionally formatted eBooks for a consistent
                and comfortable reading experience.
              </p>
            </article>

            <article className="about-service-card">
              <div className="about-service-icon">✦</div>
              <h3>Cover Design</h3>
              <p>
                Book covers designed to reflect your story and
                make a strong first impression.
              </p>
            </article>

            <article className="about-service-card">
              <div className="about-service-icon">✦</div>
              <h3>Global Distribution</h3>
              <p>
                Publishing support to help make your book
                available across relevant digital platforms.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-final-cta">
        <div className="container">
          <span className="hero-tag">Your Story Starts Here</span>

          <h2>Ready to Publish Your Book?</h2>

          <p>
            Let our team help you take the next step toward
            sharing your work with the world.
          </p>

          <a href="/#contact" className="primary-btn">
            Get Started Today
          </a>
        </div>
      </section>

    </main>
  )
}

export default AboutUs
