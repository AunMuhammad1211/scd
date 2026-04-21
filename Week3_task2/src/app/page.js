import React from 'react'

const page = () => {
  return (
    <div className='bg-blue-950 px-15 text-white min-h-screen w-screen space-y-5'>
      <h1 className='font-bold text-2xl'>Services I Offer</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, temporibus dicta? Aut dicta vitae, voluptas possimus amet ea eligendi non sit. Maxime eveniet et libero sapiente aliquid sunt eius, quam placeat distinctio, iure ipsa tempora expedita, dolore ab qui ullam illum ratione nisi? Deleniti, possimus laboriosam, officia dicta temporibus reiciendis libero, cupiditate facilis facere quibusdam est.</p>
      <div className="boxes flex gap-5 w-full h-120 justify-center border-b-2 border-gray-500 px-20 py-3">
        <div className="box w-[45%] h-full">
          <img className='w-full h-full bg-cover' src="logos.jpg" alt="" />
        </div>
        <div className="box w-[45%] h-full">
          <img className='w-full h-full bg-cover' src="logos.jpg" alt="" />
        </div>
      </div>
      <div className="boxes flex gap-5 w-full h-120 justify-center border-b-2 border-gray-500 px-20 py-3">
        <div className="box w-[45%] h-full">
          <img className='w-full h-full bg-cover' src="logos.jpg" alt="" />
        </div>
        <div className="box w-[45%] h-full">
          <img className='w-full h-full bg-cover' src="logos.jpg" alt="" />
        </div>
      </div>
      <div className="boxes flex gap-5 w-full h-120 justify-center border-b-2 border-gray-500 px-20 py-3">
        <div className="box w-[45%] h-full">
          <img className='w-full h-full bg-cover' src="logos.jpg" alt="" />
        </div>
        <div className="box w-[45%] h-full">
          <img className='w-full h-full bg-cover' src="logos.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default page
