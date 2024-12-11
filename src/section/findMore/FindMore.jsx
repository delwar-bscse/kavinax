import React from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import { findGroup } from '../../assets/assets';
import { findMoreDatas } from '../../constants/findMoreDatas';
import FindMoreCard from '../../components/FindMoreCard';

const FindMore = () => {
  return (
    <div className='py-20 bg-white'>
      <div className='containerMax grid grid-cols-1 lgl:grid-cols-2 gap-10 max-xll:px-5'>
        <div>
          <img src={findGroup} alt="" className='w-full'/>
        </div>
        <div className='flex flex-col items-start gap-8'>
          <p className='text-lg font-semibold inline-block border-b-[3px] border-b-bgColor'>Find More Choose</p>
          <h2 className='text-3xl md:text-5xl font-bold'>Why You Choose Our Kavinax Property</h2>
          <span className='block text-gray-500'>Excepteur sint occaecat cupidatat non proident,sunt inculpk qui officia deserunt mollit anim id est laborum.sed do eiusmod.</span>
          <div className='grid grid-cols-1 sml:grid-cols-2 gap-7'>
            {
              findMoreDatas?.map((item,i)=>(
                <FindMoreCard key={i} {...item} />
              ))
            }
          </div>
          <button className='flex items-center gap-5 bg-frontColor text-white py-2 px-3'>
            <span>Explore More</span>
            < AiOutlineLogout className='text-xl'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FindMore