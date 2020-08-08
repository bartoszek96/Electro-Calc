import React, { useState } from 'react';
import StyledCalculator from './Calculators.styles';
import resistorScheme from '../../images/schemes/Resistor.jpg';
import resistorPowerFormula from '../../images/formulas/ResistorPower.jpg';
import StyledForm from '../../components/shared/Form/Form.styles';
import NumberInput from '../../components/shared/NumberInput/NumberInput';
import CalculatorInfo from '../../components/shared/CalculatorInfo/CalculatorInfo';
import CalculatorTools from '../../components/shared/CalculatorTools/CalculatorTools';

const ResistorPower = () => {

  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState('Wpisz dane.');

  const calculatorDescription = 'Kalkulator mocy wydzielonej na rezystorze.';

  const handleSubmit = event => {
    event.preventDefault();
    if (voltage >= 0 && current >= 0) {
      const power = voltage * current;
      setResult(`Moc wynosi ${power.toFixed(3)} [W].`);
    } else {
      setResult('Niepoprawne dane. Podane wartości muszą być nieujemne.');
    }
  }

  return (
    <StyledCalculator>
      <StyledForm onSubmit={handleSubmit}>
        <NumberInput onChange={e => setVoltage(Number(e.target.value))} label='Napięcie [V]' placeholder='Wpisz wartość napięcia' />
        <NumberInput onChange={e => setCurrent(Number(e.target.value))} label='Prąd [A]' placeholder='Wpisz wartość prądu' />
        <CalculatorTools result={result} />
      </StyledForm>
      <CalculatorInfo description={calculatorDescription} schemePath={resistorScheme} formulaPath={resistorPowerFormula} />
    </StyledCalculator>
  );
}

export default ResistorPower;
