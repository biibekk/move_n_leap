import React from 'react';
import './Navbar.css';

export default function Navbar({ scrolled, isMenuOpen, setIsMenuOpen, scrollToSection, sections }) {
  const { heroRef, activitiesRef, featuresRef, aboutRef, testimonialsRef, ctaRef } = sections;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/transparent_favicon-32x32.png`}
              alt="Move N Leap"
              className="logo-img"
            />
            <span onClick={(e) => {
              e.preventDefault();
              scrollToSection(heroRef);
            }}>
              Move N Leap
            </span>
          </div>

          {/* Mobile Toggle */}
          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Navigation Items */}
          <div className={`nav-right ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              <li>
                <a href="#activities" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(activitiesRef);
                }}>
                  Programs
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(featuresRef);
                }}>
                  Why Us
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(aboutRef);
                }}>
                  Founders
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(testimonialsRef);
                }}>
                  Testimonials
                </a>
              </li>
            </ul>

            {/* Phone & CTA */}
            <div className="nav-actions">
              <a href="tel:+919319693858" className="nav-phone">
                <span role="img" aria-label="phone">📞</span> +91 93196 93858
              </a>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => scrollToSection(ctaRef)}
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}