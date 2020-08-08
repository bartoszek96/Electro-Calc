import React from 'react';
import StyledHome from './Home.styles';
import Brand from '../../components/shared/Brand/Brand';
import StyledText from '../../components/shared/Text/Text.styles';

const Home = () => {

  const text = "Aplikacja do obliczeń elementów i wielkości elektrycznych."

  return (
    <StyledHome>
      <Brand fontSize='3rem' />
      <StyledText size='30px'>
        {text}
      </StyledText>
    </StyledHome>
  );
}

export default Home;
