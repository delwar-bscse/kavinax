import React from 'react'
import AgentMedia from './AgentMedia'

const AgentCard = ({image,name,title}) => {
  return (
    <div className='relative mx-2 my-5 group'>
      <img src={image} alt="" />
      <div className='bg-frontColor bg-opacity-40 text-bodyColor w-full h-full absolute top-0 left-0 p-3 opacity-0 group-hover:opacity-100 duration-500'>
        <div className='w-full h-full border-2 flex flex-col items-center justify-center gap-3 duration-500'>
          <h3 className='text-2xl font-semibold'>{name}</h3>
          <p>{title}</p>
          <AgentMedia />
        </div>
      </div>
    </div>
  )
}

export default AgentCard