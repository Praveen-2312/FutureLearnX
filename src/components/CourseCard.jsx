import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-content">
        <h3>{course.title}</h3>

        <p>
          <strong>Instructor:</strong>{" "}
          {course.instructor}
        </p>

        <p>
          <strong>Category:</strong>{" "}
          {course.category}
        </p>

        <p>
          <strong>Duration:</strong>{" "}
          {course.duration}
        </p>

        <p>
          <strong>Students:</strong>{" "}
          {course.students}
        </p>

        <Link to={`/courses/${course.id}`}>
          <button className="view-btn">
            View Course
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;