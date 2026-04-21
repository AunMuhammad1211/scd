import React from 'react'
import Section4 from './Section4'
import { FaPenRuler } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Section3 = () => {
  return (
    <div className="footer flex flex-col px-10 py-3 gap-4 w-full">
        <h1 className='font-bold text-2xl'>Services I Offer</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sapiente eligendi accusamus sit cum, fugit libero impedit reprehenderit. Hic accusamus corporis laudantium nostrum quae, assumenda natus quo enim, inventore adipisci, earum quod. Ipsam cumque sapiente et quibusdam ipsum, odio quia non tenetur ullam vel excepturi, consequatur error ducimus quaerat libero sequi, sunt tempora officia quisquam quas?</p>
        <div className="boxes w-full flex justify-between">
          <Section4 heading="Dummy Text1" para="Para1" extra="Extra1" logo={<FaPenRuler />}  />
          <Section4 heading="Dummy Text2" para="Para2" extra="Extra2" logo={<FaBriefcaseMedical />} />
          <Section4 heading="Dummy Text3" para="Para3" extra="Extra3" logo={<IoSettings />} />
        </div>
      </div>
  )
}

export default Section3
