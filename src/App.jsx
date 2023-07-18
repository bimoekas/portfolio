import "./App.css";
import "./styles/glitch.css";
import "./styles/blink.css";
import Running from "./media/running.gif";
import Ufo from "./media/ufo.gif";

function App() {
  return (
    <div className="h-screen w-screen flex overflow-x-scroll no-scrollbar">
      <div className="flex-shrink-0 w-full h-full flex bg-black">
        <div className="relative w-full h-full">
          <div className="flex flex-col h-full items-center justify-center text-6xl">
            <p class="glitch">
              <span aria-hidden="true"></span>
              Hi, My Name is Bimo
              <span aria-hidden="true"></span>
            </p>
            <p class="glitch">
              <span aria-hidden="true"></span>
              Welcome to my portfolio space
              <span aria-hidden="true"></span>
            </p>
            <div class="blink text-3xl">
              SLIDE TO RIGHT OR LEFT TO START THE JOURNEY
            </div>
          </div>
          <div className="star" />
          <img src={Ufo} alt="ufo" className="ufo" />
          <div className="surface" />
          <img src={Running} alt="astronout" className="astronout" />
        </div>
      </div>
      <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black">
        <div className="relative w-full h-full">
          <div className="flex flex-col h-full justify-center items-center">
            <p className="text-2xl text-white">Konten 2</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0"></div>
        </div>
      </div>
      <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black">
        <div className="relative w-full h-full">
          <div className="flex flex-col h-full justify-center items-center">
            <p className="text-2xl text-white">Konten 3</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0"></div>
        </div>
      </div>
      <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black">
        <div className="relative w-full h-full">
          <div className="flex flex-col h-full justify-center items-center">
            <p className="text-2xl text-white">Konten 4</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-0"></div>
        </div>
      </div>
    </div>
  );
}

<style></style>;

export default App;
