import ProgressBar from "../components/ProgressBar";
import "../styles/dashboard.css";

function Dashboard() {
  const enrolled =
    JSON.parse(
      localStorage.getItem("enrolledCourses")
    ) || [];

  const progress =
    enrolled.length > 0
      ? Math.min(enrolled.length * 20, 100)
      : 0;

  const removeCourse = (id) => {
    const updatedCourses =
      enrolled.filter(
        (course) => course.id !== id
      );

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(updatedCourses)
    );

    window.location.reload();
  };

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h2>{enrolled.length}</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="card">
          <h2>{progress}%</h2>
          <p>Completion</p>
        </div>

        <div className="card">
          <h2>120+</h2>
          <p>Learning Hours</p>
        </div>
      </div>

      <h2>Learning Progress</h2>

      <ProgressBar progress={progress} />

      <h2 className="section-title">
        My Courses
      </h2>

      {enrolled.length === 0 ? (
        <p>No Courses Enrolled Yet.</p>
      ) : (
        enrolled.map((course) => (
          <div
            key={course.id}
            className="course-item"
          >
            <div>
              <h3>{course.title}</h3>
              <p>{course.instructor}</p>
            </div>

            <button
              className="remove-btn"
              onClick={() =>
                removeCourse(course.id)
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;