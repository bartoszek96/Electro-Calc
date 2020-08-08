import React from 'react';
import Scheme from '../Scheme/Scheme';
import Formula from '../Formula/Formula';
import Wrapper from '../Wrapper/Wrapper.styles';
import StyledText from '../Text/Text.styles';

const CalculatorInfo = ({ description, schemePath, formulaPath }) => {
  return (
    <Wrapper direction='column' alignItems='center'>
      <StyledText size='20px'>
        {description}
      </StyledText>
      <Formula formulaPath={formulaPath} />
      <Scheme schemePath={schemePath} />
    </Wrapper>
  );
}

export default CalculatorInfo;
