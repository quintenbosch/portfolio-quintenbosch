import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Internship from "./pages/internship/Internship";
import Projects from "./pages/projects/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navlink navlink-active" : "navlink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navlink navlink-active" : "navlink"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/internship"
          className={({ isActive }) =>
            isActive ? "navlink navlink-active" : "navlink"
          }
        >
          Internship
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "navlink navlink-active" : "navlink"
          }
        >
          Projects
        </NavLink>
      </nav>

      <main className="pt-20 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
