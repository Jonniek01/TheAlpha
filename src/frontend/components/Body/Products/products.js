import React, { useEffect } from 'react'
import axios from 'axios';
import ProductCard from '../productCard'
import { useSelector, useDispatch } from 'react-redux';
import { changeProduct } from '../../../redux/Slices/productSlice';

const  Products =() => {
  const products =useSelector((state) =>state.products)
  const dispatch =useDispatch();
  const productDetail = axios.get (`https://my-json-server.typicode.com/felista47/json-server/products`);


  useEffect(()=>{
    dispatch(changeProduct([]));

    productDetail.then((res) =>{
      dispatch(changeProduct(res.data.results))
      console.log (res.data.results)
    })
  },[])


return(
  <div className='products-list'>
      <h2>{title}</h2>
      <div className='products'>
{
  products.map((product)=>(
    <ProductCard key={product.id} product ={product}/>
  ))
}
      </div>
    </div>
)
}
export default Products