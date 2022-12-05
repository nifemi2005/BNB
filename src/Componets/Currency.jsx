import React from 'react'
import bar from '../Images/bar.png'
import investor from '../Images/investor.png'
import globe from '../Images/globe.png'


const Currency = () => {
  return (
    <div className='text-white lg:px-28 md:px-11 sm:px-9 px-7 w-full'>
        <div className='flex items-center justify-between flex-wrap'>
            <div className='flex items-center lg:gap-[25px] md:gap-[25px] sm:gap-[20px] gap-[15px] md:py-0 sm:py-0 py-1'>
                <img src={bar} alt="bar" />
                <div>
                    <h2 className='lg:leading-[60px] font-bold lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]'>$30B</h2>
                    <p className='text-[#E0E0E0] md:text-[16px] sm:text-[14px] text-[14px]'>Digital Currency Exchanged</p>
                </div>
            </div>
            <div className='flex items-center lg:gap-[25px] md:gap-[25px] sm:gap-[20px] gap-[15px] md:py-0 sm:py-0 py-1'>
                <img src={investor} alt="investor" />
                <div>
                    <h2 className='lg:leading-[60px] font-bold lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]'>10M+</h2>
                    <p className='text-[#E0E0E0]'>Trusted Wallets Investor</p>
                </div>
            </div>
            <div className='flex items-center lg:gap-[25px] md:gap-[25px] sm:gap-[20px] gap-[15px] md:py-0 sm:py-0 py-1'>
                <img src={globe} alt="globe" />
                <div>
                    <h2 className='lg:leading-[60px] font-bold lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]'>195</h2>
                    <p className='text-[#E0E0E0]'>Countries Supported</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Currency