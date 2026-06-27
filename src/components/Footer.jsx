import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">

          <h2 className="footer-logo">
            🎓 FutureLearnX
          </h2>

          <p>
            FutureLearnX is an online learning platform
            designed to help students gain practical
            skills through high-quality video courses,
            project-based learning, and progress tracking.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Categories */}

        <div className="footer-column">

          <h3>Popular Categories</h3>

          <a href="#">Web Development</a>

          <a href="#">Artificial Intelligence</a>

          <a href="#">Python</a>

          <a href="#">UI / UX Design</a>

          <a href="#">Cyber Security</a>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>📍 Chennai, Tamil Nadu</p>

          <p>📞 +91 98765 43210</p>

          <p>📧 support@futurelearnx.com</p>

          <div className="social-icons">

            <a href="#">🌐</a>

            <a href="#">💼</a>

            <a href="#">📷</a>

            <a href="#">🐦</a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © {year} FutureLearnX. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;