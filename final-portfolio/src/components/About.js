import React from 'react';
import Wrapper from '../assets/wrappers/About';
import CV from '../assets/resume/RussellRamiro_FullStackDev_MERN_2023.pdf';
import {AiOutlineHtml5, AiOutlineGithub} from 'react-icons/ai';
import {FaCss3Alt, FaBootstrap, FaNode} from 'react-icons/fa';
import {TbBrandJavascript, TbApi, TbBrandVscode} from 'react-icons/tb';
import {DiReact} from 'react-icons/di';
import {SiMongodb, SiExpress, SiStyledcomponents} from 'react-icons/si';
import {BsGit, BsDatabase} from 'react-icons/bs';
import {IoLogoGitlab} from 'react-icons/io5';
import {BiDownload} from 'react-icons/bi';

const About = () => {
  const IconWithTooltip = ({ icon: Icon, tooltip }) => (
  <div className="tooltip">
    <Icon />
    <span className="tooltiptext">{tooltip}</span>
  </div>
);

  return (
    <Wrapper>
      <div id='about' className='grid'>
        <div>
            <h2 className='title'><strong>About</strong></h2>
              <p className='description'>Hello there! I'm Russell, a <span>Full Stack Web developer</span> specializing in the <strong>MERN Stack</strong>. I have successfully completed Uplift Code Camp's Full Stack Web Development bootcamp.</p>
              <p className='description'>I have a strong passion for creating <span>interactive digital experiences</span> on the web. Web development is a challenging field, and I embrace the opportunity to tackle complex problems. Although there are times when I face obstacles, my <span>critical thinking</span> abilities and <strong>determination</strong> drive me to overcome any situation.</p>
              <p className='description'>In addition to coding, I find joy in <span>building PC's</span>, indulging in anime, and competing in mobile games. These activities help me relax and maintain a well-rounded lifestyle outside of work.</p>
              <p className='description'>I am <span>committed</span> to delivering <strong>high-quality web solutions</strong>, and I am always eager to expand my knowledge and stay up-to-date with the <span>latest technologies</span>. Feel free to reach out to me for any web development projects or collaborations.</p>
        </div>
        <hr></hr>
        <div>
            <h3 className='subtitle'><span>Skills </span>and Technologies</h3>
            <p className='description'>
            For a more <span>detailed </span>overview, please feel free to check
            the tools that were used on a per project basis.
            </p>
            <div className="icon list">
                <IconWithTooltip icon={AiOutlineHtml5} tooltip="HTML5" />
                <IconWithTooltip icon={FaCss3Alt} tooltip="CSS3" />
                <IconWithTooltip icon={TbBrandJavascript} tooltip="JavaScript" />
                <IconWithTooltip icon={DiReact} tooltip="React" />
                <IconWithTooltip icon={SiMongodb} tooltip="MongoDB" />
                <IconWithTooltip icon={SiExpress} tooltip="Express" />
                <IconWithTooltip icon={FaNode} tooltip="Node.js" />
                <IconWithTooltip icon={BsGit} tooltip="Git" />
                <IconWithTooltip icon={IoLogoGitlab} tooltip="GitLab" />
                <IconWithTooltip icon={AiOutlineGithub} tooltip="GitHub" />
                <IconWithTooltip icon={TbApi} tooltip="RestAPI" />
                <IconWithTooltip icon={BsDatabase} tooltip="Database Design" />
                <IconWithTooltip icon={SiStyledcomponents} tooltip="Styled Components" />
                <IconWithTooltip icon={FaBootstrap} tooltip="Bootstrap" />
                <IconWithTooltip icon={TbBrandVscode} tooltip="VS Code" />
            </div>
        </div>
      </div>
      <div>
        <a download="" href={CV} className='btn btn-block'>Download CV<BiDownload className='btn-icon'/></a>
      </div>

    </Wrapper>
  )
}

export default About