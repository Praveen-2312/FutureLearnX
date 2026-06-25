import { useState } from "react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";
import "../styles/courses.css";

function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Explore Courses</h1>

        <p>
          Browse our collection of curated
          learning resources.
        </p>
      </div>

      <div className="filter-section">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="All">
            All Categories
          </option>

          <option value="Programming">
            Programming
          </option>

          <option value="Web Development">
            Web Development
          </option>

          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>

          <option value="Design">
            Design
          </option>

          <option value="Cyber Security">
            Cyber Security
          </option>
        </select>
      </div>

      <div className="course-count">
        Showing {filteredCourses.length} Courses
      </div>

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default Courses;