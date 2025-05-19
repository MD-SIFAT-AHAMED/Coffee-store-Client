import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import ScrollTop from "../Components/ScrollTop";

const MainLayout = () => {
  return (
    <>
      <ScrollTop/>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
