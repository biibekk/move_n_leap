import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import './CTA.css';

export default function CTA() {
  const handleScrollToForm = () => {
    const form = document.querySelector('.cta-form-section');
    if (form) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const formPosition = form.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: formPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="cta" id="book-trial">
      <div className="container">
        {/* Main CTA Content */}
        <div className="cta-content">
          <div className="cta-main">
            <div className="cta-text">
              <h2 className="cta-title">
                Ready to Transform Your Child's Future?
              </h2>
              <p className="cta-description">
                Join 500+ families who've already discovered the Move N Leap difference.
                Book your free trial class today – no credit card required, no strings attached.
              </p>

              {/* Benefits List */}
              <ul className="cta-benefits">
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Free trial class – experience before you commit</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>No credit card required – completely risk-free</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Flexible schedule – classes 6 days a week</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>30-day satisfaction guarantee – or your money back</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="cta-buttons">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={handleScrollToForm}
                >
                  Book Your Free Trial Now
                </button>
                <a href="tel:+919876543210" className="btn btn-secondary btn-lg">
                  📞 Call Us: +91 98765 43210
                </a>
              </div>

              {/* Trust Signals */}
              <div className="cta-trust">
                <span>✓ No commitment required</span>
                <span>✓ Available spots limited</span>
                <span>✓ Safe & certified facility</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="cta-form-section">
          <div className="cta-form">
            <div className="form-header">
              <h3>Book Your Free Trial</h3>
              <p>Fill in your details and we'll call you within 2 hours!</p>
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="parent-name">Parent's Name *</label>
                <input
                  type="text"
                  id="parent-name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="child-age">Child's Age *</label>
                <select id="child-age" required>
                  <option value="">Select age</option>
                  <option value="4-6">4-6 years</option>
                  <option value="7-9">7-9 years</option>
                  <option value="10-12">10-12 years</option>
                  <option value="13-16">13-16 years</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="activity">Interested Activity *</label>
                <select id="activity" required>
                  <option value="">Choose activity</option>
                  <option value="taekwondo">Taekwondo</option>
                  <option value="dance">Dance</option>
                  <option value="drama">Drama & Theater</option>
                  <option value="chess">Chess</option>
                  <option value="fitness">Fitness & Yoga</option>
                  <option value="art">Art & Craft</option>
                </select>
              </div>

              <button type="submit" className="form-submit-btn">
                Request Free Trial Class
                {/* <ArrowRight className="btn-arrow" /> */}
              </button>
            </form>

            <p className="form-footer">
              By submitting, you agree to our terms and privacy policy.
              We'll never spam or share your information.
            </p>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="cta-content urgency-banner">
          {/* <div className="urgency-banner"> */}
            <div className="urgency-content">
              <span className="urgency-badge">Limited Spots</span>
              <p>Only <strong>12 spots left</strong> this month. Book now!</p>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}