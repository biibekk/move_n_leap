import { useState } from 'react';
import { Swords, Music, Drama, Crown, Dumbbell, Palette } from 'lucide-react';
import './Activities.css';

export default function Activities({ scrollToSection, sections }) {
  const { ctaRef } = sections;
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  const activities = [
    {
      icon: <Swords />,
      title: "Self Defense",
      ageGroup: "Ages 5-16",
      description: "Build discipline, respect, and self-defense skills with certified black belt instructors.",
      benefits: ["Physical fitness", "Mental discipline", "Self-confidence", "Belt progression"],
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
      schedule: "Mon, Wed, Fri - 4:00 PM to 5:30 PM",
      color: "#ef4444",
      instructor: {
        name: "Sensei Rajesh Kumar",
        credentials: "5th Dan Black Belt, National Champion",
        experience: "15+ years teaching martial arts to children"
      }
    },
    {
      icon: <Music />,
      title: "Dance",
      ageGroup: "Ages 4-15",
      description: "Express creativity through various dance forms including Hip-Hop, Contemporary, and Bollywood.",
      benefits: ["Creative expression", "Coordination", "Performance skills", "Team spirit"],
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&q=80",
      schedule: "Tue, Thu, Sat - 3:30 PM to 5:00 PM",
      color: "#8b5cf6",
      instructor: {
        name: "Priya Sharma",
        credentials: "Professional Choreographer, Dance Academy Graduate",
        experience: "10+ years in dance education and performance"
      }
    },
    {
      icon: <Drama />,
      title: "Drama & Theater",
      ageGroup: "Ages 6-14",
      description: "Develop public speaking, confidence, and emotional intelligence through theatrical arts.",
      benefits: ["Public speaking", "Confidence", "Creativity", "Emotional expression"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
      schedule: "Wed, Fri - 5:30 PM to 7:00 PM",
      color: "#f59e0b",
      instructor: {
        name: "Arjun Mehta",
        credentials: "Theater Arts Graduate, NSD Certified",
        experience: "12+ years in theater and drama coaching"
      }
    },
    {
      icon: <Crown />,
      title: "Chess",
      ageGroup: "Ages 7-16",
      description: "Master strategic thinking and problem-solving with FIDE-certified chess coaches.",
      benefits: ["Strategic thinking", "Problem solving", "Focus", "Tournament prep"],
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=600&q=80",
      schedule: "Tue, Thu - 4:00 PM to 5:30 PM",
      color: "#06b6d4",
      instructor: {
        name: "Grandmaster Vikram Singh",
        credentials: "FIDE Master, International Chess Federation",
        experience: "20+ years coaching young chess players"
      }
    },
    {
      icon: <Dumbbell />,
      title: "Fitness & Yoga",
      ageGroup: "Ages 8-16",
      description: "Comprehensive fitness program combining yoga, strength training, and flexibility.",
      benefits: ["Physical health", "Flexibility", "Mindfulness", "Stress relief"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
      schedule: "Mon, Wed, Fri - 6:00 PM to 7:00 PM",
      color: "#10b981",
      instructor: {
        name: "Anjali Desai",
        credentials: "Certified Yoga Instructor, Fitness Trainer",
        experience: "8+ years in youth fitness and wellness"
      }
    },
    {
      icon: <Palette />,
      title: "Art & Craft",
      ageGroup: "Ages 5-13",
      description: "Unleash creativity through painting, sculpting, and various artistic techniques.",
      benefits: ["Creativity", "Fine motor skills", "Self-expression", "Art appreciation"],
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
      schedule: "Sat, Sun - 10:00 AM to 11:30 AM",
      color: "#ec4899",
      instructor: {
        name: "Kavita Reddy",
        credentials: "Fine Arts Graduate, Art Education Specialist",
        experience: "11+ years teaching art to children"
      }
    }
  ];

  return (
    <section className="activities" id="activities">
      <div className="container">
        <div className="activities-header">
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">
            Discover Your Child's Passion
          </h2>
          <p className="section-description">
            Expertly designed programs that combine fun with structured learning.
            Each activity is led by certified professionals dedicated to your child's growth.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`activity-card ${expandedCard === index ? 'expanded' : ''}`}
              style={{ '--activity-color': activity.color }}
              onClick={() => toggleCard(index)}
            >
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} />
                <div className="activity-overlay">
                  <div className="activity-icon">
                    {activity.icon}
                  </div>
                </div>
              </div>

              <div className="activity-content">
                <div className="activity-header-info">
                  <h3 className="activity-title">{activity.title}</h3>
                  <span className="age-badge">{activity.ageGroup}</span>
                </div>

                <p className="activity-description">{activity.description}</p>

                <div className="activity-benefits">
                  <strong>What Your Child Gains:</strong>
                  <ul>
                    {activity.benefits.map((benefit, idx) => (
                      <li key={idx}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="activity-schedule">
                  <svg className="schedule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>{activity.schedule}</span>
                </div>

                <div className="instructor-info">
                  <div className="instructor-header">
                    <svg className="instructor-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <strong>Your Instructor</strong>
                  </div>
                  <p className="instructor-name">{activity.instructor.name}</p>
                  <p className="instructor-credentials">{activity.instructor.credentials}</p>
                  <p className="instructor-experience">{activity.instructor.experience}</p>
                </div>

                <a href="#book-trial" className="activity-btn">
                  Book Free Trial Class →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="activities-cta">
          <div className="cta-content">
            <h3>Not Sure Which Activity to Choose?</h3>
            <p>Book a free consultation with our program coordinator to find the perfect fit for your child.</p>
            <a href="#contact" className="btn btn-primary btn-lg"
              onClick={() => scrollToSection(ctaRef)}
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}