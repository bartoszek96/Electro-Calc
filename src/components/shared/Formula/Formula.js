import React from 'react';
import StyledFormula from './Formula.styles';

const Formula = ({ formulaPath }) => {
  return (
    <StyledFormula>
      <figcaption>Wzór:</figcaption>
      <img src={formulaPath} alt="formula" />
    </StyledFormula>
  );
}

export default Formula;
