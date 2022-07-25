import React from 'react'
import './Overview.css'
import Card from './card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Overview() {
  let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiZW1haWwiOiJ0ZXN0MkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR0Ry5qMTdSeGRRS040R1hXVEZkajZ1U2NqbHJEeExGeXE0UVM3Ny9aWS55VDNQNmNvSHp4YSIsImlhdCI6MTY1ODY0Mjk1MSwiZXhwIjoxNjU4Njg2MTUxfQ.XG8R4JMjW5buuSzgpUmavZIZh6QdThEhTc6Vqnkk6AM'
  let config = {
    headers: {
      Authorization: token,
    }
  }
  let url=`http://localhost:8083/orders/recent/10`
  
   const [error, setError]= useState('Loading recent orders');
  
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
      });  return (
    <div className='overview'>
      <div className="head">
        <h2>Recent orders</h2>
        <select>
          <option value={5}>5</option>
          <option value={5}>10</option>
          <option value={5}>15</option>

        </select>
        
      </div>
      <div className='overview_bar'>
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
             return <Card key={order.id} order={order}/>
            })
            :
            <div style={{color:'green'}}>{error}</div>

          }



        </div>

      </div>
  )
}

export default Overview