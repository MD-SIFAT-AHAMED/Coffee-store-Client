import React from "react";
import cup10 from "../assets/cups/Rectangle 9.png";
import cup11 from "../assets/cups/Rectangle 10.png";
import cup12 from "../assets/cups/Rectangle 11.png";
import cup13 from "../assets/cups/Rectangle 12.png";
import cup14 from "../assets/cups/Rectangle 13.png";
import cup15 from "../assets/cups/Rectangle 14.png";
import cup16 from "../assets/cups/Rectangle 15.png";
import cup17 from "../assets/cups/Rectangle 16.png";
const FollowOn = () => {
  const cups = [
    { img: cup10 },
    { img: cup11 },
    { img: cup12 },
    { img: cup13 },
    { img: cup14 },
    { img: cup15 },
    { img: cup16 },
    { img: cup17 },
  ];
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-5xl text-center text-[#331A15] rancho-regular py-10">
        Follow on Instagram
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {cups.map((cup,index) => (
          <figure key={index}>
            <img src={cup.img} alt="" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default FollowOn;
