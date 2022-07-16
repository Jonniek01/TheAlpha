import React from "react";
import { useState, useEffect } from "react";
import './carusel.css'
import CarouselItem from './carouselitem'

export default function Carousel({ slides }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const slideInterval = setInterval(() => {

            setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)

        }, 3000)

        return () => clearInterval(slideInterval)
    }, [])


  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(${-currentSlide * 100}%)`}}>
        {slides.map((slide, index) => (
          <CarouselItem slide={slide} key={index} />
        ))}
      </div>
    </div>
  );
}
