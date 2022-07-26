import React from "react";
// import CurrencyFormat from "react-currency-format";
import { TbLetterX } from "react-icons/tb";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemQuantity,
  minusItemQuantity,
  removeFromCart,
} from "../../../redux/Slices/cartReducer";

function CartProduct({ product }) {
  console.log("heloooo cart/");

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  // const { categories } = useSelector((state) => state.product);

  const cartItem = cart?.find((item) => item.id === product.id);
  console.log(cartItem);
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

          {/* <div className="detail">
            <span>
              {/* {categories?.find((category) => category.categoryId === cartItem?.categoryId)?.categoryName} */}
            
		  <span>{cartItem.name}</span>

        </div>
        <div className="button">
          <AiOutlineMinus className="minus" onClick={removeItems} />
          <p className="count">{cartItem.quantity}</p>
          <AiOutlinePlus className="plus" onClick={addItems} />
        </div>
        <p onClick={removeItem} className="remove">
          <TbLetterX />
        </p>
      </div>
      <span className="amount">
        {/* <CurrencyFormat value={cartItem?.price} displayType={"text"} thousandSeparator={true} prefix={"Ksh "} /> */}
      </span>
      <span className="total">
        {/* <CurrencyFormat
					value={cartItem?.price * cartItem?.quantity}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"Ksh "}
				/> */}
      </span>
    </div>
  );
}

export default CartProduct;
