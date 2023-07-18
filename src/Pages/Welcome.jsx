import "../styles/glitch.css";
import "../styles/blink.css";

import Running from "../media/running.gif";
import Ufo from "../media/ufo.gif";

export default function Welcome() {
  return (
    <div className="flex-shrink-0 w-full h-full flex bg-black">
      <div className="relative w-full h-full">
        <div className="flex flex-col h-full items-center justify-center text-center text-6xl">
          <p className="glitch">
            <span aria-hidden="true"></span>
            Hi, My Name is Bimo
            <span aria-hidden="true"></span>
          </p>
          <p className="glitch">
            <span aria-hidden="true"></span>
            Welcome to my portfolio space
            <span aria-hidden="true"></span>
          </p>
          <div className="blink text-3xl">
            SLIDE TO RIGHT OR LEFT TO START THE JOURNEY
          </div>
        </div>
        <div className="star" />
        <img src={Ufo} alt="ufo" className="ufo" />
        <div className="surface" />
        <img src={Running} alt="astronout" className="astronout" />
      </div>
    </div>
  );
}
