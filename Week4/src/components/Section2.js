import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className="main flex flex-col m-auto w-full  gap-7 text-center items-center border-b-2 border-gray-600 py-3">
            <h1 className='font-bold text-4xl text-blue-400'>John Wick</h1>
            <h2 className='font-bold text-xl'>Actor and Artist</h2>
            <p className='w-[40%]'>John Wick is a 2014 American neo-neir action thriller film directed by Chad Stahelski (in his directional debut) from a screen play by Derek Kolstad.</p>
            <div className='flex justify-between px-28 w-[40%]'>
              <FaFacebookF />
              <FaYoutube />
              <FaLinkedin />
            </div>
            <img className='w-40 h-40 rounded-full' src="/john_wick.jpg" alt="" />
    </div>
  )
}

export default Section2
