import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import detailsBg from "../assets/more/11 3.png";
const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { name, quantity, supplier, Taste, price, details, photo } = coffee;
  return (
    <div
      style={{ backgroundImage: `url(${detailsBg})` }}
      className="min-h-screen bg-cover"
    >
      <div className="w-11/12 mx-auto py-5">
        <Link
          to={"/"}
          className="text-2xl rancho-regular flex items-center w-fit gap-2"
        >
          <FaArrowLeft />
          Back to home
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F4F3F0] rounded-xl p-20 mt-9">
          <div className="place-items-center">
            <img src={photo} alt={name} />
          </div>
          <div className="space-y-1 mt-5 md:pt-0">
            <h3 className="text-[#331A15] text-4xl rancho-regular">Niceties</h3>
            <div className="raleway-ragular">
                <p>
              <span className="font-semibold">Name: </span>
              {name}
            </p>
            <p>
              <span className="font-semibold">Quantity: </span>
              {quantity}
            </p>
            <p>
              <span className="font-semibold">Supplier: </span>
              {supplier}
            </p>
            <p>
              <span className="font-semibold">Price: </span>
              {price}
            </p>
            <p>
              <span className="font-semibold">details: </span>
              {details}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
