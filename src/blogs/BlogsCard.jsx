import React from 'react';
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FaCirclePlus } from "react-icons/fa6";


const BlogsCard = ({item}) => {
  const {image,title,des,date,watch,comment,profile,name, time} = item;
  return (
    <div className='mx-4 rounded-t-md overflow-hidden shadow-md hover:opacity-80'>
      <img src={image} alt="blog image" className='w-full h-[200px] sml:h-[300px]'/>
      <div className='p-4 flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
          <p className='flex items-center'>
            <MdOutlineCalendarMonth className='text-bgColor text-2xl pr-1'/>
            <span>{date}</span>
          </p>
          <p className='flex items-center'>
            <IoEye className='text-bgColor text-2xl pr-1'/>
            <span>{watch}</span>
          </p>
          <p className='flex items-center'>
            <BiMessageRoundedDots className='text-bgColor text-2xl pr-1' />
            <span>{comment}</span>
          </p>
        </div>
        <h3 className='sml:text-3xl text-xl text-bgColor underline cursor-pointer'>{title}</h3>
        <p className='text-sm sml:text-base'>{des}</p>
        <div className='border-y-[2px] border-y-gray-300 py-3'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center gap-2'>
              <img src={profile} alt="" className='w-[30px] h-[30px] rounded-full'/>
              <p>{name}</p>
            </div>
            <p className='flex gap-1 items-center'>
            <GoClock className=''/>
            <span>{time}</span>
            </p>
          </div>
        </div>
        <div className='flex justify-between items-center text-bgColor cursor-pointer'>
          <span>Read More</span>
          <FaCirclePlus className='text-xl'/>
        </div>
      </div>
    </div>
  )
}

export default BlogsCard