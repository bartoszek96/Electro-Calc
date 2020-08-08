import React from 'react';
import StyledScheme from './Scheme.styles';

const Scheme = ({ schemePath }) => {
  return (
    <StyledScheme>
      <figcaption>Schemat połączeń elektrycznych:</figcaption>
      <img src={schemePath} alt="scheme" />
    </StyledScheme>
  );
}

export default Scheme;
