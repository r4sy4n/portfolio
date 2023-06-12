import styled from 'styled-components';

const ModalWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #24232350;
  top: 0;
  left: 0;
  z-index: 99;

p{
  margin-top: 0.5rem;
  color: var(--clr-gray600);
  font-size: var(--size-sm);
}
p:hover{
  color: var(--clr-gray600) !important;
  cursor: default;
}
li{
    color: var(--clr-gray800);
    font-size: var(--size-sm);
    margin-top: 0.5rem;
}
.modal-container {
    position: relative;
    min-width: 30%;
    min-height: 35%;
    background: var(--clr-light);
    text-align: left;
    border-radius: 10px;
    padding: 30px 50px;
    margin: 0 var(--size-lg);
}

.modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 25px;
    height: 25px;
    font-size: 31px;
    background: var(--clr-indigo);
    border-radius: 50%;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

/* sm */
@media only screen and (min-width: 640px) {
    .modal-container {
    width: 70%;
}
}

/* md */
@media only screen and (min-width: 768px) {
     .modal-container {
    width: 50%;
}
}

/* lg */
@media only screen and (min-width: 1024px) {
     .modal-container {
    width: 30%;
}
}

/* xl */
@media only screen and (min-width: 1280px) {
     .modal-container {
    width: 20%;
}
}

/* 2xl */
@media only screen and (min-width: 1536px) {
     .modal-container {
    width: 10%;
}
}
`
export default ModalWrapper;