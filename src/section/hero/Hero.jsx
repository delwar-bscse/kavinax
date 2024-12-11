import React from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hero01, hero02, hero03 } from "../../assets/assets";
import PropertyFilter from "./PropertyFilter";

const NextArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[15px] top-[50%] z-10'>
      <IoIosArrowDropright className="arrowDesign text-3xl md:text-6xl"/>
    </div>
  )
}

const PrevArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute left-[15px] top-[50%] z-10'>
        <IoIosArrowDropleft className="arrowDesign text-3xl md:text-6xl"/>
    </div>
  )
}

const Hero = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 10000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  return (
    <div id="home" className="mb-24 bg-bgColor lgl:bg-transparent">
      <div className="relative flex justify-center items-center">
        <div className="w-full">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={hero01} alt="" className="w-full h-auto"/>
              </div>
              <div>
                <img src={hero02} alt=""  className="w-full h-auto"/>
              </div>
              <div>
                <img src={hero03} alt=""  className="w-full h-auto"/>
              </div>
            </Slider>
          </div>
        </div>
        <div className="absolute w-full flex justify-start items-center px-12 md:px-20 lg:px-40 text-bodyColor">
          <div className="containerMax flex flex-col items-start gap-5">
            <div className="max-w-[500px] ">
              <h2 className="text-xl sml:text-2xl md:text-4xl lgl:text-6xl font-semibold">Discover Most Suitable Property</h2>
              <p className="pt-1 sml:pt-2 lgl:pt-5 text-gray-200 text-xs sml:text-sm lgl:text-base">Magna et sed diam aliquyam dolore kasd erat no, et amet justo ut diam, ut et dolor dolor est, labore eirmod ut justo eirmod elitr.</p>
            </div>
            <div className="max-lgl:hidden">
              <PropertyFilter />
            </div>
          </div>
        </div>
      </div>
        <div className="lgl:hidden">
          <PropertyFilter />
        </div>
    </div>
  );
}

export default Hero;
