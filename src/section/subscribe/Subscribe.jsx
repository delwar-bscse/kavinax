import React from 'react'
import { IoMail } from "react-icons/io5";
import { worldMap } from '../../assets/assets'

const Subscribe = () => {
  return (
    <div className='py-20 bg-white'>
      <div className='containerMax flex items-center justify-center bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${worldMap})`}}>
        <div className='bg-frontColor h-[380px] w-full bg-opacity-90 text-gray-50 flex justify-center items-end box-border'>
          <div className='flex flex-col items-center justify-end gap-3 pb-20 h-full relative'>
            <div className='bg-frontColor box-content border-[11px] border-white p-5 rounded-full flex justify-center items-center absolute -top-[60px]'>
              <IoMail className='text-6xl text-bodyColor'/>
            </div>
            <h2 className='text-3xl mdl:text-5xl font-semibold'>Subscrive For Newsletter</h2>
            <p className='text-sm'>Be the first one to know about discounts offers and enents.</p>
            <p className='text-sm'>Unsubscribe whenever you like.</p>
            <div className='w-full mdl:w-[400px] mx-auto flex justify-between items-center p-1 border-2 bg-bodyColor'>
              <input type="text" placeholder='Enter you email' className='grow py-3 outline-none text-gray-800 pl-1 h-full' />
              <button className='px-3 py-3 h-full bg-bgColor rounded-sm cursor-pointer font-semibold text-gray-50'>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe