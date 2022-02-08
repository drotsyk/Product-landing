import React,{useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from './Card' 
import 'swiper/swiper-bundle.css'
import '../Styles/Reviews.css'

export const Reviews = () => {
  const [size, setSize] = useState(null)

  useEffect(() => {
    window.addEventListener('resize', windowSize)
    windowSize()
    return () => {
      window.removeEventListener('resize', windowSize);
    };
  }, []);

  function windowSize () {
    setSize(window.innerWidth)
  }
  
  return (
    <div className="reviews">
      <h2 className="reviews__title">Reviews</h2>
      <div className="reviews__subtitle">Nam libero tempore, cum soluta nobis est </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={(size >= 1100) ? 3 :  (size >= 767) ? 2 : 1}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
