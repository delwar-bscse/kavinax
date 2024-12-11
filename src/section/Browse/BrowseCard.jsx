import React from 'react'

const BrowseCard = ({title, des, image}) => {
  return (
    <div className="flex flex-row gap-3 bg-[#FCFCFC] mx-2 shadowOne">
      <div className="">
      <img src={image} alt="" className="w-[215px] h-[155px]"/>
      </div>
      <div className="flex flex-col justify-center items-start gap-2 p-3">
        <h4 className='text-xl font-semibold text-gray-700'>{title}</h4>
        <p className='text-base text-gray-800'>{des}</p>
      </div>
    </div>
  )
}

export default BrowseCard;