import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="background-grid"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />

        <section className="education-section" id="education">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-label">BACKGROUND</span>
              <h3>Education & Training</h3>
              <p>
                Academic foundation and professional learning that support my
                journey in AI and software engineering.
              </p>
            </div>

            <div className="education-grid">
              <div className="education-card">
                <div className="education-icon">🎓</div>

                <div className="education-content">
                  <span className="education-date">2022 — 2026</span>

                  <h3>B.Sc in Computer Science and Engineering</h3>

                  <p className="institution">Uttara University, Dhaka</p>

                  <div className="cgpa">
                    <span>CGPA</span>
                    <strong>3.75 / 4.00</strong>
                  </div>
                </div>
              </div>

              <div className="training-card">
                <div className="training-item">
                  <span className="training-number">01</span>
                  <div>
                    <h3>CSE Fundamentals Course</h3>
                    <p>Phitron.io</p>
                    <small>
                      Python, C, C++, DSA, OOP, Database, HTML, CSS & JavaScript
                    </small>
                  </div>
                </div>

                <div className="training-item">
                  <span className="training-number">02</span>
                  <div>
                    <h3>AI/ML Course</h3>
                    <p>Phitron.io</p>
                    <small>
                      Machine Learning, Deep Learning, Advanced DL, Generative
                      AI & FastAPI
                    </small>
                  </div>
                </div>

                <div className="training-item">
                  <span className="training-number">03</span>
                  <div>
                    <h3>Spoken English Course</h3>
                    <p>Banglay IELTS</p>
                    <small>
                      Spoken English and practical English communication skills
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>© 2026 Md Sohrab. All rights reserved.</p>

          <div className="footer-links">
            <a
              href="https://github.com/SohrabSWE"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/md-sohrab-110515430/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;