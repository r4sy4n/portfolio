import styled from 'styled-components';

const Wrapper = styled.section`
margin-top: var(--size-7xl);
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
height: 70vh;
a{
  font-size: var(--size-xl);
}
.featured{
  margin-bottom: 1rem;
}
.swiper {
  margin: 1rem 0;
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  background: var(--clr--dark);
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mySwiper{
  margin-top: var(--size-4xl);
}
/* md */
@media only screen and (min-width: 768px) {
  margin-top: 0;
  .projects-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .projects-container :nth-child(1) {
     order: 1; 
    }
  .swiper {
  width: 50vh;
  height: 50vh;
  }
}

/* lg */
@media only screen and (min-width: 1024px) {
  a{
  font-size: var(--size-2xl);
}
  .swiper {
    width: 75vh;
    height: 75vh;
  }
}
/* 2xl */
@media only screen and (min-width: 1536px) {
  .projects-container{
    margin: 0 1rem 0 2rem;
  }
} 
`

export default Wrapper;