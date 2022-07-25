import React, { useEffect } from 'react'
import axios from 'axios';
import './products.css'
import ProductCard from './product/product'
import { useSelector, useDispatch } from 'react-redux';
import { changeProduct } from '../../redux/Slices/productSlice'

const  Products =() => {
  const products =useSelector((state) =>state.products)
  const dispatch =useDispatch();
  const productDetail = axios.get (`http://localhost:8081/all/price/asc`);

console.log(products)
  useEffect(()=>{
    dispatch(changeProduct([]));

    productDetail.then((res) =>{
      dispatch(changeProduct(res.data.products))
    })
  },[])


return(
  <div className='products-list'>
      <h2>All Products</h2>
      <div className='products'>
{
  products?products.map((product)=>(< ProductCard key={product.id} product={product}/>)):"LOADING..."
}
      </div>
    </div>
)
}
export default Products