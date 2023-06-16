import React from 'react';
import Wrapper from '../assets/wrappers/Hero';

const Hero = () => {
  return (
    <Wrapper id='hero'>
        <h2 className='subtitle'>Hello, I am <span>Russell</span></h2>
        <h1 className='title'>Full Stack<br></br> Web Developer</h1>
        <p className='description'><strong>Empowering</strong> and <strong>Elevating</strong> Your Digital Online Presence<br/> Harnessing <span>Full Stack Expertise</span> to Drive Seamless User Experiences and Amplify Your <strong>Business Growth</strong></p>
        <a href="#contact" className='btn'>Let's get in touch!</a>
        <div className='scrolldown'>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </Wrapper>
  )
}

export default Hero;