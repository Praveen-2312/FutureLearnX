import "../styles/about.css";

function About() {
  const stats = [
    { number: "12+", label: "Courses Available", icon: "📚" },
    { number: "5K+", label: "Active Students", icon: "🎓" },
    { number: "15+", label: "Expert Instructors", icon: "👨‍🏫" },
    { number: "98%", label: "Student Satisfaction", icon: "⭐" },
  ];

  const features = [
    {
      icon: "🎯",
      title: "Industry-Relevant Courses",
      description:
        "Learn the latest technologies with practical, project-based courses designed to prepare you for real-world careers.",
    },
    {
      icon: "📺",
      title: "Video-Based Learning",
      description:
        "Access curated YouTube tutorials from trusted instructors, organized into structured learning paths.",
    },
    {
      icon: "📈",
      title: "Track Your Progress",
      description:
        "Monitor your enrolled courses and stay motivated with your personal learning dashboard.",
    },
    {
      icon: "🚀",
      title: "Learn at Your Own Pace",
      description:
        "Study anytime, anywhere with flexible self-paced learning and lifetime access to your enrolled courses.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "👨‍💼",
    },
    {
      name: "Sarah Williams",
      role: "Lead Instructor",
      image: "👩‍🏫",
    },
    {
      name: "David Miller",
      role: "UI/UX Designer",
      image: "👨‍🎨",
    },
    {
      name: "Emily Brown",
      role: "Software Engineer",
      image: "👩‍💻",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <h1>About FutureLearnX</h1>

          <p>
            FutureLearnX is a modern online learning platform that helps
            students learn in-demand skills through carefully selected video
            courses, interactive learning experiences, and progress tracking.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="about-container mission-grid">
          <div className="mission-card">
            <h2>🎯 Our Mission</h2>

            <p>
              To make quality education accessible to everyone by providing
              organized, engaging, and practical online courses that empower
              learners to achieve their career goals.
            </p>
          </div>

          <div className="mission-card">
            <h2>👁️ Our Vision</h2>

            <p>
              To become one of the leading online learning platforms where
              students from around the world can learn, grow, and build
              successful careers through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="about-container">
          <h2 className="section-title">Our Impact</h2>

          <div className="stats-grid">
            {stats.map((item, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{item.icon}</div>

                <h3>{item.number}</h3>

                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="about-container">
          <h2 className="section-title">
            Why Choose FutureLearnX?
          </h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="about-container">
          <h2 className="section-title">
            Meet Our Team
          </h2>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  {member.image}
                </div>

                <h3>{member.name}</h3>

                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">
          <h2>Start Your Learning Journey Today</h2>

          <p>
            Join thousands of learners and build the skills that matter.
          </p>

          <a href="/courses" className="about-btn">
            Explore Courses
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;