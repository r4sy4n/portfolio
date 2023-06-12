import styled from 'styled-components';

const Wrapper = styled.section`
margin-top: 5rem;
/* text-align: center; */
display: flex;
flex-direction: column;

.service{
    gap: 1rem;
    margin: 1.5rem 0;
    padding: 4rem 0 2rem 2.5rem;
    background-color: var(--clr-gray800);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: var(--size-base);
}
.icon{
    font-size: var(--size-5xl);
    color: var(--clr-green);
    margin-bottom: 1rem;
}
p{
    cursor: pointer;
    transition: color 0.3s;
}
p:hover{
    color: var(--clr-green);
}

/* xs */
/* @media only screen and (min-width: 475px) {

} */

/* sm */
@media only screen and (min-width: 640px) {
    .content_services{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
        }
}

/* md */
@media only screen and (min-width: 768px) {
    
}

/* lg */
/* @media only screen and (min-width: 1024px) {

} */

/* xl */
@media only screen and (min-width: 1280px) {
    .content_services{
        gap: 1.5rem;
    }
    .icon{
        font-size: var(--size-6xl)
    }
}

/* 2xl */
/* @media only screen and (min-width: 1536px) {

} */

`

export default Wrapper;