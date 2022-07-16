import './carusel.css'
export default function CarouselItem({ slide }) {
    return (
      <div className="carousel-item">
        <img src={slide} />
        <h4>shop with us!</h4>
      </div> 
    )
}