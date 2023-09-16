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
import Portfolio from './Portfolio';
import ClientPortfolio from './ClientPortfolio';
import {AiOutlineHtml5, AiOutlineGithub} from 'react-icons/ai';
import {FaCss3Alt} from 'react-icons/fa';
import {TbBrandJavascript, TbWorldWww, TbApi, TbBrandVite} from 'react-icons/tb';
import {DiReact} from 'react-icons/di';
import {SiMongodb, SiExpress, SiStyledcomponents} from 'react-icons/si';
import {FaNode, FaBootstrap} from 'react-icons/fa';
import Reveal from './Reveal';
import Pokedex from './Pokedex';
import Ecommerce from './Ecommerce';

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
            title: 'Ecommerce App',
            description: 'This e-commerce application is a dynamic online platform where users can browse, search for, and purchase a variety of products. It leverages modern web technologies and a full-stack JavaScript environment to provide a seamless shopping experience. This e-commerce application showcases my skills in manipulating APIs, creating a responsive and efficient frontend with Vite, building a robust backend with Express.js, and managing data with MongoDB. It also highlights my expertise in user authentication, cart management, error handling, and quality assurance, all of which are essential for the success of an e-commerce platform. My ability to create a seamless shopping experience for users is a testament to my web development capabilities.',
            tools: [
                <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />, 
                <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />, 
                <IconWithTooltip icon={TbBrandJavascript} tooltip="JavaScript" />, 
                <IconWithTooltip icon={DiReact} tooltip="React" />,                
                <IconWithTooltip icon={TbBrandVite} tooltip="Vite" />,                
                <IconWithTooltip icon={TbApi} tooltip="RestAPI" />,                
                <IconWithTooltip icon={FaNode} tooltip="Node.js" />,                
                <IconWithTooltip icon={SiMongodb} tooltip="MongoDB" />,               
                <IconWithTooltip icon={SiExpress} tooltip="Express" />,
                <IconWithTooltip icon={FaBootstrap} tooltip="Bootstrap" />
            ],
            links: [
                {
                    icon: <AiOutlineGithub />,
                    url: 'https://github.com/r4sy4n/ecommerce-app',
                },
                {
                    icon: <TbWorldWww />,
                    url: 'https://gr8life-ecommerce-shop.onrender.com',
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
                <IconWithTooltip icon={SiExpress} tooltip="Express" />,
                <IconWithTooltip icon={TbApi} tooltip="RestAPI" />,                
                <IconWithTooltip icon={SiStyledcomponents} tooltip="Styled Components" />,                
            ],
            links: [
                {
                    icon: <AiOutlineGithub />,
                    url: 'https://github.com/r4sy4n/buglift',
                },
                {
                    icon: <TbWorldWww />,
                    url: 'https://buglift.netlify.app',
                },
            ],
        },  
        {
            title: 'Pokedex',
            description: 'This Pokédex application showcases my skills in manipulating APIs by retrieving and processing data from external sources. It demonstrates my ability to create a full-stack JavaScript application using React, Express.js, Node.js, and MongoDB. My attention to detail in building reusable components, integrating APIs, handling user interactions, and providing a responsive user interface showcases my proficiency as a full-stack developer.',
            tools: [
                <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />, 
                <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />, 
                <IconWithTooltip icon={TbBrandJavascript} tooltip="JavaScript" />, 
                <IconWithTooltip icon={TbApi} tooltip="RestAPI" />, 
                <IconWithTooltip icon={DiReact} tooltip="React" />,                
                <IconWithTooltip icon={FaNode} tooltip="Node.js" />,                
                <IconWithTooltip icon={SiMongodb} tooltip="MongoDB" />,               
                <IconWithTooltip icon={SiExpress} tooltip="Express" />
            ],
            links: [
                {
                    icon: <AiOutlineGithub />,
                    url: 'https://github.com/r4sy4n/pokedex',
                },
                {
                    icon: <TbWorldWww />,
                    url: 'https://pokedex-uplift.netlify.app',
                },
            ],
        },
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
                    url: 'https://github.com/r4sy4n/baccarat-jsgame',
                },
                {
                    icon: <TbWorldWww />,
                    url: 'https://baccarat-javascript-game.netlify.app',
                },
            ],
        },
        {
            title: 'Connectify',
            description: 'Connectify is a team project. It is a powerful dropshipping application designed to connect buyers, sellers, and suppliers in a seamless and efficient manner. The app serves as a platform where buyers can explore and purchase products from different sellers. Connectify not only showcases our skills using the MERN stack but also highlights our ability to work effectively and collaboratively in a team. It demonstrates our expertise in backend development with Express.js and Node.js, frontend development with React.js, database management with MongoDB, API integration, authentication and authorization, testing, and deployment. It also demonstrates our teamwork, communication, and project management skills.',
            tools: [
                <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />, 
                <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />, 
                <IconWithTooltip icon={TbBrandJavascript} tooltip="JavaScript" />, 
                <IconWithTooltip icon={DiReact} tooltip="React" />,                
                <IconWithTooltip icon={FaNode} tooltip="Node.js" />,                
                <IconWithTooltip icon={SiMongodb} tooltip="MongoDB" />,               
                <IconWithTooltip icon={SiExpress} tooltip="Express" />,
                <IconWithTooltip icon={SiStyledcomponents} tooltip="Styled Components" />,                
            ],
            links: [
                {
                    icon: <AiOutlineGithub />,
                    url: 'https://github.com/r4sy4n/connectify',
                },
                {
                    icon: <TbWorldWww />,
                    url: 'https://connectify-uplift.netlify.app/',
                },
            ],
        },
        {
            title: 'Client\'s Portfolio',
            description: 'My client\'s portfolio website serves as a platform to showcase their work, skills, and achievements. It showcases my skills in React, HTML, CSS, and JavaScript by highlighting my ability to create a visually appealing and interactive website. It demonstrates my proficiency in creating reusable components with React, organizing content with HTML, styling with CSS, and implementing interactivity with JavaScript. My attention to detail, responsive design, user experience considerations, and potential integration of external APIs enhance the overall impact of the portfolio. It serves as a strong representation of my web development skills and can effectively showcase my client\'s work and expertise.',
            tools: [
                <IconWithTooltip icon={DiReact} tooltip="React" />,                
                <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />, 
                <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />,  
                <IconWithTooltip icon={TbBrandJavascript} tooltip="JavaScript" />, 
            ],
            links: [
                {
                    icon: <AiOutlineGithub />,
                    url: 'https://github.com/r4sy4n/portfolio-client-maridee',
                },
                {
                    icon: <TbWorldWww />,
                    url: 'https://marideeramiro.vercel.app/',
                },
            ],
        },
        {
            title: 'First Portfolio',
            description: 'This portfolio website demonstrates my skills in HTML and CSS by showcasing my ability to create visually appealing designs, structure web pages effectively, apply responsive design techniques, create interactive elements, and adhere to best practices for accessibility and code organization.',
            tools: [
                <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />, 
                <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />,  
            ],
            links: [
                {
                    icon: <AiOutlineGithub />,
                    url: 'https://github.com/r4sy4n/first-portfolio',
                },
                {
                    icon: <TbWorldWww />,
                    url: 'https://russell-first-portfolio.netlify.app',
                },
            ],
        }, 
    ];

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.realIndex);
    };

    return (
        <Reveal>
            <Wrapper>
                <div id='projects' className='grid-container'>
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
                            <SwiperSlide><Ecommerce/></SwiperSlide>
                            <SwiperSlide><Buglift/></SwiperSlide>
                            <SwiperSlide><Pokedex/></SwiperSlide>
                            <SwiperSlide><Baccarat/></SwiperSlide>
                            <SwiperSlide><Connectify/></SwiperSlide>
                            <SwiperSlide><ClientPortfolio/></SwiperSlide>
                            <SwiperSlide><Portfolio/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Wrapper>
        </Reveal>
)
}

export default Projects;