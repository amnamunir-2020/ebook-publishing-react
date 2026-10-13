import heroBook from '../assets/ebook-publishing.webp'
function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">

          <div className="hero-text">
            <span className="hero-tag">
              Professional Ebook Publishing Services
            </span>

            <h1>
              Bring Your Book to Life
              <span>With Professional Publishing</span>
            </h1>

            <p>
              From manuscript to published book, we provide professional
              ebook publishing services to help authors reach readers
              worldwide.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="primary-btn">
                Get Started
              </a>

              <a href="#services" className="secondary-btn">
                Explore Services
              </a>
            </div>
          </div>

       <div className="hero-image">
  <img src={heroBook} alt="Ebook Publishing" />
</div>

        </div>
      </div>
    </section>
  )
}

export default Hero