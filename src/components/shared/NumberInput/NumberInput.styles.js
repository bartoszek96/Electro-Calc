import styled from 'styled-components';

export const StyledNumberInput = styled.input`
  width: 400px;
  padding: 5px;
  margin: 5px 0;
  font-size: 20px;
  border: solid 3px white;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export default StyledNumberInput;
