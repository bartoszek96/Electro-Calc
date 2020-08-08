import styled from 'styled-components';

export const StyledCalculator = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default StyledCalculator;
