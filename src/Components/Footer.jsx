import React from "react";
import logo from "../assets/more/logo1.png";
import footerBg from "../assets/more/13.jpg";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(${footerBg})` }}
      className="mt-10 py-15 bg-cover"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto">
        <div className="space-y-2">
          <figure>
            <img src={logo} className="w-15" alt="logoImg" />
          </figure>
          <h2 className="text-3xl md:text-4xl text-[#331A15] rancho-regular">
            Espresso Emporium
          </h2>
          <p>
            Always ready to be your friend. Come & Contact with us to share your{" "}
            <br />
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-4 text-2xl md:text-3xl text-[#331A15] my-5">
            <FaFacebookSquare />
            <GrInstagram />
            <FaLinkedin />
          </div>
          <h2 className="text-3xl md:text-4xl text-[#331A15] rancho-regular">
            Get in Touch
          </h2>
          <div>
            <p className="flex items-center gap-2"><MdOutlineCall size={20}/>+88 01533 333 333</p>
            <p className="flex items-center gap-2"><MdOutlineEmail size={20}/>info@gmail.com</p>
            <p className="flex items-center gap-2"><IoLocationOutline size={20}/>72, Wall street, King Road, Dhaka</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="space-y-2 mt-5 md:mt-0 ">
            <h2 className="text-3xl md:text-4xl text-[#331A15] rancho-regular">
              Connect With Us
            </h2>
            <form className="space-y-2">
              <input type="text" className="input rounded border-none focus:outline-none" placeholder="Name" />
              <br />
              <input type="email" className="input rounded border-none focus:outline-none" placeholder="Email" />
              <br />
              <textarea cols={50} className="textarea rounded border-none focus:outline-none" rows={5} placeholder="Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
