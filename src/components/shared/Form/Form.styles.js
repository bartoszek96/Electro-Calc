import styled from 'styled-components';

export const StyledForm = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 420px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export default StyledForm;
