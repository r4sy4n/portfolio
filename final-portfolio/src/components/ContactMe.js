import React from 'react';
import Wrapper from '../assets/wrappers/ContactMe';
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import {ImLinkedin} from 'react-icons/im';
import {AiOutlineGithub} from 'react-icons/ai';

const ContactMe = () => {
  return (
    <Wrapper>
        <div className='contact-container'>
            <div className='email-container'>
                <h1>Let's get in touch!</h1>
                <p>Either by <span>email</span> or through my <span>social media.</span></p>
                <div className='email'>
                    <a href='mailto:russellramiro.webdev@gmail.com' target='_blank' rel='noopener noreferrer'>
                        {<MdOutlineMarkEmailRead/>}
                    </a>
                </div>
            </div>
            <div className='contact-links'>
                <div>
                    <a href='https://www.linkedin.com/in/russellramiro' target='_blank' className='icon' rel='noopener noreferrer'>
                        {<ImLinkedin/>}
                    </a>
                </div>
                <div>
                    <a href='https://github.com/r4sy4n' target='_blank' className='icon' rel='noopener noreferrer'>
                        {<AiOutlineGithub/>}
                    </a>
                </div>
            </div>    
            <form className='contact-form'>
                <h2 className='contact-title'>Write me your project</h2>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Name</label>
                    <input 
                    type='text' 
                    name='name' 
                    className='contact__form-input' 
                    placeholder='Insert your name'
                    required/>
                </div>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Mail</label>
                    <input 
                    type='email' 
                    name='email' 
                    className='contact__form-input' 
                    placeholder='Insert your email'
                    required/>
                </div>
                <div className='contact__form-div contact__form-area'>
                    <label className='contact__form-tag'>Project</label>
                    <textarea cols={30} rows={10}
                        name='project'
                        className='contact__form-input' 
                        placeholder='Write your project'
                        required>
                    </textarea>
                </div>
                <button type='submit' className='btn'>Send Message</button>
            </form>
        </div>
    </Wrapper>
  )
}

export default ContactMe;