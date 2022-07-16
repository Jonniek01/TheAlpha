import React from 'react'
import Carousel from './carousel/Carousel'
import {Outlet} from 'react-router-dom'

const body = () => {
  return (
    <div>
      <Carousel/>
     <Outlet/>
    </div>
  )
}

export default body;