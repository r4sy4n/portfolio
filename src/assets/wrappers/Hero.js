import styled from 'styled-components';

const Wrapper = styled.section`
text-align: center;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
gap: 1rem;
margin-top: 10rem;
height: 100vh;

.subtitle{
    line-height: 0.9;
}
.title{
    text-transform: uppercase;
    line-height: 0.9;
}
.description{
    max-width: 60ch;
}
.btn{
    text-transform: capitalize;
    font-size: var(--size-sm);
}
.scrolldown{
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 40px;
    height: 40px;
    transform: translateY(-20px) translateX(-50%) rotate(45deg);
}
.scrolldown span{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid var(--clr-green);
    border-right: 2px solid var(--clr-green);
    animation: animate 1.5s linear infinite;
    opacity: 0;
}
.scrolldown span:nth-child(1){
    transform: translate(-15px, -15px);
    animation-delay: -0.4s;
}
.scrolldown span:nth-child(2){
    transform: translate(0, 0);
    animation-delay: -0.2s;
}
.scrolldown span:nth-child(3){
    transform: translate(15px, 15px);
    animation-delay: 0s;
}
@keyframes animate{
    0%{
        top: -5px;
        left: -5px;
        opacity: 0;
    }
    25%{
        top: 0;
        left: 0;
        opacity: 1;
    }
    50% {
        top: 5px;
        left: 5px;
        opacity: 0;
    }
    100% {
        top: 5px;
        left: 5px;
        opacity: 0;
    }
}

/* xs */
@media only screen and (min-width: 475px) {
gap: 1.5rem;
    .subtitle{
        font-size: var(--size-2xl);
    }
    .title{
        font-size: var(--size-5xl);
    }
    .description{
        font-size: var(--size-base);
    }
    .btn{
        font-size: var(--size-base);
    }
}

/* lg */
@media only screen and (min-width: 1024px) {
    margin-top: 7.5rem;
    .subtitle{
        font-size: var(--size-3xl);
    }
    .title{
        font-size: var(--size-7xl);
    }
    .description{
        font-size: var(--size-lg);
    }
    .btn{
        font-size: var(--size-lg);
    }
}

/* xl */
@media only screen and (min-width: 1280px) {
    margin-top: 5rem;
    gap: 2rem;
    .subtitle{
        font-size: var(--size-4xl);
    }
    .title{
        font-size: var(--size-8xl);
    }
    .description{
        font-size: var(--size-xl);
    }
    .btn{
        font-size: var(--size-xl);
    }
}
/* 2xl */
/* @media only screen and (min-width: 1536px) {
    margin-top: 4rem;
    gap: 2rem;
    .subtitle{
        font-size: var(--size-4xl);
    }
    .title{
        font-size: var(--size-8xl);
    }
    .description{
        font-size: var(--size-2xl);
    }
    .btn{
        font-size: var(--size-2xl);
    }
} */
`

export default Wrapper;