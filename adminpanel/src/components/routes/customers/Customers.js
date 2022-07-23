import React from 'react'
import './Customers.css'
import Card from './card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Customers() {
  let page,limit;
 const [error, setError]= useState('Loading Customers');

  const [customers, setCustomers] = useState([]);
  useEffect(
    ()=>{
      axios.get(`http://localhost:8081/pg/${page}/price/${limit}`).then(
        res=>{
          setCustomers(res);
        }
      ).catch(err=>{
        setError("Internet Error")
      })
    });
  return (
    <div className='products'>
      <div className="head">
        <h2>Customers
        </h2>
        <span>
          <label htmlFor='page'>Search</label>
          <input type="text" value={page} className="page" />
        </span>
        <button>Add Customer</button>
        
      </div>
      <div className='products_bar'>
        <p className="id">Id</p>
       <p className="customer">name</p>
        <p className="count">email</p> 
        <p className="total">location</p>
        </div>
      <div className="contain">
          {
            
      customers.length>0?
            
      customers.map((order)=>{
             return <Card key={order.id} order={order}/>
            })
            :
            <div style={{color:'green'}} >{error}</div>

          }



        </div>

      </div>
  )
}

export default Customers