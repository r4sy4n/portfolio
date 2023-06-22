import React from 'react';
import Wrapper from '../assets/wrappers/CallToAction';
import Reveal from './Reveal';

const CallToAction = () => {
  return (
    <Reveal>
      <Wrapper>
              <div className='cta'>
                  <h1>Let's <span>talk</span> about your project</h1>
              </div>
              <div className='cta'>
                  <a href="#contact" className='btn'>Contact me</a>
              </div>
      </Wrapper>
    </Reveal>
  )
}

export default CallToAction;