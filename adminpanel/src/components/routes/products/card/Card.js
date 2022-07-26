import React from 'react'
import './Card.css'

function Card({product}) {
  return (
    <div className='products_bar'>
    <p className="id">{product.id}</p>
   <p className="name">{product.name}</p>
   <img src={product.image} style={{height:'50px'}} alt="" />

    <p className="price">{product.price}</p> 
    <p className="description">{product.description}</p>
    <p className="available" style={product.image?{color:"#CFEF66"}:{color:"white"}}>
      {product.image?"Available":"Unavailable"}
      </p>
      <button className='edit'>Edit</button>
      <button className='remove'>Remove</button>
    </div>
 )}

export default Card;