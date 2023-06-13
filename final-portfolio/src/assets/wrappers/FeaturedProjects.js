import styled from 'styled-components';

const Wrapper = styled.section`
margin-top: 5rem;
display: flex;
flex-direction: column;
gap: 1rem;
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
/* sm */
@media only screen and (min-width: 640px) {
  margin-top: 0;
  .projects-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
    align-items: center;
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

`

export default Wrapper;