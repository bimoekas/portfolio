import React from "react";
import Img from "../assets/Willie.png";
import circle from "../assets/circle.png";
import img2 from "../assets/img2.png";
import Header from "./Header";

const Introduction = () => {
  return (
    <div
      className="md:px-10 px-7 mt-14 mb-36 md:h-screen bg-[#1a1a29] h-screen flex flex-col items-center justify-center"
      id="introduction"
    >
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="text-white">
          <h6 className="text-3xl mt-12">Hello</h6>
          <h1 className="font-semibold md:text-5xl my-4 text-3xl">
            This is Kaltara App
          </h1>
          <p className="md:w-96">
            This application is designed for hotel bookings, fuel filling
            records, vehicle use, and staff activities of the Kaltara
            Government.
          </p>
        </div>
        {/* img */}
        <div className="order-first md:order-last relative">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
