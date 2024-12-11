import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { testimonialsData } from "../../constants/testimonialData";
import TestCard from "../../components/TestCard";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {breakpoint: 1040, settings: {slidesToShow: 2}},
      {breakpoint: 768, settings: {slidesToShow: 1}}
    ]
  };
  return (
    <div className="py-20">
      <div className="containerMax max-xll:pl-2">
        <div className="flex flex-col items-center gap-3 pb-10">
          <p className="inline-block border-b-2 border-b-bgColor pb-1">Testimonials</p>
          <h3 className="text-3xl font-bold">Clients Feetback</h3>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {
              testimonialsData?.map((item,i)=>(
                <TestCard key={i} {...item}/>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
