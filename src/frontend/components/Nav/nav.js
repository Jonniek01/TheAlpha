import React from 'react'
import './nav.css'
import Cart from './cart/cart'

const Nav =()=> {
  return (
    <div className='navbar'>
      <div className="nav-top">

        {/* searchbar */}

      <div className="searchbar">
        <input className='search' type='text' placeholder='search'/>
      </div>

      {/* logo */}
      <div className="logo">The Alpha</div>

      {/* navicons */}
      <div className="carticon"></div>
        <cart/>
        </div>
      <div>
          <ul className='nav-bottom'>
        <li className='links'>Home</li>
        <li className='links'>Categories</li>
        <li className='links'>Shop</li>
        <li className='links'>links</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;