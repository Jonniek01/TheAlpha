import React from "react";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
          ></button>
          <button
            type="button"
          ></button>
          <button
            type="button"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item c-i-one active">
            <div className="carousel-details">
                <h2 className="my-5 text-white">Shop With us at an affordable price</h2>
                <button className="btn btn-primary">View our products</button>
            </div>
          </div>
          <div className="carousel-item c-i-two">
          <div className="carousel-details">
                <h2 className="my-5 text-white">Discounts on Delivery</h2>
                <button className="btn btn-success">Shop Now</button>
            </div>
          </div>
          <div className="carousel-item c-i-three">
          <div className="carousel-details">
                <h2 className="my-5 text-white">Enjoy an Elegant Look</h2>
                <button className="btn btn-primary">Get your dream look!!</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
        >
          <span className="carousel-control-prev-icon" ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
        >
          <span className="carousel-control-next-icon" ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
