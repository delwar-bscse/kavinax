import React from 'react'

const CountCard = ({ num,title }) => {
  return (
    <div className=''>
      <div className='w-[150px] h-[150px] rounded-full border-[3px] border-frontColor p-2 relative flex flex-col items-center'>
        <div className='w-full h-full rounded-full border-[3px] border-frontColor flex justify-center items-center overflow-hidden p-2'>
          <p className='text-3xl text-center text-bgColor font-semibold'>{num}+</p>
        </div>
      </div>
        <p className='text-base font-medium text-center text-frontColor pt-5'>{title}</p>
    </div>
  )
}

export default CountCard