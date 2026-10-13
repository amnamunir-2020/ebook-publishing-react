
function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-content">

          {/* Left Content */}
          <div className="about-text">

            <span className="about-tag">
              ABOUT US
            </span>

            <h2>
              Professional Ebook Publishing
              <strong>Services You Can Trust</strong>
            </h2>

            <p>
              We help authors turn their ideas and manuscripts into
              professionally published books. From formatting and
              editing to cover design and ebook publishing, our team
              provides everything you need to bring your book to life.
            </p>

            <p>
              Whether you are a first-time author or an experienced
              writer, we make the publishing process simple, smooth,
              and stress-free.
            </p>

            <a href="#contact" className="about-btn">
              Get Started
            </a>

          </div>

          {/* Right Content */}
          <div className="about-image">

            <div className="about-image-box">
              <span>BOOK</span>
              <strong>PUBLISHING</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About

