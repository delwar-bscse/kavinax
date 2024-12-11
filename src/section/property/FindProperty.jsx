import React from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { findProDatas } from "../../constants/findProDatas";
import FindProCard from "../../components/FindProCard";

const NextArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[15px] -top-[55px] max-sml:top-[10px] z-10'>
      <IoIosArrowDropright className="arrowDesign"/>
    </div>
  )
}

const PrevArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[50px] -top-[55px] max-sml:top-[10px] z-10'>
        <IoIosArrowDropleft className="arrowDesign"/>
    </div>
  )
}

const FindProperty = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {breakpoint: 1040, settings: {slidesToShow: 2}},
      {breakpoint: 768, settings: {slidesToShow: 1}}
    ]
  };


  return (
    <div>
      <div className="containerMax my-10">
        <p className="ml-2 leading-6 mb-2 font-semibold inline-block border-b-[3px] border-b-bgColor">Find Properties</p>
        <h2 className="text-4xl text-gray-600 font-bold pb-6 mx-2">Explore Our Cities</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {
              findProDatas?.map((item,i)=>(
                <FindProCard key={i} {...item} />
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FindProperty;
