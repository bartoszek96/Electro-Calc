import React, { useState } from 'react';
import StyledCalculator from './Calculators.styles';
import resistorScheme from '../../images/schemes/Resistor.jpg';
import resistorResistanceFormula from '../../images/formulas/ResistorResistance.jpg';
import StyledForm from '../../components/shared/Form/Form.styles';
import NumberInput from '../../components/shared/NumberInput/NumberInput';
import CalculatorInfo from '../../components/shared/CalculatorInfo/CalculatorInfo';
import CalculatorTools from '../../components/shared/CalculatorTools/CalculatorTools';

const ResistorResistance = () => {

  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState('Wpisz dane.');

  const calculatorDescription = 'Kalkulator rezystancji rezystora.';

  const handleSubmit = event => {
    event.preventDefault();
    if (voltage >= 0 && current > 0) {
      const resistance = voltage / current;
      setResult(`Rezystancja wynosi ${resistance.toFixed(0)} [Ω].`);
    } else {
      setResult('Niepoprawne dane. Wartość napięcia musi być nieujemna, a wartość prądu dodatnia.');
    }
  }

  return (
    <StyledCalculator>
      <StyledForm onSubmit={handleSubmit}>
        <NumberInput onChange={e => setVoltage(Number(e.target.value))} label='Napięcie [V]' placeholder='Wpisz wartość napięcia' />
        <NumberInput onChange={e => setCurrent(Number(e.target.value))} label='Prąd [A]' placeholder='Wpisz wartość prądu' />
        <CalculatorTools result={result} />
      </StyledForm>
      <CalculatorInfo description={calculatorDescription} schemePath={resistorScheme} formulaPath={resistorResistanceFormula} />
    </StyledCalculator>
  );
}

export default ResistorResistance;
