import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1 className="welcome-title">Welcome to My Portfolio</h1>
        <p className="welcome-subtitle">
          Explore the journey, skills, and projects of an aspiring application developer.
        </p>
      </section>

      <section className="intro-section">
        <p className="intro-text">
          This portfolio offers a glimpse into the work I’ve done during my studies in application development at Thomas More.
          From hands-on school projects to my internship at AS Adventure, you’ll discover practical examples of what I’ve learned and created.
        </p>
        <p className="intro-text">
          Feel free to browse through different sections to learn more about my technical abilities, the tools I’ve worked with, and how I approach problem-solving in real-world applications.
        </p>
      </section>
    </div>
  );
}
