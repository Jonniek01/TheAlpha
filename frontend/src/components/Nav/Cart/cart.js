import React, { useState } from "react";
import axios from 'axios'
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useNavigate } from 'react-router-dom';
import { GrClose} from "react-icons/gr";
import "./cart.css";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const [pop, setPop]=useState('pop_none')
  const navigate=useNavigate()

  const user =JSON.parse(localStorage.getItem("currentUser")) ;
  const token = JSON.parse(localStorage.getItem("currentToken"));
  // console.log(JSON.parse(T))

  // const token="t"
const total = () =>{
  cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)
}

  const url='http://localhost:8083/orders'
  const [message, setMessage] = useState('')

  const handleOrder=()=>{
    setMessage('adding.....');

    axios.post(url, {
      "customer_id": 1,
      "customer_name": user.name,
      "items": JSON.stringify(cart),
      "items_count": cart.length,
      "total": cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)
  
    }, {headers: {
      "Authorization":token
    }}).then((res)=>{
      console.log(res)
      setMessage('Your Order was added succesfuly');


    }

    )
    .catch(
      (err)=>{
        console.log(err);
        if(err.response.status===403){
          localStorage.clear();
          alert("Please log in again to continue")
          navigate('/login')            
        }
        setMessage('An error occured, try again')

      }
    )

  }
  return (
    <div>
      <div className="cart-container">
        <div className="content-cards">
          <div className="head">
            <h2 className="heading">Shopping Cart</h2>
            <h2 className="count">
              {cart
                .map((item) => (item.quantity > 0 ? 1 : 0))
                .reduce((acc, item) => acc + item, 0)}{" "}
              Items
            </h2>
          </div>
          <div>
            {cart.map((item) => {
              return <CartProduct product={item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="order">
          <div className="summary">
          <div className="items">
            <h3>Total Number of Items: {cart.map((item) => item.quantity).reduce((acc, item) => acc + item, 0)}
            </h3>
          </div>
          <div className="Totals">
            <h4>
              Total cost:{cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </h4>
          </div>
          <div className="checkout">
            <button onClick={()=>{setPop('pop_show')}} className="checkout">
              Make order
            </button>
          </div>
          </div>
          <div className="back-link">
          <Link to="/" className="home-link">
        <BsArrowLeft />
        Click to CONTINUE SHOPPING!
      </Link>
         </div>
        </div>
      </div>
      <div className={pop}>
        {
          user===null?
          <div className="Coder-message">
            <h2>Oops!! You are not logged in</h2>
            <h4>Log in or sign up to place an order</h4>
            <Link to='/login'><button className="B-login">lOGIN</button></Link>
            <Link to={'/signup'}><button className="B-signup">Signup</button></Link>

          </div>
          :
          <div className="Coder-message">
            <button onClick={()=>{setPop('pop_none')}}><GrClose/></button>
            <h3>Thanks for shopping with us!</h3>
            <p>Your are about to make an order<br/>
             of ...number.items costing ...order.cost</p>
            <h2>{message}</h2>
            <button className="Corder" onClick={()=>{
              handleOrder()
            }}>Confirm order</button>
          </div>
        }
      </div>
      
    </div>
  );
}

export default Cart;
