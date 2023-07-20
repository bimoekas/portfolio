import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "TWINDER",
      description:
        "A live Geolocation app for finding tweets and twitter users around you.",
      photo: "/src/assets/projects/img1.png",
    },
    {
      title: "LIVENTS",
      description:
        "A video streaming app with live Geolocation, for streaming events.",
      photo: "/src/assets/projects/img2.png",
    },
    {
      title: "MOOVE",
      description:
        "Mobile app for booking instant pickup & dropoff accross major cities.",
      photo: "/src/assets/projects/img3.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 my-8 h-screen" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Preview Project
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
    </div>
  );
};

export default Projects;
