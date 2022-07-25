import React from 'react'
import './Card.css'

function Card({order}) {
  return (
    <div className='overview_card'>
    <p className="id">{order.id}</p>
   <p className="customer">{order.customer_name}</p>
    <p className="count">{order.items_count}</p> 
    <p className="total">{order.total}</p>
    <p className="date">{order.order_date}</p>
    </div>  )
}

export default Card