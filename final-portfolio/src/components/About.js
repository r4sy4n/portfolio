import React from 'react';
import Wrapper from '../assets/wrappers/About';
import {AiOutlineHtml5} from 'react-icons/ai';
import {FaCss3Alt, FaBootstrap} from 'react-icons/fa';
import {TbBrandJavascript, TbApi} from 'react-icons/tb';
import {DiReact} from 'react-icons/di';
import {SiMongodb, SiExpress, SiStyledcomponents} from 'react-icons/si';
import {FaNode} from 'react-icons/fa';
import {BsGit, BsDatabase} from 'react-icons/bs';
import {AiFillGitlab, AiOutlineGithub} from 'react-icons/ai';

const About = () => {
  return (
    <Wrapper>
        <div className='content'>
            <h2 className='title'><strong>About</strong></h2>
            <div className='margin'>
              <p className='description'>Hello there! I'm Russell, a <span>Full Stack Web developer</span> specializing in the <strong>MERN Stack</strong>. I have successfully completed Uplift Code Camp's Full Stack Web Development bootcamp.</p>
              <p className='description'>I have a strong passion for creating <span>interactive digital experiences</span> on the web, which is why I continually practice my skills by working on various projects. Web development is a challenging field, and I embrace the opportunity to tackle complex problems. Although there are times when I face obstacles, my <span>critical thinking</span> abilities and determination drive me to overcome any situation.</p>
              <p className='description'>In addition to coding, I find joy in <span>building PC's</span>, indulging in anime, and competing in mobile games. These activities help me relax and maintain a well-rounded lifestyle outside of work.</p>
              <p className='description'>I am committed to delivering <strong>high-quality web solutions</strong>, and I am always eager to expand my knowledge and stay up-to-date with the <span>latest technologies</span>. Feel free to reach out to me for any web development projects or collaborations.</p>
            </div>
        </div>
        <hr></hr>
        <div className='skills'>
            <h3 className='subtitle'><span>Skills </span>and Technologies</h3>
            <p className='description'>
            For a more <span>detailed </span>overview, please feel free to check
            the tools that were used on a per project basis.
            </p>
            <div className="icon list">
                <AiOutlineHtml5/>
                <FaCss3Alt/>
                <TbBrandJavascript/>
                <DiReact/>
                <SiMongodb/>
                <SiExpress/>
                <FaNode/>
                <BsGit/>
                <AiFillGitlab/>
                <AiOutlineGithub/>
                <BsDatabase/>
                <TbApi/>
                <SiStyledcomponents/>
                <FaBootstrap/>
            </div>

        </div>



    </Wrapper>
  )
}

export default About