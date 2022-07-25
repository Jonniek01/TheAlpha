import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="nav-top">
        <div className="logo">
          <h2>The Alpha</h2>
        </div>
        <div className="search-bar">
          <button className="Categories">
            All Categories
            <RiArrowDropDownLine />
          </button>
          <input type="text" placeholder="search" />
          <button className="search-icon">
            <BsSearch />
          </button>
        </div>
        <div className="nav-icons">
          <Link to={`/cart`}>
          <FaShoppingCart/>
          </Link>
          <FaUserAlt />
        </div>
      </div>
      <div className="nav-bottom">
        <button className="side-menu">ALL Departments</button>
        <ul>
          <li>Home
            <RiArrowDropDownLine />
          </li>
          <li>
            About Us
            <RiArrowDropDownLine />
          </li>
          <li>
            Blog
            <RiArrowDropDownLine />
          </li>
          <li>
            Contact
            <RiArrowDropDownLine />
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
