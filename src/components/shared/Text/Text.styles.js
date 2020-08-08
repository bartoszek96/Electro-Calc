import styled from 'styled-components';

export const StyledText = styled.section`
  font-size: ${props => props.size || "16px"};
  color: ${props => props.color || "white"};
  width: ${props => props.width || "auto"};
  padding: ${props => props.padding || "0"};
  text-align: center;
  margin: 5px;
`;

export default StyledText;
