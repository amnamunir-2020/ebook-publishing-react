function LogoCarousel() {
  return (
    <section className="logo-carousel-section">
      <div className="container">

        <div className="logo-carousel-wrapper">

          {/* LEFT 40% */}
          <div className="logo-carousel-content">
            <span>OUR PUBLISHING PLATFORMS</span>

            <h2>
              Publish Your Book
              <strong>Worldwide</strong>
            </h2>

            <p>
              We help authors publish and distribute their books across
              the world's leading ebook platforms.
            </p>
          </div>

          {/* RIGHT 60% */}
          <div className="logo-carousel-area">
            <div className="logo-track">

              <div className="logo-item">
                <span>Amazon</span>
              </div>

              <div className="logo-item">
                <span>Kindle</span>
              </div>

              <div className="logo-item">
                <span>Apple Books</span>
              </div>

              <div className="logo-item">
                <span>Kobo</span>
              </div>

              <div className="logo-item">
                <span>Barnes &amp; Noble</span>
              </div>

              <div className="logo-item">
                <span>Google Play Books</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default LogoCarousel