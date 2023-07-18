import "./App.css";
import "./styles/glitch.css";
import "./styles/blink.css";

import Welcome from "./Pages/Welcome";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import ContactMe from "./Pages/ContactMe";

function App() {
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

<style></style>;

export default App;
