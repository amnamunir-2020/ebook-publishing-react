
import './Services.css'
import heroBook from '../assets/ebook-publishing.webp'

const services = [
  {
    number: '01',
    icon: '✎',
    title: 'Developmental Editing',
    description:
      'Strengthen your manuscript with guidance on structure, story flow, pacing, character development and the overall reading experience.',
    features: ['Manuscript structure', 'Story development', 'Editorial feedback'],
  },
  {
    number: '02',
    icon: '✓',
    title: 'Proofreading & Editing',
    description:
      'Improve clarity, consistency, grammar and readability so your manuscript is prepared for its next publishing stage.',
    features: ['Grammar and spelling', 'Language consistency', 'Proofreading review'],
  },
  {
    number: '03',
    icon: '▤',
    title: 'eBook Formatting',
    description:
      'Transform your manuscript into a clean, professionally formatted digital book designed for a comfortable reading experience.',
    features: ['Digital book layout', 'Formatting checks', 'File preparation'],
  },
  {
    number: '04',
    icon: '✧',
    title: 'Book Cover Design',
    description:
      'Create a cover concept that reflects your book, genre and intended audience while maintaining a professional appearance.',
    features: ['Cover concept', 'Genre-appropriate design', 'Digital cover files'],
  },
  {
    number: '05',
    icon: '▣',
    title: 'eBook Publishing',
    description:
      'Get help preparing your book for publication, from checking your files to understanding the requirements of publishing platforms.',
    features: ['Publishing preparation', 'File checks', 'Platform guidance'],
  },
  {
    number: '06',
    icon: '◎',
    title: 'Global Distribution',
    description:
      'Prepare your eBook for distribution through relevant digital platforms, subject to each platform’s requirements and approval.',
    features: ['Distribution preparation', 'Platform requirements', 'Publishing guidance'],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Tell Us About Your Book',
    text: 'Share your manuscript details, publishing goals and the type of support you need.',
  },
  {
    number: '02',
    title: 'Choose Your Services',
    text: 'Discuss the suitable services, deliverables, pricing and project timeline.',
  },
  {
    number: '03',
    title: 'Prepare Your Manuscript',
    text: 'Work through the agreed editing, design, formatting or publishing preparation stages.',
  },
  {
    number: '04',
    title: 'Review Your Files',
    text: 'Review the deliverables and confirm any agreed revisions before the next publishing step.',
  },
]

function Services() {
  return (
    <main className="publishing-services-page">

      {/* Hero */}
      <section className="services-hero">
        <div className="services-container">
          <div className="services-hero-grid">

            <div className="services-hero-content">
              <span className="services-eyebrow">
                PROFESSIONAL eBOOK SERVICES
              </span>

              <h1>
                Everything Your Book Needs to
                <span> Come to Life</span>
              </h1>

              <p>
                From manuscript editing and cover design to eBook
                formatting and publishing preparation, get support
                for the important stages of your publishing journey.
              </p>

              <div className="services-hero-actions">
                <a
                  href="/#contact"
                  className="services-primary-btn"
                >
                  Discuss Your Book <span aria-hidden="true">→</span>
                </a>

                <a
                  href="#our-services"
                  className="services-secondary-btn"
                >
                  Explore Services
                </a>
              </div>

              <div className="services-hero-note">
                <span aria-hidden="true">✓</span>
                Publishing support tailored to your project
              </div>
            </div>

            <div className="services-hero-image">
              <div className="services-image-accent"></div>
              <img
                src={heroBook}
                alt="Professional eBook publishing and book preparation"
              />
              <div className="services-image-caption">
                <span className="services-caption-icon">✦</span>
                <div>
                  <strong>Your Story. Your Book.</strong>
                  <span>Professional publishing support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="services-intro-section">
        <div className="services-container">
          <div className="services-intro-grid">
            <div>
              <span className="services-eyebrow">
                YOUR PUBLISHING PARTNER
              </span>

              <h2>
                The Right Support for
                <span> Every Stage of Your Book</span>
              </h2>
            </div>

            <p>
              Every manuscript has different needs. Whether you are
              developing an early draft or preparing a finished book
              for digital publication, our services are designed to
              help you understand and manage the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list-section" id="our-services">
        <div className="services-container">

          <div className="services-section-heading">
            <span className="services-eyebrow">
              WHAT WE CAN HELP WITH
            </span>

            <h2>
              Explore Our <span>Publishing Services</span>
            </h2>

            <p>
              Choose the support that fits your manuscript,
              publishing goals and project requirements.
            </p>
          </div>

          <div className="services-cards-grid">
            {services.map((service) => (
              <article
                className="publishing-service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <div className="service-card-icon" aria-hidden="true">
                    {service.icon}
                  </div>

                  <span className="service-card-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="service-card-description">
                  {service.description}
                </p>

                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="service-card-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  Discuss This Service
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="services-benefits-section">
        <div className="services-container">
          <div className="services-benefits-grid">

            <div className="services-benefits-content">
              <span className="services-eyebrow">
                A CLEARER PUBLISHING JOURNEY
              </span>

              <h2>
                Focus on Your Story.
                <span> We'll Help With the Details.</span>
              </h2>

              <p>
                Publishing a book involves many moving parts.
                Our aim is to make the process easier to understand
                with clear communication, agreed deliverables and
                support tailored to your project.
              </p>

              <a
                href="/#contact"
                className="services-primary-btn"
              >
                Talk to Our Team <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="services-benefits-list">
              <article className="services-benefit-item">
                <span className="services-benefit-check">✓</span>
                <div>
                  <h3>Support Based on Your Needs</h3>
                  <p>
                    Explore the services relevant to your manuscript
                    instead of choosing a one-size-fits-all approach.
                  </p>
                </div>
              </article>

              <article className="services-benefit-item">
                <span className="services-benefit-check">✓</span>
                <div>
                  <h3>Clear Project Expectations</h3>
                  <p>
                    Discuss the scope, timeline, deliverables and
                    applicable costs before work begins.
                  </p>
                </div>
              </article>

              <article className="services-benefit-item">
                <span className="services-benefit-check">✓</span>
                <div>
                  <h3>Help With Publishing Preparation</h3>
                  <p>
                    Understand the files and requirements involved
                    in preparing your book for publication.
                  </p>
                </div>
              </article>

              <article className="services-benefit-item">
                <span className="services-benefit-check">✓</span>
                <div>
                  <h3>Author-Focused Communication</h3>
                  <p>
                    Share your goals and questions throughout the
                    agreed stages of your project.
                  </p>
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-process-section">
        <div className="services-container">

          <div className="services-section-heading">
            <span className="services-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              A Simple Path from Manuscript
              <span> to Publication Preparation</span>
            </h2>

            <p>
              Understand the key steps before your project begins.
            </p>
          </div>

          <div className="services-process-grid">
            {processSteps.map((step) => (
              <article
                className="services-process-card"
                key={step.number}
              >
                <span className="services-process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="services-final-cta">
        <div className="services-container">
          <span className="services-eyebrow">
            LET'S GET YOUR BOOK READY
          </span>

          <h2>
            Not Sure Which Service You Need?
          </h2>

          <p>
            Tell us about your manuscript and goals. We can discuss
            your requirements and help you identify the next steps.
          </p>

          <a
            href="/#contact"
            className="services-cta-white-btn"
          >
            Get in Touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

    </main>
  )
}

export default Services
