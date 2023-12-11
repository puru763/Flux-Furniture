// Navbar.jsx
import React from "react";
import { NavLink } from 'react-router-dom';

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
      <NavLink to="/" exact activeClassName>FLUX FURNISHING</NavLink>
      </div>

      <div className="nav-links">
        <NavLink to="/product"  activeClassName="active">PRODUCTS</NavLink>
        <NavLink to="/about" activeClassName="active">ABOUT US</NavLink>
        <NavLink to="/contact" activeClassName="active">CONTACT US</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
