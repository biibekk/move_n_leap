import { useState, useEffect } from 'react';
import { Trophy, Award, Shield, Users, CheckCircle, Star } from 'lucide-react';
import './Hero.css';

export default function Hero({ scrollToSection, aboutRef, ctaRef }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="hero">
      {/* Fixed Background Image */}
      <div className="hero-background"></div>

      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content-wrapper">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
              <div className="hero-heading-wrapper">
                <div className="trust-badge">
                  <Shield className="trust-icon" />
                  <span>Trusted by 200+ Families in Noida</span>
                </div>

                <h1 className="hero-title">
                  The Best Kids Academy in Noida for
                  <span className="highlight"> &nbsp;Confidence&nbsp; </span>
                  & <span className="highlight">Skills</span>
                </h1>
              </div>

              <p className="hero-description">
                Expert-led programs in Self Defense, Dance, Drama, Chess, Gymnastics, Skating, and Basketball.
                Build discipline, boost confidence, and help your child discover their potential
                in a safe, structured environment.
              </p>

              {/* Benefits List */}
              <ul className="hero-benefits">
                <li>
                  <CheckCircle className="check-icon" />
                  <span><strong>Certified Instructors</strong> with 10+ years experience</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span><strong>Safe Environment</strong> with CCTV surveillance</span>
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
                <button
                  onClick={() => scrollToSection(ctaRef)}
                  className="btn btn-primary btn-lg shimmer-btn"
                >
                  Book Your Free Trial Class
                </button>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="btn btn-outline btn-cta-hero-outline"
                >
                  Learn More
                </button>
              </div>

              {/* Social Proof */}
              <div className="social-proof">
                <div className="proof-item">
                  <Users className="proof-icon" />
                  <div>
                    <strong>200+</strong>
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
                  src="/imgs/hero1.jpeg"
                  alt="Children participating in fun educational activities at Move N Leap Academy"
                  className="hero-img"
                  fetchPriority="high"
                />
                {/* Floating Stats */}
                <div className="floating-stat stat-1">
                  <div className="stat-icon"><Trophy /></div>
                  <div>
                    <strong>98%</strong>
                    <span>Success Rate</span>
                  </div>
                </div>
                <div className="floating-stat stat-2">
                  <div className="stat-icon"><Star /></div>
                  <div>
                    <strong>4.7/5</strong>
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
            {/* <span>✓ No Credit Card Required</span> */}
            <span>✓ Recognized by Motor Skill Learning Academy, Switzerland</span>
          </div>
        </div>
      </div>
    </header>
  );
}