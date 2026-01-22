import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80" 
                alt="Founder of Move N Leap"
              />
            </div>
            <div className="about-decoration"></div>
          </div>

          <div className="about-text">
            <h2 className="about-title">
              Meet Our <span className="highlight">Founder</span>
            </h2>
            <h3 className="about-name">Sarah Johnson</h3>
            <p className="about-description">
              With over 15 years of experience in child education and development, Sarah founded Move N Leap with a vision to create a holistic learning environment where every child can thrive.
            </p>
            <p className="about-description">
              Her passion for empowering young minds through diverse activities stems from her belief that every child has unique talents waiting to be discovered. Under her leadership, Move N Leap has transformed the lives of hundreds of students, helping them build confidence, develop skills, and discover their true potential.
            </p>
            
            <div className="about-credentials">
              <div className="credential">
                <div className="credential-icon">🎓</div>
                <div className="credential-text">
                  <h4>Education</h4>
                  <p>Master's in Child Psychology</p>
                </div>
              </div>
              <div className="credential">
                <div className="credential-icon">⭐</div>
                <div className="credential-text">
                  <h4>Experience</h4>
                  <p>15+ Years in Child Development</p>
                </div>
              </div>
              <div className="credential">
                <div className="credential-icon">🏆</div>
                <div className="credential-text">
                  <h4>Achievement</h4>
                  <p>Award-Winning Educator</p>
                </div>
              </div>
            </div>

            <blockquote className="about-quote">
              "Every child is born with unlimited potential. Our mission is to help them discover it, nurture it, and let it shine."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}