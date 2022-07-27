import React from  "react";
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
 
  return (
    <div className='carousel'>
    <Carousel fade interval={1000}>
      <Carousel.Item className="item">
        <img
          className="d-block w-100 "
          src="https://wallpapercave.com/wp/wp3646110.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Always</p>
          <h2>Dress well,</h2><p>Keep It</p>
          <h2>Simple,</h2>
          <p>But</p>
          <h2>Significant!</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://s1.1zoom.me/big0/815/Men_Black_background_Baseball_cap_Formal_shirt_572404_1280x853.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>"IF YOU CAN'T<br/> BE BETTER THAN YOUR COMPETITION<br/> JUST DRESS BETTER".</h3>
          <p>Anna Wintour</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="d-block w-100"
          src="https://st2.depositphotos.com/1020663/6497/i/450/depositphotos_64970919-stock-photo-fashionable-leather-mens-shoes-and.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>THE DIFFERENCE BETWEEN STYLE AND FASHION IS QUALITY</h3>
          <p>
            GET PRODUCTS THAT MAKE YOU STAND OUT AS THE ALPHA YOU ARE!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousels;