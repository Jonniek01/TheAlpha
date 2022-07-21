import React from 'react'
import './Stat.css'

function Stat({icon, head, ammount, increase}) {
  return (
    <div className='stat'>
      <div className="head">
        {icon}{head}

      </div>
      <div className="ammount">
        {ammount}
      </div>
      <div className="increase">
        {increase} % increse this week.
      </div>

    </div>
  )
}

export default Stat