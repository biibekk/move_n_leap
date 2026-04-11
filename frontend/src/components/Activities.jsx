import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Activities.css';

export default function Activities({ scrollToSection, sections }) {
  const { ctaRef } = sections;
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  const activities = [
    {
      title: "Self Defense",
      ageGroup: "Age 4.5 Years+",
      description: "Build discipline, respect, and self-defense skills. Affiliated to Taekwondo Association of India.",
      benefits: ["Physical fitness", "Mental discipline", "Self-confidence", "Belt progression"],
      image: "/imgs/activity1.png",
      schedule: "Tue, Thu, Sat - 6:00 PM to 7:00 PM",
      color: "#ef4444",
      instructor: {
        name: "Mr. Bibek Shrestha",
        credentials: "1st Dan Black Belt",
        experience: "3+ years teaching martial arts to children",
        info: "Classes are structured, safety-first, and focused on building confidence, discipline, and respectful behavior — not aggression."
      }
    },
    {
      title: "Dance",
      ageGroup: "Age 4 Years+",
      description: "Express creativity through various dance forms including Freestyle, Hip-Hop, Contemporary, and Bollywood.",
      benefits: ["Creative expression", "Coordination", "Performance skills", "Team spirit"],
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&q=80",
      video: "/imgs/dance.mp4",
      schedule: "Tue, Thu, Sat",
      color: "#8b5cf6",
      instructor: {
        name: "Ms. Chetna Anand",
        credentials: "Professional Choreographer",
        experience: "7+ years in dance education",
        info: "Specializes in developing rhythm and expressive movement through a structured yet creative approach."
      }
    },
    {
      title: "Drama & Theater",
      ageGroup: "Age 4 Years+",
      description: "Develop public speaking, confidence, and emotional intelligence through theatrical arts.",
      benefits: ["Public speaking", "Confidence", "Creativity", "Emotional expression"],
      image: "/imgs/drama1.jpeg",
      schedule: "Tue, Thu | Sat, Sun",
      color: "#f59e0b",
      instructor: {
        name: "Ms. Garima Arya",
        credentials: "Owner, Dramabaaz Pvt Ltd",
        experience: "Professional Theater Artist & Coach",
        info: "Focuses on building stage presence and emotional intelligence through immersive theatrical techniques."
      }
    },
    {
      title: "Chess",
      ageGroup: "Age 4.5 Years+",
      description: "Master strategic thinking and problem-solving with AICF-Certified Chief Arbiter.",
      benefits: ["Strategic thinking", "Problem solving", "Focus", "Tournament prep"],
      image: "imgs/chess1.jpeg",
      schedule: "Mon, Wed",
      color: "#06b6d4",
      instructor: {
        name: "Mr. Alok",
        credentials: "Certified Chief Arbiter (AICF)",
        experience: "9+ years of coaching experience",
        info: "Brings high-level strategic expertise to help children master focus and logical reasoning."
      }
    },
    {
      title: "Gymnastics",
      ageGroup: "2-5 Years | 5 Years+",
      description: "Progressive gymnastics training tailored for different age groups—from foundational movement for toddlers to advancing skills for children 5 years+.",
      benefits: ["Flexibility & Strength", "Core Stability", "Balance & Agility", "Progressive Learning"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      video: "/imgs/gymnastics3.mp4",
      schedule: "Mon, Wed, Fri",
      color: "#10b981",
      instructor: {
        name: "Ms. Jyoti & Ms. Rani",
        credentials: "Professional Gymnastics Coaches",
        experience: "10+ and 7+ years of experience",
        info: "Our programs are specifically designed to grow with your child, moving from play-based development to structured athletic training."
      }
    },
    {
      title: "Skating",
      ageGroup: "Age 3 Years+",
      description: "Learn the fundamentals of roller skating and balance control in a safe environment.",
      benefits: ["Balance", "Leg strength", "Endurance", "Confidence"],
      image: "/imgs/skating.jpeg",
      schedule: "Tue, Thu, Sat",
      color: "#3b82f6",
      instructor: {
        name: "Mr. Mohit",
        credentials: "Expert Skating Instructor",
        experience: "8+ years in professional coaching",
        info: "Emphasizes safety and technical balance, helping beginners transition smoothly into confident skaters."
      }
    },
    {
      title: "Basketball",
      ageGroup: "Age 4 Years+",
      description: "Build team spirit, agility, and fundamental basketball skills from dribbling to shooting.",
      benefits: ["Teamwork", "Agility", "Hand-eye coordination", "Sportmanship"],
      image: "/imgs/activity7.png",
      schedule: "Tue, Thu, Sat",
      color: "#f59e0b",
      instructor: {
        name: "Mr. Aditya",
        credentials: "Professional Basketball Coach",
        experience: "5+ years of coaching experience",
        info: "Focuses on developing core basketball skills like dribbling and shooting while fostering a strong sense of teamwork and sportsmanship."
      }
    },
    {
      title: "Fencing",
      ageGroup: "Ages 5 Years+",
      description: "Experience the art of fencing, developing sharp reflexes and strategic thinking.\n\nRegistration is open!\nClasses officially commence in July 2026.",
      benefits: ["Reflexes", "Strategy", "Focus", "Discipline"],
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforgefencing.com%2Fwp-content%2Fuploads%2F2024%2F04%2Fforge-fencing-3.png&f=1&nofb=1&ipt=575b4bb939d4703de64a377b739a1fa8eec5602a1cfb39c6a4955f92ae34a31d",
      schedule: "",
      color: "#6366f1",
      instructor: {
        name: "",
        credentials: "",
        experience: "",
        info: ""
      }
    },
    {
      title: "Creative Writing",
      ageGroup: "Age 3 Years+",
      description: "Nurture imagination and improve narrative skills through storytelling and writing workshops.",
      benefits: ["Vocabulary", "Imagination", "Self-expression", "Grammar"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
      schedule: "Sat, Sun",
      color: "#ec4899",
      instructor: {
        name: "Ms. Saniya",
        credentials: "Published Author & Certified Creative Writing Mentor",
        experience: "9+ years",
        info: "Dedicated to helping children unlock their imagination through creative storytelling, vocabulary building, and expressive writing techniques."
      }
    },
    {
      title: "Phonics",
      ageGroup: "Age 3 Years+",
      description: "Build a strong foundation for reading and pronunciation with our structured phonics program.",
      benefits: ["Reading speed", "Spelling", "Pronunciation", "Confidence"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      schedule: "Mon, Wed, Fri",
      color: "#8b5cf6",
      instructor: {
        name: "Ms. Sumati Anand & Ms. Yogita Pandey",
        credentials: "Foundational Literacy Specialists",
        experience: "20+ and 5+ years of experience",
        info: "A dedicated team focused on building strong reading foundations and linguistic confidence through interactive methods."
      }
    },
    {
      title: "Football",
      ageGroup: "Age 5 Years+",
      description: "Master the beautiful game with professional training focusing on ball control, teamwork, and tactical awareness.",
      benefits: ["Stamina & Speed", "Team Collaboration", "Ball Control", "Spatial Awareness"],
      image: "/imgs/football.jpeg",
      schedule: "Mon, Wed, Fri",
      color: "#10b981",
      instructor: {
        name: "Mr. Arjun Bist, Mr. Saurabh",
        credentials: "Certified Youth Football Coach",
        experience: "5+ years professional coaching",
        info: "Focuses on developing core soccer skills while fostering a love for the game and team spirit."
      }
    }
  ];

  return (
    <section className="activities" id="activities">
      <div className="activities-background"></div>
      <div className="container">
        <div className="activities-header">
          <span className="section-label">Our Expertise</span>
          <h2 className="section-title">
            Unlock Your Child’s Full Potential
          </h2>
          <p className="section-description">
            Activities that blend fun with meaningful learning—helping your child build confidence, discover their strengths, guided by experienced professionals.
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
                {activity.video ? (
                  <video
                    src={activity.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="activity-video-bg"
                  />
                ) : (
                  <img src={activity.image} alt={activity.title} loading="lazy" />
                )}
                <div className="activity-overlay">
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
                  <p className="instructor-class-info">{activity.instructor.info}</p>
                </div>

                <button
                  onClick={() => scrollToSection(ctaRef)}
                  className="activity-btn shimmer-btn"
                >
                  Book Free Trial Class
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="activities-cta">
          <div className="cta-content">
            <h3>Not Sure Which Activity to Choose?</h3>
            <p>Book a free consultation with our program coordinator to find the perfect fit for your child.</p>
            <a href="#contact" className="btn btn-primary btn-lg shimmer-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(ctaRef);
              }}
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}