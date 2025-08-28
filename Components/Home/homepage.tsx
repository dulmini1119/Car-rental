'use client'
import Image from 'next/image'
import React from 'react'

export default function Homepage() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
        <div >
          <h2 className='text-[40px] font-bold md:text-[60px]'>Premium Car Rental in Your Area</h2>
          <h2 className='text-[20px] md:text[10px]'>Book the selected car effortlessly, Pay for driving only, Book the Car Now</h2>
          <button className="p-2 mt-5 bg-gray-500 hover:text-white rounded-full hover:scale-105 transition-all">Explore Cars</button>
        </div>
        <div>
          <Image src="./globe.svg" alt='Car' width={200} height={200} className='object-cover all' />
        </div>
    </div>
  )
}
