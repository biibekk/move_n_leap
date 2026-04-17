import { CheckCircle, Flame } from 'lucide-react';
import { useState, useMemo } from "react";

import './CTA.css';

export default function CTA() {
  const spotsLeft = useMemo(() => Math.floor(Math.random() * (12 - 5 + 1)) + 5, []);
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    childAge: "",
    activities: [],
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({
    phone: "",
  });

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow ONLY digits and limit to 10 characters
      const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({
        ...formData,
        [name]: cleanedValue,
      });

      // Clear error as user types
      if (errors.phone) {
        setErrors({ ...errors, phone: "" });
      }
    } else if (name === "parentName") {
      // Allow ONLY alphabets and spaces
      const cleanedValue = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({
        ...formData,
        [name]: cleanedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleActivityChange = (activity) => {
    setFormData((prev) => {
      const activities = prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity];
      return { ...prev, activities };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!validatePhone(formData.phone)) {
      setErrors({ ...errors, phone: "Please enter a valid 10-digit phone number" });
      return;
    }

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/routes/parentEnquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
      activities: [],
    });
    setErrors({ phone: "" });
    setIsDropdownOpen(false);
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
                  <span>Flexible schedule – classes 6 days a week</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>Safe & secure environment – CCTV monitored facility</span>
                </li>
                <li>
                  <CheckCircle className="check-icon" />
                  <span>30-day satisfaction guarantee</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="cta-buttons">
                <button
                  className="btn btn-primary btn-lg shimmer-btn mobile-view-only"
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
                  placeholder="9876543210"
                  required
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
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
                <label htmlFor="activity-dropdown">Interested Activities *</label>
                <div className="custom-multiselect">
                  <div
                    className={`multiselect-header ${isDropdownOpen ? "open" : ""}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    id="activity-dropdown"
                  >
                    <span className="selected-text">
                      {formData.activities.length === 0
                        ? "Choose activities..."
                        : formData.activities.join(", ")}
                    </span>
                    <svg
                      className={`chevron-icon ${isDropdownOpen ? "rotate" : ""}`}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>

                  {isDropdownOpen && (
                    <>
                      <div className="dropdown-overlay" onClick={() => setIsDropdownOpen(false)}></div>
                      <div className="multiselect-options">
                        <div className="options-controls">
                          <button
                            type="button"
                            className="control-btn clear-btn"
                            onClick={() => setFormData({ ...formData, activities: [] })}
                          >
                            Clear All
                          </button>
                          <button
                            type="button"
                            className="control-btn done-btn"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Done
                          </button>
                        </div>
                        {[
                          "Self Defense",
                          "Dance",
                          "Drama & Theater",
                          "Chess",
                          "Gymnastics",
                          "Skating",
                          "Basketball",
                          "Fencing",
                          "Creative Writing",
                          "Phonics",
                          "Football",
                        ].map((activity) => (
                          <div
                            key={activity}
                            className={`multiselect-option ${formData.activities.includes(activity) ? "selected" : ""
                              }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleActivityChange(activity);
                            }}
                          >
                            <div className="checkbox-box">
                              {formData.activities.includes(activity) && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                              )}
                            </div>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                {formData.activities.length === 0 && (
                  <input
                    type="checkbox"
                    style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                    required
                  />
                )}
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
            <p>Only <strong>{spotsLeft} spots left</strong> for this month's intake. Book now to secure your child's place!</p>
            {/* <p>Only <strong>12 spots left</strong> this month. Book now!</p> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}