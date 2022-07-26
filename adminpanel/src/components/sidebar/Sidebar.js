import React from 'react'
import './Sidebar.css'
import {SiSimpleanalytics } from 'react-icons/si';
import { BsFillHandbagFill} from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { BiBookAlt } from 'react-icons/bi';
import { TbLogout } from 'react-icons/tb';



import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='side_bar'>
      <div className="top">
        <p className="logo highlight">TheAlpha</p>

      </div>
      <div className="middle">
        <Link className='link' to='/'><SiSimpleanalytics className='icon'/><span>Overview</span></Link>
        <Link className='link'  to='products'><BsFillHandbagFill className='icon'/><span>Products</span></Link>
        <Link className='link'  to='customers'><BsPeopleFill className='icon'/><span>Customers</span></Link>
        <Link className='link'  to='orders'><BiBookAlt className='icon'/><span>Orders</span></Link>

        
      </div>
      <div className="bottom">
        <p className='link'><TbLogout/><span></span>Log out</p>

      </div>
    </div>
  )
}

export default Sidebar