import { useEffect, useState } from 'react'
import Swiper from 'swiper';

const PhotoCarousal = () => {

    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
      if (!swiper) {
        setSwiper(
          new Swiper(".tour-places .swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            },
          })
        );
      }
    }, [swiper]);

  return (
    <div className="tour-places">
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* Add your carousel slides here */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>

  </div>
  )
}

export default PhotoCarousal