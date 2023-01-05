import React from 'react'
import Currency from '../Componets/Currency'
import Features from '../Componets/Features'
import Footer from '../Componets/Footer'
import Hashrate from '../Componets/Hashrate'
import Hero from '../Componets/Hero'
import Navbar from '../Componets/Navbar'
import Reason from '../Componets/Reason'

const Home = () => {
  return (
    <div className='bg-[#0d0d2B]'>
      <Navbar/>
      <Hero/>
      <Currency/>
      <Reason/>
      <Hashrate/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home