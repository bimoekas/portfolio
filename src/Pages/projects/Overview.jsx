import { useParams } from "react-router-dom";
import "../../styles/App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Preview";
import Tools from "./components/Tools";

const data = [
  {
    id: 1,
    title: "Kaltara Siap",
    introduction:
      "This application is designed for hotel bookings, fuel filling records, vehicle use, and staff activities of the Kaltara Government.",
    welcomeImage: [
      { id: 1, url: "" },
      { id: 2, url: "" },
      { id: 3, url: "" },
    ],
    tools: ["ReactJS, Laravel, Typescript, MySQL"],
    preview: [
      {
        id: 1,
        image: "",
        title: "",
        description: "",
      },
      {
        id: 2,
        image: "",
        title: "",
        description: "",
      },
      {
        id: 3,
        image: "",
        title: "",
        description: "",
      },
      {
        id: 4,
        image: "",
        title: "",
        description: "",
      },
      {
        id: 5,
        image: "",
        title: "",
        description: "",
      },
      {
        id: 6,
        image: "",
        title: "",
        description: "",
      },
      {
        id: 7,
        image: "",
        title: "",
        description: "",
      },
    ],
  },
];

function Overview() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto w-screen">
      <div className="top-0 z-10 ">
        <Header />
      </div>
      <Introduction />
      <Tools />
      <Projects />
    </div>
  );
}

export default Overview;
