import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 vi-gray-800 to-gray-100 text-gray-100 p-6 md:p-12'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold mb-2 text-gray-400'>Get In Touch with Us</h2>
        <p className='text-gray-400'>We had love to hear from you! Reach out for bookings, feedback or support</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto">
      <div className="md:w-1/2 w-full flex items-center justify-center">
               
                  <Image
                    src='/car-rent.jpg'
                    alt='car'
                    width={300}
                    height={200}
                    className="object-contain rounded-xl shadow-lg"
                  />
      </div>
      
              <div className="md:w-1/2 w-full bg-gray-800 round-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400"></h3>
                <form className='flex flex-col gap-4'>
                  <div className=''>
                    <label className='block text-sm text-gray-400 mb-1'>Full Name</label>
                  <input type='text' placeholder='Enter your name' className='w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400'/>
                  </div>

                  <label>Email</label>
                  <input type='email'/>

                  <label>Phone Number</label>
                  <input type='number'/>

                  <label>Subject</label>
                  <input type='text'/>

                  <label>Message</label>
                  <input type='text'/>

                  <button className=''>Send Message</button>
                </form>
                
              </div>
            </div>
    </div>
  )
}
