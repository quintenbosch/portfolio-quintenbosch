import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        <div className="about-left">
          <img
            src="/Foto_Quinten.jpg"
            alt="Quinten Bosch"
            className="about-photo"
          />

          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/quinten-bosch-517472253/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/quintenbosch"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.facebook.com/quintenbosch"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button facebook"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="mailto:quintenbosch@hotmail.com"
              className="social-button email"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="about-text">
          <section className="about-section">
            <h2>Who I Am</h2>
            <p>
              Hi! I'm <strong>Quinten Bosch</strong>, a passionate application
              developer who values user-centered design and clean, maintainable
              code. I enjoy a challenge and can work independently or in group.
            </p>
            <p>
              Outside of coding, I love playing football, darts, and having a
              good time with my friends and family.
            </p>
          </section>

          <section className="about-section">
            <h2>My Journey in Application Development</h2>
            <p>
              I'm currently studying Application Development at{" "}
              <strong>Thomas More</strong>. Through projects and an exciting
              internship at <strong>AS Adventure</strong>, I've grown both
              technically and professionally.
            </p>
            <p>
              I love to learn new things or expand my knowledge in areas I'm
              already familiar with. I enjoy working with various technologies
              and frameworks, always striving to improve my skills. Programming
              is working with logic and structure, which I think is fun.
            </p>
          </section>

          <section className="about-section">
            <h2>My Skills</h2>
            <p>
              I have experience with a variety of programming languages and
              frameworks, including:
            </p>
            <ul className="skills-list">
              <li>JavaScript</li>
              <li>React (Native)</li>
              <li>Angular</li>
              <li>Flutter</li>
              <li>Python</li>
              <li>HTML & CSS</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
            <p>
              You can find more information about my skills and experience in my CV down below.
            </p>
          </section>

          <div className="about-links">
            <a
              href="/CV Bosch Quinten.pdf"
              download
              className="cv-download-button"
            >
              <i className="fas fa-file-download"></i> Download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
