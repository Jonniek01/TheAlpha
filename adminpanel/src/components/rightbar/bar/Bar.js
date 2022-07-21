import React from 'react'
import './Bar.css'

function Bar({head, count}) {
  return (
    <div className='bar'>
        <h3>{head}</h3>
        <p className="count">{count}</p>
    </div>
  )
}

export default Bar