import React from "react";
import bannerImg from "../assets/more/3.png";
const Bennar = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="min-h-screen bg-cover bg-center "
    >
      <div className="w-11/12 min-h-screen mx-auto flex justify-end items-center">
        <div className="space-y-2 p-5">
          <h2 className="text-white text-4xl md:text-5xl rancho-regular">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="md:text-lg text-[#FFFFFF80]">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of <br /> every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] btn shadow-none text-[#242222] text-xl rancho-regular border-none outline-none">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bennar;
