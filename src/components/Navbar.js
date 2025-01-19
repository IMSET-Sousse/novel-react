import React from "react";
import { Link } from "react-router-dom";
import "../styles/Style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/Mask.png" alt="Shadow Slave Logo" />
        <p>Shadow Slave</p>
      </div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/plot">Plot</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/author">Author</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
