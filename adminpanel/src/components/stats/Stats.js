import React from 'react'
import Stat from './stat/Stat'
import './Stats.css'
import {FiShoppingBag} from 'react-icons/fi'

function Stats() {
  return (
    <div className='stats'>
      <div className="stat_one">
      <Stat head={"Total Sales"}
            icon={<FiShoppingBag/>}
            ammount={"$ 341274"}
            increase={+13}
      />
      </div>
    <div className="stat_two">
    <Stat head={"Total Orders"}
            icon={<FiShoppingBag/>}
            ammount={412}
            increase={+5}
      />
    </div>

    </div>
  )
}

export default Stats