import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p>Our exchange policy is designed to make it easy for you to exchange your item if it doesn't meet your expectations. 
            We offer a hassle-free process to ensure your satisfaction.</p>
      </div>
    </div>
  )
}

export default OurPolicy
