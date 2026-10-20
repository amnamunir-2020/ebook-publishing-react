import heroBook from '../assets/ebook-publishing.webp'
function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">

          <div className="hero-text">
            <span className="hero-tag">
              Global eBook Publishing Service
            </span>

            <h1>
             Ebook Publishing <span> Services  With a </span> 100% Published-or-Refunded Promise
             
            </h1>
<span>Your Manuscript's Fastest Way to Readers — Formatted, Designed, Distributed to 60+ Platforms Worldwide</span>
            <p>
              We are a professional eBook publishing service that has helped 2,500+ authors turn finished manuscripts into properly published eBooks. From formatting and cover design to global distribution across 170+ countries — we handle everything while you keep 100% of your royalties.
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