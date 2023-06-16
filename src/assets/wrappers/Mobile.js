import styled from 'styled-components';

const Wrapper = styled.nav`
.mobile-nav{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-dark);
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 999;
}
.mobile-nav__menu{
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.mobile-nav__link{
    font-size: var(--size-sm);
    text-decoration: none;
    font-weight: 600;
    letter-spacing: -0.05em;
    transition: color 0.3s;
}
.mobile-nav__link:hover{
    color: var(--clr-green);
}
.mobile-nav__link-line{
    border: 1px solid var(--clr-gray800);
    padding-right: 1.5em;
}
.mobile-nav__sun{
    display: block;
    color: var(--clr-gray600);
    width: var(--size-xl);
    height: var(--size-xl);
}
.mobile-nav__sun:hover{
    color: var(--clr-green);
}

`

export default Wrapper;