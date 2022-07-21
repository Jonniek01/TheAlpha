import React, { useEffect } from "react";
import StarRatings from "react-star-ratings";
import "../css/Detail.css";
import Nav from "../components/Nav/nav";
import Footer from "../components/Footer/footer";
const DetailRoute = () => {
  const URL = [
    "https://cdn.shopify.com/s/files/1/0186/1574/products/DH1349-001-PHCBH000-2000_800x.jpg?v=1648649754",
  ];

  return (
    <div>
      <Nav />
      <div className="ProductDetails">
        <div className="productImage">
          <img src={URL} alt="img" />
          <hr />
          <StarRatings
            className="movieRating"
            starRatedColor="white"
            starDimension="30px"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div className="detail">
          <h1>Nike Running SNEAKERS</h1>
          <h3>Men's Shoe</h3>
          <div className="desc-details">
        <div className="desc-buttons">
        <button>DESCRIPTION</button>
            <button>SiZE & QUANTITY</button>
        </div>
          <ul>
              <li>Type: Running Shoes</li>
              <li>Material: PU+Rubber</li>
              <li>Upper Material: Double Layer Breathable Mesh +TPU</li>
              <li>Outsole Material: Rubber +MD</li>
              <li>Insole Material: EVA</li>
              <li>Lining Material: Mesh</li>
            </ul>
            <button className="button-1">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailRoute;
