import styled from 'styled-components';

export const StyledListItem = styled.li`
  padding: 10px;
  margin: 10px;
  font-size: 1.5em;

  .active {
    color: white;
  }

  & a {
    color: rgb(200, 200, 200);
    text-decoration: none;
    transition: .5s;
  }

  & a:hover {
    color: white;
  }
`;

export default StyledListItem;
