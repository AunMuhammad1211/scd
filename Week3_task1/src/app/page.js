import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaPenRuler } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const page = () => {
  return (
    <div className='bg-blue-950 min-h-screen text-white'>
      <div className="header flex justify-between px-12 py-4">
        <h1 className='font-bold text-xl '>NEXT JS</h1>
        <button className='px-10 py-0.5 bg-blue-400 rounded-lg'>CV</button>
      </div>
      <div className="main flex flex-col m-auto w-full  gap-7 text-center items-center border-b-2 border-gray-600 py-3">
        <h1 className='font-bold text-4xl text-blue-400'>John Wick</h1>
        <h2 className='font-bold text-xl'>Actor and Artist</h2>
        <p className='w-[40%]'>John Wick is a 2014 American neo-neir action thriller film directed by Chad Stahelski (in his directional debut) from a screen play by Derek Kolstad.</p>
        <div className='flex justify-between px-28 w-[40%]'>
          <FaFacebookF />
          <AiOutlineYoutube />
          <CiLinkedin />
        </div>
        <img className='w-40 h-40 rounded-full' src="/john_wick.jpg" alt="" />
      </div>
      <div className="footer flex flex-col px-10 py-3 gap-4 w-full">
        <h1 className='font-bold text-2xl'>Services I Offer</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sapiente eligendi accusamus sit cum, fugit libero impedit reprehenderit. Hic accusamus corporis laudantium nostrum quae, assumenda natus quo enim, inventore adipisci, earum quod. Ipsam cumque sapiente et quibusdam ipsum, odio quia non tenetur ullam vel excepturi, consequatur error ducimus quaerat libero sequi, sunt tempora officia quisquam quas?</p>
        <div className="boxes w-full flex justify-between">
          <div className="box w-[30%] flex flex-col justify-center items-center gap-4 px-4 py-6 rounded-lg bg-white text-black">
            <div className="icon text-4xl"><FaPenRuler /></div>
            <p>Dummy text</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum tempora quo delectus non voluptatem dicta vitae minus molestias sequi unde, debitis et.</p>
            <p>Dummy text</p>
          </div>
           <div className="box w-[30%] flex flex-col justify-center items-center gap-4 px-4 py-6 rounded-lg bg-white text-black">
            <div className="icon text-4xl"><FaBriefcaseMedical/></div>
            <p>Dummy text</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum tempora quo delectus non voluptatem dicta vitae minus molestias sequi unde, debitis et.</p>
            <p>Dummy text</p>
          </div>
           <div className="box w-[30%] flex flex-col justify-center items-center gap-4 px-4 py-6 rounded-lg bg-white text-black">
            <div className="icon text-4xl"><IoSettings /></div>
            <p>Dummy text</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum tempora quo delectus non voluptatem dicta vitae minus molestias sequi unde, debitis et.</p>
            <p>Dummy text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
