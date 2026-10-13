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
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a href="#contact" className="mobile-btn">
            Get Started
          </a>
        </nav>

        {/* Desktop Button */}
        <a href="#contact" className="header-btn">
          Get Started
        </a>

      </div>
    </header>
  )
}

export default Header