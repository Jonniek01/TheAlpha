import React from 'react'
import {RiArrowDropDownLine }from 'react-icons/ri'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import '../../css/nav.css'

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='nav-top'>
        <div className='logo'>
          <h2>The Alpha</h2>
        </div>
        <div className='search-bar'>
          <button>
            Categories
            <RiArrowDropDownLine />
          </button>
          <input type='text' placeholder='search' />
        </div>
        <div className='nav-icons'>
          <FaShoppingCart />
          <FaUserAlt />
        </div>
      </div>
      <div className='nav-bottom'>
        <ul>
          <li>
            Home
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
      <hr/>
    </div>
  )
}

export default Nav
