import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials({ scrollToSection, ctaRef }) {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of 8-year-old",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      text: "My daughter joined the Self Defense program 6 months ago and the transformation has been incredible. Her confidence has soared, and she's more disciplined at home. The instructors are patient, professional, and truly care about each child's development.",
      activity: "Self Defense"
    },
    {
      name: "Rajesh Kumar",
      role: "Father of 10-year-old",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      text: "Move N Leap isn't just an after-school program – it's a second home for my son. He's made wonderful friends, learned Chess from certified coaches, and most importantly, he's happy. As parents, that peace of mind is priceless.",
      activity: "Chess"
    },
    {
      name: "Anjali Verma",
      role: "Mother of 7-year-old twins",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      text: "Both my twins attend different programs here – one does Dance and the other Drama. The facility is clean, safe, and the staff treats every child with such warmth. I highly recommend Move N Leap to every parent in Noida!",
      activity: "Dance & Drama"
    },
    {
      name: "Vikram Patel",
      role: "Father of 12-year-old",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      text: "The instructors here don't just teach skills – they build character. My son has become more focused, respectful, and determined. The progress reports and regular parent communication keep us involved in his journey.",
      activity: "Martial Arts"
    },
    {
      name: "Meera Reddy",
      role: "Mother of 9-year-old",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      text: "I was initially worried about safety, but Move N Leap exceeded all expectations. Background-checked staff, proper insurance, and constant supervision. Plus, my daughter's improvement in public speaking after Drama classes is remarkable!",
      activity: "Drama"
    },
    {
      name: "Amit Singh",
      role: "Father of 6-year-old",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 5,
      text: "The free trial class was what convinced us. We saw firsthand how engaged the kids were and how passionate the instructors are. Three months in, and our son wakes up excited for his Dance classes. Worth every rupee!",
      activity: "Dance"
    }
  ];

  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Parent Reviews</span>
          <h2 className="section-title">
            What Parents Say About Us
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what real parents have to say
            about their children's experience at Move N Leap Academy.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="rating-summary">
          <div className="rating-box">
            <strong>4.8</strong>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-icon filled" />
              ))}
            </div>
            <span>Based on 250+ reviews</span>
          </div>
          <div className="rating-details">
            <div className="rating-row">
              <span>5 stars</span>
              <div className="rating-bar">
                <div className="rating-fill" style={{ width: '95%' }}></div>
              </div>
              <span>95%</span>
            </div>
            <div className="rating-row">
              <span>4 stars</span>
              <div className="rating-bar">
                <div className="rating-fill" style={{ width: '4%' }}></div>
              </div>
              <span>4%</span>
            </div>
            <div className="rating-row">
              <span>3 stars</span>
              <div className="rating-bar">
                <div className="rating-fill" style={{ width: '1%' }}></div>
              </div>
              <span>1%</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" />

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon filled" />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-activity">
                <span>Program: {testimonial.activity}</span>
              </div>

              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-number">200+</span>
            <span className="trust-label">Happy Families</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">4.8/5</span>
            <span className="trust-label">Average Rating</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">95%</span>
            <span className="trust-label">Recommend Us</span>
          </div>
        </div>

        {/* Micro-CTA */}
        <div className="section-footer-cta">
          <h3 className="testimonials-micro-cta-title">Join 200+ Happy Families.</h3>
          <button
            onClick={() => scrollToSection(ctaRef)}
            className="btn btn-primary shimmer-btn"
          >
            Claim Your Spot
          </button>
        </div>
      </div>
    </section>
  );
}