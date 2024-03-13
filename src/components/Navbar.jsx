import React from "react";
import Button from "@mui/material/Button";

import "../styles/Navbar.css";
import imageLogo from "../assets/Logo.png";

import { MdOutlineDiscount } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navber">
      <div className="container-navbar">
        <div className="boxlogo">
          <img src={imageLogo} />
          <h3>Counter Visit.</h3>
        </div>
        <Button>to Office</Button>
      </div>
    </div>
  );
};

export default Navbar;
