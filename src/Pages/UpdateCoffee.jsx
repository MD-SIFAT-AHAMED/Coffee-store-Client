import React from "react";
import addsectionBg from "../assets/more/11 3.png";
import { Link, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
  const { id } = useParams();

  const handlerUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());

    // Send data to database
    fetch(`http://localhost:5000/coffees/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Update Coffe information",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div
      style={{ backgroundImage: `url(${addsectionBg})` }}
      className="bg-cover "
    >
      <div className="w-11/12 mx-auto py-5">
        <Link
          to={"/"}
          className="text-2xl rancho-regular flex items-center w-fit gap-2"
        >
          <FaArrowLeft />
          Back to home
        </Link>
        <div className="bg-[#F4F3F0] my-4 py-20">
          <div className="space-y-3 py-5">
            <h3 className="text-center rancho-regular text-5xl text-[#374151]">
              Update Coffee
            </h3>
            <p className="text-[18px] md:w-5/7 mx-auto text-center text-[#1B1A1A70]">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handlerUpdateCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-[80px] md:px-[120px]">
              <fieldset>
                <legend className="text-lg">Name</legend>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  name="name"
                  placeholder="Enter coffee name"
                />
              </fieldset>
              <fieldset>
                <legend className="text-lg">Quantity</legend>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  name="quantity"
                  placeholder="quantity"
                />
              </fieldset>
              <fieldset>
                <legend className="text-lg">Supplier</legend>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  name="supplier"
                  placeholder="supplier"
                />
              </fieldset>
              <fieldset>
                <legend className="text-lg">Taste</legend>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  name="Taste"
                  placeholder="taste"
                />
              </fieldset>
              <fieldset>
                <legend className="text-lg">Price</legend>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  name="price"
                  placeholder="price"
                />
              </fieldset>
              <fieldset>
                <legend className="text-lg">Details</legend>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  name="details"
                  placeholder="details"
                />
              </fieldset>
            </div>
            <div className="space-y-3 mt-4 px-[80px] md:px-[120px]">
              <fieldset>
                <legend className="text-lg">Photo URL</legend>
                <input
                  type="text"
                  className="input w-full focus:outline-none"
                  name="photo"
                  placeholder="photo"
                />
              </fieldset>
              <input
                type="submit"
                value="Update Coffee"
                className="btn text-xl w-full rancho-regular bg-[#D2B48C] hover:border-[#331A15]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
