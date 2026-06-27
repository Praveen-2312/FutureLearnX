import "../styles/categories.css";

function Categories() {
  const categories = [
    {
      icon: "💻",
      title: "Web Development",
      courses: "18 Courses",
      color: "#2563eb",
    },
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      courses: "12 Courses",
      color: "#8b5cf6",
    },
    {
      icon: "🐍",
      title: "Python Programming",
      courses: "15 Courses",
      color: "#f59e0b",
    },
    {
      icon: "🎨",
      title: "UI / UX Design",
      courses: "10 Courses",
      color: "#ec4899",
    },
    {
      icon: "📱",
      title: "App Development",
      courses: "14 Courses",
      color: "#10b981",
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      courses: "8 Courses",
      color: "#06b6d4",
    },
  ];

  return (
    <section className="categories">
      <div className="container">

        <div className="section-header">
          <h2>Browse Categories</h2>

          <p>
            Explore trending technologies and build the
            skills employers are looking for.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              className="category-card"
              key={index}
            >
              <div
                className="category-icon"
                style={{
                  backgroundColor: category.color,
                }}
              >
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <p>{category.courses}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;