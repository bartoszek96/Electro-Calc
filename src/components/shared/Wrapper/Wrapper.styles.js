import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  align-items: ${props => props.alignItems || "stretch"};
  justify-content: ${props => props.justifyContent || "flex-start"};
  margin: ${props => props.margin || "5px"};
`;

export default Wrapper;
