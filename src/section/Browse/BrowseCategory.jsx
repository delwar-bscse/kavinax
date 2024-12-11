import React, { Component } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {browseCategory} from "../../constants/browseCategory.js";
import BrowseCard from "./BrowseCard.jsx";

const NextArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[20px] top-[10px] sml:-top-[55px] z-10'>
      <IoIosArrowDropright className="arrowDesign"/>
    </div>
  )
}

const PrevArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[60px] top-[10px] sml:-top-[55px] z-10'>
        <IoIosArrowDropleft className="arrowDesign"/>
    </div>
  )
}

const BrowseCategory = () => {
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
    <div className="w-full px-2 xll:px-0">
      <div className="containerMax my-10">
        <h2 className="text-4xl text-gray-600 font-bold pb-6 mx-2">Browse By Category</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {
              browseCategory?.map((item,i)=>(
                  <BrowseCard key={i} {...item}/>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BrowseCategory;
