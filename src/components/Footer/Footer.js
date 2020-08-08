import React from 'react';
import StyledFooter from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  const CopyrightIcon = <FontAwesomeIcon icon={faCopyright} />;

  return (
    <StyledFooter>
      Electro Calc {CopyrightIcon} 2020
    </StyledFooter> );
}
 
export default Footer;