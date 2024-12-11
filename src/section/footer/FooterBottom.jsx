import React from 'react';
import { IoShieldCheckmark } from "react-icons/io5";
import { visa, paypal, mastercard, jcb, discover} from '../../assets/assets';

const FooterBottom = () => {
  return (
    <div className='bg-bgColor py-5 text-gray-100 text-[18px]'>
      <div className='containerMax max-xll:px-2 flex max-lg:flex-col-reverse max-lg:gap-4 justify-between items-center'>
        <p className='text-bodyColor max-md:text-sm'>&copy;2022 <span className='font-semibold underline'>Kavinax Property.</span> All Rights Reserved.</p>
        <div className='flex gap-4 max-md:flex-col'>
          <div className='flex items-center gap-3 text-bodyColor'>
            <span><IoShieldCheckmark /></span>
            <p>Secure Payment</p>
          </div>
          <div className='flex items-center gap-1 md:gap-3'>
            <span className='payment py-2'>
              <img src={paypal} alt="visa" className='h-full w-auto' />
            </span>
            <span className='payment py-2'>
              <img src={mastercard} alt="visa" className='h-full w-auto' />
            </span>
            <span className='payment py-3'>
              <img src={visa} alt="visa" className='h-full w-auto' />
            </span>
            <span className='payment'>
              <img src={discover} alt="visa" className='h-full w-auto' />
            </span>
            <span className='payment py-2'>
              <img src={jcb} alt="visa" className='h-full w-auto' />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom