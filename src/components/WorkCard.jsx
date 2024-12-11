import React from 'react'

const WorkCard = ( {title,des,icon}) => {
  return (
    <div className='w-[200px] h-[200px] rounded-full border-2 border-white p-3 relative flex flex-col items-center'>
      <div className='w-full h-full rounded-full border-4 border-white flex justify-center items-center overflow-hidden p-2'>
        <p className='text-xs text-center'>{des}</p>
      </div>
      <div className='flex flex-col items-center gap-1 absolute -bottom-10'>
        <span className='text-3xl bg-white rounded-full
        text-bgColor p-2'>{icon}</span>
        <p className='text-base font-medium'>{title}</p>
      </div>
    </div>
  )
}

export default WorkCard;