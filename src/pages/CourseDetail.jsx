import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import courses from "../data/courses";
import "../styles/course.css";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <section className="course-not-found">
        <h2>Course Not Found</h2>
        <p>The requested course does not exist.</p>

        <Link to="/courses" className="back-btn">
          ← Back to Courses
        </Link>
      </section>
    );
  }

  const handleEnroll = () => {
    const enrolledCourses =
      JSON.parse(
        localStorage.getItem("enrolledCourses")
      ) || [];

    const alreadyEnrolled =
      enrolledCourses.some(
        (item) => item.id === course.id
      );

    if (alreadyEnrolled) {
      setMessage(
        "You have already enrolled in this course."
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

      return;
    }

    enrolledCourses.push(course);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourses)
    );

    setMessage(
      "🎉 Successfully enrolled! Redirecting..."
    );

    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <main className="course-detail-page">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="container course-hero-container">
          <div className="course-left">
            <span className="course-category">
              {course.category}
            </span>

            <h1>{course.title}</h1>

            <p className="course-description">
              {course.description}
            </p>

            <div className="course-meta">
              <span>👨‍🏫 {course.instructor}</span>
              <span>👥 {course.students}</span>
              <span>⏱ {course.duration}</span>
            </div>

            {message && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  background: "#dcfce7",
                  color: "#166534",
                  fontWeight: "600",
                }}
              >
                {message}
              </div>
            )}
          </div>

          <div className="course-right">
            <div className="info-card">
              <h3>Course Information</h3>

              <div className="info-row">
                <span>📚 Category</span>
                <strong> {course.category}</strong>
              </div>

              <div className="info-row">
                <span>👨‍🏫 Instructor</span>
                <strong> {course.instructor}</strong>
              </div>

              <div className="info-row">
                <span>👥 Students</span>
                <strong> {course.students}</strong>
              </div>

              <div className="info-row">
                <span>⏱ Duration</span>
                <strong> {course.duration}</strong>
              </div>

              <div className="info-row">
                <span>⭐ Rating</span>
                <strong> 4.8 / 5</strong>
              </div>

              <button
                className="enroll-btn"
                onClick={handleEnroll}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview */}
      <section className="video-section">
        <div className="container">
          <h2>Course Preview</h2>

          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${course.youtubeId}`}
              title={course.title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="description-section">
        <div className="container">
          <h2>About this Course</h2>

          <p>{course.description}</p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="learn-section">
        <div className="container">
          <h2>What You'll Learn</h2>

          <div className="learn-grid">
            <div>✅ Build real-world projects</div>
            <div>✅ Learn from video lectures</div>
            <div>✅ Improve coding skills</div>
            <div>✅ Hands-on practical learning</div>
            <div>✅ Beginner-friendly content</div>
            <div>✅ Certificate of Completion</div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="instructor-section">
        <div className="container">
          <div className="instructor-card">
            <div className="avatar">
              👨‍🏫
            </div>

            <div>
              <h2>{course.instructor}</h2>

              <p>
                Passionate educator with years of
                experience teaching thousands of
                students worldwide through engaging
                online courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="course-cta">
        <div className="container">
          <h2>Ready to Start Learning?</h2>

          <p>
            Join thousands of learners and start
            building your future today.
          </p>

          <button
            className="enroll-btn"
            onClick={handleEnroll}
          >
            Start Learning
          </button>

          <br />

          <Link
            to="/courses"
            className="back-btn"
          >
            ← Back to Courses
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CourseDetail;