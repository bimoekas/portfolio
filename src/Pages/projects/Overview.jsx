import "../../styles/App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Preview";
import Tools from "./components/Tools";

function Overview() {
  return (
    <>
      <div className="max-w-7xl mx-auto w-screen">
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        <Introduction />
        <Tools />
        <Projects />
      </div>
    </>
  );
}

export default Overview;
