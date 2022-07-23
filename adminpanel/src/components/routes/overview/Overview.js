import React from 'react'
import './Overview.css'
import Card from './card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Overview() {
 const limit=5
 const [error, setError]= useState('Loading orders');

  const [orders, setOrders] = useState([]);
  useEffect(
    ()=>{
      axios.get(`http://localhost:8083/orders/recent/:${limit}`).then(
        res=>{
          setOrders(res);
        }
      ).catch(err=>{
        setError("Internet Error")
      })
    });
  return (
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