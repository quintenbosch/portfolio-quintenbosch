import { useState } from "react";
import "./Projects.css";

const signalGuardMedia = [
  { type: "image", src: "/SignalGuard/Homescreen.png" },
  { type: "image", src: "/SignalGuard/Map.png" },
  { type: "image", src: "/SignalGuard/Kastplan.png" },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? signalGuardMedia.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === signalGuardMedia.length - 1 ? 0 : prev + 1
    );
  };

  const openLightbox = (img) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects & Certificate</h1>

      <div className="project-section">
        <h2 className="section-heading">Projects</h2>

        <div className="project-card">
          <h3 className="project-title">Project 4.0 - SignalGuard</h3>
          <p>
            In the scope of the Project 4.0 course, I worked together with 4
            other students to create a web application that helps cities,
            maintenance workers and Cipal Schaubroeck to see what is wrong with
            their ANPR cameras. The application consists of various fields in
            IT, that's why we had students from different fields in IT working
            together on this project. There was someone specialized in AI,
            Application Development and Cloud & Cybersecurity.
          </p>
          <p>
            During the first part of the project we were tasked with creating a
            project plan in which we had to research what languages to use, what
            functionalities the app needed to have, create prototypes for the
            pages and much more. During this periode we also had several
            meetings with the client Cipal Schaubroeck in which we showed them
            our plan for this project. After adjusting what the client
            suggested, we had a plan and development could be started.
          </p>
          <p>
            While developing the application, I was responsible for the
            front-end development using React. I created a big part of the user
            interface, including the dashboard, camera status pages, and user
            management features. I also worked on integrating the back-end API
            to fetch and display real-time data from the ANPR cameras. My
            teammates handled the back-end development, AI integration, and
            cloud deployment, ensuring that the application was available when
            we needed to present it to the client.
          </p>
          <p>
            To coordinate all the different tasks within the team, we made use
            of Gitlab. Here we could easily see who was working on what and what
            important parts of the application still needed work. We also had
            standup meetings every day to discuss our progress and any
            challenges we faced.
          </p>
          <p>
            In the end we made an application where the user is able to see and
            manage the ANPR cameras of a city. The user can see the status of
            each camera and view possible errors or issues. We presented this
            system to the client, Cipal Schaubroeck and received positive
            feedback on our work. Down below you can see some screenshots of the
            application, and{" "}
            <a
              href="https://www.youtube.com/watch?v=HqETDu5k3_E"
              target="_blank"
              rel="noopener noreferrer"
              className="promo-video-link"
            >
              watch our promotional video here
            </a>
            .
          </p>

          <div className="slideshow">
            <button onClick={handlePrev} className="slideshow-button">
              ⟨
            </button>

            <img
              src={signalGuardMedia[currentSlide].src}
              alt={`Screenshot ${currentSlide + 1}`}
              className="slideshow-image"
              onClick={() => openLightbox(signalGuardMedia[currentSlide].src)}
            />

            <button onClick={handleNext} className="slideshow-button">
              ⟩
            </button>
          </div>
        </div>

        <div className="project-card">
          <h3 className="project-title">Flutter Application – Tomogachi AR</h3>
          <p>
            As part of the course{" "}
            <strong>“Augmented Reality and Mobile App Development”</strong>, my
            teammate and I developed a playful yet technically challenging AR
            mobile app called <em>Tomogachi AR</em>. The goal was to build a
            Flutter application that integrates with Unity to bring virtual
            creatures to life using augmented reality.
          </p>
          <p>
            The core idea behind the project was to scan a physical card using
            the phone's camera, after which a 3D monster would appear on top of
            the card through Unity’s AR rendering. Users could interact with
            their pet by feeding or petting it, actions that would increase its
            health and experience points. Over time, players could collect
            multiple monsters and build up a virtual team.
          </p>
          <p>
            I was responsible for a large part of the Unity development. This
            included setting up the AR camera, importing and animating the 3D
            monsters, and handling interactions like food and petting gestures.
            I also contributed to the Flutter frontend, helping build the
            interface and the bridge between Flutter and Unity using platform
            channels.
          </p>
          <p>
            Before starting this course, I had no prior experience with Flutter
            or the Dart programming language. Despite this, I took on the
            challenge, learned the language from scratch, and quickly became
            comfortable with the framework. Working in a small team of two meant
            we had to collaborate closely and split responsibilities
            efficiently. It was a great learning experience and sparked my
            interest in Unity and augmented reality development.
          </p>
          <p>
            Below, you can watch a short demonstration video where we explain
            the concept and walk through the app’s main features and technical
            setup:
          </p>

          <div className="video-container">
            <video controls width="80%" style={{ borderRadius: "8px" }}>
              <source src="/Tomoteam/Tomoteam.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="certificate-section">
        <h2 className="section-heading">Certificates</h2>

        <div className="certificate-card">
          <h3 className="certificate-title">Kotlin certificate</h3>
          <p>
            Like mentioned earlier in this portfolio, I love to learn new skills
            or languages. So when we got an assignment to improve yourself with
            an event, certificate or something else, I knew immediately that I
            wanted to learn a new language. I think mobile app development is a
            very interesting field, so I decided to learn Kotlin. I followed the
            course{" "}
            <a
              href="https://www.udemy.com/course/kotlin-develop-android-apps-with-kotlin-jetpack-compose/?couponCode=25BBPMXINACTIVE"
              target="_blank"
              rel="noopener noreferrer"
              className="course-link"
            >
              "Develop Android Apps with Kotlin & Jetpack Compose"
            </a>{" "}
            on Udemy, which was a great introduction to the language.
          </p>
          <p>
            This course covered the basics of Kotlin, including syntax,
            object-oriented programming concepts, and different components. I
            also learned about Jetpack Compose, which is a modern toolkit for
            building native Android UIs. The course provided hands-on projects
            and exercises to help understand and learn the language. The course
            helped me to understand the fundamentals of Kotlin and how to apply
            them in Android app development. I also learned about best practices
            for writing clean and efficient code, which will be useful if I ever
            decided to make a Kotlin project.
          </p>

          <a
            href="/Certificate/Kotlin_certificate.pdf"
            download
            className="certificate-download-button"
          >
            📄 Download Certificate
          </a>
        </div>
        <div className="certificate-card">
          <h3 className="certificate-title">Angular Certificate</h3>
          <p>
            As part of the course “Angular,” I was required to complete the{" "}
            <a
              href="https://www.sololearn.com/en/learn/courses/angular"
              target="_blank"
              rel="noopener noreferrer"
              className="course-link"
            >
              Angular course by Sololearn
            </a>
            . While I had already worked with React in other projects, this
            course gave me the opportunity to explore Angular as a completely
            different frontend framework built around TypeScript.
          </p>
          <p>
            The course covered essential Angular concepts such as components,
            templates, two-way data binding, services, dependency injection, and
            routing. It also introduced state management and module
            organization, which helped me understand how large-scale Angular
            applications are structured and maintained.
          </p>
          <p>
            Completing this course helped me compare Angular and React more
            critically, and I began to appreciate the architectural decisions
            behind Angular’s design. It challenged me to adopt a more
            declarative and component-driven mindset within a strongly typed
            environment, something that enhanced my ability to adapt to
            different frameworks.
          </p>
          <p>
            This foundational knowledge was crucial for working on our
            Angular-based course project. I was able to confidently contribute
            to the codebase, navigate the framework’s structure, and collaborate
            more effectively within the team. Overall, the course broadened my
            frontend development perspective and gave me a solid entry point
            into the Angular ecosystem.
          </p>

          <a
            href="/Certificate/Angular_certificate.pdf"
            download
            className="certificate-download-button"
          >
            📄 Download Certificate
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img
            src={lightboxImage}
            alt="Enlarged screenshot"
            className="lightbox-image"
          />
        </div>
      )}
    </div>
  );
}
