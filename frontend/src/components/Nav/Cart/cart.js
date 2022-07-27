import React, { useState } from "react";
import axios from 'axios'
// import CurrencyFormat from "react-currency-format";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useNavigate } from 'react-router-dom';

import Nav from "../nav";
import { GrClose} from "react-icons/gr";
import Footer from "../../Footer/footer";
import "./cart.css";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const [pop, setPop]=useState('pop_none')
  const navigate=useNavigate()

  const user =JSON.parse(localStorage.getItem("currentUser")) ;
  const token = JSON.parse(localStorage.getItem("currentToken"));
  // console.log(JSON.parse(T))

  // const token="t"


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
          user===null?
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
        CONTINUE SHOPPING
      </Link>
    </div>
  );
}

export default Cart;
