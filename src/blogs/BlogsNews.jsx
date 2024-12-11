import React from 'react'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogs } from '../constants/blog'
import BlogsCard from './BlogsCard'


const NextArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[10px] -top-[55px]'>
      <IoIosArrowDropright className="arrowDesign"/>
    </div>
  )
}

const PrevArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-[47px] -top-[55px]'>
        <IoIosArrowDropleft className="arrowDesign"/>
    </div>
  )
}

const BlogsNews = () => {
  
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
      {breakpoint: 1180, settings: {slidesToShow: 2}},
      {breakpoint: 800, settings: {slidesToShow: 1}}
    ]
  };


  return (
    <div id='blog' className='py-20'>
      <div className='containerMax max-sml:px-2 max-xll:px-5'>
        <p className='border-b-[2px] border-b-bgColor ml-4 inline-block'>Blogs & News</p>
        <h3 className='sml:text-4xl text-2xl max-md:pb-20 pl-3 pt-5 pb-8 font-semibold'>Our Latest Blogs & News</h3>
        <div>
          <Slider {...settings}>
            {
              blogs?.map((item,i)=>(
                <div key={i}>
                  <BlogsCard item={item} />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default BlogsNews