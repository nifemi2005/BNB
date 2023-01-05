import React from 'react'
import Chart from '../Images/Chart (1).png'
import Arrowup from '../Images/Arrow-up.png'
import StatPic from '../Images/Stat-Pic.png'
import DropDown from '../Images/DropDown.png'
import Graph from '../Images/Graph.png'
import Line from '../Images/Line 7.png'
import Table from '../Images/Table.png'
import Statitics from '../Images/Statistic (1).png'

const Features = () => {
  return (
    <div className='text-white bg-[#2B076E] md:pt-[100px] sm:pt-[70px] pt-14'>
        <h2 className='md:text-[40px] sm:text-[30px] text-[18px] lg:leading-[60px] text-center mx-auto lg:w-[758px] font-bold lg:pb-36 md:pb-[70px] sm:pb-[40px] pb-[20px]'>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
        <div className='lg:px-28 md:px-11 sm:px-9 px-7 lg:grid lg:grid-cols-2'>
          {/* left */}
            <div>
                <h3 className='lg:text-[32px] md:text-[28px] sm:text-[26px] text-[20px] lg:leading-[48px] font-bold lg:text-start md:text-center sm:text-center'>Invest Smart</h3>
                <p className='leading-[28px] font-normal text-[#E0E0E0] lg:w-[408px] sm:pt-6 sm:pb-8 pt-4 pb-6'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                <div className='lg:text-start md:text-center sm:text-center text-center'>
                  <button className='md:text-[18px] sm:text-[16px] text-[15px] bg-[#3671E9] sm:py-[14px] py-[10px] sm:px-[32px] px-[20px] rounded-[32px]'>Learn More</button>
                </div>
            </div>
          {/* right */}
            <div>
              <img src={Chart} className='sm:mx-auto lg:my-0 md:my-8 sm:my-5 my-4' alt="BITCOIN-CHART" />
            </div>
        </div>
        <div className='lg:px-28 md:px-11 sm:px-9 px-7 lg:flex justify-between items-center lg:py-[70px]'>
          {/* left  */}
          <div>
            <div>
              <img src={Statitics} className='lg:hidden lg:mb-0 md:mb-8 sm:mb-5 mb-4 mx-auto' alt="" />
            </div>
            <div className='w-[90%]'>
              <div className='bg-[#280569] px-[10px] py-[18px] lg:h-[76px] hidden lg:flex justify-between w-[100%]'>
                <div className=''>
                  <div className='flex'>
                    <img src={Arrowup} alt="statitics" />
                    <p className='text-[14px] font-normal text-[#42FFFF]'>+7.3% <span className='font-medium text-white'>(+$146)</span></p>
                  </div>
                  <p className='text-center text-[#BDBDBD] text-[10px]'>Trends</p>
                </div>
                <div className=''>
                  <div className='flex'>
                    <p className='text-[14px] font-medium leading-[21px]'>$8256.00</p>
                  </div>
                  <p className='text-center text-[#BDBDBD] text-[10px]'>Total amount</p>
                </div>
                <div className=''>
                  <div className='flex'>
                    <p className='text-[14px] font-medium leading-[21px]'>$51234.31</p>
                  </div>
                  <p className='text-[#BDBDBD] text-[10px]'>High</p>
                </div>
                <div className=''>
                  <div className='flex'>
                    <p className='text-[14px] font-medium leading-[21px]'>$1531.80</p>
                  </div>
                  <p className='text-[#BDBDBD] text-[10px]'>Low</p>
                </div>
                <div className='flex items-center'>
                  <img src={StatPic} alt="" />
                  <div className='pl-[16px]'>
                    <p className='text-[14px] font-medium leading-[21px] w-[87px]'>Andriy Lenin</p>
                    <p className='text-[10px] font-medium text-[#6EDCB5] leading-[15px]'>VERIFIED</p>
                  </div>
                </div>
              </div>
              <div className='mt-2 bg-[#280569] px-[20px] hidden lg:block'>
                <div className='flex items-center justify-between'>
                  <div className='flex py-[23px]'>
                    <div className='flex items-center gap-2'>
                      <p className='font-bold text-[14px] leading-[21px]'>USD/BTC</p>
                      <img src={DropDown} alt="" />
                    </div>
                    <div className='pl-[40px] flex items-center'>
                      <div>
                        <p className='font-normal text-[12px] leading-[18px]'>$6278.13</p>
                        <p className='text-[#BDBDBD] text-[8px]'>Last Price</p>
                      </div>
                      <p className='text-[#42FFFF] font-normal text-[10px] leading-[15px] pl-2'>+2.74%</p>
                    </div>
                    <div className='pl-[40px]'>
                      <p className='font-normal text-[12px] leading-[18px]'>38.25 BTC</p>
                      <p className='text-[#BDBDBD] text-[8px]'>Volume (24h)</p>
                    </div>
                  </div>
                  <div>
                    <button className='font-medium text-[12px] leading-[18px] bg-[#6EDCB5] rounded-[32px] py-2 px-6 mr-4'>Buy</button>
                    <button className='font-medium text-[12px] leading-[18px] bg-[#FF325F] rounded-[32px] py-2 px-6'>Sell</button>
                  </div>
                </div>
                <div className='flex'>
                  <div className='graph-container'>
                    <img src={Line} alt="" className='lg:relative lg:top-9' />
                    <img src={Graph} alt="" className='pt-8' />
                  </div>
                  <div className='lg:pl-4'>
                    <p className='text-[10px] leading-[16px] font-medium pb-[10px]'>$1600</p>
                    <p className='text-[10px] leading-[16px] font-medium bg-[#6EDCB5] py-1 px-2 rounded-[24px] mb-[10px]'>$1569</p>
                    <p className='text-[10px] leading-[16px] font-medium pb-[30px]'>$1500</p>
                    <p className='text-[10px] leading-[16px] font-medium pb-[30px]'>$1450</p>
                    <p className='text-[10px] leading-[16px] font-medium pb-[30px]'>$1400</p>
                    <p className='text-[10px] leading-[16px] font-medium'>$1350</p>
                  </div>
                </div> 
                <div className='flex pl-[20px] gap-[60px] py-[20px] text-[10px] leading-[16px] font-normal'>
                  <p>May</p>
                  <p>Jun</p>
                  <p>Jul</p>
                  <p>Aug</p>
                  <p>Sep</p>
                  <p>Oct</p>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div>
            <h3 className='lg:text-[32px] md:text-[28px] sm:text-[26px] text-[20px] lg:leading-[48px] font-bold lg:text-start md:text-center sm:text-center'>Detailed Statistics</h3>
            <p className='leading-[28px] font-normal text-[#E0E0E0] lg:w-[408px] sm:pt-6 sm:pb-8 pt-4 pb-6'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
            <div className='lg:text-start md:text-center sm:text-center text-center'>
              <button className='md:text-[18px] sm:text-[16px] text-[15px] bg-[#3671E9] py-[14px] px-[32px] rounded-[32px] lg:mb-0 md:mb-8 sm:mb-5 mb-4'>Learn More</button>
            </div>
          </div>
        </div>
        <div className='lg:px-28 md:px-11 sm:px-9 px-7 lg:grid lg:grid-cols-2 items-center'>
          {/* left  */}
          <div>
            <h3 className='lg:text-[32px] md:text-[28px] sm:text-[26px] text-[20px] lg:leading-[48px] lg:w-[454px] font-bold'>Grow your profit and track your investments</h3>
            <p className='leading-[28px] font-normal text-[#E0E0E0] lg:w-[408px] sm:pt-6 sm:pb-8 pt-4 pb-6'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
            <div className='lg:text-start md:text-center sm:text-center text-center'>
              <button className='md:text-[18px] sm:text-[16px] text-[15px] bg-[#3671E9] py-[14px] px-[32px] rounded-[32px] lg:mb-0 md:mb-8 sm:mb-5 mb-4'>Learn More</button>
            </div>
          </div>
          {/* right  */}
          <div>
            <img src={Table} alt="grow_profit" className='mx-auto' />
          </div>
        </div>
        <div className='lg:px-28 md:px-11 sm:px-9 px-7 bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] sm:py-[88px] py-[50px]'>
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