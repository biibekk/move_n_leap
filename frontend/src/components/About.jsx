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
                href="https://maps.app.goo.gl/H2QUrDTMUvZxfgjt6"
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
                  src="/imgs/founder.jpeg"
                  alt="Ms. Yogita Pandey - Founder"
                  loading="lazy"
                />
              </div>
              <div className="founder-info">
                <div className="founders-header">
                  <h4>Ms. Yogita Pandey</h4>
                  <span className="founder-role">Founder</span>
                </div>
                <p className="founder-bio">
                  Driven by a lifelong belief that every child carries a unique spark, 
                  Ms. Yogita founded Move N Leap to be more than just an academy—it's a 
                  nurturing home for growth. With 15 years of experience, her heart is 
                  set on building the confidence and resilience that children carry for a lifetime.
                </p>
              </div>
            </div>

            <div className="founder-card">
              <div className="founder-image">
                <img
                  src="/imgs/cofounder.jpeg"
                  alt="Mr. Saurav Tripathi - Co-Founder"
                  loading="lazy"
                />
              </div>
              <div className="founder-info">
                <div className="founders-header">
                  <h4>Mr. Saurav Tripathi</h4>
                  <span className="founder-role">Co-Founder</span>
                </div>
                <p className="founder-bio">
                  For Saurav, sports were the foundation of his character, and for the last 
                  15 years, he’s shared that gift with children.
                  He believes that when children move with joy, they discover a 
                  strength they never knew they had, building discipline that lasts forever.
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
          <h3>Join our legacy of excellence.</h3>
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