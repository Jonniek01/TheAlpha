import React ,{useState}from "react";
import { useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="Nav">
      <div className="nav-top">
        <div className="logo">
          <Link to={`/`} className='logo'>TheAlpha</Link>
        </div>
        <div className="search-bar">
          <button className="Categories">
            All Categories
            <RiArrowDropDownLine />
          </button>
          <input type="text" placeholder="search" />
          <button className="search-icon">
            <BsSearch/>
          </button>
        </div>
        <div className="nav-icons">
          <div className="cart">
          <Link to={`/cart`} className='cart-icon'>
          <FaShoppingCart/>
          </Link>
          <h5>{cart
                .map((item) => (item.quantity > 0 ? 1 : 0))
                .reduce((acc, item) => acc + item, 0)}{" "}
                </h5>
        </div>
          <div className="cart">
          <Link to={`/login`} className='cart-icon'>
          <FaUserAlt />
          </Link>
          </div>
          
        </div>
      </div>
      <div className="nav-bottom">
        <button className="side-menu">ALL Departments</button>
        <ul>
          <Link to={`/`} className='links'>Home
          </Link>
          <Link to={'/'}  className='links'>
            About Us
          </Link>
          <Link to={'/'}  className='links'>
            Blog
          </Link>
          <Link to={'/'}  className='links'>
            Contact
          </Link>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
