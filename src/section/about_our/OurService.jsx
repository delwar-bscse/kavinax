import React from 'react'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ourServiceDatas } from '../../constants/ourServiceDatas'
import OurServiceCard from '../../components/OurServiceCard'


const NextArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[20px] top-[10px] sml:-top-[55px] z-10'>
      <IoIosArrowDropright className="arrowDesign"/>
    </div>
  )
}

const PrevArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[56px] top-[10px] sml:-top-[55px] z-10'>
        <IoIosArrowDropleft className="arrowDesign"/>
    </div>
  )
}


const OurService = () => {
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
        <p className="ml-2 leading-6 mb-2 font-semibold inline-block border-b-[3px] border-b-bgColor">Our Service</p>
        <h2 className="text-4xl text-gray-600 font-bold pb-6 mx-2">Our Main Focus</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {
              ourServiceDatas?.map((item,i)=>(
                <OurServiceCard key={i} {...item} />
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurService