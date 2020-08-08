import React, { useState } from 'react';
import StyledCalculator from './Calculators.styles';
import resistorScheme from '../../images/schemes/Resistor.jpg';
import resistorVoltageFormula from '../../images/formulas/ResistorVoltage.jpg';
import StyledForm from '../../components/shared/Form/Form.styles';
import NumberInput from '../../components/shared/NumberInput/NumberInput';
import CalculatorInfo from '../../components/shared/CalculatorInfo/CalculatorInfo';
import CalculatorTools from '../../components/shared/CalculatorTools/CalculatorTools';

const ResistorVoltage = () => {

  const [current, setCurrent] = useState(0);
  const [resistance, setResistance] = useState(0);
  const [result, setResult] = useState('Wpisz dane.');

  const calculatorDescription = 'Kalkulator napięcia na rezystorze.';

  const handleSubmit = event => {
    event.preventDefault();
    if (current >= 0 && resistance >= 0) {
      const voltage = current * resistance;
      setResult(`Napięcie wynosi ${voltage.toFixed(3)} [V].`);
    } else {
      setResult('Niepoprawne dane. Podane wartości muszą być nieujemne.');
    }
  }

  return (
    <StyledCalculator>
      <StyledForm onSubmit={handleSubmit}>
        <NumberInput onChange={e => setCurrent(Number(e.target.value))} label='Prąd [A]' placeholder='Wpisz wartość prądu' />
        <NumberInput onChange={e => setResistance(Number(e.target.value))} label='Rezystancja [Ω]' placeholder='Wpisz wartość rezystancji' />
        <CalculatorTools result={result} />
      </StyledForm>
      <CalculatorInfo description={calculatorDescription} schemePath={resistorScheme} formulaPath={resistorVoltageFormula} />
    </StyledCalculator>
  );
}

export default ResistorVoltage;
