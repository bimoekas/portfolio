import "./App.css";
import "./styles/projects-index.css";
import "./styles/glitch.css";
import "./styles/blink.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import ContactMe from "./Pages/ContactMe";
import Header from "./Pages/projects/components/Header";
import Introduction from "./Pages/projects/components/Introduction";
import Preview from "./Pages/projects/components/Preview";
import Tools from "./Pages/projects/components/Tools";
import Overview from "./Pages/projects/Overview";
import Index from "./Pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/overview-projects" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
