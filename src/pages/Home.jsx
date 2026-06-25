import { useState } from "react";
import heroImg from "../assets/hero.png";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import "../styles/home.css";

function Home() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Learn Skills For The Future With FutureLearnX
            </h1>

            <p>
              Access curated YouTube courses, track your
              learning progress, and build real-world skills
              in Web Development, AI, Data Science, and more.
            </p>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              <button>
                Search
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={heroImg}
              alt="FutureLearnX Hero"
            />
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="featured-courses">
        <h2>Featured Courses</h2>

        <div className="course-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          <div className="category-card">
            Web Development
          </div>

          <div className="category-card">
            Artificial Intelligence
          </div>

          <div className="category-card">
            Data Science
          </div>

          <div className="category-card">
            Cyber Security
          </div>

          <div className="category-card">
            UI / UX Design
          </div>

          <div className="category-card">
            Mobile Development
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <h2>100+</h2>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <h2>50K+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>25+</h2>
          <p>Expert Instructors</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Student Satisfaction</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>Why Choose FutureLearnX?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Free Learning</h3>

            <p>
              Access curated educational content
              without spending money.
            </p>
          </div>

          <div className="why-card">
            <h3>Track Progress</h3>

            <p>
              Keep track of enrolled courses and
              your learning journey.
            </p>
          </div>

          <div className="why-card">
            <h3>Industry Skills</h3>

            <p>
              Learn technologies used by top
              companies around the world.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Student Testimonials</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "FutureLearnX helped me learn React
              faster than I expected."
            </p>

            <h4>— Praveen T</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "The dashboard and progress tracking
              features are really useful."
            </p>

            <h4>— Student User</h4>
          </div>

          <div className="testimonial-card">
            <p>
              "A simple yet powerful platform for
              learning new technologies."
            </p>

            <h4>— Tech Learner</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;