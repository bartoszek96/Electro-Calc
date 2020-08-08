import React, { useState } from 'react';
import StyledCalculator from './Calculators.styles';
import threePhaseScheme from '../../images/schemes/ThreePhase.jpg';
import threePhasePowerFormula from '../../images/formulas/ThreePhasePower.jpg';
import StyledForm from '../../components/shared/Form/Form.styles';
import NumberInput from '../../components/shared/NumberInput/NumberInput';
import CalculatorInfo from '../../components/shared/CalculatorInfo/CalculatorInfo';
import CalculatorTools from '../../components/shared/CalculatorTools/CalculatorTools';

const ThreePhasePower = () => {

  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [cosPhi, setCosPhi] = useState(0);
  const [result, setResult] = useState('Wpisz dane.');

  const calculatorDescription = 'Kalkulator mocy w układzie trójfazowym.';

  const handleSubmit = event => {
    event.preventDefault();
    if (
      voltage >= 0 &&
      current >= 0 &&
      cosPhi >= 0 &&
      cosPhi <= 1
    ) {
      const power = (Math.sqrt(3) * voltage * current * cosPhi) / 1000;
      setResult(`Moc wynosi ${power.toFixed(3)} [kW].`);
    } else {
      setResult('Niepoprawne dane. Wartości napięcia i prądu muszą być nieujemne, a cos φ musi znajdować się w przedziale 0-1.');
    }
  }

  return (
    <StyledCalculator>
      <StyledForm onSubmit={handleSubmit}>
        <NumberInput onChange={e => setVoltage(Number(e.target.value))} label='Napięcie przewodowe [V]' placeholder='Wpisz wartość napięcia' />
        <NumberInput onChange={e => setCurrent(Number(e.target.value))} label='Prąd fazowy [A]' placeholder='Wpisz wartość prądu' />
        <NumberInput onChange={e => setCosPhi(Number(e.target.value))} label='Współczynnik mocy cos φ [-]' placeholder='Wpisz wartość współczynnika mocy' />
        <CalculatorTools result={result} />
      </StyledForm>
      <CalculatorInfo description={calculatorDescription} schemePath={threePhaseScheme} formulaPath={threePhasePowerFormula} />
    </StyledCalculator>
  );
}

export default ThreePhasePower;
