import React from 'react';
import Wrapper from '../assets/wrappers/ModalWrapper';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const DatabaseModal = ({ databaseCloseModal }) => {
  
  const hideModal = (event) => {
      let modalContainer = document.querySelector('.modal-container');
      let modalClose = document.querySelector('.modal-close');
      
      if (modalContainer !== undefined) {
          if (!modalContainer.contains(event.target) || modalClose.contains(event.target)){
            databaseCloseModal();
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

        <h2>Database Management</h2>
        <p>I have expertise in designing and implementing efficient databases to store and manage your valuable business data. I ensure data integrity, security, and optimal performance for seamless operations.</p>
        <ul>
          <li>Design and development of efficient and scalable database architectures</li>
          <li>Implementation of data modeling and normalization techniques</li>
          <li>Optimization of database performance</li>
          <li>Integration of database systems with web applications</li>
          <li>Implementation of data security measures</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default DatabaseModal;