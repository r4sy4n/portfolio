import React from 'react';
import Wrapper from '../assets/wrappers/ModalWrapper';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const EcommerceModal = ({ ecomCloseModal }) => {
  
  const hideModal = (event) => {
      let modalContainer = document.querySelector('.modal-container');
      let modalClose = document.querySelector('.modal-close');
      
      if (modalContainer !== undefined) {
          if (!modalContainer.contains(event.target) || modalClose.contains(event.target)){
            ecomCloseModal();
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

        <h2>Ecommerce Stores</h2>
        <p>I create and launch fully functional and visually appealing online stores that are customized to meet the clients' unique business requirements. Develop user-friendly interfaces, secure payment gateways, and seamless navigation to enhance the overall shopping experience.</p>
        <ul>
          <li>Custom Ecommerce Website Development</li>
          <li>Responsive Design and Mobile Optimization</li>
          <li>Ecommerce Platform Integration</li>
          <li>Product Catalog Management</li>
          <li>Payment Gateway Integration</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default EcommerceModal;