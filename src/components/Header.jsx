import { useState } from 'react'
import logo from '../assets/logo.webp'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">

        {/* Logo */}
        <a href="#home" className="logo">
          <img src={logo} alt="Ebook Publishing" />
        </a>

        {/* Hamburger */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation */}
        <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
          <a href="home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="about-us" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="services" onClick={() => setMenuOpen(false)}>Services</a>
         
          <a href="contact-us" onClick={() => setMenuOpen(false)}>Contact Us</a>

          <a href="contact-us" className="mobile-btn">
            Get Started
          </a>
        </nav>

        {/* Desktop Button */}
        <a href="contact-us" className="header-btn">
          Get Started
        </a>

      </div>
    </header>
  )
}

export default Header