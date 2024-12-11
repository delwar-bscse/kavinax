import React from 'react'
import TextRating from './Star'

const TestCard = ({image,star,msg,name,title}) => {
  return (
    <div className='p-5'>
      <div className='shadow-sm p-3 pt-12 bg-bodyColor rounded-xl relative flex flex-col gap-3'>
        <div className='flex justify-end items-end'>
          <img src={image} alt="" className='w-[100px] h-[100px] rounded-full border-[8px] border-white absolute -top-6 -left-5 z-50' />
          <div className=''><TextRating value={star}/></div>
        </div>
        <p className='pt-2 text-sm leading-6 text-gray-700'>{msg}</p>
        <h3 className='text-3xl font-semibold pt-3'>{name}</h3>
        <h4 className='text-bgColor'>{title}</h4>
      </div>
    </div>
  )
}

export default TestCard