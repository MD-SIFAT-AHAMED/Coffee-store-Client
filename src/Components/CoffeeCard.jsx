import React from "react";
import { FaRegEye } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { _id, photo, name, price, supplier } = coffee;
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#F5F4F1] rounded-xl space-x-5 space-y-5 p-9">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="space-y-1">
        <p className="raleway-ragular">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="raleway-ragular">
          <span className="font-semibold">Supplier: </span>
          {supplier}
        </p>
        <p className="raleway-ragular">
          <span className="font-semibold">price: </span> {price}
        </p>
      </div> 
      <div className="join space-x-4 md:space-x-0 md:space-y-4   md:join-vertical">
        <button className="btn join-item rounded-lg text-2xl  text-white bg-[#D2B48C]">
          <FaRegEye />
        </button>
        <button className="btn join-item rounded-lg text-2xl  text-white bg-[#3C393B]">
          <GoPencil />
        </button>
        <button className="btn join-item rounded-lg text-2xl text-white bg-[#EA4744]">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
