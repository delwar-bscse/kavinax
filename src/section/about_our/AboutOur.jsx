import React from 'react'
import AboutUs from './AboutUs'
import OurService from './OurService'

const AboutOur = () => {
  return (
    <div id='about' className='py-10 px-2 sml:px-5 xll:px-0'>
      <div className='containerMax border-dashed border-2 border-frontColor border-opacity-50 p-3'>
        <AboutUs />
        <OurService />
      </div>
    </div>
  )
}

export default AboutOur