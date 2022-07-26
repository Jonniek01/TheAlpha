import React from 'react'
import './Orders.css'
import Card from './card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Orders() {
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiZW1haWwiOiJ0ZXN0MkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR0Ry5qMTdSeGRRS040R1hXVEZkajZ1U2NqbHJEeExGeXE0UVM3Ny9aWS55VDNQNmNvSHp4YSIsImlhdCI6MTY1ODgxNTQwMCwiZXhwIjoxNjU4ODU4NjAwfQ.rVF-i60v_L9qiaX7qcK73IhLew8lccTJEmXRINsJGZ4'
let config = {
  headers: {
    Authorization: token,
  }
}
let url=`http://localhost:8083/orders`

 const [error, setError]= useState('Loading orders');

  const [orders, setOrders] = useState([]);
  useEffect(
    ()=>{
      axios.get(url, config).then(
        res=>{
          // console.log(res.data.body)
          setOrders(res.data.body);
        }
      ).catch(err=>{
        console.log(err)
        setError("Internet Error")
      })
    });
  return (
    <div className='orders'>
      <div className="head">
        <h2>Orders</h2>
        <span>
          <label htmlFor="search"></label>
          <input type="text" placeholder='customers name' className="search" />
        </span>
        <select>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>

        </select>
        
      </div>
      <div className='order_bar'>
        <p className="id">Id</p>
       <p className="customer">Customer</p>
        <p className="count">Count</p> 
        <p className="total">Total</p>
        <p className="date">Date</p>
        </div>
      <div className="contain">
          {
            orders.length>0?
            orders.map((order)=>{
              // console.log(order);
             return <Card key={order.id} order={order}/>
            })
            :
            <div style={{color:'green'}}>{error}</div>

          }

        </div>

      </div>
  )
}

export default Orders