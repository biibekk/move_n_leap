import { Award, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <Award className="footer-logo-icon" />
              <span>Move N Leap</span>
            </div>
            <p className="footer-description">
              Empowering children through expert-led programs in Taekwondo, Dance, Drama, Chess & more. 
              Building confidence, discipline, and lifelong skills since 2010.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram />
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <Youtube />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#activities">Our Programs</a></li>
              <li><a href="#reviews">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#book-trial">Book Trial Class</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-section">
            <h4 className="footer-title">Our Programs</h4>
            <ul className="footer-links">
              <li><a href="#activities">Taekwondo</a></li>
              <li><a href="#activities">Dance Classes</a></li>
              <li><a href="#activities">Drama & Theater</a></li>
              <li><a href="#activities">Chess Training</a></li>
              <li><a href="#activities">Fitness & Yoga</a></li>
              <li><a href="#activities">Art & Craft</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin className="contact-icon" />
                <span>Sector 47, Gurugram<br />Haryana 122018, India</span>
              </li>
              <li>
                <Phone className="contact-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <Mail className="contact-icon" />
                <a href="mailto:info@movenleap.com">info@movenleap.com</a>
              </li>
              <li>
                <Clock className="contact-icon" />
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="footer-badges">
          <div className="badge-item">
            <span className="badge-icon">🏆</span>
            <span>Certified Academy</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">🛡️</span>
            <span>Fully Insured</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">✓</span>
            <span>Background Checked Staff</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">⭐</span>
            <span>4.9/5 Rated</span>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} Move N Leap Academy. All rights reserved.</p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms & Conditions</a>
              <span>•</span>
              <a href="#refund">Refund Policy</a>
            </div>
          </div>
          <div className="footer-credit">
            <p>Made with ❤️ for kids in Gurugram</p>
          </div>
        </div>
      </div>
    </footer>
  );
}