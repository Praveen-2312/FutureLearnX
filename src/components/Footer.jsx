import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column">
          <h2>🎓 FutureLearnX</h2>

          <p>
            Learn modern technologies from industry experts.
            Build your skills with interactive courses and
            become job ready.
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
          <h3>Popular Courses</h3>

          <p>React Development</p>
          <p>Python Programming</p>
          <p>Artificial Intelligence</p>
          <p>Machine Learning</p>
          <p>Web Development</p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>📧 support@futurelearnx.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Chennai, India</p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">🌐</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="YouTube">▶️</a>
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