import React from 'react';
import StyledNumberInput from './NumberInput.styles';
import Wrapper from '../Wrapper/Wrapper.styles';

const NumberInput = ({ label, placeholder, onChange }) => {
  return (
    <Wrapper direction='column'>
      <label>{label}</label>
      <StyledNumberInput onChange={onChange} type='number' placeholder={placeholder} step='any' />
    </Wrapper>
  );
}

export default NumberInput;