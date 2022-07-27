import React from "react";
// import CurrencyFormat from "react-currency-format";
import { GrClose} from "react-icons/gr";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemQuantity,
  minusItemQuantity,
  removeFromCart,
} from "../../../redux/Slices/cartReducer";

function CartProduct({ product }) {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { categories } = useSelector((state) => state.product);

  const cartItem = cart?.find((item) => item.id === product.id);
  const removeItems = () => {
    if (cartItem.quantity > 1) {
      dispatch(minusItemQuantity(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const removeItem = () => {
    dispatch(removeFromCart(product.id));
  };

  const addItems = () => {
    dispatch(addItemQuantity(product.id));
  };
  
  return (
    <div className="cart-item">
      <div className="contents">
        <div className="imgs">
          <img className="imgs" src={cartItem.image} alt={cartItem.name} />
         </div>
          <div className="detail">
            <span>
              {cartItem.category}
            </span>
		       <span>{cartItem.name}</span>
        </div>
        <div className="button">
          <AiOutlineMinus className="minus" onClick={removeItems} />
          <button className="count">{cartItem.quantity}</button>
          <AiOutlinePlus className="plus" onClick={addItems} />
        </div>
        <h4>${cartItem.price * cartItem.quantity}</h4>
        <p onClick={removeItem} className="remove">
          <GrClose/>
        </p>
      </div>
    </div>
  );
}

export default CartProduct;
