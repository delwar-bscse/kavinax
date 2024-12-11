import React from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { TbLineDotted } from "react-icons/tb";
import { f01, f02, f03, f04, logo2 } from '../../assets/assets'
import Media from '../../components/Media';
import { quickLink } from '../../constants/quickLink';

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const FooterTop = () => {
  return (
    <div className='bg-frontColor text-gray-50 py-20'>
      <div className='containerMax grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 max-xll:px-5 gap-20'>
        {/*Logo footer*/}
        <div className='flex flex-col gap-3'>
          <img src={logo2} alt="logo" className='w-[200px]' />
          <p>Dolor tempor amet amet eirmod sadipscing et dolores, stet eirmod stet dolor dolor eirmod takimata magna, ea magna stet sit et sit.</p>
          <Media />
        </div>
        {/*Quick Link*/}
        <div className='xl:ps-20'>
          <div className='pb-5'>
            <p className='text-2xl font-semibold'>QUICK LINKS</p>
            <span className='w-[100px] h-[3px] bg-bgColor block rounded-r-md'></span>
          </div>
          <ul className='space-y-3'>
            {
              quickLink?.map((item,i)=>(
              <li key={i} className='flex items-center gap-2 text-lg'>
                <RiArrowRightDoubleLine className='text-3xl font-extralight'/>
                <a href={item.link} className=''>{item.title}</a>
              </li>
              ))
            }
          </ul>
        </div>
        {/*Recent Post*/}
        <div>
          <div className='pb-5'>
            <p className='text-2xl font-semibold'>Recent Post</p>
            <span className='w-[100px] h-[3px] bg-bgColor block rounded-r-md'></span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-end'>
            <div><img src={f01} alt="post 01" className=''/></div>
            <div><img src={f02} alt="post 02" className=''/></div>
            <div><img src={f03} alt="post 03" className=''/></div>
            <div><img src={f04} alt="post 04" className=''/></div>
          </div>
        </div>
        {/*Contact Us*/}
        <div>
          <div className='pb-5'>
            <p className='text-2xl font-semibold'>Contact Us</p>
            <span className='w-[100px] h-[3px] bg-bgColor block rounded-r-md'></span>
          </div>
          <div className=''>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <span className='mediaIcon'><FaPhoneAlt/></span>
                <div className='flex flex-col text-sm'>
                  <span>Phone</span>
                  <span className='text-bodyColor'>+61383766284</span>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='mediaIcon'><MdEmail/></span>
                <div className='flex flex-col text-sm'>
                  <span>Email</span>
                  <span className='text-bodyColor'>support@yourdomain.com</span>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <span className='mediaIcon'><FaLocationDot/></span>
                <div className='flex flex-col text-sm'>
                  <span>Adddress</span>
                  <span className='text-bodyColor'>7124 Landmark Tower,New York</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop