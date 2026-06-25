import { useParams } from "react-router-dom";
import courses from "../data/courses";
import "../styles/course.css";

function CourseDetail() {
  const { id } = useParams();

  const course =
    courses.find(
      (c) => c.id === Number(id)
    );

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  const handleEnroll = () => {
    const enrolled =
      JSON.parse(
        localStorage.getItem(
          "enrolledCourses"
        )
      ) || [];

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

      <p>{course.description}</p>

      <p>
        Instructor:
        {" "}
        {course.instructor}
      </p>

      <p>
        Duration:
        {" "}
        {course.duration}
      </p>

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
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default CourseDetail;