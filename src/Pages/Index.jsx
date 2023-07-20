import "../App.css";
import "../styles/glitch.css";
import "../styles/blink.css";

import ContactMe from "./ContactMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Welcome from "./Welcome";

export default function Index() {
  return (
    <div className="h-screen w-screen flex overflow-x-scroll no-scrollbar">
      <Welcome />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
}
