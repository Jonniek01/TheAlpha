import React, { useEffect, useState } from "react";
import "./productDetail.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router";
import {
	addToCart,
	addItemQuantity,
	minusItemQuantity,
	removeFromCart,
} from "../../redux/Slices/cartReducer";

function DetailRoute() {
  const { productId } = useParams();
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/${productId}`
      )
      .then((res) => {
        setDetail(res.data.products[0]);
      });
  }, []);

  const { cart} = useSelector((state) => state.cart);

	const cartItem = cart?.find((item) => item.id === detail.id);

	const removeItems = () => {
		if (cartItem?.quantity > 1) {
			dispatch(minusItemQuantity(detail.id));
		} else {
			dispatch(removeFromCart(detail.id));
		}
	};

	const addItems = () => {
		if (cartItem) {
			dispatch(addItemQuantity(detail.id));
		} else {
			dispatch(addToCart(detail));
		}
	};

  return (
    <div>
      <Nav />
      <div className="detail">
        <div className="product">
          <div className="productImage">
            <img src={detail.image} alt="product display" />
          </div>
          <div className="detail">
                <h1>{detail.name}</h1>
                <h3>{detail.category}</h3>
                <div className="desc-buttons">
                  <button className="button-1">DESCRIPTION</button>
                  <button className="button-2">SIZE & QUANTITY</button>
                </div>
                <div className="desc-details">
                <p>{detail.description}</p>
                <p>
                  Price:{detail.price}
                </p>
              <div className="add-buttons">
                <button onClick={addItems}>
                  <IoCartOutline/>
                  Add to cart
                </button>
                <button className="counter"></button>
              </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailRoute;
