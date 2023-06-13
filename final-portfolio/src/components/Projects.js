import React, { useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Wrapper from '../assets/wrappers/Projects';
// import required modules
import { Pagination, Navigation } from "swiper";
import Baccarat from './Baccarat';
import Buglift from './Buglift';
import Connectify from './Connectify';
import {AiOutlineHtml5, AiOutlineGithub} from 'react-icons/ai';
import {FaCss3Alt} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {GiWorld} from 'react-icons/gi';

const Projects = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const slideDetails = [
    {
      title: 'Baccarat',
      description: 'Slide details for Baccarat',
      tools: [<AiOutlineHtml5/>, <FaCss3Alt/>, <TbBrandJavascript/>],
      links: [
            {
                icon: <AiOutlineGithub />,
                url: 'https://github.com/baccarat',
            },
            {
                icon: <GiWorld />,
                url: 'https://www.baccarat.com',
            },
        ],
    },
    {
      title: 'Buglift',
      description: 'Slide details for Buglift',
      tools: [<AiOutlineHtml5/>, <FaCss3Alt/>, <TbBrandJavascript/>],
      links: [
            {
                icon: <AiOutlineGithub />,
                url: 'https://github.com/baccarat',
            },
            {
                icon: <GiWorld />,
                url: 'https://www.baccarat.com',
            },
        ],
    },
    {
      title: 'Connectify',
      description: 'Slide details for Connectify',
      tools: [<AiOutlineHtml5/>, <FaCss3Alt/>, <TbBrandJavascript/>],
      links: [
            {
                icon: <AiOutlineGithub />,
                url: 'https://github.com/baccarat',
            },
            {
                icon: <GiWorld />,
                url: 'https://www.baccarat.com',
            },
        ],
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  return (
    <Wrapper id='#projects'>
        <div>
            <div>
                <h2>{slideDetails[currentSlideIndex].title}</h2>
                <p>{slideDetails[currentSlideIndex].description}</p>
                <div>
                    <h3>Tools</h3>
                    {slideDetails[currentSlideIndex].tools}
                </div>
                <div>
                    <h3>Links</h3>
                    {slideDetails[currentSlideIndex].links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </a>
                    ))}
                </div>
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
                    className="mySwiper"
                    onSlideChange={handleSlideChange}
                    >
                    <SwiperSlide><Baccarat/></SwiperSlide>
                    <SwiperSlide><Buglift/></SwiperSlide>
                    <SwiperSlide><Connectify/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    </Wrapper>
  )
}

export default Projects;