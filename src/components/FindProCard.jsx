import React from 'react'
import Star2 from './Star2'
import { FaHeart } from "react-icons/fa6";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineCompareArrows } from "react-icons/md";

const FindProCard = ({city,title,star,image,size}) => {
  return (
    <div className='mx-3 group border-b-4 border-b-white hover:border-b-bgColor duration-300'>
      <div className='bg-center bg-cover bg-no-repeat w-full h-[230px] ' style={{backgroundImage:`url(${image})`}}>
        <div className='w-full h-full group-hover:bg-frontColor group-hover:bg-opacity-50 flex flex-col justify-center items-center gap-2 duration-300'>
          <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center gap-2 duration-300'>
            <span className='p-1 bg-white rounded-full'>
              <FaHeart className='text-3xl p-2 rounded-full text-white bg-bgColor font-extrabold'/>
            </span>
            <span className='p-1 bg-white rounded-full'>
              <MdOutlineCompareArrows className='text-3xl p-1 rounded-full text-white bg-bgColor font-extrabold'/>
            </span>
          </div>
          <p className='text-3xl font-semibold text-center text-white bg-bgColor group-hover:bg-transparent px-3 pb-1 rounded-md duration-300'>{city}</p>
        </div>
      </div>
      <div className='flex justify-between items-center py-6 pl-3 bg-bodyColor'>
        <div className='flex flex-col items-start gap-1'>
          <h3 className='text-xl font-medium group-hover:text-bgColor'>{title}</h3>
          <Star2 value={star}/>
        </div>
        <div className='py-1 px-3 bg-bgColor text-white rounded-l-md'>{size}</div>
      </div>
    </div>
  )
}

export default FindProCard