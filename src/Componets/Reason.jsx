import React from 'react'
import Reason_image from '../Images/reason_image.png' 

const Reason = () => {
  return (
    <div className='lg:px-28 md:px-11 sm:px-9 px-7 lg:py-[70px] w-full'>
        <div className='grid lg:grid-cols-2 items-center gap-[30px]'>
            <div>
              <img src={Reason_image} className='lg:mx-0 md:mx-auto' alt="image" />
            </div>
            <div className='flex flex-col lg:gap-[30px] md:gap-[20px] sm:gap-[20px] gap-[15px]'>
                <h2 className='font-bold lg:text-[40px] sm:text-[35px] text-[25px] lg:leading-[60px] text-white lg:w-[480px]'>Why you should choose CRAPPO</h2>
                <p className='lg:w-[408px] text-[#E0E0E0] font-normal'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                <button className='text-[18px] leading-[27px] bg-[#3671E9] rounded-[32px] w-[145px] py-2 text-white font-medium lg:mb-0 md:mb-5 sm:mb-5 mb-5 hover:bg-white hover:text-black'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Reason