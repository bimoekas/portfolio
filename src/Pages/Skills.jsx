import "../styles/circular.css";
import BlueButton from "../components/BlueButton";
import { useState } from "react";

export default function Skills() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");

  const handleClick = (newValue, newText) => {
    setValue(newValue);
    setText(newText);
  };

  return (
    <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black">
      <div className="flex flex-col justify-start w-full h-full">
        <h1 className="glitch text-2xl text-center lg:text-6xl lg:text-left sm:text-2xl md:text-2xl top-8">
          Skills
        </h1>
        <div className="flex flex-col items-center justify-center flex-grow px-4">
          <div className="flex flex-col justify-center items-center w-full h-80">
            <div className="grid sm:grid-cols-4 grid-cols-3 xl:grid-cols-3 z-50 xl:gap-4 sm:gap-0 gap-2 bg-slate-600 rounded-xl xl:p-4 p-1 sm:px-2 bg-opacity-70 md:gap-x-4 md:px-4">
              <div className="col-span-full w-full flex flex-col items-center">
                <div
                  className="sm:w-44 xl:w-52 w-48 text-4xl font-extrabold transition-width space-y-0 "
                  role="progressbar"
                  aria-valuenow={value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ "--value": value }}
                >
                  <p className="text-lg h-full flex flex-col items-end justify-end">
                    {text}
                  </p>
                  <p className="text-lg h-full flex flex-col items-start justify-start">
                    {value}%
                  </p>
                </div>
              </div>
              <BlueButton
                onClick={() => handleClick(80, "React JS")}
                text="React JS"
              />
              <BlueButton
                onClick={() => handleClick(70, "Vue JS")}
                text="Vue JS"
              />
              <BlueButton
                onClick={() => handleClick(70, "Typescript")}
                text="Typescript"
              />
              <BlueButton
                onClick={() => handleClick(70, "Javascript")}
                text="Javascript"
              />
              <BlueButton onClick={() => handleClick(70, "PHP")} text="PHP" />
              <BlueButton
                onClick={() => handleClick(80, "Flutter")}
                text="Flutter"
              />
              <BlueButton
                onClick={() => handleClick(80, "Tailwind")}
                text="Tailwind"
              />
              <BlueButton onClick={() => handleClick(70, "CSS")} text="CSS" />
              <BlueButton
                onClick={() => handleClick(80, "Laravel")}
                text="Laravel"
              />
              <BlueButton
                onClick={() => handleClick(70, "Design")}
                text="Design"
              />
              <BlueButton
                onClick={() => handleClick(80, "Logical Thinking")}
                text="Logical Thinking"
              />
              <BlueButton
                onClick={() => handleClick(80, "Problem Solving")}
                text="Problem Solving"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
