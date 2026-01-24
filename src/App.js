import React, { useState, useEffect } from 'react';
import './App.css';

// ========== NAVIGATION COMPONENT ==========
function Navigation({ scrolled, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">Move & Leap</div>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#why-us" onClick={() => scrollToSection('why-us')}>Why Us</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// ========== HERO COMPONENT ==========
function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Where Kids Learn, Play & Grow!</h1>
          <p>A safe and engaging after-school program designed to help students thrive through activities, homework support, and creative play.</p>
          <button onClick={() => scrollToSection('contact')} className="cta-button">
            Enroll Your Child
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">🎒📚⚽🎨</div>
        </div>
      </div>
    </section>
  );
}

// ========== QUICK SERVICES COMPONENT ==========
function QuickServices() {
  const features = [
    {
      icon: '🎒',
      title: 'After School Care',
      description: 'Safe, supervised environment for students right after school ends. Parents can pick up with peace of mind.'
    },
    {
      icon: '📖',
      title: 'Homework Help',
      description: 'Dedicated time and support for completing homework. Our instructors help students understand assignments.'
    },
    {
      icon: '⚽',
      title: 'Sports & Games',
      description: 'Fun physical activities, team sports, and outdoor games to keep kids active and energized.'
    },
    {
      icon: '🎨',
      title: 'Creative Arts',
      description: 'Drawing, painting, crafts, and creative projects that let students express themselves.'
    }
  ];

  return (
    <section className="quick-services">
      <div className="container">
        <div className="services-grid-4">
          {features.map((feature, index) => (
            <ServiceCardSmall key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardSmall({ icon, title, description }) {
  return (
    <div className="service-card-small">
      <div className="service-icon-small">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ========== MAIN SERVICES COMPONENT ==========
function ServicesSection() {
  const programs = [
    {
      emoji: '🏃‍♂️',
      title: 'Active Play Time',
      description: 'Outdoor games, sports, and activities to help kids burn energy and stay healthy after a day in the classroom.'
    },
    {
      emoji: '🎨',
      title: 'Arts & Creativity',
      description: 'Painting, drawing, crafts, drama, and music activities to spark imagination and creative thinking.'
    },
    {
      emoji: '📚',
      title: 'Study Hour',
      description: 'Quiet time with teacher support to complete homework and prepare for upcoming tests and assignments.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="services-grid">
          {programs.map((program, index) => (
            <ServiceCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ emoji, title, description }) {
  return (
    <div className="service-card">
      <div className="service-image-placeholder">{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ========== ABOUT COMPONENT ==========
function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">We help children build confidence and skills</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">
              At Move & Leap Academy, we believe every child deserves a safe, fun place to grow after school. Our program combines structured learning with creative play.
            </p>
            <p>
              From homework assistance to sports and arts, we provide a balanced environment where students can complete their studies, make friends, and explore their interests. Our experienced staff ensures each child receives individual attention in a supportive atmosphere.
            </p>
          </div>
          <div className="about-image">
            <div className="about-placeholder">
              <span style={{fontSize: '5rem'}}>👨‍👩‍👧‍👦</span>
              <p style={{marginTop: '1rem', fontSize: '1.2rem'}}>Happy Kids & Parents</p>
            </div>
          </div>
        </div>

        <Testimonial 
          avatar="👤"
          quote="The best part is that Move & Leap comes with caring staff and engaging activities for every child, making it super easy for working parents to ensure their kids are safe and happy."
          author="Sarah Warren, Parent"
        />
      </div>
    </section>
  );
}

function Testimonial({ avatar, quote, author }) {
  return (
    <div className="testimonial-box">
      <div className="testimonial-avatar">{avatar}</div>
      <p className="testimonial-quote">{quote}</p>
      <p className="testimonial-author">{author}</p>
    </div>
  );
}

// ========== WHY US COMPONENT ==========
function WhyUsSection() {
  const reasons = [
    {
      icon: '❤️',
      title: 'Passionate',
      description: 'Our team is dedicated to creating a nurturing environment where every child feels valued and supported in their growth.'
    },
    {
      icon: '👨‍🏫',
      title: 'Professional',
      description: 'Experienced educators and childcare professionals who understand child development and create engaging activities.'
    },
    {
      icon: '🤝',
      title: 'Supportive',
      description: 'We work closely with parents to ensure each child gets the attention and support they need to thrive.'
    }
  ];

  return (
    <section id="why-us" className="why-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <WhyCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ icon, title, description }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ========== CTA COMPONENT ==========
function CTASection({ scrollToSection }) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Get your child enrolled today!</h2>
        <button onClick={() => scrollToSection('contact')} className="cta-button-white">
          Contact Us Now
        </button>
      </div>
    </section>
  );
}

// ========== CONTACT COMPONENT ==========
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm 
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info-block">
      <h3>Contact Information</h3>
      <div className="contact-item">
        <span className="contact-label">Email:</span>
        <span>info@moveandleap.com</span>
      </div>
      <div className="contact-item">
        <span className="contact-label">Phone:</span>
        <span>+1 (555) 123-4567</span>
      </div>
      <div className="contact-item">
        <span className="contact-label">Hours:</span>
        <span>Monday-Friday, 3:00 PM - 6:00 PM</span>
      </div>
      
      <div className="social-links">
        <a href="https://www.instagram.com/move_n_leap/" target="_blank" rel="noopener noreferrer">📷</a>
        <a href="#">📘</a>
        <a href="#">✉️</a>
      </div>
    </div>
  );
}

function ContactForm({ formData, setFormData, handleSubmit }) {
  return (
    <div className="contact-form">
      <h3>Send us a message</h3>
      <div className="form-wrapper">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <textarea 
          placeholder="Your Message" 
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
        <button onClick={handleSubmit} className="submit-button">Send Message</button>
      </div>
    </div>
  );
}

// ========== FOOTER COMPONENT ==========
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Copyright © 2026 Move & Leap Academy | After School Program</p>
      </div>
    </footer>
  );
}

// ========== MAIN APP COMPONENT ==========
export default function MoveLeapLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="landing-page">
      <Navigation 
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <QuickServices />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <CTASection scrollToSection={scrollToSection} />
      <ContactSection />
      <Footer />
    </div>
  );
}