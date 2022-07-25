import React, { useEffect, useState } from "react";
import "./productDetail.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router";

function DetailRoute() {
  const { productId } = useParams();
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/felista47/json-server/products/${productId}`
      )
      .then((res) => {
        setDetail(res.data);
      });
  }, []);

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
                <button>
                  <IoCartOutline/>
                  Add to cart
                </button>
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
