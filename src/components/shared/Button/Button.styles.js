import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  width: 200px;
  padding: 5px;
  margin: 5px 0;
  font-size: 20px;
  border: solid 3px white;
  border-radius: 5px;
  background: rgba(0, 255, 0, 0.2);
  color: white;
  transition: .3s;

  &:hover {
    background: rgba(0, 255, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 50vw;
  }
`;

export default StyledButton;
