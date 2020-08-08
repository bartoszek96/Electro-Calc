import React from 'react';
import StyledCalculatorLink from './CalculatorLink.styles';
import StyledText from '../shared/Text/Text.styles';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

const CalculatorLink = ({ description, path }) => {
  return (
    <Link to={path}>
      <StyledCalculatorLink>
        <FontAwesomeIcon icon={faCalculator} />
        <StyledText>
          {description}
        </StyledText>
      </StyledCalculatorLink>
    </Link>
  );
}

export default CalculatorLink;
