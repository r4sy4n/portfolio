import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Services';
import {ImStack} from 'react-icons/im';
import {BsDatabaseLock} from 'react-icons/bs';
import {AiOutlineShop} from 'react-icons/ai';
import FullStackModal from './FullStackModal';
import DatabaseModal from './DatabaseModal';
import EcommerceModal from './EcommerceModal';

const Services = () => {
  const [fullStackModalOpen, setFullStackModalOpen] = useState(false);
  const [databaseModalOpen, setDatabseModalOpen] = useState(false);
  const [ecomModalOpen, setEcomModalOpen] = useState(false);
  
  const fullStackOpenModal = () => {
    setFullStackModalOpen(true);
  };
  const fullStackCloseModal = () => {
    setFullStackModalOpen(false);
  };
  const databseOpenModal = () => {
    setDatabseModalOpen(true);
  };
  const databaseCloseModal = () => {
    setDatabseModalOpen(false);
  };
  const ecomOpenModal = () => {
     setEcomModalOpen(true);
  };
  const ecomCloseModal = () => {
    setEcomModalOpen(false);
  };

  return (
    <Wrapper id='services'>
      <div>
        <h2>How I'll <strong>Grow</strong> Your Business</h2>
        <h3>My <span>Services</span></h3>
        <div className='content_services'>
          <div className='service'>
            <ImStack className='icon'/>
            <h3>Full Stack Web Development</h3>
            <p onClick={fullStackOpenModal}>More Details</p>
            {fullStackModalOpen && <FullStackModal fullStackCloseModal={fullStackCloseModal} />}
          </div>
          <div className='service'>
            <BsDatabaseLock className='icon'/>
            <h3>Database Management</h3>
            <p onClick={databseOpenModal}>More Details</p>
            {databaseModalOpen && <DatabaseModal databaseCloseModal={databaseCloseModal} />}
          </div>
          <div className='service'>
            <AiOutlineShop className='icon'/>
            <h3>Ecommerce</h3>
            <p onClick={ecomOpenModal}>More Details</p>
            {ecomModalOpen && <EcommerceModal ecomCloseModal={ecomCloseModal} />}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Services