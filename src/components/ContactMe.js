import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Wrapper from '../assets/wrappers/ContactMe';
import {MdOutlineMarkEmailRead} from 'react-icons/md';
import {CiLinkedin} from 'react-icons/ci';
import {DiGithubBadge} from 'react-icons/di';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
import Reveal from './Reveal';

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hv1w2gz', 'template_hkon7er', form.current, 'YxvJNMH0KnF8e9f-0')
        .then((result) => {
            e.target.reset();
            toast.success('Message Sent!')
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <Reveal>
        <Wrapper>
            <div id='contact' className='contact-container'>
                <div className='email-container'>
                    <h1>Let's get in touch!</h1>
                    <p>Either by <span>email</span> or through my <span>social media.</span></p>
                    <div className='contact-links'>
                        <motion.div 
                        whileHover={{
                            scale: [1, 1.1, 1.2, 1.1, 1],
                            rotate: [0, 180, 360, 180, 0],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1.5
                        }}>
                            <a href='mailto:russellramiro.webdev@gmail.com' target='_blank' className='icon' rel='noopener noreferrer'>
                                {<MdOutlineMarkEmailRead/>}
                            </a>
                        </motion.div>
                        <motion.div
                        whileHover={{
                            scale: [1, 1.1, 1.2, 1.1, 1],
                            rotate: [0, 180, 360, 180, 0],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1.5
                        }}>
                            <a href='https://www.linkedin.com/in/russellramiro' target='_blank' className='icon' rel='noopener noreferrer'>
                                {<CiLinkedin/>}
                            </a>
                        </motion.div>
                        <motion.div
                        whileHover={{
                            scale: [1, 1.1, 1.2, 1.1, 1],
                            rotate: [0, 180, 360, 180, 0],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1.5
                        }}>
                            <a href='https://github.com/r4sy4n' target='_blank' className='icon' rel='noopener noreferrer'>
                                {<DiGithubBadge/>}
                            </a>
                        </motion.div>
                    </div>
                </div> 
                <div className='form'>
                    <form ref={form} onSubmit={sendEmail} className='contact-form'>
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
            </div>
        </Wrapper>
    </Reveal>
  )
}

export default ContactMe;