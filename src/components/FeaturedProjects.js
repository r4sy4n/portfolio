import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Wrapper from '../assets/wrappers/FeaturedProjects';
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Baccarat from './Baccarat';
import Buglift from './Buglift';
import Connectify from './Connectify';
import Portfolio from './Portfolio';
import Pokedex from './Pokedex';
import ClientPortfolio from './ClientPortfolio';
import Reveal from './Reveal';


const FeaturedProjects = () => {

  return (
    <Reveal>
      <Wrapper>
        <div className="projects-container">
          <div>
            <h2 className="featured"><span>Featured</span> projects</h2>
            <p>
              Created as part of the learning process, the <span>goal</span> was
              to build modern, responsive and useful web applications.
            </p>
            <br/>
            <p>To find out more details about a specific project, <span>please click on it</span>.</p>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={true}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide><Portfolio/></SwiperSlide>
              <SwiperSlide><Baccarat/></SwiperSlide>
              <SwiperSlide><Pokedex/></SwiperSlide>
              <SwiperSlide><Buglift/></SwiperSlide>
              <SwiperSlide><Connectify/></SwiperSlide>
              <SwiperSlide><ClientPortfolio/></SwiperSlide>
            </Swiper>
          </div>
        </div>
        </Wrapper>
      </Reveal>
  )
}

export default FeaturedProjects;