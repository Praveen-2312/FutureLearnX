import { Link } from "react-router-dom";
import courses from "../data/courses";
import "../styles/featured.css";

function FeaturedCourses() {
  // Display only the first 6 courses
  const featuredCourses = courses.slice(0, 6);

  return (
    <section className="featured-section">
      <div className="container">

        <div className="section-header">
          <h2>Featured Courses</h2>

          <p>
            Start learning with our most popular courses
            chosen by thousands of students.
          </p>
        </div>

        <div className="featured-grid">

          {featuredCourses.map((course) => (

            <div className="featured-card" key={course.id}>

              <img
                src={course.thumbnail}
                alt={course.title}
              />

              <div className="featured-content">

                <span className="course-category">
                  {course.category}
                </span>

                <h3>{course.title}</h3>

                <p className="instructor">
                  👨‍🏫 {course.instructor}
                </p>

                <div className="course-meta">

                  <span>⭐ {course.rating}</span>

                  <span>⏱ {course.duration}</span>

                </div>

                <div className="course-meta">

                  <span>🎯 {course.level}</span>

                  <span>👨‍🎓 {course.students}</span>

                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="view-course-btn"
                >
                  View Course →
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="view-all">

          <Link
            to="/courses"
            className="primary-btn"
          >
            View All Courses
          </Link>

        </div>

      </div>
    </section>
  );
}

export default FeaturedCourses;