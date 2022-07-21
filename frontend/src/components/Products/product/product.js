import React from 'react'
import StarRatings from 'react-star-ratings'
import {Link} from 'react-router-dom'
const  ProductCard =(props) => {
  
  return (
    <div key={props.product.id} className='product-card'>
      <div className="image"> 
      <img src={props.product.image} alt =""/>
      
      </div>
      <div className="content">
        <h5>{props.product.name}</h5>
          <StarRatings
            className="movieRating"
            starRatedColor="white"
            starDimension='15px'
            numberOfStars={5}
            name="rating"
          />
        <div className="price">
          <h5>{props.product.price}</h5>
          <button className='add-button' onClick={ () => {
            const navigate = () =>{
              const anchor = document.createElement('a');
              anchor.href = 'DetailRoute';
              anchor.click();
            }
            navigate();
          }}>Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard