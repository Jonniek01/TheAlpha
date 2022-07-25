import React from  "react";
import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
 
  return (
    <div className='carousel'>
    <Carousel fade interval={1000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousels;