import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of 8-year-old",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      text: "Move N Leap has been amazing for my daughter! She's gained so much confidence through their drama program. The instructors are passionate and truly care about each child's growth.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of 10-year-old",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      text: "The chess program has improved my son's critical thinking skills tremendously. He looks forward to every session. Best after-school program we've enrolled him in!",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Parent of 7-year-old twins",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      text: "Both my kids attend different activities at Move N Leap - one does taekwondo and the other loves dance. The flexible schedule and quality instruction make it perfect for our family.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">
          What <span className="highlight">Parents Say</span>
        </h2>
        <p className="section-description">
          Hear from families who have experienced the Move N Leap difference
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}