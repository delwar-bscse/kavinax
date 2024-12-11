import React from 'react'
import { FaHeart, FaBed , FaBath, FaCar } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const ExploreCard = ({image,title,des,price,beds,baths,parking}) => {
  return (
    <div className='bg-bodyColor p-5 rounded-t-xl group hover:bg-frontColor duration-500 hover:duration-500 text-gray-800 hover:text-gray-50 flex flex-col items-start gap-5'>
      <div className='w-full h-[250px] rounded-t-xl overflow-hidden bg-cover bg-center bg-no-repeat flex justify-between items-start text-bodyColor pt-8 pr-5' style={{backgroundImage:`url(${image})`}}>
        <span className='group-hover:bg-bgColor bg-frontColor py-1 px-3 rounded-r-md'>For Rent</span>
        <span className='text-bodyColor p-2 text-xl rounded-full group-hover:bg-bgColor bg-frontColor duration-500 group-hover:duration-500'><FaHeart /></span>
      </div>
      <div className='w-full flex justify-between items-center'>
        <h3 className='text-2xl font-semibold text-bgColor group-hover:text-bodyColor duration-500 group-hover:duration-500'>{title}</h3>
        <p className='py-1 px-3 bg-bgColor text-bodyColor group-hover:bg-bodyColor group-hover:text-bgColor rounded-l-md duration-500 group-hover:duration-500'>{price}</p>
      </div>
      <p>{des}</p>
      <div className='flex justify-between items-center w-full border-y-2 border-y-gray-800 group-hover:border-y-bodyColor py-3 duration-500 group-hover:duration-500'>
        <div className='flex items-center gap-1'>
          <span className='text-lg p-1 bg-bgColor text-bodyColor group-hover:text-bgColor group-hover:bg-bodyColor rounded-full duration-500 group-hover:duration-500'><FaBed /></span>
          <span className='group-hover:text-bodyColor duration-500 group-hover:duration-500'>Beds: {beds}</span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='text-lg p-1 bg-bgColor text-bodyColor group-hover:text-bgColor group-hover:bg-bodyColor rounded-full duration-500 group-hover:duration-500'><FaBath /></span>
          <span className='group-hover:text-bodyColor duration-500 group-hover:duration-500'>Baths: {baths}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-lg p-1 bg-bgColor text-bodyColor group-hover:text-bgColor group-hover:bg-bodyColor rounded-full duration-500 group-hover:duration-500'><FaCar /></span>
          <span className='group-hover:text-bodyColor duration-500 group-hover:duration-500'>Parking: {parking}</span>
        </div>
      </div>
      <div className='w-full flex justify-between items-center text-bgColor group-hover:text-bodyColor  duration-500 group-hover:duration-500'>
        <p>View Details</p>
        <span className='text-xl'><IoMdLogIn /></span>
      </div>
    </div>
  )
}

export default ExploreCard