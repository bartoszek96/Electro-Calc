import React from 'react';
import StyledBrand, { StyledBrandIcon } from './Brand.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

const Brand = ({ fontSize }) => {

  const BrandIcon = <StyledBrandIcon><FontAwesomeIcon icon={faBolt} /></StyledBrandIcon>;

  return (
    <StyledBrand fontSize={fontSize}>
      Electro {BrandIcon} Calc
    </StyledBrand>
  );
}
 
export default Brand;
