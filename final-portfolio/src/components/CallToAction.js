import React from 'react';
import Wrapper from '../assets/wrappers/CallToAction';

const CallToAction = () => {
  return (
    <Wrapper>
            <div className='cta'>
                <h1>Let's <span>talk</span> about your project</h1>
            </div>
            <div className='cta'>
                <a href="#contact-me" className='btn'>Contact me</a>
            </div>
    </Wrapper>
  )
}

export default CallToAction;