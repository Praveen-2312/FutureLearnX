import { Link } from "react-router-dom";
import {
  FaStar,
  FaClock,
  FaUserGraduate,
  FaSignal,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

import courses from "../data/courses";
import "../styles/featured.css";

function FeaturedCourses() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <section className="featured-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            🚀 Most Popular Courses
          </span>

          <h2>Featured Courses</h2>

          <p>
            Learn from industry experts through
            project-based courses designed to help
            you build real-world skills.
          </p>
        </div>

        <div className="featured-grid">

          {featuredCourses.map((course) => (

            <div
              className="featured-card"
              key={course.id}
            >

              {/* Image */}

              <div className="featured-image">

                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                />

                <span className="course-level">
                  {course.level}
                </span>

                <span className="course-price">
                  {course.price}
                </span>

              </div>

              {/* Content */}

              <div className="featured-content">

                <span className="course-category">
                  {course.category}
                </span>

                <h3>{course.title}</h3>

                <p className="course-description">
                  {course.description.substring(0, 100)}...
                </p>

                <div className="instructor">

                  👨‍🏫 {course.instructor}

                </div>

                <div className="course-meta">

                  <span>
                    <FaStar />
                    {course.rating}
                  </span>

                  <span>
                    <FaClock />
                    {course.duration}
                  </span>

                </div>

                <div className="course-meta">

                  <span>
                    <FaSignal />
                    {course.level}
                  </span>

                  <span>
                    <FaUserGraduate />
                    {course.students}
                  </span>

                </div>

                <div className="course-footer">

                  <span className="certificate">

                    <FaCertificate />

                    {course.certificate
                      ? " Certificate"
                      : " No Certificate"}

                  </span>

                  <Link
                    to={`/course/${course.id}`}
                    className="view-course-btn"
                  >
                    View Course

                    <FaArrowRight />

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="view-all">

          <Link
            to="/courses"
            className="primary-btn"
          >
            Explore All Courses
          </Link>

        </div>

      </div>
    </section>
  );
}

export default FeaturedCourses;