import React from 'react'
import { TbCopyCheckFilled } from "react-icons/tb";

const FindMoreCard = ( {title,des}) => {
  return (
    <div className=''>
      <h2 className='flex items-center gap-2'>
        <TbCopyCheckFilled className="text-2xl text-bgColor"/>
        <span className='text-gray-900 font-bold'>{title}</span>
      </h2>
      <p className='text-gray-600 pt-2'>{des}</p>
    </div>
  )
}

export default FindMoreCard