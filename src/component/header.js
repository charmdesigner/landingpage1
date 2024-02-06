import React from "react";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="logo">
        <NavLink to="/home">Logo</NavLink>
      </div>
      <Navbar />
    </>
  );
};
export default Header;
