import React from 'react'
import Bitcoin from '../Images/Illustration.png'
import arrow from '../Images/arrow.png'


const Hero = () => {
  return (
    <div className='bg-[#0D0D2B] lg:px-28 md:px-11 sm:px-9 px-7 text-white'>
      <div className='lg:flex lg:justify-between lg:items-center'>
        {/* left */}
        <div className='flex flex-col gap-7'>
          <div className='rounded-full bg-[#80808077] lg:w-[65%] md:w-[50%] sm:w-[50%] lg:mt-0 md:mt-[20px] sm:mt-[20px] mt-[20px]'>
            <button className='bg-white text-[#0D0D2B] lg:text-[16px] md:text-base sm:text-sm text-xs rounded-[32px] py-2 px-4 font-medium'>78% save</button>
            <span className='lg:text-[16px] md:text-base sm:text-sm text-[10px] font-normal lg:px-5 md:px-4 sm:px-[6px] px-[6px]'>For the Black Friday weekend</span>
          </div>
          <h1 className='lg:text-[64px] md:text-5xl sm:text-3xl font-bold lg:leading-[75.84px] lg:w-[580px]'>Fastest & secure platform to invest in crypto</h1>
          <p className='text-base text-[#E0E0E0] lg:w-[435px]'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
          <div className='bg-[#3671E9] py-[14px] px-[32px] rounded-[32px] flex items-center justify-between w-[202px] hover:bg-white text-black cursor-pointer'>
            <button>Try for FREE</button>
            <div className='border-2 border-white rounded-full w-[34px] h-[34px] bg-white flex items-center'>
              <img src={arrow} className='mx-auto' alt="arrow" />
            </div>
          </div>
        </div>
        {/* right */}
        <div>
          <img src={Bitcoin} className='lg:relative bottom-14 lg:w-[604px] lg:mx-0 md:mx-auto' alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero