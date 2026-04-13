import { Star, ChevronDown, ChevronUp, User } from 'lucide-react';
import { useState } from 'react';
import './Testimonials.css';

export default function Testimonials({ scrollToSection, ctaRef }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const testimonials = [
    {
      name: "Sneha Kapoor",
      role: "Mother of 6-year-old Advika",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      rating: 5,
      text: "Initially, I was worried about my daughter being too shy, but the Gymnastics coaches here are amazing! They focus on balance and confidence as much as the moves. Advika now looks forward to every session and has become so much more active at home.",
      activity: "Gymnastics"
    },
    {
      name: "Dr. Arpit Gupta",
      role: "Father of 8-year-old Ishan",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 5,
      text: "Finding a safe place for skating in Noida was tough until we found Move N Leap. The rink is well-maintained and the safety protocols are strict. My son went from stumbling to gliding in just 2 months. The trainers' patience is commendable.",
      activity: "Skating"
    },
    {
      name: "Monica Iyer",
      role: "Mother of 10-year-old Kabir",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      text: "The basketball coaching here is top-notch. It’s not just about the game; it's about teamwork and discipline. My son's stamina has improved remarkably, and he's learned the value of persistence through every drill.",
      activity: "Basketball"
    },
    {
      name: "Shalini Jain",
      role: "Mother of 11-year-old Myra",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      rating: 5,
      text: "My daughter always had stories in her head but didn't know how to express them. The Creative Writing classes helped her find her voice. She's now writing short stories with so much more structure and creativity. Truly an enriching experience!",
      activity: "Creative Writing"
    },
    {
      name: "Kunal Sethi",
      role: "Father of 5-year-old Arjun",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      rating: 5,
      text: "We struggled with Arjun's reading skills until we joined the Phonics program. The multi-sensory approach really works for young kids. He started blending words faster than we expected, and now he loves picking up storybooks on his own.",
      activity: "Phonics"
    },
    {
      name: "Sanjay Mehra",
      role: "Father of 10-year-old Kabir",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
      rating: 5,
      text: "The football coaching here is outstanding. Coach Rahul doesn't just teach techniques; he focuses on character building and teamwork. My son's stamina has improved significantly, and he's learned to handle both wins and losses with grace.",
      activity: "Football"
    }
  ];

  return (
    <section className="testimonials" id="reviews">
      <div className="testimonials-background"></div>
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Parent Reviews</span>
          <h2 className="section-title">
            What Parents Say About Us
          </h2>
          <p className="section-description">
            Don't just take our word for it. Here's what parents have to say
            about their children's experience at Move N Leap Academy.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="rating-summary">
          <div className="rating-box">
            <strong>4.7</strong>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`star-icon ${i < 4 ? 'filled' : 'half-filled'}`} />
              ))}
            </div>
            <span>Based on 284 verified reviews</span>
          </div>
          <div className="rating-details">
            <div className="rating-row">
              <span>5 stars</span>
              <div className="rating-bar">
                <div className="rating-fill" style={{ width: '80%' }}></div>
              </div>
              <span>80%</span>
            </div>
            <div className="rating-row">
              <span>4 stars</span>
              <div className="rating-bar">
                <div className="rating-fill" style={{ width: '12%' }}></div>
              </div>
              <span>12%</span>
            </div>
            <div className="rating-row">
              <span>3 stars</span>
              <div className="rating-bar">
                <div className="rating-fill" style={{ width: '6%' }}></div>
              </div>
              <span>6%</span>
            </div>
            <div className="rating-row">
              <span>2 stars</span>
              <div className="rating-bar">
                <div className="rating-fill" style={{ width: '2%' }}></div>
              </div>
              <span>2%</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index} 
                className={`testimonial-card ${isExpanded ? 'active' : 'collapsed'} ${index === 0 ? 'featured' : ''}`}
                onClick={() => setExpandedIndex(isExpanded ? (index === 0 ? 0 : -1) : index)}
              >
                <div className="testimonial-header-row justify-end">
                  <div className="expand-trigger mobile-only">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                <div className="testimonial-body">
                  <div className="testimonial-content">
                    <p className="testimonial-text">
                      {testimonial.text}
                    </p>
                    <div className="testimonial-activity">
                      <span>Program: {testimonial.activity}</span>
                    </div>
                  </div>

                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <User size={32} />
                    </div>
                    <div className="author-details">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                      <div className="testimonial-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="star-icon filled" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <span className="trust-number">200+</span>
            <span className="trust-label">Happy Families</span>
          </div>
          <div className="trust-item">
            <span className="trust-number">4.7/5</span>
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