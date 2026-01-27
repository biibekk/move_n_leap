import { Award, Shield, Users, Target } from 'lucide-react';
import './About.css';

export default function About() {
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
      description: "500+ successful students with measurable improvements in confidence and skills."
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Content */}
          <div className="about-content">
            <span className="section-label">About Move N Leap</span>
            <h2 className="section-title">
              Trusted by Parents, Loved by Kids
            </h2>
            <p className="about-text">
              Move N Leap Academy was founded in 2010 with a simple mission: to provide 
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
              <a href="#book-trial" className="btn btn-primary">
                Book Free Trial Class
              </a>
              <a href="#contact" className="btn btn-outline">
                Visit Our Facility
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-images">
            <div className="image-main">
              <img 
                src="https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2024/08/30163826/2-3.jpg" 
                alt="Happy children at Move N Leap Academy"
              />
            </div>
            <div className="image-secondary">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80" 
                alt="Children learning at academy"
              />
            </div>

            {/* Floating Badge */}
            <div className="experience-badge">
              <strong>15+</strong>
              <span>Years of Excellence</span>
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
      </div>
    </section>
  );
}