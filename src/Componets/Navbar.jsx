import React from 'react'
import Crappo from '../Images/Crappo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                <button className='bg-[#3671E9] py-[14px] px-[32px] rounded-[32px]'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar