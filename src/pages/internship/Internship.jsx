import "./Internship.css";

export default function Internship() {
  return (
    <div className="internship">
      <h1>Internship at A.S. Adventure & Natuurpunt – TrailFit App</h1>

      <div className="internship-section">
        <p>
          During the second semester of the 2024–2025 academic year, I completed
          my internship at A.S. Adventure in collaboration with Natuurpunt. The
          main focus of this internship was the development of a mobile
          application called <strong>TrailFit</strong>. This app was designed to
          recommend appropriate walking clothing to users based on their
          selected hiking route and the weather forecast for a given date.
          TrailFit promotes outdoor activity and aims to enhance the user’s
          nature experience, while also supporting A.S. Adventure’s commercial
          goals and Natuurpunt’s mission to encourage nature exploration.
        </p>
      </div>

      <div className="internship-section">
        <h2>Summary</h2>
        <p>
          TrailFit is a cross-platform mobile application developed using React
          Native and Java Spring Boot. It offers users a clear overview of
          curated hiking trails sponsored by A.S. Adventure and Natuurpunt. By
          selecting a trail and a preferred date, users receive weather-based
          clothing recommendations tailored to the terrain and conditions. Each
          clothing suggestion includes a direct link to the A.S. Adventure
          webshop. The app supports five languages and integrates map
          functionality, accessibility information, and external navigation via
          Google Maps or Waze. It was developed with scalability,
          maintainability, and user accessibility in mind.
        </p>
      </div>

      <div className="internship-section">
        <h2>Internship Synopsis</h2>
        <p>
          The internship began with an analysis phase where I defined the app's
          functional requirements, drafted a data model, and produced wireframes
          for both the overview and detail screens. I carefully evaluated and
          selected technologies using weighted decision matrices, ultimately
          choosing React Native for the frontend due to its cross-platform
          capabilities, and Java Spring Boot with PostgreSQL for the backend, in
          alignment with company standards.
        </p>

        <p>
          The realization phase involved building the frontend using reusable
          components, managing data via React Query and AsyncStorage, and
          setting up internationalization using i18Next. I created APIs to serve
          walking route data and interact with a weather API to generate
          personalized recommendations. The backend followed a clear structure
          using repository-service-controller patterns and integrated tools like
          MapStruct and Flyway for maintainable code and database versioning.
        </p>

        <p>
          I encountered and resolved challenges including multilingual support,
          data inconsistencies in public trail sources, and the integration of
          mobile and backend technologies. By the end of the internship, I had
          delivered a fully functional and polished prototype, presented it to
          important persons in the company, and documented the entire process
          thoroughly. Although some extra features like dynamic maps and
          real-time notifications were not fully implemented due to time
          constraints, the core product met all outlined goals.
        </p>
      </div>

      <div className="internship-section">
        <h2>Supporting Documents</h2>
        <ul>
          <li>
            <a
              href="/Internship/Project plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Project Plan – Initial planning and project definition
            </a>
          </li>
          <li>
            <a
              href="/Internship/Realisatiedocument.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Realization Document – Full development process
            </a>
          </li>
          <li>
            <a
              href="/Internship/Reflectie stage.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Reflection – Self-evaluation and personal growth
            </a>
          </li>
          <li>
            <a
              href="/Internship/Handleiding.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 User Guide – Optional supporting document for using the app
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
