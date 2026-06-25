import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const enrolledCourses =
    JSON.parse(
      localStorage.getItem("enrolledCourses")
    ) || [];

  useEffect(() => {
    document.body.classList.toggle(
      "dark-theme",
      darkMode
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🎓 FutureLearnX
      </div>

      <div
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/courses"
            onClick={closeMenu}
          >
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            onClick={closeMenu}
          >
            Dashboard ({enrolledCourses.length})
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            onClick={closeMenu}
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/register"
            onClick={closeMenu}
          >
            Register
          </NavLink>
        </li>

        <li>
          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;