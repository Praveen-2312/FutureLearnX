import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>

      <p>
        Instructor: {course.instructor}
      </p>

      <p>
        Category: {course.category}
      </p>

      <p>
        Duration: {course.duration}
      </p>

      <p>
        Students: {course.students}
      </p>

      <Link to={`/courses/${course.id}`}>
        <button>
          View Course
        </button>
      </Link>
    </div>
  );
}

export default CourseCard;