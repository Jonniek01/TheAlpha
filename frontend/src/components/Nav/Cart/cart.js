import React, { useState } from "react";
import axios from 'axios'
// import CurrencyFormat from "react-currency-format";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import Nav from "../nav";
import { GrClose} from "react-icons/gr";
import Footer from "../../Footer/footer";
import "./cart.css";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const [pop, setPop]=useState('pop_none')
  const url='http://localhost:8083/orders'
  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCQxd1Zjci5oRHBpODNmTWJWdHV1OVp1RXNnU2xMMUNvWkNLZlowdTliMVNTVE9HLk5QRjdUYSIsInBob25lIjoiKzI1NDExIiwibG9jYXRpb24iOiJLZW5vbCIsImlhdCI6MTY1ODk0MTg1OSwiZXhwIjoxNjU4OTg1MDU5fQ.WKs0BfKOeDQSNl6523kaUsnXwoy9-R8J_2zNBAZjJeQ'
//   const user={
//     "id":8,
//     "name":"John",
//     "email":"john@gmail.com",
//     "phone":"+25411",
//     "location":"Kenol"
// }

  const user=undefined
  const config ={  
    headers: {
    Authorization: token
}}
  const [message, setMessage] = useState('')

  const handleOrder=()=>{
    setMessage('adding.....');

    axios.post(url, {
      "customer_id": user.id,
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
            <span className="count">
              {cart
                .map((item) => (item.quantity > 0 ? 1 : 0))
                .reduce((acc, item) => acc + item, 0)}{" "}
              Items
            </span>
          </div>
          <div className="item">
            {cart.map((item) => {
              return <CartProduct product={item} key={item.id} />;
            })}
          </div>
        </div>
        <div id="summary" className="order">
          <div className="items">
            <span className="total">Total Number of Items:</span>
            <span className="count">
              {cart
                .map((item) => item.quantity)
                .reduce((acc, item) => acc + item, 0)}
            </span>
          </div>

          <div className="Totals">
            <span>
              Total cost:{cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)}

            </span>
          </div>
          <div className="checkout">
            <button onClick={()=>{setPop('pop_show')}} className="checkout">
              Make order
            </button>
          </div>
        </div>
      </div>
      <div className={pop}>
        {
          user===undefined?
          <div>

            <p>Log in or sign up to place an order</p>
            <Link to='/login'><button>lOGIN</button></Link>
            <Link to={'/signup'}><button>Signup</button></Link>

          </div>
          :
          <div>
            <button onClick={()=>{setPop('pop_none')}}><GrClose/></button>
            <p>{message}</p>
            <button onClick={()=>{
              handleOrder()
            }}>Confirm order</button>
          </div>
        }
      </div>

      <Link to="/" className="home-link">
        <BsArrowLeft />
        Continue Shopping
      </Link>
    </div>
  );
}

export default Cart;
