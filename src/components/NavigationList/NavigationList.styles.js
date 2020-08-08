import styled from 'styled-components';

export const StyledList = styled.ul`
  font-size: 12px;
  list-style-type: none;
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 5;
    height: 85vh;
    width: 50vw;
    top: 15vh;
    right: 0;
    background: black;
    flex-direction: column;
    transform: ${({ isOpened }) => isOpened ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform ease-in 0.5s;
  }
`;

export default StyledList
