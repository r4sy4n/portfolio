import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
.btn-block{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
}
.btn-icon{
    margin-left: 0.5rem;
}
.title{
    font-size: var(--size-2xl);
    color: var(--clr-light);
}
.subtitle{
    color: var(--clr-gray400);
    font-size: var(--size-sm);
}
.description{
    max-width: 60ch;
    font-size: var(--size-sm);
    color: var(--clr-gray400);
}
.icon{
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 1em;
    color: var(--clr-indigo);
    font-size: var(--size-5xl);
    margin-top: 2rem;
}
hr{
    border-color: var(--clr-gray800);
    width: 100%;
    margin: 1rem 0;
}

/* xs */
@media only screen and (min-width: 475px) {
    gap: 1.5rem;
.title{
    font-size: var(--size-3xl);
}
.subtitle{
    font-size: var(--size-base);
}
.description{
    font-size: var(--size-base);
}
}

/* lg */
@media only screen and (min-width: 1024px) {
    hr{
        display: none;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }
    .title{
        font-size: var(--size-4xl);
    }
    .subtitle{
        font-size: var(--size-lg);
    }
    .description{
        font-size: var(--size-lg);
    }
    .icon{
    font-size: var(--size-6xl);
}
}

/* xl */
@media only screen and (min-width: 1280px) {
    .title{
        font-size: var(--size-5xl);
    }
    .subtitle{
        font-size: var(--size-xl);
    }
    .description{
        font-size: var(--size-xl);
    }
}

`

export default Wrapper;