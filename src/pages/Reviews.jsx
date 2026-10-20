
import './Reviews.css'

const reviews = [
  {
    title: 'Great For New Authors',
    text: 'I had never published an eBook before, so I needed help with almost everything. The publishing process was explained clearly and my manuscript files were prepared properly.',
    category: 'Publishing Support',
  },
  {
    title: 'Professional Looking eBook',
    text: 'My original document looked quite basic, especially the formatting. The layout was improved and the finished eBook looked much more professional.',
    category: 'eBook Formatting',
  },
  {
    title: 'Helpful Technical Support',
    text: 'I got stuck with some of the technical publishing requirements. The team explained what needed fixing and helped prepare everything for publication.',
    category: 'Technical Support',
  },
  {
    title: 'From Draft to eBook',
    text: 'Turning my document into an actual eBook felt like a completely different task. I received help with formatting, structure and the technical details.',
    category: 'eBook Preparation',
  },
  {
    title: 'Really Good Support',
    text: 'The team helped me prepare my eBook and checked the formatting. They also answered my questions without making the process complicated.',
    category: 'Customer Support',
  },
  {
    title: 'Quick Changes Made',
    text: 'I needed a few changes after reviewing the first version. The requested edits were made and I received an updated file.',
    category: 'Revisions',
  },
  {
    title: 'Good First Experience',
    text: 'This was my first time publishing an eBook, so I needed quite a bit of help. I received guidance through the process and the technical parts.',
    category: 'First-Time Authors',
  },
  {
    title: 'Made Things Much Easier',
    text: 'I was overwhelmed by the publishing requirements and unsure whether my eBook was ready. The support helped me prepare the final files.',
    category: 'Publishing Support',
  },
  {
    title: 'Good Communication',
    text: 'The team listened to my requirements, kept me updated and made the requested changes. The final version was properly formatted.',
    category: 'Communication',
  },
]

function Reviews() {
  return (
    <main className="reviews-page">

      {/* Hero Section */}
      <section className="reviews-hero">
        <div className="reviews-container">
          <span className="reviews-eyebrow">
            AUTHOR EXPERIENCES
          </span>

          <h1>
            Trusted by Authors, <span>Driven by Stories</span>
          </h1>

          <p>
            Discover feedback about our eBook publishing support,
            formatting services and commitment to helping authors
            prepare their books for publication.
          </p>

          <a href="/#contact" className="reviews-hero-btn">
            Talk to Our Team <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Reviews Heading */}
      <section className="reviews-list-section">
        <div className="reviews-container">

          <div className="reviews-section-heading">
            <span className="reviews-eyebrow">
              AUTHOR FEEDBACK
            </span>

            <h2>
              Read What Authors Say About Us
            </h2>

            <p>
              Every publishing journey is different. Explore feedback
              about the services and support authors value.
            </p>
          </div>

          {/* Review Cards */}
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <article className="review-card" key={review.title}>
                <div className="review-card-top">
                  <span className="review-quote" aria-hidden="true">
                    “
                  </span>

                  <span className="review-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div
                  className="review-stars"
                  aria-label="Five out of five stars"
                >
                  ★★★★★
                </div>

                <h3>{review.title}</h3>

                <p className="review-card-text">
                  {review.text}
                </p>

                <div className="review-card-footer">
                  <span className="review-avatar" aria-hidden="true">
                    {review.title.charAt(0)}
                  </span>

                  <div>
                    <strong>Author Feedback</strong>
                    <span>{review.category}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="reviews-bottom-cta">
            <div>
              <span className="reviews-eyebrow">
                YOUR PUBLISHING JOURNEY
              </span>

              <h2>Ready to Take the Next Step?</h2>

              <p>
                Tell us about your book and explore the publishing
                services that suit your needs.
              </p>
            </div>

            <a href="/#contact" className="reviews-cta-btn">
              Get Started <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}

export default Reviews
