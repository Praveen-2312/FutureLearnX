import { useParams } from "react-router-dom";
import courses from "../data/courses";
import "../styles/course.css";

function CourseDetail() {
  const { id } = useParams();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return (
      <div className="course-detail">
        <h1>Course Not Found</h1>
      </div>
    );
  }

  const enrollCourse = () => {
    const enrolled =
      JSON.parse(
        localStorage.getItem("enrolledCourses")
      ) || [];

    const alreadyEnrolled = enrolled.find(
      (item) => item.id === course.id
    );

    if (alreadyEnrolled) {
      alert("You are already enrolled in this course.");
      return;
    }

    enrolled.push(course);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolled)
    );

    alert("Course Enrolled Successfully!");
  };

  return (
    <div className="course-detail-page">

      {/* HERO */}

      <section className="course-hero">

        <div className="course-hero-content">

          <div className="course-info">

            <h1>{course.title}</h1>

            <p>{course.description}</p>

            <div className="course-meta">

              <span>⭐ {course.rating}</span>

              <span>👨‍🏫 {course.instructor}</span>

              <span>📚 {course.category}</span>

              <span>⏱️ {course.duration}</span>

              <span>🎯 {course.level}</span>

              <span>👨‍🎓 {course.students}</span>

            </div>

            <button
              className="enroll-btn"
              onClick={enrollCourse}
            >
              Enroll Now
            </button>

          </div>

          <div className="course-image">

            <img
              src={course.thumbnail}
              alt={course.title}
            />

          </div>

        </div>

      </section>

      {/* VIDEO */}

      <section className="video-section">

        <h2>Course Preview</h2>

        <div className="video-wrapper">

          <iframe
            src={`https://www.youtube.com/embed/${course.youtubeId}`}
            title={course.title}
            allowFullScreen
          ></iframe>

        </div>

      </section>

      {/* WHAT YOU'LL LEARN */}

      <section className="learn-section">

        <h2>What You'll Learn</h2>

        <div className="learn-grid">

          <div>✅ Fundamentals</div>

          <div>✅ Real Projects</div>

          <div>✅ Best Practices</div>

          <div>✅ Industry Tips</div>

          <div>✅ Modern Development</div>

          <div>✅ Career Guidance</div>

        </div>

      </section>

      {/* COURSE INCLUDES */}

      <section className="includes-section">

        <h2>This Course Includes</h2>

        <ul>

          <li>📺 Video Lectures</li>

          <li>📄 Downloadable Notes</li>

          <li>📝 Practice Exercises</li>

          <li>📱 Mobile Friendly</li>

          <li>💻 Lifetime Access</li>

          <li>🏆 Sample Certificate</li>

        </ul>

      </section>

    </div>
  );
}

export default CourseDetail;