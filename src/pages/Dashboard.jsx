import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    return JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  });

  const removeCourse = (id) => {
    const updated = enrolledCourses.filter(
      (course) => course.id !== id
    );

    setEnrolledCourses(updated);

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updated)
    );
  };

  return (
    <main className="dashboard-page">
      {/* Welcome */}
      <section className="dashboard-hero">
        <h1>Welcome Back 👋</h1>

        <p>
          Continue learning and keep improving your skills.
        </p>
      </section>

      {/* Statistics */}
      <section className="dashboard-stats">
        <div className="stat-box">
          <h2>{enrolledCourses.length}</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="stat-box">
          <h2>45 hrs</h2>
          <p>Learning Time</p>
        </div>

        <div className="stat-box">
          <h2>3</h2>
          <p>Completed</p>
        </div>

        <div className="stat-box">
          <h2>2</h2>
          <p>Certificates</p>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section className="dashboard-courses">
        <h2>Your Courses</h2>

        {enrolledCourses.length === 0 ? (
          <div className="empty-dashboard">
            <h3>No Courses Enrolled</h3>

            <p>
              Start learning by enrolling in a course.
            </p>

            <Link
              to="/courses"
              className="dashboard-btn"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="dashboard-grid">
            {enrolledCourses.map((course) => (
              <div
                className="dashboard-card"
                key={course.id}
              >
                <div className="dashboard-image">
                  📘
                </div>

                <div className="dashboard-content">
                  <h3>{course.title}</h3>

                  <p>{course.instructor}</p>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>

                  <span>70% Completed</span>

                  <div className="dashboard-actions">
                    <Link
                      to={`/course/${course.id}`}
                      className="dashboard-btn"
                    >
                      Continue
                    </Link>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeCourse(course.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Achievements */}
      <section className="achievement-section">
        <h2>Achievements</h2>

        <div className="achievement-grid">
          <div className="achievement-card">
            🥇
            <h4>Fast Learner</h4>
          </div>

          <div className="achievement-card">
            🔥
            <h4>7 Day Streak</h4>
          </div>

          <div className="achievement-card">
            🚀
            <h4>Rising Star</h4>
          </div>

          <div className="achievement-card">
            🎯
            <h4>First Course</h4>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;