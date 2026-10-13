
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="ebook-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <a href="/" className="footer-logo">
              eBook Publishing Services
            </a>

            <p>
              Turn your manuscript into a professionally
              published book with expert formatting, design,
              and publishing support.
            </p>

            <div className="footer-social">
              <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/" aria-label="Instagram">ig</a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Our Services</h3>
            <ul>
              <li><a href="/ebook-formatting">eBook Formatting</a></li>
              <li><a href="/book-cover-design">Book Cover Design</a></li>
              <li><a href="/ebook-publishing">eBook Publishing</a></li>
              <li><a href="/book-editing">Book Editing</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <p>
              Have a manuscript ready? Let's bring your
              publishing vision to life.
            </p>

            <a href="/contact-us" className="footer-cta">
              Get Started
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} eBook Publishing Services.
            All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
