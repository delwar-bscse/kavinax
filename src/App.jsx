import React from 'react'
import TopBar from './section/navbar/TopBar'
import Footer from './section/footer/Footer'
import Navbar from './section/navbar/Navbar'
import BrowseCategory from './section/Browse/BrowseCategory'
import BlogsNews from './blogs/BlogsNews'
import Subscribe from './section/subscribe/Subscribe'
import Testimonials from './section/testimonial/Testimonial'
import OurAgents from './section/agent/OurAgent'
import WorkProcess from './section/Work/WorkProcess'
import FindProperty from './section/property/FindProperty'
import ExploreProperty from './section/property/ExploreProperty'
import FindMore from './section/findMore/FindMore'
import AboutOur from './section/about_our/AboutOur'
import Count from './section/count/Count'
import Hero from './section/hero/Hero'

const App = () => {
  return (
    <div className='bg-white'>
      <TopBar />
      <Navbar />
      <Hero />
      <BrowseCategory />
      <AboutOur />
      <Count />
      <FindMore />
      <ExploreProperty />
      <FindProperty />
      <WorkProcess />
      <OurAgents />
      <Testimonials />
      <Subscribe />
      <BlogsNews />
      <Footer />
    </div>
  )
}

export default App