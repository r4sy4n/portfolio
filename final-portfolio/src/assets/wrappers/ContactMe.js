import styled from 'styled-components';

const Wrapper = styled.section`
margin-top: var(--size-7xl);

.contact-container{
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    gap: var(--size-4xl);
}
a{
  font-size: var(--size-10xl);
  color: var(--clr-green);
}
.icon{
    font-size: var(--size-5xl);
    color: var(--clr-green);
}
.contact-title{
    margin-bottom: var(--size-3xl);
}
.email-container p{
    margin: var(--size-lg);
}

.contact-form{
    width: 360px;
}
.contact__form-div{
    position: relative;
    margin-bottom: 2rem;
    height: 4rem;
}
.contact__form-input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid var(--clr-gray800);
    background: none;
    color: var(--clr-gray400);
    outline: none;
    border-radius: var(--size-xs);
    padding: var(--size-2xl);
    z-index: 1;
}
.contact__form-tag{
    position: absolute;
    top: -0.75rem;
    left: var(--size-xl);
    color: var(--clr-gray400);
    font-size: var(--size-base);
    padding: 0 0.25rem;
    background-color: var(--clr-dark);
    z-index: 10;
}
.contact__form-area{
    height: 11rem;
}
.contact__form-area textarea{
    resize: none;
}
.contact-links{
    display: flex;
    gap: var(--size-base);
    margin: var(--size-base);
    justify-content: center;
    align-items: center;
}
/* xs */
@media only screen and (min-width: 475px) {
    .btn{
        font-size: var(--size-base);
    }
}
/* lg */
@media only screen and (min-width: 1024px) {
    .btn{
        font-size: var(--size-lg);
    }
    .icon{
        font-size: var(--size-6xl);
    }
    a{
        font-size: 12rem;
    }
    .contact-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .contact-links{
        flex-direction: column;
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