import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/FeaturedCourses";

import "../styles/home.css";

function Home() {
  return (
    <main className="home-page">
      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= SEARCH SECTION ================= */}
      <SearchBar />

      {/* ================= CATEGORIES ================= */}
      <Categories />

      {/* ================= FEATURED COURSES ================= */}
      <FeaturedCourses />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">
              WHY CHOOSE FUTURELEARNX
            </span>

            <h2>
              Learn Smarter with
              <span className="highlight"> FutureLearnX</span>
            </h2>

            <p>
              We help students develop practical, industry-ready skills
              through project-based learning, expert mentorship,
              and modern technologies.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🎓</div>

              <h3>Expert Mentors</h3>

              <p>
                Learn directly from experienced professionals who
                have worked on real-world industry projects.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💻</div>

              <h3>Project-Based Learning</h3>

              <p>
                Build practical applications that strengthen your
                portfolio and improve your technical skills.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">📜</div>

              <h3>Certificates</h3>

              <p>
                Receive completion certificates after finishing
                every course successfully.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🚀</div>

              <h3>Career Support</h3>

              <p>
                Prepare for internships and placements with
                career-oriented learning paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLATFORM STATS ================= */}
      <section className="stats-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">
              OUR ACHIEVEMENTS
            </span>

            <h2>Growing Every Day</h2>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h2>5000+</h2>
              <p>Active Students</p>
            </div>

            <div className="stat-card">
              <h2>12+</h2>
              <p>Professional Courses</p>
            </div>

            <div className="stat-card">
              <h2>15+</h2>
              <p>Expert Instructors</p>
            </div>

            <div className="stat-card">
              <h2>98%</h2>
              <p>Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonial-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">
              STUDENT TESTIMONIALS
            </span>

            <h2>What Our Learners Say</h2>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>

              <p>
                FutureLearnX helped me improve my React skills
                and secure my first internship.
              </p>

              <h4>Rahul Kumar</h4>

              <span>Frontend Developer Intern</span>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>

              <p>
                The UI/UX course was practical, engaging,
                and easy to understand.
              </p>

              <h4>Priya Sharma</h4>

              <span>UI/UX Designer</span>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>

              <p>
                Excellent instructors, real projects,
                and a very professional learning platform.
              </p>

              <h4>Arjun S</h4>

              <span>Software Engineer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Learning?</h2>

          <p>
            Join thousands of learners and build the skills
            needed for your dream career.
          </p>

          <div className="cta-buttons">
            <a href="/courses" className="primary-btn">
              Explore Courses
            </a>

            <a href="/register" className="secondary-btn">
              Join Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;