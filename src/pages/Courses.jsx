import { useState } from "react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import "../styles/home.css";

function Courses() {
  const [search, setSearch] = useState("");

  const filteredCourses =
    courses.filter((course) =>
      course.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <section className="featured-courses">
      <h2>All Courses</h2>

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "12px",
            width: "300px",
          }}
        />
      </div>

      <div className="course-grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}

export default Courses;