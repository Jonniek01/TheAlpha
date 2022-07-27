import React, { useEffect } from 'react'
import axios from 'axios';
import './products.css'
import ProductCard from './product'
import { useSelector, useDispatch } from 'react-redux';
import { changeProduct } from '../../redux/Slices/productSlice'

const  Products =() => {
  const products =useSelector((state) =>state.products)
  const dispatch =useDispatch();
  const productDetail = axios.get (`http://localhost:8081/all/price/asc`);

  useEffect(()=>{
    dispatch(changeProduct([]));

    productDetail.then((res) =>{
      dispatch(changeProduct(res.data.products))
    })
  },[])


return(
  <div className='products-list'>
      <h1>Our Latest Outfits</h1>
      <div className='filter'>
          <h4>Filter For A Products</h4>
          <input className='search-bar' type="text" placeholder="search" />
        </div>
      <div className='products'>
{
  products?products.map((product)=>(< ProductCard key={product.id} product={product}/>)):"LOADING..."
}
      </div>
    </div>
)
}
export default Products