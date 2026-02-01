import { Award, Shield, Users, Target, MapPin } from 'lucide-react';
import './About.css';

export default function About({ scrollToSection, ctaRef }) {
  const credentials = [
    {
      icon: <Award />,
      title: "Certified Instructors",
      description: "All our instructors hold national and international certifications in their respective fields."
    },
    {
      icon: <Shield />,
      title: "Safety First",
      description: "Comprehensive insurance coverage, background-checked staff, and strict safety protocols."
    },
    {
      icon: <Users />,
      title: "15+ Years Experience",
      description: "Over a decade of excellence in child development and extracurricular education."
    },
    {
      icon: <Target />,
      title: "Proven Track Record",
      description: "200+ successful students with measurable improvements in confidence and skills."
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Content */}
          <div className="about-content">
            <div className="about-header">
              <span className="section-label">About Move N Leap</span>
              <h2 className="section-title">
                Noida's Most Trusted Academy for Kids
              </h2>
            </div>
            <p className="about-text">
              Move N Leap Academy was founded with a simple mission: to provide
              a safe, nurturing environment where children can discover their passions and
              develop essential life skills beyond the classroom.
            </p>
            <p className="about-text">
              Our expert instructors don't just teach activities – they mentor, inspire,
              and help each child unlock their full potential. With state-of-the-art facilities
              and a curriculum designed by child development specialists, we ensure every
              child receives personalized attention and grows at their own pace.
            </p>

            {/* Credentials Grid */}
            <div className="credentials-grid">
              {credentials.map((credential, index) => (
                <div key={index} className="credential-item">
                  <div className="credential-icon">
                    {credential.icon}
                  </div>
                  <div>
                    <h4>{credential.title}</h4>
                    <p>{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <button
                onClick={() => scrollToSection(ctaRef)}
                className="btn btn-primary shimmer-btn"
              >
                Book Free Trial Class
              </button>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=B-115,+C+Block,+Sector+40,+Noida,+Uttar+Pradesh+201303"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-cta-about-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MapPin size={18} />
                Visit Our Facility
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-images">
            <div className="image-main">
              <img
                src="https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2024/08/30163826/2-3.jpg"
                alt="Happy students learning at Move N Leap Academy in Noida"
                loading="lazy"
              />
            </div>
            <div className="image-secondary">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80"
                alt="Kids performing yoga and fitness at Noida academy"
                loading="lazy"
              />
            </div>

            {/* Floating Badge */}
            <div className="experience-badge">
              <strong>15+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Founders Section - Full Width Below */}
        <div className="founders-section">
          <h3 className="founders-title">Meet Our Founders</h3>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-image">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="Sarah Mitchell - Founder"
                  loading="lazy"
                />
              </div>
              <div className="founder-info">
                <div className="founders-header">
                  <h4>Sarah Mitchell</h4>
                  <span className="founder-role">Founder & CEO</span>
                </div>
                <p className="founder-bio">
                  With over 20 years of experience in child development and education,
                  Sarah founded Move N Leap to create a space where every child can thrive.
                  She holds a Master's in Early Childhood Education and is a certified
                  child psychologist.
                </p>
              </div>
            </div>

            <div className="founder-card">
              <div className="founder-image">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                  alt="David Chen - Co-Founder"
                  loading="lazy"
                />
              </div>
              <div className="founder-info">
                <div className="founders-header">
                  <h4>David Chen</h4>
                  <span className="founder-role">Co-Founder & Program Director</span>
                </div>
                <p className="founder-bio">
                  A former professional athlete and sports educator, David brings his
                  passion for physical fitness and holistic development to Move N Leap.
                  He specializes in creating engaging, age-appropriate curricula that
                  build confidence and character.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="about-stats">
          <div className="stat-item">
            <strong>200+</strong>
            <span>Active Students</span>
          </div>
          <div className="stat-item">
            <strong>10+</strong>
            <span>Expert Instructors</span>
          </div>
          <div className="stat-item">
            <strong>95%</strong>
            <span>Parent Satisfaction</span>
          </div>
          <div className="stat-item">
            <strong>5,000+</strong>
            <span>Classes Conducted</span>
          </div>
        </div>

        {/* Micro-CTA */}
        <div className="section-footer-cta">
          <h3>Join our legacy of excellence in Noida.</h3>
          <button
            onClick={() => scrollToSection(ctaRef)}
            className="btn btn-primary shimmer-btn"
          >
            Claim Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}