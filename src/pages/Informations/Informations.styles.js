import styled from 'styled-components';

export const StyledInformations = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10vh;

  section {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;
    width: 70vw;

    @media (max-width: 768px) {
      width: 90vw;
    }
  }
`;

export default StyledInformations;
