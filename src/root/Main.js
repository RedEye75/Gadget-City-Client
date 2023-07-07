import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      {/* <div className="mt-10"> */}
      <Outlet></Outlet>
      {/* </div> */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
