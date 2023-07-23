import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/border-animation.css";

const slideData = [
  {
    id: 1,
    image: "https://picsum.photos/id/1/1280/720",
    titlte: "Kaltara Siap",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/2/1280/720",
    titlte: "Pantau Relawan",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/3/1280/720",
    titlte: "Kaltara Standard Satuan Harga",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/4/1280/720",
    titlte: "Kaltara Manajemen Aset",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide) => {
      setActiveSlide(currentSlide);
    },
  };
  return (
    <div className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black">
      <div className="w-full h-full">
        <h1 className="glitch text-2xl text-center lg:text-6xl lg:text-left sm:text-2xl md:text-2xl top-8">
          Projects
        </h1>

        {/* Carousel */}
        <div className="relative justify-center items-center px-4 flex flex-col lg:top-[3rem] top-[25vh]">
          {isMobileDevice && (
            <div className="blink text-xl sm:text-xl lg:text-2xl md:text-xl px-4">
              SLIDE TO RIGHT OR LEFT
            </div>
          )}
          <div className="px-2 lg:w-[60rem] w-72">
            <Slider {...settings} arrows={isMobileDevice}>
              {slideData.map((item) => (
                <button
                  onClick={() => {
                    if (isMobileDevice) {
                      window.open(`/overview-projects/${activeSlide + 1}`);
                    } else {
                      navigate(`/overview-projects/${activeSlide + 1}`);
                    }
                  }}
                  key={item.id}
                >
                  <div className="card">
                    <img src={item.image} alt="" className="object-cover" />
                    <span className="top"></span>
                    <span className="right"></span>
                    <span className="bottom"></span>
                    <span className="left"></span>
                  </div>
                  <p className="lg:text-4xl font-mono text-center">
                    {item.titlte}
                  </p>
                </button>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
