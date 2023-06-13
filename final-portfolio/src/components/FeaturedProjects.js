import React, { useRef, useState }from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Wrapper from '../assets/wrappers/FeaturedProjects';
// import required modules
import { Pagination, Navigation } from "swiper";



const FeaturedProjects = () => {
  return (
    <Wrapper className="projects-container">
        <div className="featured">
          <h2><span>Featured</span> projects</h2>
          <p>
            Created as part of the learning process, the <span>goal</span> was
            to build modern, responsive and useful web applications.
          </p>
        </div>
        <div>
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper coming"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </Wrapper>

  )
}

export default FeaturedProjects;