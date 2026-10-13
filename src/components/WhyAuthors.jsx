
function WhyAuthors() {
  const features = [
    {
      image:
        'https://digiwisero5.sg-host.com/ebookpublishingservice/assets/images/verified-author-reviews.webp',
      title: 'Verified Author Reviews',
      text: 'Real feedback from real authors who have published with us, reflecting consistent quality and reliable service across every project.'
    },
    {
      image:
        'https://digiwisero5.sg-host.com/ebookpublishingservice/assets/images/industry-standard-compliance.webp',
      title: 'Industry-Standard Compliance',
      text: 'Every ebook meets formatting and technical standards required by major retailers, avoiding rejections and post-launch corrections.'
    },
    {
      image:
        'https://digiwisero5.sg-host.com/ebookpublishingservice/assets/images/genre-specialists.webp',
      title: 'Genre Specialists On Team',
      text: "Dedicated experts for fiction, nonfiction, memoirs and children's books, ensuring your ebook gets genre-appropriate formatting and design."
    },
    {
      image:
        'https://digiwisero5.sg-host.com/ebookpublishingservice/assets/images/zero-rejected-submissions.webp',
      title: 'Zero Rejected Submissions',
      text: 'Every file is tested against platform requirements before submission, so your ebook publishes correctly the very first time.'
    }
  ]

  return (
    <section className="why-authors-section" id="why-authors">
      <div className="container">

        <div className="why-authors-heading">
          <span className="why-authors-label">
            WHY CHOOSE US
          </span>

          <h2>
            Why Authors Pick Our eBook Publishing Agency
            Instead of Trial and Error
          </h2>

          <p>
            The vast majority of authors fail not because they have
            poor writing skills — but because they're winging it as
            they attempt to publish their ebooks without understanding
            what really matters.
          </p>

          <p>
            Is there a need for an ISBN, or does it get generated
            automatically for the platform? Do you need to take
            royalties into consideration when setting your price?
            Will your formatting work on all devices, or will it fail
            to materialize as soon as a reader accesses it on the
            wrong app? When no one can be sure, a finished manuscript
            becomes a frustrating trial-and-error process, and most
            writers will only learn of their errors when the book is
            published and not performing well.
          </p>

          <p>
            That's exactly the gap our eBook publishing company was
            built to close. Instead of trial and error, you get
            professional self-publishing service backed by real
            experience — correct metadata, properly tested formatting,
            and pricing strategy grounded in how retailers actually
            pay authors. No guesswork, no surprises, just a book
            that's genuinely ready for readers.
          </p>
        </div>

        <div className="why-authors-grid">
          {features.map((feature) => (
            <div className="why-authors-card" key={feature.title}>
              <div className="why-authors-icon">
                <img
                  src={feature.image}
                  alt=""
                  loading="lazy"
                />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyAuthors

