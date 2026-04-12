import { Brain, Heart, Trophy, Users, Shield, Star, ClipboardCheck, Smile } from 'lucide-react';
import './Features.css';

export default function Features({ scrollToSection, ctaRef }) {
  const features = [
    {
      icon: <Brain />,
      title: "Cognitive Development",
      description: "Enhance problem-solving skills, memory, and strategic thinking through structured activities.",
      color: "#4f46e5",
      image: "/imgs/feature1.jpeg"
    },
    {
      icon: <Heart />,
      title: "Emotional Intelligence",
      description: "Build self-awareness, empathy, and emotional regulation in a supportive environment.",
      color: "#ec4899",
      image: "/imgs/feature2.png"
    },
    {
      icon: <Trophy />,
      title: "Physical Excellence",
      description: "Mastering the ABCs—Agility, Balance, and Coordination—to build a solid athletic foundation and lifelong physical confidence.",
      color: "#10b981",
      image: "/imgs/feature3.jpeg"
    },
    {
      icon: <Users />,
      title: "Social Skills",
      description: "Learn teamwork, communication, and make lasting friendships with peers.",
      color: "#f59e0b",
      image: "/imgs/feature4.jpeg"
    },
    {
      icon: <Shield />,
      title: "Safe and Secure Environment",
      description: "CCTV monitored facility with background-checked instructors and strict safety protocols.",
      color: "#6366f1",
      image: "/imgs/feature5.png"
    },
    {
      icon: <Star />,
      title: "Confidence Building",
      description: "Watch your child's self-esteem soar through achievement and positive reinforcement.",
      color: "#8b5cf6",
      image: "/imgs/feature6.jpg"
    },
    {
      icon: <ClipboardCheck />,
      title: "Attendance Tracking",
      description: "Stay updated with real-time attendance tracking through the Capriol mobile application.",
      color: "#f97316",
      image: "/imgs/feature7.png"
    },
    {
      icon: <Smile />,
      title: "Dedicated Caretakers",
      description: "Trained caretakers to ensure your child's safety, hygiene, and comfort during all activities.",
      color: "#06b6d4",
      image: "/imgs/feature8.png"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <span className="section-label">Why Choose Move N Leap</span>
          <h2 className="section-title">
            Active Learning Beyond the Classroom
          </h2>
          <p className="section-description">
            Designed by experts, our programs foster holistic child development—shaping the mind, strengthening the body, and building character.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon-wrapper">
                <img src={feature.image} alt={`Move N Leap ${feature.title} program for kids`} className="feature-bg-image" loading="lazy" />
                <div className="feature-icon-overlay">
                  {/* <div className="feature-icon">
                    {feature.icon}
                  </div> */}
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="features-stats">
          <div className="stat-card">
            <strong>95%</strong>
            <span>Parent Satisfaction Rate</span>
          </div>
          <div className="stat-card">
            <strong>200+</strong>
            <span>Students Enrolled</span>
          </div>
          <div className="stat-card">
            <strong>15+</strong>
            <span>Years of Excellence</span>
          </div>
          <div className="stat-card">
            <strong>4.7/5</strong>
            <span>Average Rating</span>
          </div>
        </div>

        {/* Micro-CTA */}
        <div className="section-footer-cta">
          <h3>Ready to see these benefits in action?</h3>
          <button
            onClick={() => scrollToSection(ctaRef)}
            className="btn btn-primary shimmer-btn"
          >
            Book Your Free Trial Class
          </button>
        </div>
      </div>
    </section>
  );
}