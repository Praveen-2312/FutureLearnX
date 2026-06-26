import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    setEnrolledCourses(storedCourses);
  }, []);

  const removeCourse = (id) => {
    const updatedCourses = enrolledCourses.filter(
      (course) => course.id !== id
    );

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updatedCourses)
    );

    setEnrolledCourses(updatedCourses);
  };

  const completedCourses = Math.floor(enrolledCourses.length * 0.4);

  const progress =
    enrolledCourses.length === 0
      ? 0
      : Math.round(
          (completedCourses / enrolledCourses.length) * 100
        );

  return (
    <div className="dashboard-page">
      {/* Welcome Banner */}
      <section className="dashboard-banner">
        <h1>🎓 Welcome to Your Dashboard</h1>

        <p>
          Track your learning progress and continue
          building your skills every day.
        </p>
      </section>

      {/* Statistics */}
      <section className="stats-grid">
        <div className="dashboard-card">
          <h2>{enrolledCourses.length}</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="dashboard-card">
          <h2>{completedCourses}</h2>
          <p>Completed Courses</p>
        </div>

        <div className="dashboard-card">
          <h2>{progress}%</h2>
          <p>Overall Progress</p>
        </div>

        <div className="dashboard-card">
          <h2>12 hrs</h2>
          <p>Learning Time</p>
        </div>
      </section>

      {/* Progress */}
      <section className="progress-section">
        <h2>Your Learning Progress</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>{progress}% Completed</p>
      </section>

      {/* Courses */}
      <section className="dashboard-courses">
        <h2>My Courses</h2>

        {enrolledCourses.length === 0 ? (
          <div className="empty-dashboard">
            <h3>No Courses Enrolled Yet</h3>

            <p>
              Browse our courses and start learning today.
            </p>

            <Link to="/courses">
              <button className="browse-btn">
                Browse Courses
              </button>
            </Link>
          </div>
        ) : (
          <div className="dashboard-course-grid">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="dashboard-course-card"
              >
                <img
                  src={course.thumbnail}
                  alt={course.title}
                />

                <h3>{course.title}</h3>

                <p>{course.instructor}</p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeCourse(course.id)
                  }
                >
                  Remove Course
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Goals */}
      <section className="goal-section">
        <h2>Learning Goals</h2>

        <div className="goal-grid">
          <div className="goal-card">
            🎯 Complete one course every week.
          </div>

          <div className="goal-card">
            📚 Practice coding for 1 hour daily.
          </div>

          <div className="goal-card">
            🚀 Build one project every month.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;