import React, { useState } from 'react';
import Brand from '../shared/Brand/Brand'
import NavigationList from '../NavigationList/NavigationList'
import StyledNav from './Navigation.styles';
import Burger from '../Burger/Burger';

const Navigation = () => {

  const [isOpened, toggleOpened] = useState(false);

  const list = [
    { id: 1, name: 'HOME', path: '/', exact: true },
    { id: 2, name: 'KALKULATORY', path: '/kalkulatory' },
    { id: 3, name: 'INFORMACJE', path: '/informacje' }
  ];

  const handleClick = () => {
    toggleOpened(!isOpened);
  }

  return (
    <StyledNav>
      <Brand fontSize='2em'/>
      <NavigationList handleBurgerClick={handleClick} list={list} isOpened={isOpened}/>
      <Burger handleBurgerClick={handleClick} isOpened={isOpened}/>
    </StyledNav>
  );
}

export default Navigation;
