import "../styles/glitch.css";
import "../styles/blink.css";

import Running from "../media/running.gif";
import Ufo from "../media/ufo.gif";

export default function Welcome() {
  return (
    <div className="flex-shrink-0 w-full h-full flex bg-black">
      <div className="relative w-full h-full">
        <div className="flex flex-col h-full items-center justify-center text-center text-2xl sm:text-2xl lg:text-6xl md:text-2xl">
          <p className="glitch px-4">
            <span aria-hidden="true"></span>
            Hi, My Name is Bimo
            <span aria-hidden="true"></span>
          </p>
          <p className="glitch px-4">
            <span aria-hidden="true"></span>
            Welcome to my portfolio space
            <span aria-hidden="true"></span>
          </p>
          <div className="blink text-xl sm:text-xl lg:text-2xl md:text-xl px-4">
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
