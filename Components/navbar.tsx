import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
        <Image src='/globe.svg' alt='logo' width={50} height={50}/>

        <div className='hidden md:flex gap-5'>
            <h2 className='hover:bg-gray-500 px-3 py-2 rounded hover:text-white '>Home</h2>

            <h2 className='hover:bg-gray-500 px-3 py-2 rounded hover:text-white'>History</h2>

            <h2 className='hover:bg-gray-500 px-3 py-2 rounded hover:text-white'>Contact Us</h2>
        </div>

    <UserButton/>
    </div>

    
  )
}
