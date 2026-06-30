import { Link } from "react-router-dom";
import "../styles/course.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      {/* Course Image */}
      <div className="course-image">
        📚
      </div>

      {/* Course Content */}
      <div className="course-content">
        <span className="course-category-badge">
          {course.category}
        </span>

        <h3>{course.title}</h3>

        <p>
          {course.description.length > 90
            ? `${course.description.substring(0, 90)}...`
            : course.description}
        </p>

        <div className="course-info">
          <div>
            <span>👨‍🏫 Instructor</span>
            <strong>{course.instructor}</strong>
          </div>

          <div>
            <span>👥 Students</span>
            <strong>{course.students}</strong>
          </div>

          <div>
            <span>⏱ Duration</span>
            <strong>{course.duration}</strong>
          </div>

          <div>
            <span>⭐ Rating</span>
            <strong>4.8 / 5</strong>
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