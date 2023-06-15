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
import {TbBrandJavascript, TbWorldWww} from 'react-icons/tb';
import {DiReact} from 'react-icons/di';
import {SiMongodb, SiExpress} from 'react-icons/si';
import {FaNode} from 'react-icons/fa';


const Projects = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const IconWithTooltip = ({ icon: Icon, tooltip }) => (
        <div className="tooltip">
            <Icon />
            <span className="tooltiptext">{tooltip}</span>
        </div>
    );

    const slideDetails = [
    {
      title: 'Baccarat',
      description: 'A Baccarat game powered by JavaScript, HTML and CSS. This game demonstrates my ability to apply JavaScript to handle game logic, user interactions, randomization, animations, and error handling. These skills showcase my proficiency in JavaScript and my ability to create interactive and engaging web applications.',
      tools: [
        <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />, 
        <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />, 
        <IconWithTooltip icon={TbBrandJavascript} tooltip="JavaScript" />, 
      ],
      links: [
            {
                icon: <AiOutlineGithub />,
                url: 'https://github.com/baccarat',
            },
            {
                icon: <TbWorldWww />,
                url: 'https://www.baccarat.com',
            },
        ],
    },
    {
      title: 'Buglift',
      description: 'Buglift is a web application designed to help teams track and manage software bugs and issues during the development process. It provides a centralized platform where team members can report, assign, track, and resolve bugs efficiently. The MERN stack forms the foundation of this application. Buglift demonstrates my proficiency in using the MERN stack to build a full-stack web application. It showcases my skills in designing and implementing the frontend using React.js, handling server-side logic and API endpoints with Express.js and Node.js, storing and retrieving data using MongoDB, and incorporating user authentication and authorization.',
      tools: [
        <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />, 
        <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />, 
        <IconWithTooltip icon={TbBrandJavascript} tooltip="JavaScript" />, 
        <IconWithTooltip icon={DiReact} tooltip="React" />,                
        <IconWithTooltip icon={FaNode} tooltip="Node.js" />,                
        <IconWithTooltip icon={SiMongodb} tooltip="MongoDB" />,               
        <IconWithTooltip icon={SiExpress} tooltip="Express" />
      ],
      links: [
            {
                icon: <AiOutlineGithub />,
                url: 'https://github.com/baccarat',
            },
            {
                icon: <TbWorldWww />,
                url: 'https://www.baccarat.com',
            },
        ],
    },
    {
      title: 'Connectify',
      description: 'Connectify is a web application designed to connect buyers, sellers, and suppliers in the context of dropshipping. It provides a platform where buyers can find products from various sellers and suppliers, place orders, and have them shipped directly to their customers. The MERN stack forms the foundation of this application. Connectify demonstrates my proficiency in using the MERN stack to build a full-stack dropshipping application. It showcases my skills in designing and implementing the frontend using React.js, handling server-side logic and API endpoints with Express.js and Node.js, storing and retrieving data using MongoDB, implementing user authentication and authorization, and potentially integrating payment gateways.',
      tools: [
        <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />, 
        <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />, 
        <IconWithTooltip icon={TbBrandJavascript} tooltip="JavaScript" />, 
        <IconWithTooltip icon={DiReact} tooltip="React" />,                
        <IconWithTooltip icon={FaNode} tooltip="Node.js" />,                
        <IconWithTooltip icon={SiMongodb} tooltip="MongoDB" />,               
        <IconWithTooltip icon={SiExpress} tooltip="Express" />
      ],
      links: [
            {
                icon: <AiOutlineGithub />,
                url: 'https://github.com/baccarat',
            },
            {
                icon: <TbWorldWww />,
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
        <div className='grid-container'>
            <div>
                <h2><strong>Projects</strong></h2>
                <h2 className='title'>{slideDetails[currentSlideIndex].title}</h2>
                <p>{slideDetails[currentSlideIndex].description}</p>
                <div className='tools'>
                    <div> 
                        <h3 className='subtitle'>Tools</h3>
                        <div className='icon'>{slideDetails[currentSlideIndex].tools}</div>
                    </div>
                    <div>
                        <h3 className='subtitle'>Links</h3>
                        <div className='icon'>
                        {slideDetails[currentSlideIndex].links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                        </a>
                        ))}
                        </div>
                    </div>
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