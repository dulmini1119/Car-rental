import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'

export default function page() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 vi-gray-800 to-gray-500 text-gray-100 p-6 md:p-12'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-bold mb-2 text-gray-300'>Get In Touch with Us</h2>
        <p className='text-gray-400'>We had love to hear from you! Reach out for bookings, feedback or support</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto">
      <div className="md:w-1/2 w-full flex items-center justify-center">
               
                  <Image
                    src='/car3.jpg'
                    alt='car'
                    width={500}
                    height={400}
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

                  <div>
                    <label className='block text-sm text-gray-400 mb-1'>Email</label>
                  <input type='email' placeholder='example@gmail.com' className='w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400'/>
                  </div>
                  
                  <div>
                    <label className='block text-sm text-gray-400 mb-1'>Phone Number</label>
                  <input type='tel' placeholder='000-00000000' className='w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400'/>
                  </div>

                  <div>
                     <label className='block text-sm text-gray-400 mb-1'>Message</label>
                  <textarea rows={4} placeholder='Write your  message here....' className='w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400 resize-none'></textarea>

                  </div>

                  <button type="submit" className='bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-3 rounded-md shadow-md mt-2'>Send Message</button>
                </form>
                
              </div>
            </div>

            <div className='max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
              <div className='bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition'>
              <FaPhoneAlt className='text-blue-400 text-3xl mx-auto mb-2'/>
              <h4 className='font-semibold text-lg mb-1'>Call Us</h4>
              <p className='text-gray-400'>+94 77 123 4567</p>
              </div>

              <div className='bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition'>
              <FaEnvelope className='text-blue-400 text-3xl mx-auto mb-2'/>
              <h4 className='font-semibold text-lg mb-1'>Email</h4>
              <p className='text-gray-400'>support@carrentals.lk</p>
              </div>

              <div className='bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition'>
              <FaMapMarkedAlt className='text-blue-400 text-3xl mx-auto mb-2'/>
              <h4 className='font-semibold text-lg mb-1'>Location</h4>
              <p className='text-gray-400'>Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className='mt-12 flex justify-center gap-6 text-gray-100'>
              <a href='#' className='hover:text-blue-400 transition'>
                <FaFacebook size={22} />
              </a>
               <a href='#' className='hover:text-blue-400 transition'>
                <FaInstagram size={22} />
              </a>

               <a href='#' className='hover:text-blue-400 transition'>
                <FaLinkedin size={22} />
              </a>
            </div>

            <p className='text-center text-gray-300 text-sm mt-6'>
              © {new Date().getFullYear()} Car Rentals. All rights reserved.
            </p>
    </div>
  )
}
