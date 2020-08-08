import React from 'react';
import NavigationItem from '../NavigationListItem/NavigationListItem';
import StyledList from './NavigationList.styles';

const NavigationList = ({ handleBurgerClick, isOpened, list }) => {
  return (
    <StyledList isOpened={isOpened}>
      {list.map(({ id, name, path, exact }) => (
        <NavigationItem key={id} handleBurgerClick={handleBurgerClick} name={name} path={path} exact={exact} />
      ))}
    </StyledList>
  );
}

export default NavigationList;
