import React from 'react'
import './Card.css'

function Card({customer}) {
  return (
    <div className='customers_bar'>
    <p className="id">{customer.id}</p>
   <p className="name">{customer.name}</p>
    <p className="email">{customer.email}</p> 
    <p className="phone">{customer.phone}</p>
    <p className="location">{customer.location}</p>

    </div>
)}

export default Card