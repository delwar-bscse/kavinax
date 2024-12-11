import React from 'react'
import { work } from '../../assets/assets'
import { workData } from '../../constants/workData'
import WorkCard from '../../components/WorkCard'

const WorkProcess = () => {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${work})`}}>
      <div className='bg-frontColor bg-opacity-50 py-32'>
      <div className="containerMax h-full text-white flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-3 pb-10">
          <p className="inline-block border-b-2 border-b-bgColor pb-1">Working Process</p>
          <h3 className="text-3xl font-bold">How Do We Works</h3>
        </div>
        <div className="grid grid-cols-1 sml:grid-cols-2 lg:grid-cols-3 xll:grid-cols-4 gap-20 xll:gap-5">
          {
            workData?.map((item,i)=>(
              <WorkCard key={i} {...item}/>
            ))
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default WorkProcess