import { useState } from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import "../styles/courses.css";

function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Programming",
    "Artificial Intelligence",
    "Data Science",
    "Cyber Security",
    "UI/UX Design",
  ];

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
      {/* Header */}
      <section className="courses-hero">
        <h1>Explore Our Courses</h1>

        <p>
          Learn in-demand skills from carefully selected
          YouTube courses and begin your journey today.
        </p>
      </section>

      {/* Search & Filter */}
      <section className="courses-filter">
        <input
          type="text"
          placeholder="🔍 Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </section>

      {/* Results */}
      <div className="course-count">
        Showing {filteredCourses.length} course
        {filteredCourses.length !== 1 ? "s" : ""}
      </div>

      {/* Course Grid */}
      <section className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))
        ) : (
          <div className="no-results">
            <h2>No Courses Found</h2>

            <p>
              Try searching with another keyword
              or choose a different category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Courses;