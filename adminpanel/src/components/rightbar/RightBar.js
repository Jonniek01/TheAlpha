import React from 'react'
import './Rightbar.css'
import Bar from './bar/Bar'

function RightBar() {
  return (
    <div className='right_bar'>
      <Bar head={"TOTAL CUSTOMERS"} count={1050}/>
      <Bar head={"TOTAL PRODUCTS"} count={10}/>

      </div>
  )
}

export default RightBar