import StarRatings from 'react-star-ratings'
import {Link} from 'react-router-dom'


const  ProductCard =(props) => {

  return (
    <div key={props.product.id} className='product-card'>
      <Link to={`/${props.product.id}`}>
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
        </div>
        <button className='add-button' onClick={ () => {
            const navigate = () =>{
              const anchor = document.createElement('a');
              anchor.href = `${props.product.id}`;
              anchor.click();
            }
            navigate();
          }}>Add to Cart</button>
      </div>
      </Link>
    </div>
  )
}

export default ProductCard