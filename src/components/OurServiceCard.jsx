import React from 'react'
import { FaHome } from "react-icons/fa";

const OurServiceCard = ({ image,title,des }) => {
  return (
    <div className='mx-5 flex flex-col items-center gap-5 bg-bodyColor shadow-sm pb-8'>
      <img src={image} alt="" />
      <div className='flex items-center gap-2'>
        <span className='border-2 p-1 border-bgColor'>
          <FaHome className='text-bgColor text-lg'/>
        </span>
        <p className='font-semibold'>{title}</p>
      </div>
      <span className='text-sm text-gray-600 text-center px-2'>{des}</span>
      <button className='border-2 border-bgColor px-2 py-1 text-bgColor'>Find a home</button>
    </div>
  )
}

export default OurServiceCard