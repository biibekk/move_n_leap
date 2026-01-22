import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="sparkle">✨</span>
              Move N Leap
            </h3>
            <p className="footer-tagline">
              Empowering children to learn, grow, and shine through engaging after-school programs.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">▶️</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Programs</h4>
            <ul className="footer-links">
              <li><a href="#">Taekwondo</a></li>
              <li><a href="#">Dance</a></li>
              <li><a href="#">Drama</a></li>
              <li><a href="#">Chess</a></li>
              <li><a href="#">All Activities</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>📍 Sector 15, Gurugram, Haryana</li>
              <li>📞 +91 9876543210</li>
              <li>✉️ info@movenleap.com</li>
              <li>🕐 Mon-Sat: 3:00 PM - 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Move N Leap Academy. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}