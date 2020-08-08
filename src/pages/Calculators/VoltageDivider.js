import React, { useState } from 'react';
import StyledCalculator from './Calculators.styles';
import voltageDividerScheme from '../../images/schemes/VoltageDivider.jpg';
import voltageDividerFormula from '../../images/formulas/VoltageDivider.jpg';
import StyledForm from '../../components/shared/Form/Form.styles';
import NumberInput from '../../components/shared/NumberInput/NumberInput';
import CalculatorInfo from '../../components/shared/CalculatorInfo/CalculatorInfo';
import CalculatorTools from '../../components/shared/CalculatorTools/CalculatorTools';

const VoltageDivider = () => {

  const [inputVoltage, setInputVoltage] = useState(0);
  const [resistanceR1, setResistanceR1] = useState(0);
  const [resistanceR2, setResistanceR2] = useState(0);
  const [result, setResult] = useState('Wpisz dane.');

  const calculatorDescription = 'Kalkulator dzielnika napięcia.';

  const handleSubmit = event => {
    event.preventDefault();
    if (
      inputVoltage >= 0 &&
      resistanceR1 >= 0 &&
      resistanceR2 > 0
    ) {
      const outputVoltage = (inputVoltage * resistanceR2) / (resistanceR1 + resistanceR2);
      setResult(`Napięcie wyjściowe wynosi ${outputVoltage.toFixed(3)} [V].`);
    } else {
      setResult('Niepoprawne dane. Wartości napięcia wejściowego i rezystora R1 muszą być nieujemne, a wartość rezystora R2 musi być dodatnia.');
    }
  }

  return (
    <StyledCalculator>
      <StyledForm onSubmit={handleSubmit}>
        <NumberInput onChange={e => setInputVoltage(Number(e.target.value))} label='Napięcie wejściowe [V]' placeholder='Wpisz wartość napięcia' />
        <NumberInput onChange={e => setResistanceR1(Number(e.target.value))} label='Rezystancja R1 [Ω]' placeholder='Wpisz wartość rezystancji' />
        <NumberInput onChange={e => setResistanceR2(Number(e.target.value))} label='Rezystancja R2 [Ω]' placeholder='Wpisz wartość rezystancji' />
        <CalculatorTools result={result} />
      </StyledForm>
      <CalculatorInfo description={calculatorDescription} schemePath={voltageDividerScheme} formulaPath={voltageDividerFormula} />
    </StyledCalculator>
  );
}

export default VoltageDivider;
