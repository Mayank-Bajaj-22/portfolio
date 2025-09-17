import React from "react";

import { techStackList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] rounded-full flex-none">
      <img src={icon.imgPath} alt={icon.name} className="w-5 h-5" />
      <span className="text-white text-sm">{icon.name}</span>
    </div>
  );
};

const Marquee = () => {
  return (
    
    <div id="skills" className="md:my-22 my-10 relative">
      <hr className="md:mb-22 mb-10 w-[90%] ml-[5%] text-zinc-400" />
      <div className="w-[100dvw] overflow-hidden relative h-35">
        <h1 className="text-center text-4xl font-bold text-zinc-200">Tools that i have used</h1>
        <div className="marquee-box flex md:gap-12 gap-5">
          {techStackList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
          {/* Repeat for continuous scrolling effect */}
          {techStackList.map((icon, index) => (
            <LogoIcon key={`repeat-${index}`} icon={icon} />
          ))}
        </div>
      </div>

      {/*  */}
      <div className="w-[100dvw] overflow-hidden relative h-20">
        <div className="marquee-box-reverse flex md:gap-12 gap-2">
          {techStackList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
          {/* Repeat for continuous scrolling effect */}
          {techStackList.map((icon, index) => (
            <LogoIcon key={`repeat-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
