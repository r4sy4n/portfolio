import styled from 'styled-components';

const Wrapper = styled.section`
margin-top: 5rem;
display: flex;
flex-direction: column;
gap: 1rem;
a{
  font-size: var(--size-xl);
}
.tools{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--size-3xl);
    justify-content: center;
    margin-top: var(--size-3xl);
    /* align-items: center; */
}
.icon{
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: var(--size-base);
    font-size: var(--size-4xl);
    color: var(--clr-indigo);
    margin-bottom: var(--size-base);;
}
.icon a{
    font-size: var(--size-4xl);
    color: var(--clr-indigo);
}
.icon a:hover{
    transition: color 0.4s;
    color: var(--clr-green);
}
.title{
    margin: var(--size-2xl) 0;
}
.subtitle{
    margin: var(--size-xl) 0;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  color: var(--clr-green);
  text-align: center;
  position: absolute;
  z-index: 1;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: var(--size-xs);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
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
/* xs */
@media only screen and (min-width: 475px) {
  .tooltip .tooltiptext {
   bottom: -50%;
   left: 35%;
   transform: translateX(-50%);
   font-size: var(--size-xs);
   }
}
/* md */
@media only screen and (min-width: 768px) {
 .grid-container{
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--size-3xl);
    justify-content: center;
    align-items: center;
 }   
 .swiper {
    width: 50vh;
    height: 50vh;
 }
 .tools{
    margin-top: var(--size-4xl);

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
  .grid-container{
    margin: 0 0 0 2rem;
  }
} 
`

export default Wrapper;