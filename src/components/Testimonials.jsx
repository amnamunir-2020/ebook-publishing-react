
import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "First-Time Author",
    review:
      "The team made my publishing journey simple and stress-free. My book looks professional, and the entire process was smooth.",
    initials: "SJ",
  },
  {
    name: "Michael Anderson",
    role: "Independent Author",
    review:
      "Excellent formatting and cover design services. The team understood my vision and helped me prepare my book for publication.",
    initials: "MA",
  },
  {
    name: "Emily Carter",
    role: "Children's Book Author",
    review:
      "I had a wonderful experience working with the team. Their support and attention to detail made publishing much easier.",
    initials: "EC",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-heading">
          <span className="testimonials-subtitle">
            CLIENT TESTIMONIALS
          </span>

          <h2>What Our Authors Say About Us</h2>

          <p>
            Discover what authors think about their experience
            with our eBook publishing services.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <p className="testimonial-review">
                “{item.review}”
              </p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.initials}
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
