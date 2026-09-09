function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-glow"></div>

        <span className="section-label">GET IN TOUCH</span>

        <h3>
          Let's build something
          <span> intelligent.</span>
        </h3>

        <p>
          I'm open to entry-level AI/ML opportunities, backend projects,
          collaborations, and meaningful conversations about technology.
        </p>

        <div className="contact-actions">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hi.mdsohrab@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Send Me an Email <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/md-sohrab-110515430/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="contact-info">
          <a href="mailto:hi.mdsohrab@gmail.com">hi.mdsohrab@gmail.com</a>

          <span>•</span>

          <a href="tel:01616039067">01616039067</a>

          <span>•</span>

          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
