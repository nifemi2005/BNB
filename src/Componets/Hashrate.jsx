import React from 'react'
import Bitcoin from '../Images/bitcoin.png'
import Ethereum from '../Images/Ethereum.png'
import Litecoin from '../Images/litecoin.png'
import arrow from '../Images/arrow.png'


const Hashrate = () => {
  return (
    <div className='bg-gradient-to-r from-slate-50 to-slate-100 py-11'>
      <div className='text-center'>
        <p>Check how much you can earn</p>
        <p className='lg:text-[18px] sm:text-base text-base lg:w-[600px] h-[54px] lg:leading-[27px] font-normal text-[#E0E0E0] mx-auto mt-5'>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p><br /><br />
      </div>
      <div className='lg:w-[50%] md:w-[60%] sm:w-[70%] w-[90%] mx-auto'>
        <div className='bg-[#FBFCFE] lg:py-8 md:py-7 sm:py-5 py-4 px-6'>
          <input type="email" placeholder='Enter your hash rate' className='outline-0 bg-transparent border-b border-b-[#E0E0E0] md:w-[50%] sm:w-[60%] w-[90%] text-[#0D0D2B] placeholder-[#0D0D2B]' />
          <select name="" id="">TH/s</select>
          <button className='bg-[#3671E9] py-[14px] px-[32px] rounded-[32px] text-white'>Calculate</button>
        </div>
        <div className='bg-white py-6 px-6'>
          <p className='text-[#3671E9] font-medium leading-6 lg:text-[16px] sm:text-[16px] text-[14px]'>ESTIMATED 24 HOUR REVENUE:</p>
          <h1 className='font-bold lg:text-[32px] md:text-[28px] sm:text-[24px] lg:last:leading-[48px] py-2'>0.055 130 59 ETH <span className='text-[#3671E9]'>($1275</span>)</h1>
          <p className='leading-[28px] font-normal lg:text-[16px] sm:text-[16px] text-[14px] text-[#828282]'>Revenue will change based on mining difficulty and Ethereum price.</p>
        </div>
      </div>
      <div>
        <h2 className='lg:leading-[60px] lg:text-[40px] md:text-[35px] sm:text-[30px] font-bold lg:w-[741px] mx-auto text-center lg:pt-[100px] md:pt-[100px] sm:pt-[80px] pt-[50px] lg:pb-0 md:pb-[100px] sm:pb-[60px] pb-[20px]'>Trade securely and market the high growth cryptocurrencies.</h2>
        <div className='lg:w-[90%] md:w-[370px] sm:w-[370px] lg:py-[64px] px-4 mx-auto'>
          <div className='max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-11'>
            <div className='bg-white hover:text-white hover:bg-[#2B076E] lg:py-14 md:py-12 sm:py-10 py-5 rounded-2xl cursor-pointer'>
              <img src={Bitcoin} className='w-20 mx-auto' alt="bitcoin-logo" />
              <div className='flex align-top items-center justify-center lg:pt-11 md:pt-10 sm:pt-9 pt-7 pb-6'>
                <h3 className='text-[32px] leading-[48px] font-bold'>Bitcoin</h3>
                <p className='font-medium leading-[27px] text-[18px] opacity-[30%]'>BTC</p>
              </div>
              <p className='text-[#828282] text-center pb-5 leading-7 text-[16px] px-6'>Digital currency in which a record of transactions is maintained.</p>
              <div className='border-2 border-gray-300 rounded-full w-[64px] h-[64px] flex items-center mx-auto cursor-pointer'>
                <img src={arrow} className='w-[11.98px] mx-auto' alt="arrow" />
              </div>
            </div>
            <div className='bg-white hover:text-white hover:bg-[#2B076E] lg:py-14 md:py-12 sm:py-10 py-5 rounded-2xl cursor-pointer'>
              <img src={Ethereum} className='w-20 mx-auto' alt="bitcoin-logo" />
              <div className='flex align-top items-center justify-center lg:pt-11 md:pt-10 sm:pt-9 pt-7 pb-6'>
                <h3 className='text-[32px] leading-[48px] font-bold'>Ethereum</h3>
                <p className='font-medium leading-[27px] text-[18px] opacity-[30%]'>ETH</p>
              </div>
              <p className='text-[#828282] text-center pb-5 leading-7 px-6'>Blockchain technology to create and run decentralized digital applications.</p>
              <div className='border-2 border-gray-300 rounded-full w-[64px] h-[64px] flex items-center mx-auto cursor-pointer'>
                <img src={arrow} className='w-[11.98px] mx-auto' alt="arrow" />
              </div>
            </div>
            <div className='bg-white hover:text-white hover:bg-[#2B076E] lg:py-14 md:py-12 sm:py-10 py-5 rounded-2xl cursor-pointer'>
              <img src={Litecoin} className='w-20 mx-auto' alt="bitcoin-logo" />
              <div className='flex align-top items-center justify-center lg:pt-11 md:pt-10 sm:pt-9 pt-7 pb-6'>
                <h3 className='text-[32px] leading-[48px] font-bold'>Litecoin</h3>
                <p className='font-medium leading-[27px] text-[18px] opacity-[30%]'>LTC</p>
              </div>
              <p className='text-[#828282] text-center pb-5 leading-7 px-6'>Cryptocurrency that enables instant payments to anyone in the world.</p>
              <div className='border-2 border-gray-300 rounded-full w-[64px] h-[64px] flex items-center mx-auto cursor-pointer'>
                <img src={arrow} className='w-[11.98px] mx-auto' alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hashrate