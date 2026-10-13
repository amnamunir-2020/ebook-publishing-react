function ContactForm() {
  return (
    <section className="contact-form-section" id="contact">
      <div className="container">

      

        <form className="horizontal-form">

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group">
            <label>Service</label>

            <select name="service">
              <option value="">Select Service</option>
              <option value="Ebook Publishing">Ebook Publishing</option>
              <option value="Book Formatting">Book Formatting</option>
              <option value="Book Cover Design">Book Cover Design</option>
              <option value="Book Editing">Book Editing</option>
            </select>
          </div>

          <button type="submit" className="form-submit">
            Get Started
          </button>

        </form>

      </div>
    </section>
  )
}

export default ContactForm