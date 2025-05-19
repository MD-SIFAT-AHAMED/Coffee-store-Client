import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import productBg from "../assets/more/1.png";
import { BsCup } from "react-icons/bs";
import CoffeeCard from "./CoffeeCard";

const OurProduct = () => {
    const initialCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(initialCoffees);
    
  return (
    <div
      style={{ backgroundImage: `url(${productBg})` }}
      className="bg-cover min-h-screen"
    >
      <div className="w-11/12 mx-auto my-10">
        <div className="place-items-center space-y-4 rancho-regular">
          <h3 className="text-5xl text-[#331A15] ">
            Our Popular Products
          </h3>
          <Link to={"/addCoffee"} className="text-xl flex items-center gap-2 px-2 border border-[#331A15] bg-[#E3B577]">
          <BsCup />
            Add Coffee
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {
                coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
