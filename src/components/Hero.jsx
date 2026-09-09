import sohrabImage from "../images/Sohrab.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            Open to AI/ML opportunities
          </div>

          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Md <span>Sohrab</span>
          </h1>

          <h2>
            AI/ML Engineer <span>•</span> Generative AI <span>•</span> FastAPI
          </h2>

          <p className="hero-description">
            Computer Science and Engineering graduate focused on building
            intelligent applications with Machine Learning, Generative AI,
            and modern backend technologies.
          </p>

          {/* =========================
              BUTTONS
          ========================= */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* =========================
              SOCIAL LINKS
          ========================= */}
          <div className="social-links">

            {/* GitHub */}
            <a
              href="https://github.com/SohrabSWE"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-link github-link"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="social-icon"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                  0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.463-1.11-1.463
                  -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
                  2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                  0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65
                  0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337
                  c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.701
                  1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855
                  0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.018 10.018 0 0 0 22 12.017
                  C22 6.484 17.523 2 12 2Z"
                />
              </svg>

              <span>GitHub</span>
              <span className="social-arrow">↗</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/md-sohrab-110515430/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-link linkedin-link"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="social-icon"
              >
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                  -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046
                  c.477-.9 1.637-1.85 3.37-1.85 3.605 0 4.267 2.373 4.267 5.467v6.275ZM5.337
                  7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119
                  20.452H3.554V8.999h3.565v11.453ZM22.225 0H1.771C.792 0 0 .774 0
                  1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24
                  23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z"
                />
              </svg>

              <span>LinkedIn</span>
              <span className="social-arrow">↗</span>
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hi.mdsohrab@gmail.com"
              aria-label="Email"
              className="social-link email-link"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="social-icon"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2
                  2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8
                  5 8-5v2Z"
                />
              </svg>

              <span>Email</span>
              <span className="social-arrow">↗</span>
            </a>

          </div>
        </div>


        {/* =========================
            RIGHT PROFILE IMAGE
        ========================= */}
        <div className="hero-visual">

          <div className="profile-image-wrapper">

            <div className="profile-image-glow"></div>

            <div className="profile-image-card">
              <img
                src={sohrabImage}
                alt="Md Sohrab - AI/ML Engineer"
                className="profile-image"
              />

              <div className="profile-image-overlay"></div>
            </div>

            {/* Profile Badge */}
            <div className="profile-badge">
              <span className="status-dot"></span>

              <div>
                <strong>AI/ML Engineer</strong>
                <small>Building intelligent systems</small>
              </div>
            </div>

          </div>

        </div>

      </div>


      

    </section>
  );
}

export default Hero;