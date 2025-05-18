import React from "react";
import navbarBg from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";
const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${navbarBg})`,
        backgroundSize: "cover",
      }}
    >
      <nav className="w-11/12 mx-auto">
        <div className="flex justify-center items-center py-2">
          <img src={logo} className="w-15 md:w-20" alt="logo" />
          <h2 className="text-3xl md:text-6xl text-white rancho-regular">
            Espresso Emporium
          </h2>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
