import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Overview from '../routes/overview/Overview';
import Customers from '../routes/customers/Customers';
import Products from '../routes/products/Products';
import Orders from '../routes/orders/Orders';


function Content() {
  return (
    <div className='content'>
             <Routes>
          <Route path='/' element={<Overview />} ></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/customers' element={<Customers/>} ></Route>
          <Route path='/orders' element={<Orders/>}></Route>
        </Routes>

    </div>
  )
}

export default Content