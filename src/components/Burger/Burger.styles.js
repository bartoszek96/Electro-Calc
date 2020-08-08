import styled from 'styled-components';

export const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
margin: 10px;
cursor: pointer;
display: none;

@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}

div {
  width: 2rem;
  height: 0.25rem;
  background-color: white;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ isOpened }) => isOpened ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    transform: ${({ isOpened }) => isOpened ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ isOpened }) => isOpened ? 0 : 1};
  }
  
  &:nth-child(3) {
    transform: ${({ isOpened }) => isOpened ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`;

export default StyledBurger;
