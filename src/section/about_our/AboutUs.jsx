import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { aboutCEO, aboutUs } from '../../assets/assets'
import { BsTelephoneXFill } from "react-icons/bs";
import { FaCheckSquare } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className='grid grid-cols-1 lgl:grid-cols-2 gap-10 pb-10'>
      <img src={aboutUs} alt="" />
      <div className='flex flex-col items-start gap-10 pt-12'>
        <p className='text-lg font-semibold inline-block border-b-[3px] border-b-bgColor'>About Us</p>
        <h2 className='text-3xl sml:text-4xl md:text-5xl font-bold'>We Specialize In Quality Home Renovations</h2>
        <span className='block text-gray-500'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        <ul className='flex flex-col items-start gap-3'>
          <li className='flex items-center gap-3'>
            <FaCheckSquare className='text-xl'/>
            <span className='font-semibold'>Outstanding Property</span>
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckSquare className='text-xl'/>
            <span className='font-semibold'>Provide The Best Services For Users</span>
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckSquare className='text-xl'/>
            <span className='font-semibold'>Modern City Location & Ecceptional Lifestyle</span>
          </li>
          <li className='flex items-center gap-3'>
            <FaCheckSquare className='text-xl'/>
            <span className='font-semibold'>Professional & Experienced Human Resources</span>
          </li>
        </ul>
        <span className='block text-gray-500'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
        <div className='flex flex-col-reverse md:flex-row justify-start items-center gap-10 md:gap-5'>
          <button className='flex items-center gap-5 bg-frontColor text-white py-2 px-3'>
            <span>Explore More</span>
            < AiOutlineLogout className='text-xl'/>
          </button>
          <div className='flex justify-start items-center gap-3'>
            <img src={aboutCEO} alt="CEO" className='h-[50px] w-[50px] rounded-full'/>
            <div className='text-sm font-semibold'>
              <p className='font-light'>
                <span className='text-bgColor font-semibold'>David Smith </span>
                (CEO Of Kavinax Property)
              </p>
              <div className='flex items-center gap-2'>
                <BsTelephoneXFill className='text-lg bg-bgColor p-2 rounded-sm text-white box-content'/>
                <div>
                  <p>Call for Booking Appointment</p>
                  <p>Date : <span className='text-bgColor'>+435 6789 4321</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs