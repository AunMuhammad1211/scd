import React from "react";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { data } from "@/app/Comonents/Data";

const page = async ({ params }) => {
  params = await params
  
    
  const curr = data[params.id-1]
  console.log(curr);
  
  return (
    <div className="bg-white h-screen">
      <header className="h-44 bg-blue-400 text-white flex py-8 justify-center relative">
        <p className="text-4xl">{curr.titel}</p>
        <div
          className="flex gap-8 w-200 h-70 rounded-md bg-gray-700 text-blue-700 items-center justify-center absolute bottom-[-200] left-1/2 translate-x-[-50%]
                "
        >
          <img className="w-50 h-50 rounded-full" src={'../'+curr.img} alt="" />
          <div className="text-blue-400 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <MdDateRange />
            <p>{curr.date}</p>
          </div>
          <div className="flex flex-col gap-3">
            <IoLocationOutline />
            <p>{curr.desc}</p>
          </div>
          </div>
        </div>
      </header>
      <div className="w-[80%] mx-auto text-black flex items-center justify-center h-120 text-center my-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi facere dolorum. Cupiditate dolorem excepturi iusto, nesciunt, molestiae officia accusamus dolorum fugit distinctio nobis commodi eaque possimus quo dolor delectus velit rerum, quisquam harum neque in modi laborum optio!
      </div>
    </div>
  );
};

export default page;
