import React, { useEffect, useState }from 'react';
import Wrapper from '../assets/wrappers/ScrollUp';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';

const ScrollUp = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroSectionHeight = document.getElementById('hero').offsetHeight;
      setIsVisible(scrollTop > heroSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Wrapper>
      {isVisible && (
        <div className="scroll-up-button" onClick={scrollToTop}>
          <BsFillArrowUpSquareFill />
        </div>
      )}
    </Wrapper>
  )
}

export default ScrollUp;