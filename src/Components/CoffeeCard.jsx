import React from "react";
import { FaRegEye } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, photo, name, price, supplier } = coffee;

  const handlerCoffeeDelate =(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "Delete this Coffee!!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your Coffee has been deleted.",
      icon: "success"
    });
  }
});
  }
  return (
    // flex flex-col md:flex-row justify-center items-center p-9
    <div className="grid md:grid-cols-6 place-items-center bg-[#F5F4F1] rounded-xl space-x-5 space-y-5 p-9">
      <figure className="md:col-span-2 ">
        <img src={photo} alt={name} />
      </figure>
      <div className="md:col-span-3 space-y-1">
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
      <div className="md:col-span-1 join space-x-4 md:space-y-4 md:join-vertical">
        <Link to={`/coffeDetails/${_id}`}>
          <button className="btn join-item rounded-lg text-xl md:text-2xl  text-white bg-[#D2B48C]">
            <FaRegEye />
          </button>
        </Link>
        <Link to={`/coffeeUpdate/${_id}`}>
          <button className="btn join-item rounded-lg text-xl md:text-2xl  text-white bg-[#3C393B]">
            <GoPencil />
          </button>
        </Link>
        <button onClick={()=>handlerCoffeeDelate(_id)} className="btn w-fit join-item rounded-lg text-xl md:text-2xl text-white bg-[#EA4744]">
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
