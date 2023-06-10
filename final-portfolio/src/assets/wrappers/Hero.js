import styled from 'styled-components';

const Wrapper = styled.section`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
margin-top: 2rem;
height: 95vh;

.subtitle{
    color: var(--clr-gray600);
    font-size: var(--size-base);
    line-height: 0.9;
}
.title{
    color: var(--clr-gray400);
    text-transform: uppercase;
    font-size: var(--size-4xl);
    line-height: 0.9;
}
.description{
    max-width: 60ch;
    font-size: var(--size-sm);
    color: var(--clr-gray400);
}
.btn{
    text-transform: capitalize;
    font-size: var(--size-sm);
}

/* xs */
@media only screen and (min-width: 475px) {
gap: 1.5rem;
    .subtitle{
        font-size: var(--size-lg);
    }
    .title{
        font-size: var(--size-5xl);
    }
    .description{h;
        font-size: var(--size-base);
    }
    .btn{
        font-size: var(--size-base);
    }
}

/* lg */
@media only screen and (min-width: 1024px) {
    .subtitle{
        font-size: var(--size-2xl);
    }
    .title{
        font-size: var(--size-7xl);
    }
    .description{h;
        font-size: var(--size-lg);
    }
    .btn{
        font-size: var(--size-lg);
    }
}

/* xl */
@media only screen and (min-width: 1280px) {
gap: 2rem;
    .subtitle{
        font-size: var(--size-4xl);
    }
    .title{
        font-size: var(--size-9xl);
    }
    .description{h;
        font-size: var(--size-xl);
    }
    .btn{
        font-size: var(--size-xl);
    }
}
`

export default Wrapper;