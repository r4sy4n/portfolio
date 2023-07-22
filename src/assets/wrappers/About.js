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
.btn{
    font-size: var(--size-sm);
}
.btn-icon{
    margin-left: 0.5rem;
}
.title{
    font-size: var(--size-2xl);
    color: var(--clr-light);
    margin-bottom: 1rem;
}
.subtitle{
    margin-bottom: 1rem;
}
.description{
    max-width: 60ch;
    margin: var(--size-xxs) 0;
    text-align: justify;
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
.btn{
        font-size: var(--size-base);
    }
.tooltip .tooltiptext {
  bottom: -50%;
  left: 35%;
  transform: translateX(-50%);
  font-size: var(--size-xs);
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
        gap: var(--size-5xl);
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
    .btn{
        font-size: var(--size-lg);
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
    .btn{
        font-size: var(--size-xl);
    }
}

`

export default Wrapper;