import "../styles/home.css";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Learn Skills For The Future</h1>

        <p>
          Discover top-quality courses curated from YouTube and industry experts.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Courses..."
          />

          <button>
            Search
          </button>
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </section>

      <section className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          <div className="category-card">Web Development</div>
          <div className="category-card">Artificial Intelligence</div>
          <div className="category-card">Data Science</div>
          <div className="category-card">Cyber Security</div>
          <div className="category-card">UI / UX Design</div>
          <div className="category-card">Mobile Development</div>
        </div>
      </section>
    </>
  );
}

export default Home;