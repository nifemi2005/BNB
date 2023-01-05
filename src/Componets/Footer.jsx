import React from 'react'
import Facebook from '../Images/facebook.png'
import Instagram from '../Images/instagram.png'
import Youtube from '../Images/youtube.png'
import Twitter from '../Images/twitter.png'
import Linkedin from '../Images/linkedin.png'
import FooterBitcoin from '../Images/Footer-Bitcoin.png'
import Mastercard from '../Images/Mastercard.png'
import Visa from '../Images/Visa.png'

const Footer = () => {
  return (
    <div className='bg-[#0D0D2B] text-white lg:px-28 md:px-11 sm:px-9 px-7'>
        <div className='lg:flex items-center justify-between lg:text-start md:text-center sm:text-center text-center lg:pb-[100px] md:pb-[70px] sm:pb-[50px] pb-[30px]'>
            <div className='text-[#E0E0E0] font-normal leading-9 lg:pb-0 md:pb-[70px] sm:pb-[50px] pb-[30px]'>
                <p>Home</p>
                <p>Products</p>
                <p>About</p>
                <p>Features</p>
                <p>Contact</p>
            </div>
            <div className='text-[#E0E0E0] font-normal leading-9'>
                <p>Download Whitepapper</p>
                <p>Smart Token</p>
                <p>Blockchain Explorer</p>
                <p>Crypto API</p>
                <p>Interest</p>
                <p></p>
            </div>
            <div className='flex sm:gap-6 gap-2 justify-center lg:pt-0 sm:pt-8 pt-5'>
                <img src={Visa} alt="Visa"  className='sm:w-[96px] w-[80px]'/>
                <img src={Mastercard} alt="Mastercard" className='w-[80px] sm:w-[96px]' />
                <img src={FooterBitcoin} alt="bitcoin" className='w-[80px] sm:w-[96px]'/>
            </div>
        </div>
        <div className='lg:flex items-center justify-between lg:pb-[80px] md:pb-[75px] sm:pb-[65px] pb-[50px]'>
            <div className='text-center lg:pb-0 md:pb-[60px] sm:pb-[40px] pb-[20px]'>
                <p>&copy; 2021 CRAPPO. All rights reserved</p>
            </div>
            <div className='flex justify-center'>
                <img src={Facebook} alt="facebook" className='pr-3' />
                <img src={Instagram} alt="instagram" className='pr-3'/>
                <img src={Youtube} alt="youtube" className='pr-3'/>
                <img src={Twitter} alt="twitter" className='pr-3'/>
                <img src={Linkedin} alt="linkedin" className='' />
            </div>
        </div>
    </div>
  )
}

export default Footer