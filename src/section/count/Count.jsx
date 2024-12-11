import React from 'react'
import { FaPlay } from "react-icons/fa";
import { work } from '../../assets/assets'
import { countdatas } from '../../constants/countDatas'
import CountCard from '../../components/CountCard'

const Count = () => {
  return (
    <div className='mb-[230px] w-full flex flex-col items-center relative'>
      <div className="w-full bg-cover bg-center bg-no-repeat h-[200px] lgl:h-[400px]" style={{backgroundImage:`url(${work})`}}>
        <div className="w-full bg-frontColor bg-opacity-50 h-full text-white flex justify-center items-center">
          <div className="flex flex-col items-center gap-3 pb-10">
            <span className='p-4 rounded-full bg-bodyColor text-bgColor border-4 border-bgColor'>
              <FaPlay className='text-2xl'/>
            </span>
            <h3 className="text-2xl md:text-3xl font-bold">Watch Our Video Tutorials</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-20 bg-bodyColor px-20 py-7 lgl:absolute lgl:-bottom-[120px] shadow-shadowOne">
        {
          countdatas?.map((item,i)=>(
            <CountCard key={i} {...item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Count