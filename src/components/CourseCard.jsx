import { Link } from "react-router-dom";
import "../styles/course.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      {/* Course Image */}
      <div className="course-image">
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

      {/* Course Content */}
      <div className="course-content">
        <span className="course-category-badge">
          {course.category}
        </span>

        <h3>{course.title}</h3>

        <p>
          {course.description.length > 110
            ? `${course.description.substring(0, 110)}...`
            : course.description}
        </p>

        <div className="course-info-grid">
          <div className="info-box">
            <span>👨‍🏫</span>
            <small>Instructor</small>
            <strong>{course.instructor}</strong>
          </div>

          <div className="info-box">
            <span>⭐</span>
            <small>Rating</small>
            <strong>{course.rating}/5</strong>
          </div>

          <div className="info-box">
            <span>👥</span>
            <small>Students</small>
            <strong>{course.students}</strong>
          </div>

          <div className="info-box">
            <span>⏱</span>
            <small>Duration</small>
            <strong>{course.duration}</strong>
          </div>

          <div className="info-box">
            <span>📚</span>
            <small>Lessons</small>
            <strong>{course.lessons}</strong>
          </div>

          <div className="info-box">
            <span>📜</span>
            <small>Certificate</small>
            <strong>
              {course.certificate ? "Yes" : "No"}
            </strong>
          </div>
        </div>

        <Link
          to={`/course/${course.id}`}
          className="course-btn"
        >
          View Course →
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;