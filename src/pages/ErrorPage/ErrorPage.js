import React from 'react';
import StyledErrorPage from './ErrorPage.styles';
import Brand from '../../components/shared/Brand/Brand';
import StyledText from '../../components/shared/Text/Text.styles';

const ErrorPage = () => {

  const text = 'Nie ma takiej strony.';

  return (
    <StyledErrorPage>
      <Brand fontSize='3rem' />
      <StyledText size='30px'>
        {text}
      </StyledText>
    </StyledErrorPage>
  );
}

export default ErrorPage;
