import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledListItem from './NavigationListItem.styles';

const NavigationItem = ({ handleBurgerClick, name, path, exact }) => {
  return (
    <StyledListItem>
      <NavLink to={path} onClick={handleBurgerClick} exact={exact ? true : false}>{name}</NavLink>
    </StyledListItem>
  );
}

export default NavigationItem;
