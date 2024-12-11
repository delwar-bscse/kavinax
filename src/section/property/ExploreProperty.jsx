import React from 'react'
import { exploreProDatas } from '../../constants/exploreProDatas'
import ExploreCard from '../../components/ExploreCard'

const ExploreProperty = () => {
  return (
    <div id='property' className='w-full'>
      <div className='containerMax max-sml:px-2 max-xll:px-5'>
        <div className='flex flex-col items-center gap-5 py-20'>
          <p className='inline-block border-b-2 border-b-bgColor leading-7 font-semibold'>Our Property</p>
          <h3 className='text-5xl font-bold text-center'>Our Explore Property</h3>
        </div>
        <div className='grid grid-cols-1 mdl:grid-cols-2 xll:grid-cols-3 gap-10'>
          {
            exploreProDatas?.map((item,i)=>(
              <ExploreCard key={i} {...item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ExploreProperty