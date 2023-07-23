import React, { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

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
    <div className="px-4 lg:w-[60rem] w-72">
      <Slider {...settings}>
        <div className="bg-white">
          <img
            src="https://picsum.photos/id/1/1280/720"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="bg-white">
          <img
            src="https://picsum.photos/id/2/1280/720"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="bg-white">
          <img
            src="https://picsum.photos/id/3/1280/720"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="bg-white">
          <img
            src="https://picsum.photos/id/4/1280/720"
            alt=""
            className="object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}
