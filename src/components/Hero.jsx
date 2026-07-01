import { Link } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* Left Side */}

        <div className="hero-content">

          <span className="hero-tag">
            🚀 Learn Skills for the Future
          </span>

          <h1>
            Learn Without
            <span> Limits</span>
          </h1>

          <p>
            Master Web Development, Artificial Intelligence,
            Python, UI/UX Design, Cloud Computing, and more
            with carefully curated video courses from top
            instructors.
          </p>

          <div className="hero-buttons">

            <Link
              to="/courses"
              className="primary-btn"
            >
              Explore Courses
            </Link>

            <Link
              to="/register"
              className="secondary-btn"
            >
              Get Started
            </Link>

          </div>

          <div className="hero-stats">

            <div>

              <h3>5000+</h3>

              <p>Students</p>

            </div>

            <div>

              <h3>12+</h3>

              <p>Courses</p>

            </div>

            <div>

              <h3>15+</h3>

              <p>Experts</p>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-image">

          <img
            src="/src/assets/IMAGES/hs.png"
            alt="FutureLearnX Hero"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;