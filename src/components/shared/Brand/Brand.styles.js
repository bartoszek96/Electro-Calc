import styled from 'styled-components';

export const StyledBrand = styled.header`
  font-size: ${props => props.fontSize};
  display: flex;
  flex-direction: row;
  color: white;
  padding: 10px;
`;

export const StyledBrandIcon = styled.div`
  color: yellow;
  margin: 0 5px;
`;

export default StyledBrand;
