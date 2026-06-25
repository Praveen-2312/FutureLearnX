import { useParams } from "react-router-dom";
import courses from "../data/courses";
import "../styles/course.css";

function CourseDetail() {
  const { id } = useParams();

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  if (!course) {
    return (
      <div className="course-detail">
        <h1>Course Not Found</h1>
      </div>
    );
  }

  const handleEnroll = () => {
    const enrolled =
      JSON.parse(
        localStorage.getItem("enrolledCourses")
      ) || [];

    const alreadyEnrolled =
      enrolled.find(
        (item) => item.id === course.id
      );

    if (alreadyEnrolled) {
      alert("Course already enrolled!");
      return;
    }

    enrolled.push(course);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolled)
    );

    alert("Successfully Enrolled!");
  };

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>

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

      <p>{course.description}</p>

      <button
        className="enroll-btn"
        onClick={handleEnroll}
      >
        Enroll Now
      </button>

      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${course.youtubeId}`}
        title={course.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default CourseDetail;