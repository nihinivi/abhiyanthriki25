import React from "react";
import NavWeb from "../assets/figma/navborderweb.png";
import NavMobile from "../assets/figma/navbordermobile.png";
import Logo from "../assets/figma/A3K.png"; 

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-center">
      {/* Adjust width: smaller on desktop, full width on mobile */}
      <div className="relative w-[100%] md:w-[70%] lg:w-[40%] h-16 md:h-20 lg:h-24 flex items-center justify-center">
        
        {/* Background border images */}
        <img
          src={NavWeb}
          alt="Web border"
          className="hidden md:block absolute inset-0 w-full h-full object-fill pointer-events-none"
        />
        <img
          src={NavMobile}
          alt="Mobile border"
          className="block md:hidden absolute inset-0 w-full h-full object-fill pointer-events-none"
        />

        {/* Nav content */}
        <div className="relative z-10 flex items-center justify-center text-white font-semibold space-x-4 md:space-x-8 lg:space-x-12">
          {/* Left links */}
          <div className="flex space-x-3 md:space-x-6 text-s md:text-base lg:text-lg">
            <a href="#about" className="cursor-target cursor-none hover:text-[#F64040]">About</a>
            <a href="#event" className="cursor-target cursor-none hover:text-[#F64040]">Event</a>
          </div>

          {/* Center logo */}
          <div className="flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-6 w-auto md:h-10 lg:h-12 object-contain"
            />
          </div>

          {/* Right links */}
          <div className="flex space-x-3 md:space-x-6 text-s md:text-base lg:text-lg">
            <a href="#gallery" className="cursor-target cursor-none hover:text-[#F64040]">Gallery</a>
            <a href="#contact" className="cursor-target cursor-none hover:text-[#F64040]">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
