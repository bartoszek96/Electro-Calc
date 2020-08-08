import React from 'react';
import StyledBurger from './Burger.styles';

const Burger = ( {handleBurgerClick, isOpened} ) => {
  return (
    <>
      <StyledBurger onClick={handleBurgerClick} isOpened={isOpened}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}
export default Burger