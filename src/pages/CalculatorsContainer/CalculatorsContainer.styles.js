import styled from 'styled-components';

export const StyledCalculatorsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 40px;

  & a {
    color: white;
    transition: .5s;
    text-decoration: none;
  }

  & a:hover {
    color: yellow;
  }
`;

export default StyledCalculatorsContainer;
