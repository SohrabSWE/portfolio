function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-label">ABOUT ME</span>

          <h3>
            Building AI-powered solutions with purpose.
          </h3>

          <p>
            A brief introduction to my background, technical focus, and
            approach to building practical AI-driven applications.
          </p>
        </div>


        <div className="about-grid">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="about-main">

            <p className="about-lead">
              I am a Computer Science and Engineering graduate with a strong
              interest in Artificial Intelligence and Machine Learning.
            </p>

            <p>
              My learning journey has focused on Machine Learning, Deep
              Learning, Generative AI, and backend development with FastAPI.
              I enjoy turning ideas into practical, real-world applications
              through clean and efficient solutions.
            </p>

            <p>
              Alongside AI/ML, I have a foundation in programming, data
              structures, algorithms, databases, object-oriented programming,
              and web development.
            </p>

            <p>
              Currently, I am focused on strengthening my AI/ML engineering
              skills by building practical projects and developing
              production-oriented applications.
            </p>

          </div>


          {/* =========================
              RIGHT HIGHLIGHTS
          ========================= */}
          <div className="about-highlights">

            <div className="highlight-card">
              <span className="highlight-number">01</span>

              <h3>CSE Graduate</h3>

              <p>
                Computer Science & Engineering graduate with a strong
                foundation in programming and core computer science concepts.
              </p>
            </div>


            <div className="highlight-card">
              <span className="highlight-number">02</span>

              <h3>AI / ML Focus</h3>

              <p>
                Focused on Machine Learning, Deep Learning, Generative AI,
                and building intelligent applications.
              </p>
            </div>


            <div className="highlight-card">
              <span className="highlight-number">03</span>

              <h3>Backend Development</h3>

              <p>
                Building Python-based backend applications and APIs using
                modern technologies such as FastAPI.
              </p>
            </div>


            <div className="highlight-card">
              <span className="highlight-number">04</span>

              <h3>Practical Approach</h3>

              <p>
                Focused on turning concepts into practical projects and
                developing production-oriented solutions.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;