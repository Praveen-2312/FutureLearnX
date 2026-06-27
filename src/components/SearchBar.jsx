import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/search.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = search.trim();

    if (!query) {
      navigate("/courses");
      return;
    }

    navigate(`/courses?search=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="search-section">
      <div className="search-container">

        <h2>Find Your Next Course</h2>

        <p>
          Search from our collection of programming,
          AI, UI/UX, cloud, cybersecurity and more.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <button onClick={handleSearch}>
            🔍 Search
          </button>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;