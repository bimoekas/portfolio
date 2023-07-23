import "./App.css";
import "./styles/projects-index.css";
import "./styles/glitch.css";
import "./styles/blink.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Pages/projects/Overview";
import Index from "./Pages/Index";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = window.matchMedia("(max-height: 450px)").matches;
    setIsMobile(isMobileDevice);

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  const handleOrientationChange = () => {
    if (window.orientation === 90 || window.orientation === -90) {
      setIsMobile(true);
      window.location.reload();
    } else {
      setIsMobile(false);
    }
  };

  return (
    <div>
      {!isMobile ? (
        <Router>
          <Routes>
            <Route path="/portfolio" element={<Index />} />
            <Route path="/overview-projects/:id" element={<Overview />} />
          </Routes>
        </Router>
      ) : (
        <div className="flex flex-col items-center justify-center glitch h-screen text-xl text-center">
          Mohon maaf, tidak dapat diakses dalam keadaan landscape
        </div>
      )}
    </div>
  );
}

export default App;
