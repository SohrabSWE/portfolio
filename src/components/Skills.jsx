const skillGroups = [
  {
    number: "01",
    title: "Programming",
    skills: ["Python", "C", "C++"],
  },
  {
    number: "02",
    title: "AI / Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Generative AI"],
  },
  {
    number: "03",
    title: "Frameworks & Libraries",
    skills: ["FastAPI", "LangChain"],
  },
  {
    number: "04",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Postman"],
  },
  {
    number: "05",
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">TECHNICAL SKILLS</span>

          <h3>Tools I work with.</h3>

          <p>
            A practical technology stack focused on AI, backend development,
            and software engineering.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <span>{group.number}</span>

                <div className="skill-line"></div>
              </div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;