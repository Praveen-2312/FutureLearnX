import { useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import "../styles/course.css";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === "All" ||
        course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, category]);

  return (
    <main className="courses-page">
      {/* Header */}
      <section className="courses-header">
        <div className="container">
          <h1>Explore Our Courses</h1>

          <p>
            Learn modern technologies from industry experts
            through high-quality video courses.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="courses-filter">
        <div className="container">
          <div className="filter-wrapper">
            <input
              type="text"
              placeholder="🔍 Search courses..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              {categories.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <p className="course-count">
            Showing{" "}
            <strong>
              {filteredCourses.length}
            </strong>{" "}
            Course(s)
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="courses-grid-section">
        <div className="container">
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          ) : (
            <div className="no-course">
              <h2>No Courses Found</h2>

              <p>
                Try changing the search keyword or
                category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Courses;