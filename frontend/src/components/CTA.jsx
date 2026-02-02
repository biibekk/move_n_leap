import { Calendar, CheckCircle, ArrowRight, Flame } from 'lucide-react';
import { useState } from "react";

import './CTA.css';


export default function CTA() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    childAge: "",
    activity: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Stops the browser from refreshing the page

    // console.log("Parent Lead:", formData); 

    // TEMP: alert (replace later with API / Formspree)
    // alert("Thank you! We’ll call you shortly.");

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/routes/parentEnquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        // Converts JavaScript object → JSON string
        // Servers can’t read JS objects directly
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (data.success) {
        alert(data.message);
      } else {
        alert(data.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }

    // reset form
    setFormData({
      parentName: "",
      phone: "",
      childAge: "",
      activity: "",
    });
  };

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
      <div className="cta-background"></div>
      <div className="container">
        {/* Main CTA Content */}
        <div className="cta-content">
          <div className="cta-main">
            <div className="cta-text">
              <h2 className="cta-title">
                Ready to Transform Your Child's Future?
              </h2>
              <p className="cta-description">
                Join 200+ families who've already discovered the Move N Leap difference.
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
                  className="btn btn-primary btn-lg shimmer-btn"
                  onClick={handleScrollToForm}
                >
                  Book Your Free Trial Now
                </button>
                <a href="tel:+919319693858" className="btn btn-secondary btn-lg">
                  Call Us: +91 9319693858
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

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="parent-name">Parent's Name *</label>
                <input
                  type="text"
                  id="parent-name"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="child-age">Child's Age *</label>
                <select
                  id="child-age"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select age</option>
                  <option value="4-6">4-6 years</option>
                  <option value="7-9">7-9 years</option>
                  <option value="10-12">10-12 years</option>
                  <option value="13-16">13-16 years</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="activity">Interested Activity *</label>
                <select
                  id="activity"
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose activity</option>
                  <option value="self-defense">Self Defense</option>
                  <option value="dance">Dance</option>
                  <option value="drama">Drama & Theater</option>
                  <option value="chess">Chess</option>
                  <option value="fitness">Fitness & Yoga</option>
                  <option value="art">Art & Craft</option>
                </select>
              </div>

              <button type="submit" className="form-submit-btn shimmer-btn">
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
            <span className="urgency-badge">
              <Flame className="badge-icon" />
              Limited Spots Available
            </span>
            <p>Only <strong>12 spots left</strong> for this month's intake. Book now to secure your child's place!</p>
            {/* <p>Only <strong>12 spots left</strong> this month. Book now!</p> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}