import { useState, useEffect } from 'react';
import { Sparkles, Trophy, Award } from 'lucide-react';
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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="https://cdn.coverr.co/videos/coverr-children-playing-in-a-classroom-5336/1080p.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Background Image */}
        <div 
          className="hero-fallback-bg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80')" }}
        ></div>
      </div>

      {/* Dark Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Animated accent elements */}
      <div className="hero-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className={`logo-container ${isVisible ? 'visible' : ''}`}>
          <h1 className="logo">
            <Sparkles className="sparkle-icon" />
            Move N Leap
          </h1>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <h2 className="hero-title">
            Where Kids Learn,
            <br />
            <span className="hero-highlight">Grow & Shine</span>
            <Sparkles className="sparkle-bounce" />
          </h2>
          <p className="hero-description">
            An after-school academy offering Taekwondo, Dance, Drama, Chess & more. Build confidence, make friends, and discover new talents!
          </p>
          <button className="hero-btn">
            Book a Free Trial Class →
          </button>
        </div>

        {/* Floating elements */}
        <div className="floating-trophy">
          <Trophy className="trophy-icon" />
        </div>
        <div className="floating-award">
          <Award className="award-icon" />
        </div>
      </div>
    </header>
  );
}