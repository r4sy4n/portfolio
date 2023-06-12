import styled from 'styled-components';

const Wrapper = styled.section`
margin-top: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

.cta{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 2rem;

}
.btn{
        font-size: var(--size-sm);
}

/* xs */
@media only screen and (min-width: 475px) {
    .btn{
        font-size: var(--size-base);
    }
}

/* sm */
@media only screen and (min-width: 640px) {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
justify-content: center;
align-items: center;
height: 50vh;
    .cta{
        margin: 2rem 2rem;
    }
}

/* lg */
@media only screen and (min-width: 1024px) {
    .btn{
        font-size: var(--size-lg);
    }
}

/* xl */
@media only screen and (min-width: 1280px) {
    .btn{
        font-size: var(--size-xl);
    }
}

`

export default Wrapper;