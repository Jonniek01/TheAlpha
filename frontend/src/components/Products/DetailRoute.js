import React, {useEffect, useState} from 'react'
// import './ProductDetail.css'
import { useDispatch} from 'react-redux'
import axios from 'axios'
import {IoCartOutline} from 'react-icons/io5'
import { useParams } from 'react-router'
// import { productDetail } from '../../redux/Slices/detailsReducers'


function DetailRoute() {
    const {productId} = useParams()
    const [detail ,setDetail] =useState([])
    const dispatch = useDispatch()

    useEffect(() =>{
        axios.get(`https://my-json-server.typicode.com/felista47/json-server/products/${productId}`)
        .then((res) =>{
          
          setDetail(res.data)
    })
    
      }, [])

  return (
    <div className='detail'>
        <div className='product'>
            <div><img src={detail.image} alt='product display'/></div>
            <div className='detail-container'>
              <div className='detail-content'>
                <div>
                <h3>{detail.name}</h3>
                <p>{detail.description}</p>
                <p>Price:<div className='productPrice'>{detail.price}</div></p>
                </div>
                <div className='product-buttons'>
                  <button><IoCartOutline/>Add to cart</button>
                </div>
              </div>
            </div>
            
          
        </div>
    </div>
  )
}

export default DetailRoute
