import React from 'react';
import Wrapper from '../assets/wrappers/About';
import {AiOutlineHtml5} from 'react-icons/ai';
import {FaCss3Alt} from 'react-icons/fa';
import {TbBrandJavascript, TbApi} from 'react-icons/tb';
import {DiReact} from 'react-icons/di';
import {SiMongodb, SiExpress} from 'react-icons/si';
import {FaNode} from 'react-icons/fa';
import {BsGit, BsDatabase} from 'react-icons/bs';
import {AiFillGitlab, AiOutlineGithub} from 'react-icons/ai';

const About = () => {
  return (
    <Wrapper>
        <div>
            <h2>About</h2>
            <p>Hello there! I'm Russell, a Full Stack Web developer that utilizes the MERN Stack. I finished Uplift Code Camp's Full Stack Web development bootcamp.</p>
            <p>I love building interactive digital experiences on the web that's why I always practice my skills by always making projects to further develop and enhance my ability. Web development is not an easy feat and sometimes I feel down when I can't solve the problems right away but my critical thinking and grit pushed hme to the limits and helps me overcome any situation</p>
            <p>Aside from coding, I also enjoys building PC's, watching anime's and grinding in competitive mobile games.</p>
        </div>
        <div>
            <h3><span>Skills </span>and Technologies</h3>
            <p>
            For a more <span>detailed </span>overview, please feel free to check
            the tools that were used on a per project basis.
            </p>
            <div className="icon">
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
            </div>

        </div>



    </Wrapper>
  )
}

export default About