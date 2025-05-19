import React from "react";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
const Items = () => {
  const items = [
    {
      logo: icon1,
      name: "Awesome Aroma",
      des: "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      logo: icon2,
      name: "High Quality",
      des: "We served the coffee to you maintaining the best quality",
    },
    {
      logo: icon3,
      name: "Pure Grades",
      des: "The coffee is made of the green coffee beans which you will love",
    },
    {
      logo: icon4,
      name: "Proper Roasting",
      des: "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  return (
    <div className="bg-[#ECEAE3]">
      <div className="w-11/12 mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {items.map((item,index) => (
            <div key={index} className="place-items-start space-y-2">
              <img src={item.logo} alt="item.name" />
              <h3 className=" text-2xl md:text-4xl rancho-regular text-[#331A15]">{item.name}</h3>
              <p className="text-[#1B1A1A] raleway-ragular">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
