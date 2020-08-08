import React, { useState } from 'react';
import StyledCalculator from './Calculators.styles';
import resistorScheme from '../../images/schemes/Resistor.jpg';
import resistorCurrentFormula from '../../images/formulas/ResistorCurrent.jpg';
import StyledForm from '../../components/shared/Form/Form.styles';
import NumberInput from '../../components/shared/NumberInput/NumberInput';
import CalculatorInfo from '../../components/shared/CalculatorInfo/CalculatorInfo';
import CalculatorTools from '../../components/shared/CalculatorTools/CalculatorTools';

const ResistorCurrent = () => {

  const [voltage, setVoltage] = useState(0);
  const [resistance, setResistance] = useState(0);
  const [result, setResult] = useState('Wpisz dane.');

  const calculatorDescription = 'Kalkulator prądu płynącego przez rezystor.';

  const handleSubmit = event => {
    event.preventDefault();
    if (voltage >= 0 && resistance > 0) {
      const current = voltage / resistance;
      setResult(`Prąd wynosi ${current.toFixed(3)} [A].`);
    } else {
      setResult('Niepoprawne dane. Wartość napięcia musi być nieujemna, a wartość rezystancji dodatnia.');
    }
  }

  return (
    <StyledCalculator>
      <StyledForm onSubmit={handleSubmit}>
        <NumberInput onChange={e => setVoltage(Number(e.target.value))} label='Napięcie [V]' placeholder='Wpisz wartość napięcia' />
        <NumberInput onChange={e => setResistance(Number(e.target.value))} label='Rezystancja [Ω]' placeholder='Wpisz wartość rezystancji' />
        <CalculatorTools result={result} />
      </StyledForm>
      <CalculatorInfo description={calculatorDescription} schemePath={resistorScheme} formulaPath={resistorCurrentFormula} />
    </StyledCalculator>
  );
}

export default ResistorCurrent;
