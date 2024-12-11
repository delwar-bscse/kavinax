import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-scroll";
import { logo1 } from '../../assets/assets';
import { IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Media from '../../components/Media';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkSetting = {
      activeClass:"active",
      spy:true,
      smooth:true,
      offset:-70,
      duration:500
  }

  return (
    <div className='bg-bodyColor py-4 lgl:py-6 sticky top-0 z-30'>
      <div className='containerMax px-5 xll:px-0 flex justify-between items-center text-lg text-gray-800'>
        {/*Logo*/}
        <div>
          <img src={logo1} alt="kevinax" className='h-[50px] lgl:h-[60px] w-auto'/>
        </div>
        {/*Menu*/}
        <div className='max-lgl:hidden'>
          <ul className='flex justify-center gap-5 xll:gap-10 items-center'>
            <li className='navLink'>
              <Link to='home' {...linkSetting}>Home</Link>
            </li>
            <li className='navLink'>
              <Link to='about' {...linkSetting}>About Us</Link>
            </li>
            <li className='navLink'>
              <Link to='property' {...linkSetting}>Property</Link>
            </li>
            <li className='navLink'>
              <Link to='' {...linkSetting} className='flex gap-2 items-center'>
              <span>Page</span>
              <MdOutlineArrowDropDownCircle className='text-sm'/>
              </Link>
            </li>
            <li className='navLink'>
              <Link to='blog' {...linkSetting}>Blog</Link>
            </li>
            <li className='navLink'>
              <Link to='footer' {...linkSetting}>Contact</Link>
            </li>
          </ul>
        </div>
        {/*Sign & Add*/}
        <div className='flex gap-3 font-semibold'>
          <button className='font-bold max-lgl:hidden'>Sign In</button>
          <button className=' max-lgl:hidden bg-bgColor text-white px-3 py-2 xl:px-5 xl:py-3 rounded-sm'>Add Property</button>
          <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className='lgl:hidden text-4xl'>
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence mode='wait'>
      {isMenuOpen && (
      <motion.div
            initial={{ opacity: 0, x:-100 }}
            animate={{ opacity: 1, x:0}}
            exit={{opacity:0, x:-100}}
            transition={{duration:0.4}}
            className='fixed lgl:hidden bg-bodyColor min-w-[300px] h-screen shadow-shadowOne top-[82px]'
      >
        <div className='w-full flex items-center justify-center gap-3 font-semibold pt-10'>
          <button className='font-bold text-xl'>Sign In</button>
          <button className='bg-bgColor text-white px-3 py-2  rounded-sm'>Add Property</button>
        </div>
        <ul className='flex flex-col justify-start pt-8 gap-5 xll:gap-10 items-start'>
          <li className='mobNavLink'>
            <Link to='home' {...linkSetting} className='block' onClick={()=>setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className='mobNavLink'>
            <Link to='about' {...linkSetting} onClick={()=>setIsMenuOpen(false)}>About Us</Link>
          </li>
          <li className='mobNavLink'>
            <Link to='property' {...linkSetting} onClick={()=>setIsMenuOpen(false)}>Property</Link>
          </li>
          <li className='mobNavLink'>
            <Link to='' {...linkSetting} className='flex gap-2 items-center' onClick={()=>setIsMenuOpen(false)}>
            <span>Page</span>
            <MdOutlineArrowDropDownCircle className='text-sm'/>
            </Link>
          </li>
          <li className='mobNavLink'>
            <Link to='blog' {...linkSetting} onClick={()=>setIsMenuOpen(false)}>Blog</Link>
          </li>
          <li className='mobNavLink'>
            <Link to='footer' {...linkSetting} onClick={()=>setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
        <div className='pt-10'>
          <Media />
        </div>
      </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar