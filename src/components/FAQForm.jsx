
import { useState } from "react";

function FAQForm() {
  const faqs = [
    {
      question: "What eBook publishing services do you provide?",
      answer:
        "We can format manuscripts, convert them to EPUB and MOBI, create covers for them, optimize metadata, distribute them on multiple platforms, proofread, and provide continuous support. We do all the technical work; you just select the services you require or we take you through the entire publishing process.",
    },
    {
      question: "Do you work with authors worldwide?",
      answer:
        "Yes, we work with authors across the globe. Whether you're based in the UK, Canada, Australia, UAE, India, or anywhere else, you receive the same formatting quality, dedicated support, and global retail distribution.",
    },
    {
      question: "What's included in a full eBook publishing package?",
      answer:
        "It covers manuscript formatting, EPUB conversion, cover design, a proof copy for your review, metadata and keyword optimization, distribution to major retailers, and support with updates and revisions after publication.",
    },
    {
      question: "How long does the publishing process take and what will be the cost?",
      answer:
        "Most books are ready to publish within 1 to 2 weeks, depending on complexity and revisions. Pricing depends on the services selected, manuscript length, and formatting complexity.",
    },
    {
      question: "Will I retain all rights to my book after publishing with you?",
      answer:
        "Yes, you have full ownership and creative control throughout. You're free to republish, revise, or repurpose your book according to your needs.",
    },
    {
      question: "Which genres do you provide eBook publishing for?",
      answer:
        "We publish fiction and nonfiction, including romance, thriller, fantasy, self-help, business, memoir, children's, and young adult books.",
    },
    {
      question: "Do you provide ISBN and copyright registration?",
      answer:
        "Yes, we guide you through obtaining an ISBN when required and explain copyright registration options for your country.",
    },
    {
      question: "Can you help with marketing after publishing?",
      answer:
        "Yes. We provide guidance on keyword optimization, categories, and pricing to help prepare your ebook for organic discovery.",
    },
    {
      question: "Which platforms do you publish my ebook on?",
      answer:
        "We publish across major retailers, including Amazon Kindle, Apple Books, Kobo, Barnes & Noble Press, and Google Play.",
    },
    {
      question: "What makes you stand out among others?",
      answer:
        "We offer clear pricing, quick turnaround, creative control, file testing before launch, and support for corrections and guidance after publication.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="faq-form-section">
      <div className="container">
        <div className="faq-form-layout">
          {/* Left side: FAQs */}
          <div className="faq-form-faqs">
            <span className="faq-form-label">FAQs</span>
            <h2>Frequently Asked Questions</h2>

            <div className="faq-form-accordion">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-form-item ${
                    activeFaq === index ? "is-open" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-form-question"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    aria-expanded={activeFaq === index}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-form-toggle">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {activeFaq === index && (
                    <div className="faq-form-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Contact form */}
          <aside className="faq-form-contact">
            <h2>Let's Publish Your eBook</h2>
            <p>
              Tell us about your project. Our team will help you
              understand the next steps.
            </p>

            <form
              className="faq-form-fields"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="faq-name">Full Name</label>
              <input
                id="faq-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="faq-email">Email Address</label>
              <input
                id="faq-email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
              />

              <label htmlFor="faq-phone">Phone Number</label>
              <input
                id="faq-phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
              />

              <label htmlFor="faq-service">Service Required</label>
              <select id="faq-service" name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option value="ebook-formatting">eBook Formatting</option>
                <option value="cover-design">Cover Design</option>
                <option value="editing">Editing & Proofreading</option>
                <option value="publishing">Full eBook Publishing</option>
                <option value="distribution">Global Distribution</option>
              </select>

              <label htmlFor="faq-message">Project Details</label>
              <textarea
                id="faq-message"
                name="message"
                rows="4"
                placeholder="Tell us about your manuscript"
              />

              <button type="submit" className="faq-form-submit">
                Get a Free Consultation
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default FAQForm;