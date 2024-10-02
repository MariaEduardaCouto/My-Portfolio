import { t } from "i18next";
import React, { useState } from "react";
import ArrowUp from "../../assets/svg/arrowUp.svg";
import ArrowUpWhite from "../../assets/svg/arrowUpWhite.svg";

export default function Button({ text }) {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <button className="relative px-6 py-2 flex flex-row justify-center items-center rounded-full border-[#8B00FF] bg-white border hover:text-white hover:bg-[#8B00FF] transition-colors duration-300 ease-in-out"
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        <img
          src={isHovered ? ArrowUpWhite : ArrowUp}
          alt="Arrow Up"
          className=" ml-2  w-8 h-8 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
      <div className="absolute inset-0 rounded-full border-1 border-transparent animate-spin-glow pointer-events-none"></div>  
      </button>
      
    </div>
  );
}
