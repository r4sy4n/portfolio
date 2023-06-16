import styled from 'styled-components';

const Wrapper = styled.section`
.scroll-up-button {
  position: fixed;
  bottom: var(--size-5xl);
  right: var(--size-4xl);
  color: var(--clr-indigo);
  font-size: var(--size-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  z-index: 1;
  transition: 0.4s;
  opacity: 0.8;
}

.scroll-up-button:hover {
  opacity: 0.7;
  color: var(--clr-green);
}
`

export default Wrapper;