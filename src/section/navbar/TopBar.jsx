import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Media from '../../components/Media';

const TopBar = () => {
  return (
    <section className='w-full bg-frontColor py-4 px-5 xll:px-0 text-gray-100 max-lgl:hidden'>
      <div className='containerMax flex justify-between items-center'>
        <div className='inline-flex gap-3'>
          <div className='flex items-center gap-3'>
            <span className='mediaIcon'><FaLocationDot/></span>
            <span className='text-bodyColor'>7124 Landmark Tower,New York</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='mediaIcon'><MdEmail /></span>
            <span className='text-bodyColor'>support@yourdomain.com</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='mediaIcon'><FaPhoneAlt /></span>
            <span className='text-bodyColor'>+61383766284</span>
          </div>
        </div>
        <div>
          <Media />
        </div>
      </div>
    </section>
  )
}

export default TopBar