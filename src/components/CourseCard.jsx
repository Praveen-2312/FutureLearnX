import { Link } from "react-router-dom";
import "../styles/courses.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      {/* Course Image */}
      <div className="course-image-container">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="course-thumbnail"
        />

        <span className="course-category">
          {course.category}
        </span>
      </div>

      {/* Course Content */}
      <div className="course-content">
        <h3>{course.title}</h3>

        <p className="course-instructor">
          👨‍🏫 {course.instructor}
        </p>

        <div className="course-info">
          <span>⭐ {course.rating}</span>
          <span>⏱ {course.duration}</span>
        </div>

        <div className="course-info">
          <span>🎯 {course.level}</span>
          <span>👨‍🎓 {course.students}</span>
        </div>

        <p className="course-description">
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>

        <Link to={`/course/${course.id}`}>
          <button className="view-btn">
            View Course →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;