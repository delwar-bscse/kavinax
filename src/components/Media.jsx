import React from 'react';
import { FaYoutube, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



const Media = () => {
  return (
    <div className='flex gap-3 items-center'>
      <a href="https://www.facebook.com/" target='_blank' className='mediaIcon inline-block'>
        <FaFacebookF className='text-bgColor'/>
      </a>
      <a href="https://www.instagram.com/" target='_blank' className='mediaIcon inline-block'>
        <AiFillInstagram className='text-bgColor'/>
      </a>
      <a href="https://x.com/" target='_blank' className='mediaIcon inline-block'>
        <FaTwitter className='text-bgColor'/>
      </a>
      <a href="https://www.linkedin.com/" target='_blank' className='mediaIcon inline-block'>
        <FaLinkedinIn className='text-bgColor'/>
      </a>
      <a href="https://www.youtube.com/" target='_blank' className='mediaIcon inline-block'>
        <FaYoutube className='text-bgColor'/>
      </a>
    </div>
  )
}

export default Media