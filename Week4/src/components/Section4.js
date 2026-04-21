import React from 'react'

const Section4 = ({ logo, heading, para, extra }) => {
  return (
        <div className="box w-[30%] flex flex-col justify-center items-center gap-4 px-4 py-6 rounded-lg bg-white text-black">
            <div className="icon text-4xl">{logo}</div>
            <p>{heading}</p>
            <p>{para}</p>
            <p>{extra}</p>
        </div>
  )
}

export default Section4
