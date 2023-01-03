import React from 'react'

const Features = () => {
  return (
    <div className='text-white bg-[#2B076E] md:py-[100px] sm:py-[70px] py-14'>
        <h2 className='md:text-[40px] sm:text-[30px] text-[18px] lg:leading-[60px] text-center mx-auto lg:w-[758px] font-bold lg:pb-36 md:pb-[70px] sm:pb-[40px] pb-[20px]'>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
        <div className='lg:px-28 md:px-11 sm:px-9 px-7 lg:grid lg:grid-cols-2'>
          {/* left */}
            <div>
                <h3 className='lg:text-[32px] md:text-[28px] sm:text-[26px] text-[20px] lg:leading-[48px] font-bold'>Invest Smart</h3>
                <p className='leading-[28px] font-normal text-[#E0E0E0] lg:w-[408px] sm:pt-6 sm:pb-8 pt-4 pb-6'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                <button className='md:text-[18px] sm:text-[16px] text-[15px] bg-[#3671E9] py-[14px] px-[32px] rounded-[32px]'>Learn More</button>
            </div>
          {/* right */}
            <div>
              <img src="" alt="BITCOIN-CHART" />
            </div>
        </div>
        <div className='lg:px-28 md:px-11 sm:px-9 px-7 lg:grid lg:grid-cols-2'>
          {/* left  */}
          <div>
            <img src="" alt="statitics" />
          </div>
          {/* right  */}
          <div>
            <h3 className='lg:text-[32px] md:text-[28px] sm:text-[26px] text-[20px] lg:leading-[48px] font-bold'>Detailed Statistics</h3>
            <p className='leading-[28px] font-normal text-[#E0E0E0] lg:w-[408px] sm:pt-6 sm:pb-8 pt-4 pb-6'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
            <button className='md:text-[18px] sm:text-[16px] text-[15px] bg-[#3671E9] py-[14px] px-[32px] rounded-[32px]'>Learn More</button>
          </div>
        </div>
        <div className='lg:px-28 md:px-11 sm:px-9 px-7 lg:grid lg:grid-cols-2'>
          {/* left  */}
          <div>
            <h3 className='lg:text-[32px] md:text-[28px] sm:text-[26px] text-[20px] lg:leading-[48px] lg:w-[454px] font-bold'>Grow your profit and track your investments</h3>
            <p className='leading-[28px] font-normal text-[#E0E0E0] lg:w-[408px] sm:pt-6 sm:pb-8 pt-4 pb-6'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
            <button className='md:text-[18px] sm:text-[16px] text-[15px] bg-[#3671E9] py-[14px] px-[32px] rounded-[32px]'>Learn More</button>
          </div>
          {/* right  */}
          <div>
            <img src="" alt="grow_profit" />
          </div>
        </div>
        <div className='lg:px-28 md:px-11 sm:px-9 px-7 bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] py-[88px]'>
          <div className='bg-[#3671E9] p-12 lg:grid lg:grid-cols-2 items-center rounded-2xl'>
            <div>
              <h3 className='lg:text-[32px] md:text-[28px] sm:text-[25px] text-[20px] font-bold lg:leading-[48px]'>Start mining now</h3>
              <p className='lg:leading-7 lg:w-[348px] font-normal pt-4'>Join now with CRAPPO to get the latest news and start mining now</p>
            </div>
            <div className='lg:mt-0 md:mt-5 sm:mt-4 mt-3'>
              <input type="email" placeholder='Enter your email' className='outline-0 bg-transparent border-b border-b-[#E0E0E0] md:w-[50%] sm:w-[60%] w-[90%] text-[#0D0D2B] placeholder-white' />
              <button className='md:text-[18px] sm:text-[16px] text-[15px] bg-white sm:py-[14px] sm:px-[32px] py-[10px] px-6 rounded-[32px] font-medium text-[#0D0D2B] sm:ml-[40px] sm:mt-0 mt-4'>Subscribe</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Features