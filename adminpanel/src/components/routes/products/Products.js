import React from 'react'
import './Products.css'
import Card from './card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {
  let page = 1;
  let order='asc';
  let by='price';
  let limit=10;0
 const [error, setError]= useState('Loading Products');

  const [products, setProducts] = useState([]);
  useEffect(
    ()=>{
      axios.get(`http://localhost:8081/pg/${page}/${price}/${order}/${limit}`).then(
        res=>{
          setProducts(res.data.products);
        }
      ).catch(err=>{
        setError("Internet Error")
      })
    });
  return (
    <div className='overview'>
      <div className="head">
        <h2>products
        </h2>
        <span>
          <label htmlFor='page'>Page</label>
          <input type="number" value={page} className="page" />
        </span>
        <span>
          <label htmlFor="order">Order</label>
          <select id='order'>
          <option value={'asc'}>Ascending</option>
          <option value={'desc'}>Descending</option>


        </select>


        </span>
        <span>
        <label htmlFor='limit'>Limit</label>
        <select id='limit'>
          <option value={5}>5</option>
          <option value={5}>10</option>
          <option value={5}>15</option>

        </select>


        </span>
        
      </div>
      <div className='products_bar'>
        <p className="id">Id</p>
       <p className="customer">name</p>
        <p className="count">Price</p> 
        <p className="total">Description</p>
        <p className="date">available</p>
        </div>
      <div className="contain">
          {
            
      products.length>0?
            
      products.map((product)=>{
             return <Card key={product.id} product={product}/>
            })
            :
            <div style={{color:'green'}}>{error}</div>

          }



        </div>

      </div>
  )
}

export default Products