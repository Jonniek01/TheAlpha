import React from 'react'

const  ProductCard =({
  id,
  name,
  image,
  description,
  price,
  category
}
  =props) => {
  
  return (
    <div key={id} className='product-card'>
      <div className="image"> 
      <img src={image} alt =""/>
      
      </div>
      <div className="content">
        <h5>{name}</h5>
        <p>{description}</p>
        <div className="price">
          <h5>{category}</h5>
          <h5>$:{price}</h5>
        </div>
      </div>

    </div>
  )
}

export default ProductCard