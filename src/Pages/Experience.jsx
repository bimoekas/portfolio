import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { BriefcaseIcon, GraduationCapIcon, ScrollTextIcon } from "lucide-react";

const workingExperience = [
  {
    id: 1,
    title: "Junior Fullstack Developer",
    company: "PT. Lamacca Kreatif Solusi",
    jobDescription: [
      {
        id: 1,
        description:
          "Work with development teams and product managers to ideate software solutions.",
      },
      {
        id: 2,
        description:
          "Build the front-end of applications through appealing visual design.",
      },
      {
        id: 3,
        description: "Test software to ensure responsiveness and efficiency.",
      },
      {
        id: 4,
        description:
          "Build features and applications with a mobile responsive design.",
      },
      {
        id: 5,
        description: "Developing back-end website applications.",
      },
      {
        id: 6,
        description: "Integrating back-end with front-end.",
      },
      {
        id: 7,
        description: "Creating servers and databases for functionality.",
      },
    ],
    icon: <BriefcaseIcon />,
    year: "2022 - Present",
  },
  {
    id: 2,
    title: "Admin Staff",
    company: "Pusat Pengembangan Akuntansi FEB UI",
    jobDescription: [
      {
        id: 1,
        description: "Data Entry.",
      },
      {
        id: 2,
        description: "Data Archive.",
      },
      {
        id: 3,
        description: "Creating an activity agenda.",
      },
      {
        id: 4,
        description: "Document Typing.",
      },
      {
        id: 5,
        description: "Correspondences Offline and Online.",
      },
      {
        id: 6,
        description: "Recap/Filling Survey Data.",
      },
      {
        id: 7,
        description: "Data Inventory.",
      },
    ],
    icon: <BriefcaseIcon />,
    year: "2018 - 2021",
  },
  {
    id: 3,
    title: "Admin Staff",
    company: "Telkomedika",
    jobDescription: [
      {
        id: 1,
        description: "Data Entry.",
      },
    ],
    year: "2017",
    icon: <BriefcaseIcon />,
  },
  {
    id: 4,
    title: "Internship",
    company: "PT. Asuransi Umum Bumiputera Muda 1967",
    jobDescription: [
      {
        id: 1,
        description: "Data Entry.",
      },
      {
        id: 2,
        description: "Data Archive.",
      },
    ],
    icon: <BriefcaseIcon />,
    year: "2014 - 2015",
  },
];

const educationExperience = [
  {
    id: 1,
    title: "SMK Negeri 1 (Software Engineering Majoring)",
    region: "Depok, West Java",
    icon: <GraduationCapIcon />,
    year: "2013 - 2016",
  },
  {
    id: 2,
    title: "SMP Negeri 4",
    region: "Depok, West Java",
    icon: <GraduationCapIcon />,
    year: "2010 - 2013",
  },
  {
    id: 3,
    title: "English Course at IEC",
    region: "Depok, West Java",
    icon: <ScrollTextIcon />,
    year: "2009 - 2010",
  },
  {
    id: 4,
    title: "SD Negeri Mekarjaya 4",
    region: "Depok, West Java",
    icon: <GraduationCapIcon />,
    year: "2004 - 2010",
  },
];

export default function Experience() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex-shrink-0 w-full flex items-center justify-center bg-black">
      <div className="w-full h-full">
        <h1 className="glitch text-2xl text-center lg:text-6xl lg:text-left sm:text-2xl md:text-2xl top-8">
          Experience
        </h1>
        <div className="relative justify-center items-center top-11 px-2">
          <div className="w-full overflow-hidden flex flex-col items-center">
            <div className="flex flex-wrap w-full xl:w-3/4 items-center flex-col">
              <div className="w-fit">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                          ? "text-white bg-orange-400"
                          : "bg-slate-500")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      Works
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "text-white bg-orange-400"
                          : "bg-slate-500")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Education
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-gray-400 bg-opacity-50 w-full mb-6 shadow-lg rounded overflow-y-auto xl:h-[36rem] sm:h-44 md:h-64 h-[65vh] overflow-hidden items-center">
                  <div className="px-4 py-5 flex-auto lg:w-[70rem]">
                    <div className="tab-content tab-space">
                      {/* Work Experience */}
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <VerticalTimeline>
                          {workingExperience.map((item) => (
                            <VerticalTimelineElement
                              key={item.id}
                              className="vertical-timeline-element--work"
                              contentStyle={{
                                background: "rgb(255, 255, 255)",
                                color: "#fff",
                              }}
                              contentArrowStyle={{
                                borderRight: "7px solid  rgb(255, 255, 255)",
                              }}
                              date={item.year}
                              dateClassName="xl:ml-4 text-black lg:text-white"
                              iconStyle={{
                                background: "rgb(33, 150, 243)",
                                color: "#fff",
                              }}
                              icon={item.icon}
                            >
                              <h3 className="vertical-timeline-element-title font-extrabold text-black">
                                {item.title}
                              </h3>
                              <h4 className="vertical-timeline-element-subtitle text-black">
                                {item.company}
                              </h4>
                              <ul className="list-disc ml-4 text-black text-left">
                                {item.jobDescription.map((item) => (
                                  <li key={item.id}>{item.description}</li>
                                ))}
                              </ul>
                            </VerticalTimelineElement>
                          ))}
                        </VerticalTimeline>
                      </div>

                      {/* Education Experience */}
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <VerticalTimeline>
                          {educationExperience.map((item) => (
                            <VerticalTimelineElement
                              key={item.id}
                              className="vertical-timeline-element--work"
                              contentStyle={{
                                background: "rgb(255, 255, 255)",
                                color: "#fff",
                              }}
                              contentArrowStyle={{
                                borderRight: "7px solid  rgb(255, 255, 255)",
                              }}
                              date={item.year}
                              dateClassName="xl:ml-4"
                              iconStyle={{
                                background: "rgb(253, 218, 13)",
                                color: "#fff",
                              }}
                              icon={item.icon}
                            >
                              <h3 className="vertical-timeline-element-title font-extrabold text-black">
                                {item.title}
                              </h3>
                              <h4 className="vertical-timeline-element-subtitle text-black">
                                {item.region}
                              </h4>
                            </VerticalTimelineElement>
                          ))}
                        </VerticalTimeline>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
