import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Whether you have questions,
            suggestions, or feedback, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* Left Side */}
          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>
              Our team is available to answer your questions and help you
              throughout your learning journey.
            </p>

            <div className="info-card">
              <span>📍</span>

              <div>
                <h3>Address</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="info-card">
              <span>📞</span>

              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-card">
              <span>📧</span>

              <div>
                <h3>Email</h3>
                <p>support@futurelearnx.com</p>
              </div>
            </div>

            <div className="info-card">
              <span>🕒</span>

              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <div className="contact-form">

            <h2>Send us a Message</h2>

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Map */}

      <section className="map-section">

        <div className="container">

          <h2>Our Location</h2>

          <div className="map-placeholder">

            🗺️ Google Map Integration Coming Soon

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;