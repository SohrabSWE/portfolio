import ChatbotImage from "../images/Chatbot.png";
import ApiImage from "../images/API.png";

const projects = [
  {
    number: "01",
    category: "AI / GENERATIVE AI",
    title: "AI Assistant — LangChain Chatbot",
    description:
      "An AI-powered chatbot with intelligent query routing for Programming, Mathematics, and General queries. Built with specialized processing chains, structured outputs, chat history, confidence scoring, and a Streamlit interface.",
    technologies: [
      "Python",
      "LangChain",
      "Groq",
      "Streamlit",
      "Pydantic",
    ],
    github:
      "https://github.com/SohrabSWE/AI-Assistant-Langchain-Chatbot",
    demo:
      "https://ai-assistant-langchain-chatbot.streamlit.app/",
    image: ChatbotImage,
  },

  {
    number: "02",
    category: "BACKEND / REST API",
    title: "Expense Tracker API",
    description:
      "A RESTful expense management API featuring JWT authentication, secure password hashing, CRUD operations, filtering, PostgreSQL integration, API testing, and interactive Swagger documentation.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "JWT",
    ],
    github: "https://github.com/SohrabSWE/Expense-Tracker-API",
    demo: "https://expense-tracker-api-h1ge.onrender.com/docs",
    image: ApiImage,
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">

        {/* Heading */}
        <div className="section-heading project-heading">
          <div>
            <span className="section-label">FEATURED WORK</span>
            <h3>Projects I've built.</h3>
          </div>
        </div>

        {/* Projects */}
        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              {/* =========================
                  LEFT SIDE — IMAGE ONLY
                  ========================= */}
              <div className="project-preview">

                <div className="preview-body image-preview">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-preview-image"
                  />
                </div>

              </div>

              {/* =========================
                  RIGHT SIDE — CONTENT
                  ========================= */}
              <div className="project-content">

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-info">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="technology-list">
                    {project.technologies.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <span>↗</span>
                    </a>

                    {project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo <span>↗</span>
                      </a>
                    ) : (
                      <span className="coming-soon">
                        API Demo
                      </span>
                    )}

                  </div>

                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;