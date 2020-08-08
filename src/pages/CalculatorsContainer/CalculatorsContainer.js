import React from 'react';
import StyledCalculatorsContainer from './CalculatorsContainer.styles';
import CalculatorLink from '../../components/CalculatorLink/CalculatorLink';

const CalculatorsContainer = () => {

  const calculators = [
    { id: 1, description: 'Kalkulator rezystora szeregowego LED', path: '/kalkulatory/rezystor-led' },
    { id: 2, description: 'Kalkulator dzielnika napięcia', path: '/kalkulatory/dzielnik-napiecia' },
    { id: 3, description: 'Kalkulator mocy w układzie trójfazowym', path: '/kalkulatory/moc-w-ukladzie-trojfazowym' },
    { id: 4, description: 'Kalkulator prądu w układzie trójfazowym', path: '/kalkulatory/prad-w-ukladzie-trojfazowym' },
    { id: 5, description: 'Kalkulator napięcia na rezystorze', path: '/kalkulatory/napiecie-na-rezystorze' },
    { id: 6, description: 'Kalkulator prądu płynącego przez rezystor', path: '/kalkulatory/prad-rezystora' },
    { id: 7, description: 'Kalkulator rezystancji rezystora', path: '/kalkulatory/rezystancja-rezystora' },
    { id: 8, description: 'Kalkulator mocy wydzielonej na rezystorze', path: '/kalkulatory/moc-wydzielona-na-rezystorze' }
  ]

  return (
    <StyledCalculatorsContainer>
      {calculators.map(({ id, description, path }) => (
        <CalculatorLink key={id} description={description} path={path} />
      ))}
    </StyledCalculatorsContainer>
  );
}

export default CalculatorsContainer;
