import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



const AgentMedia = () => {
  return (
    <div className='flex gap-3 items-center'>
      <a href="#" target='_blank' className='mediaIcon inline-block'>
        <FaFacebookF className='text-bgColor'/>
      </a>
      <a href="#" target='_blank' className='mediaIcon inline-block'>
        <AiFillInstagram className='text-bgColor'/>
      </a>
      <a href="#" target='_blank' className='mediaIcon inline-block'>
        <FaTwitter className='text-bgColor'/>
      </a>
      <a href="#" target='_blank' className='mediaIcon inline-block'>
        <FaLinkedinIn className='text-bgColor'/>
      </a>
    </div>
  )
}

export default AgentMedia