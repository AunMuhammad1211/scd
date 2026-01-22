import React from "react";
// import image from "./ss4.png";

const page = () => {
  return (
    <div className="bg-red-500 w-screen h-screen">
      <div className="m-auto w-[80%] h-full">
        <div className="w-full h-[90px]">
          <img className="w-full h-full" src="/ss4.png" alt="image" />
        </div>
        <div className="px-5 w-full h-[40px] bg-black">
          <nav className="w-full h-full">
            <ul className="w-full h-full flex gap-8 text-white items-center">
              <li className="list-style-none"><a className="text-decoration-none" href={'/'}>Home</a></li>
              <li className="list-style-none"><a className="text-decoration-none" href={'/'}>About Us</a></li>
              <li className="list-style-none"><a className="text-decoration-none" href={'/'}>Products</a></li>
              <li className="list-style-none"><a className="text-decoration-none" href={'/'}>Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex w-full h-[700px]">
          <div className="w-[30%] bg-green-900 h-full">
            left
          </div>
          <div className="w-[70%] bg-yellow-600 h-full">
            right
          </div>
        </div>
        <div className="w-full h-34 bg-blue-900">
          Footer Section
        </div>
      </div>
    </div>
  );
};

export default page;
