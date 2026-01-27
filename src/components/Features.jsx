import { Brain, Heart, Trophy, Users, Shield, Star } from 'lucide-react';
import './Features.css';

export default function Features() {
  const features = [
    {
      icon: <Brain />,
      title: "Cognitive Development",
      description: "Enhance problem-solving skills, memory, and strategic thinking through structured activities.",
      color: "#4f46e5"
    },
    {
      icon: <Heart />,
      title: "Emotional Intelligence",
      description: "Build self-awareness, empathy, and emotional regulation in a supportive environment.",
      color: "#ec4899"
    },
    {
      icon: <Trophy />,
      title: "Physical Fitness",
      description: "Develop coordination, strength, and discipline through expert-led sports training.",
      color: "#10b981"
    },
    {
      icon: <Users />,
      title: "Social Skills",
      description: "Learn teamwork, communication, and make lasting friendships with peers.",
      color: "#f59e0b"
    },
    {
      icon: <Shield />,
      title: "Safe Environment",
      description: "Fully insured facility with background-checked instructors and strict safety protocols.",
      color: "#6366f1"
    },
    {
      icon: <Star />,
      title: "Confidence Building",
      description: "Watch your child's self-esteem soar through achievement and positive reinforcement.",
      color: "#8b5cf6"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <span className="section-label">Why Choose Move N Leap</span>
          <h2 className="section-title">
            Comprehensive Development for Your Child
          </h2>
          <p className="section-description">
            Our programs are designed by child development experts to nurture every aspect 
            of your child's growth – mind, body, and character.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon">
                {feature.icon}
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
            <strong>500+</strong>
            <span>Students Enrolled</span>
          </div>
          <div className="stat-card">
            <strong>15+</strong>
            <span>Years of Excellence</span>
          </div>
          <div className="stat-card">
            <strong>4.9/5</strong>
            <span>Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}