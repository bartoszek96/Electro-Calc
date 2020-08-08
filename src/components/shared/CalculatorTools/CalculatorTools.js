import React from 'react';
import StyledButton from '../Button/Button.styles';
import StyledText from '../Text/Text.styles';
import CalculatorListLink from '../CalculatorsListLink/CalculatorsListLink';

const CalculatorTools = ({ result }) => {
  return (
    <>
      <StyledText size='20px' width='320px'>
        {result}
      </StyledText>
      <StyledButton>Oblicz</StyledButton>
      <CalculatorListLink />
    </>
  );
}

export default CalculatorTools;
