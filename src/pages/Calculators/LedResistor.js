import React, { useState } from 'react';
import StyledCalculator from './Calculators.styles';
import ledResistorScheme from '../../images/schemes/LedResistor.jpg';
import ledResistorFormula from '../../images/formulas/LedResistor.jpg';
import StyledForm from '../../components/shared/Form/Form.styles';
import NumberInput from '../../components/shared/NumberInput/NumberInput';
import CalculatorInfo from '../../components/shared/CalculatorInfo/CalculatorInfo';
import CalculatorTools from '../../components/shared/CalculatorTools/CalculatorTools';

const LedResistor = () => {

  const [supplyVoltage, setSupplyVoltage] = useState(0);
  const [ledVoltage, setLedVoltage] = useState(0);
  const [ledCurrent, setLedCurrent] = useState(0);
  const [result, setResult] = useState('Wpisz dane.');

  const calculatorDescription = 'Kalkulator rezystora szeregowego LED.';

  const handleSubmit = event => {
    event.preventDefault();
    if (
      supplyVoltage >= 0 &&
      ledVoltage >= 0 &&
      ledCurrent > 0 &&
      supplyVoltage >= ledVoltage
    ) {
      const resistance = (supplyVoltage - ledVoltage) / (ledCurrent / 1000);
      setResult(`Potrzebujesz rezystora ${resistance.toFixed(0)} [Ω].`);
    } else if (supplyVoltage < ledVoltage) {
      setResult('Napięcie przewodnika powinno być mniejsze od napięcia zasilania.');
    } else {
      setResult('Niepoprawne dane. Wartości napięc muszą być nieujemne, a wartość prądu dodatnia.');
    }
  }

  return (
    <StyledCalculator>
      <StyledForm onSubmit={handleSubmit}>
        <NumberInput onChange={e => setSupplyVoltage(Number(e.target.value))} label='Napięcie zasilania [V]' placeholder='Wpisz wartość napięcia' />
        <NumberInput onChange={e => setLedVoltage(Number(e.target.value))} label='Napięcie przewodzenia LED [V]' placeholder='Wpisz wartość napięcia' />
        <NumberInput onChange={e => setLedCurrent(Number(e.target.value))} label='Prąd LED [mA]' placeholder='Wpisz wartość prądu' />
        <CalculatorTools result={result} />
      </StyledForm>
      <CalculatorInfo description={calculatorDescription} schemePath={ledResistorScheme} formulaPath={ledResistorFormula} />
    </StyledCalculator>
  );
}

export default LedResistor;
