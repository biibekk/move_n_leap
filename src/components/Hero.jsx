import { useState, useEffect } from 'react';
import { Award, Shield, Users, CheckCircle } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="hero">
      {/* Background Video */}
      <div className="hero-video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="https://cdn.coverr.co/videos/coverr-children-playing-in-a-classroom-5336/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-fallback-bg"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Navigation
      <nav className="hero-nav">
        <div className="container">
          <div className="nav-content">
            <div className={`logo ${isVisible ? 'visible' : ''}`}>
              <img
                src={`${process.env.PUBLIC_URL}/transparent_favicon-32x32.png`}
                alt="Move N Leap"
                className="hero-logo"
              />
              <span>Move N Leap</span>
            </div>
            <div className="nav-actions">
              <a href="tel:+919876543210" className="nav-phone">
                📞 +91 98765 43210
              </a>
              <a href="#book-trial" className="btn btn-primary btn-sm">
                Book Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Content */}
      <div className="hero-content-wrapper">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
              <div className="trust-badge">
                <Shield className="trust-icon" />
                <span>Trusted by 500+ Families in Gurugram</span>
              </div>

              <h1 className="hero-title">
                Transform Your Child's
                <span className="highlight"> Confidence </span>
                in 30 Days
              </h1>

              <p className="hero-description">
                Expert-led programs in Taekwondo, Dance, Drama, and Chess. 
                Build discipline, boost confidence, and help your child discover their potential 
                in a safe, structured environment.
              </p>

              {/* Benefits List */}
              <ul className="hero-benefits">
                <li>
                  <CheckCircle className="check-icon" />
                  <span><strong>Certified Instructors</strong> with 15+ years experience</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span><strong>Safe Environment</strong> with full insurance coverage</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span><strong>Proven Results</strong> - 95% parent satisfaction</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span><strong>Flexible Schedule</strong> that fits your routine</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="hero-cta">
                <a href="#book-trial" className="btn btn-primary btn-lg">
                  Book Your Free Trial Class →
                </a>
                <a href="#learn-more" className="btn btn-outline">
                  Learn More
                </a>
              </div>

              {/* Social Proof */}
              <div className="social-proof">
                <div className="proof-item">
                  <Users className="proof-icon" />
                  <div>
                    <strong>500+</strong>
                    <span>Happy Students</span>
                  </div>
                </div>
                <div className="proof-item">
                  <Award className="proof-icon" />
                  <div>
                    <strong>15 Years</strong>
                    <span>Experience</span>
                  </div>
                </div>
                <div className="proof-item">
                  <Shield className="proof-icon" />
                  <div>
                    <strong>100%</strong>
                    <span>Safe & Certified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Illustration */}
            <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" 
                  alt="Happy children learning and playing"
                  className="hero-img"
                />
                {/* Floating Stats */}
                <div className="floating-stat stat-1">
                  <div className="stat-icon">🏆</div>
                  <div>
                    <strong>98%</strong>
                    <span>Success Rate</span>
                  </div>
                </div>
                <div className="floating-stat stat-2">
                  <div className="stat-icon">⭐</div>
                  <div>
                    <strong>4.9/5</strong>
                    <span>Parent Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-content">
            <span>✓ No Credit Card Required</span>
            <span>✓ Cancel Anytime</span>
            <span>✓ Money-Back Guarantee</span>
            <span>✓ Certified by National Sports Authority</span>
          </div>
        </div>
      </div>
    </header>
  );
}