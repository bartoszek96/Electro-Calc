import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../Button/Button.styles';

const CalculatorsListLink = () => {
  return (
    <Link to='/kalkulatory'>
      <StyledButton>
        Powrót
    </StyledButton>
    </Link>
  );
}

export default CalculatorsListLink;
