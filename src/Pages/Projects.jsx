import React from "react";

import { useNavigate } from "react-router-dom";
import Overview from "./projects/Overview";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black">
      <div className="w-full h-full">
        <h1 className="glitch text-5xl top-8">Projects</h1>
        <div className="relative justify-center items-center top-1/3">
          <p className="glitch text-center text-8xl">Coming Soon</p>
          <button onClick={() => navigate("/overview-projects")}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}
