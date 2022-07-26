import React from "react";
// import CurrencyFormat from "react-currency-format";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import Nav from "../nav";
import Footer from "../../Footer/footer";
import "./cart.css";

function Cart() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      <Nav />
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
              Total cost:
              {cart?.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </span>
          </div>
          <div className="checkout">
            <button className="checkout">
              <Link to ="/login">MaKe An order</Link>
            </button>
          </div>
        </div>
      </div>
      <Link to="/" className="home-link">
        <BsArrowLeft />
        Continue Shopping
      </Link>
      <Footer />
    </div>
  );
}

export default Cart;
