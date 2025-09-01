'use client'
import Image from 'next/image'
import React from 'react'

export default function Homepage() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
        <div >
          <h2 className='text-[40px] font-bold md:text-[60px]'>Premium Car Rental in Your Area</h2>
          <h2 className='text-[20px] md:text-[20px]'>Book the selected car effortlessly, Pay for driving only, Book the Car Now</h2>
          <button className="p-3 mt-5 bg-gray-500 hover:text-white rounded-full hover:scale-105 transition-all text-[12px]">Explore Cars</button>
        </div>
        <div className='mt-5 flex justify-end items-center transition-all rounded-lg'>
          <Image src="/car.avif" alt='Car' width={400} height={400} className='object-cover all w-full' />
        </div>
    </div>

  
  )
}
