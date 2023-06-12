import React from 'react'
import Wrapper from '../assets/wrappers/ModalWrapper';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const FullStackModal = ({ fullStackCloseModal }) => {
  
  const hideModal = (event) => {
      let modalContainer = document.querySelector('.modal-container');
      let modalClose = document.querySelector('.modal-close');
      
      if (modalContainer !== undefined) {
          if (!modalContainer.contains(event.target) || modalClose.contains(event.target)){
            fullStackCloseModal();
          }
      }
  }


  return (
    <Wrapper onClick={ hideModal }>
      <div className='modal-container'>
        <div className='modal-close'
            onClick={ hideModal }
        >
            <AiOutlineCloseCircle/>
        </div>

        <h2>Full Stack Web Development</h2>
        <p>I provide end-to-end web development services, encompassing both front-end and back-end development. Using the latest technologies and frameworks, I create dynamic and responsive websites that meet your business requirements.</p>
        <ul>
          <li>Development of custom web applications</li>
          <li>Implementation of responsive and mobile-friendly designs</li>
          <li>Integration of APIs and third-party services</li>
          <li>Utilization of the latest technologies and frameworks</li>
          <li>Maintenance and support</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default FullStackModal;