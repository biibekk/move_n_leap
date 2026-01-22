import './Activities.css';

export default function Activities() {
  const activities = [
    { 
      name: "Taekwondo", 
      icon: "🥋", 
      color: "red-orange", 
      description: "Master martial arts & discipline",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80"
    },
    { 
      name: "Dance", 
      icon: "💃", 
      color: "pink-purple", 
      description: "Express yourself through movement",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80"
    },
    { 
      name: "Drama", 
      icon: "🎭", 
      color: "blue-indigo", 
      description: "Build confidence on stage",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80"
    },
    { 
      name: "Chess", 
      icon: "♟️", 
      color: "yellow-amber", 
      description: "Sharpen strategic thinking",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80"
    }
  ];

  return (
    <section className="activities">
      <div className="container">
        <h2 className="section-title">
          Explore Our <span className="highlight">Activities</span>
        </h2>
        <p className="section-description">
          From physical fitness to creative expression and mental agility - we offer programs that cater to every interest
        </p>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-bg" style={{ backgroundImage: `url(${activity.image})` }}></div>
              <div className={`activity-overlay ${activity.color}`}></div>
              <div className="activity-content">
                <div className={`activity-icon ${activity.color}`}>{activity.icon}</div>
                <h3 className="activity-title">{activity.name}</h3>
                <p className="activity-description">{activity.description}</p>
              </div>
              <div className="activity-shine"></div>
            </div>
          ))}
        </div>

        <div className="activities-cta">
          <p className="activities-note">...and many more exciting programs!</p>
          <button className="activities-btn">View All Activities</button>
        </div>
      </div>
    </section>
  );
}