import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurAgent.css";
import { agentDatas } from "../../constants/agentDatas";
import AgentCard from "../../components/AgentCard";

const OurAgents = () => {
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
      <div className="containerMax max-xll:pl-3">
        <div className="flex flex-col items-center gap-3 pb-10">
          <p className="inline-block border-b-2 border-b-bgColor pb-1">OurAgents</p>
          <h3 className="text-3xl font-bold">Meet Our Agents</h3>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {
              agentDatas?.map((item,i)=>(
                <AgentCard key={i} {...item} />
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurAgents;
