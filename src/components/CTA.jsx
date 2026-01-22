import './CTA.css';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-blob cta-blob-1"></div>
      <div className="cta-blob cta-blob-2"></div>

      <div className="container cta-container">
        <h2 className="cta-title">Ready to Start the Journey?</h2>
        <p className="cta-description">
          Join hundreds of happy families and give your child the gift of learning, growth, and endless fun!
        </p>

        <div className="cta-buttons">
          <button className="cta-btn primary">Book Your Free Trial</button>
          <button className="cta-btn secondary">Learn More</button>
        </div>

        <div className="cta-stats">
          <div className="stat">
            <span className="stat-icon">🏆</span>
            <span className="stat-text">Award-Winning Programs</span>
          </div>
          <div className="stat">
            <span className="stat-icon">👥</span>
            <span className="stat-text">500+ Happy Students</span>
          </div>
          <div className="stat">
            <span className="stat-icon">🎖️</span>
            <span className="stat-text">Certified Instructors</span>
          </div>
        </div>
      </div>
    </section>
  );
}