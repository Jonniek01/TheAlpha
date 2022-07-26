import React from 'react'
import './Customers.css'
import Card from './card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Customers() {
  let page=1;
  let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyIiwiZW1haWwiOiJ0ZXN0MkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR0Ry5qMTdSeGRRS040R1hXVEZkajZ1U2NqbHJEeExGeXE0UVM3Ny9aWS55VDNQNmNvSHp4YSIsImlhdCI6MTY1ODgxNTQwMCwiZXhwIjoxNjU4ODU4NjAwfQ.rVF-i60v_L9qiaX7qcK73IhLew8lccTJEmXRINsJGZ4'
  let config = {
    headers: {
      Authorization: token,
    }
  }
  let url=`http://localhost:8082/all`
  
   const [error, setError]= useState('Loading customers');
  
    const [customers, setCustomers] = useState([]);
    useEffect(
      ()=>{
        axios.get(url, config).then(
          res=>{
            setCustomers(res.data.body);
          }
        ).catch(err=>{
          console.log(err)
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
      <div className='customers_bar'>
        <p className="id">Id</p>
       <p className="name">name</p>
        <p className="email">email</p> 
        <p className="phone">phone</p>
        <p className="location">location</p>

        </div>
      <div className="contain">
          {
            
      customers.length>0?
            
      customers.map((customer)=>{
             return <Card key={customer.id} customer={customer}/>
            })
            :
            <div style={{color:'green'}} >{error}</div>

          }



        </div>

      </div>
  )
}

export default Customers