import React from 'react'
import Crappo from '../Images/Crappo.png'
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='bg-[#0D0D2B] lg:px-28 md:px-11 sm:px-9 px-7 w-full lg:border-0 md:border-b sm:border-b border-b border-b-slate-400'>
        <div className='flex items-center justify-between lg:h-[172px] md:h-[102px] sm:h-[70px] h-16'>
          <div className='lg:w-[135px] sm:w-[130px] w-[100px] cursor-pointer'>
            <img src={Crappo} alt="" />
          </div>
          <div className='text-white font-normal text-base lg:flex items-center hidden'>
            <Link to='/'>Products</Link>
            <Link className='px-[32px]'>Features</Link>
            <Link>About</Link>
            <Link className='px-[32px]'>Contact</Link>
            <Link className='font-medium pl-[20px] pr-[52px]'>Login</Link>
            <button className='bg-[#3671E9] py-[14px] px-[32px] rounded-[32px] hover:bg-white hover:text-black'>Register</button>
          </div>
          <div onClick={handleNav} className='lg:hidden block'>
            {nav ? <AiOutlineClose className='opacity-0'/> :  <AiOutlineMenu className='text-white sm:text-[32px] text-[25px]'/>}
          </div>
        <div className={nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-500 sm:w-[50%]' : 'fixed left-[-100%]'}>
          <div className='flex items-center justify-between m-4'>
            <h1 className='w-full text-[24px] font-bold text-[#292929]'>CRAPPO.</h1>
            <div onClick={handleNav}>
              <AiOutlineClose size={26}/>
            </div>
          </div>
          <div className='p-4 uppercase flex flex-col gap-[18px] font-medium text-[20px] font-2'>
            <Link to='/'>Products</Link>
            <Link to="/market">Features</Link>
            <Link to='/auction'>Contact</Link>
            <Link to='/drop'>Login</Link>
            <button className='bg-[#3671E9] py-[10px] rounded-[32px] uppercase'>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar