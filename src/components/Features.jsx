import './Features.css';

export default function Features() {
  const features = [
    {
      icon: "👥",
      title: "Expert Instructors",
      description: "Learn from certified professionals passionate about nurturing young talent",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80"
    },
    {
      icon: "🏆",
      title: "Competitions & Events",
      description: "Regular contests to showcase skills and build confidence on stage",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80"
    },
    {
      icon: "📅",
      title: "Flexible Schedule",
      description: "After-school programs designed to fit your family's busy lifestyle",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80"
    },
    {
      icon: "🎖️",
      title: "Skill Development",
      description: "Build discipline, creativity, critical thinking, and teamwork",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">
          Why Choose <span className="highlight">Move N Leap?</span>
        </h2>
        <p className="section-description">
          We create a nurturing environment where every child can explore their passions and reach their full potential
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-bg" style={{ backgroundImage: `url(${feature.image})` }}></div>
              <div className="feature-overlay"></div>
              <div className="feature-content">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}