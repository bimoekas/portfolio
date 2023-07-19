import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { BriefcaseIcon, GraduationCapIcon, ScrollTextIcon } from "lucide-react";

export default function Experience() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black">
      <div className="w-full h-full">
        <h1 className="glitch text-5xl top-8">Experience</h1>
        <div className="relative justify-center items-center top-11">
          <div className="xl:h-[42rem] sm:h-44 md:h-64 h-[42rem] w-full overflow-hidden flex flex-col items-center">
            <div className="flex flex-wrap w-full xl:w-3/4 items-center flex-col">
              <div className="w-fit">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                <div className="relative flex flex-col min-w-0 break-words bg-gray-400 bg-opacity-50 w-full mb-6 shadow-lg rounded overflow-y-auto xl:h-[36rem] sm:h-44 md:h-64 h-[42rem] overflow-hidden items-center">
                  <div className="px-4 py-5 flex-auto lg:w-[70rem]">
                    <div className="tab-content tab-space">
                      {/* Work Experience */}
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <VerticalTimeline>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              background: "rgb(255, 255, 255)",
                              color: "#fff",
                            }}
                            contentArrowStyle={{
                              borderRight: "7px solid  rgb(255, 255, 255)",
                            }}
                            date="2022 - present"
                            dateClassName="xl:ml-4"
                            iconStyle={{
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                            }}
                            icon={<BriefcaseIcon />}
                          >
                            <h3 className="vertical-timeline-element-title font-extrabold text-black">
                              Junior Fullstack Developer
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-black">
                              PT. Lamacca Kreatif Solusi
                            </h4>
                            <p className="text-black text-left">
                              <ul className="list-disc ml-4">
                                <li>
                                  Work with development teams and product
                                  managers to ideate software solutions
                                </li>
                                <li>
                                  Build the front-end of applications through
                                  appealing visual design
                                </li>
                                <li>
                                  Test software to ensure responsiveness and
                                  efficiency
                                </li>
                                <li>
                                  Build features and applications with a mobile
                                  responsive design
                                </li>
                                <li>
                                  Developing back-end website applications.
                                </li>
                                <li>Integrate back-end with front-end</li>
                                <li>
                                  Creating servers and databases for
                                  functionality.
                                </li>
                              </ul>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              background: "rgb(255, 255, 255)",
                              color: "#fff",
                            }}
                            contentArrowStyle={{
                              borderRight: "7px solid  rgb(255, 255, 255)",
                            }}
                            date="2018 - 2021"
                            dateClassName="xl:mr-4"
                            iconStyle={{
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                            }}
                            icon={<BriefcaseIcon />}
                          >
                            <h3 className="vertical-timeline-element-title font-extrabold text-black">
                              Admin Staff
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-black">
                              Pusat Pengembangan Akuntansi FEB UI
                            </h4>
                            <p className="text-black text-left">
                              <ul className="list-disc ml-4">
                                <li>Data Entry</li>
                                <li>Data Archive</li>
                                <li>Creating an activity agenda</li>
                                <li>Document Typing</li>
                                <li>Correspondences Offline and Online</li>
                                <li>Recap/Filling Survey Data</li>
                                <li>Data Inventory</li>
                              </ul>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              background: "rgb(255, 255, 255)",
                              color: "#fff",
                            }}
                            contentArrowStyle={{
                              borderRight: "7px solid  rgb(255, 255, 255)",
                            }}
                            date="2017"
                            dateClassName="xl:mr-4"
                            iconStyle={{
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                            }}
                            icon={<BriefcaseIcon />}
                          >
                            <h3 className="vertical-timeline-element-title font-extrabold text-black">
                              Admin Staff
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-black">
                              Telkomedika
                            </h4>
                            <p className="text-black text-left">
                              <ul className="list-disc ml-4">
                                <li>Data Entry</li>
                              </ul>
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              background: "rgb(255, 255, 255)",
                              color: "#fff",
                            }}
                            contentArrowStyle={{
                              borderRight: "7px solid  rgb(255, 255, 255)",
                            }}
                            date="2014 - 2015"
                            dateClassName="xl:mr-4"
                            iconStyle={{
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                            }}
                            icon={<BriefcaseIcon />}
                          >
                            <h3 className="vertical-timeline-element-title font-extrabold text-black">
                              Internship
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-black">
                              PT Asuransi Umum Bumiputera Muda 1967
                            </h4>
                            <p className="text-black text-left">
                              <ul className="list-disc ml-4">
                                <li>Data Entry</li>
                                <li>Data Archive</li>
                              </ul>
                            </p>
                          </VerticalTimelineElement>
                        </VerticalTimeline>
                      </div>

                      {/* Education Experience */}
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <VerticalTimeline>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              background: "rgb(255, 255, 255)",
                              color: "#fff",
                            }}
                            contentArrowStyle={{
                              borderRight: "7px solid  rgb(255, 255, 255)",
                            }}
                            date="2004 - 2010"
                            dateClassName="xl:ml-4"
                            iconStyle={{
                              background: "rgb(253, 218, 13)",
                              color: "#fff",
                            }}
                            icon={<GraduationCapIcon />}
                          >
                            <h3 className="vertical-timeline-element-title font-extrabold text-black">
                              SD Negeri Mekarjaya 4
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-black">
                              Depok, West Java
                            </h4>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              background: "rgb(255, 255, 255)",
                              color: "#fff",
                            }}
                            contentArrowStyle={{
                              borderRight: "7px solid  rgb(255, 255, 255)",
                            }}
                            date="2009 - 2010"
                            dateClassName="xl:ml-4"
                            iconStyle={{
                              background: "rgb(253, 218, 13)",
                              color: "#fff",
                            }}
                            icon={<ScrollTextIcon />}
                          >
                            <h3 className="vertical-timeline-element-title font-extrabold text-black">
                              English Course at IEC
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-black">
                              Depok, West Java
                            </h4>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              background: "rgb(255, 255, 255)",
                              color: "#fff",
                            }}
                            contentArrowStyle={{
                              borderRight: "7px solid  rgb(255, 255, 255)",
                            }}
                            date="2010 - 2013"
                            dateClassName="xl:ml-4"
                            iconStyle={{
                              background: "rgb(253, 218, 13)",
                              color: "#fff",
                            }}
                            icon={<GraduationCapIcon />}
                          >
                            <h3 className="vertical-timeline-element-title font-extrabold text-black">
                              SMP Negeri 4
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-black">
                              Depok, West Java
                            </h4>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{
                              background: "rgb(255, 255, 255)",
                              color: "#fff",
                            }}
                            contentArrowStyle={{
                              borderRight: "7px solid  rgb(255, 255, 255)",
                            }}
                            date="2010 - 2013"
                            dateClassName="xl:ml-4"
                            iconStyle={{
                              background: "rgb(253, 218, 13)",
                              color: "#fff",
                            }}
                            icon={<GraduationCapIcon />}
                          >
                            <h3 className="vertical-timeline-element-title font-extrabold text-black">
                              SMK Negeri 1 (Software Engineering Majoring)
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-black">
                              Depok, West Java
                            </h4>
                          </VerticalTimelineElement>
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
