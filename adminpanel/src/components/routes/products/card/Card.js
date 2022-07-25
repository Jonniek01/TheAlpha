import React from 'react'
import './Card.css'

function Card({product}) {
  return (
    <div className='products_bar'>
    <p className="id">{product.id}</p>
   <p className="name">{product.name}</p>
    <p className="price">{product.price}</p> 
    <p className="description">{product.description}</p>
    <p className="available"></p>
    </div>
 )}

export default Card;