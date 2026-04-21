'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Item = (props) => {
  const router = useRouter()
  return (
    <div className="item w-full h-45 rounded-md flex gap-3 bg-white text-black">
      <div className="h-full w-[40%]">
        <img className="h-full w-full rounded-tl-md rounded-bl-md" src={props.img} alt="" />
      </div>
      <div className="content flex flex-col gap-3 h-full w-[25%] justify-center">
        <h1 className="font-bold">{props.title}</h1>
        <p className="font-bold">{props.date}</p>
        <p>{props.desc}</p>
      </div>
      <div className="flex justify-end items-end h-full w-[35%] px-3 py-8">
        <div className="relative">
          <button onClick={() => router.push('/Detail/'+props.id)} className="bg-green-600 px-6 py-1 pr-8 rounded-md text-white cursor-pointer">
            Explore Event
          </button>
          <FaLongArrowAltRight
            className="absolute top-1/2 translate-y-[-50%] right-2 text-white"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
