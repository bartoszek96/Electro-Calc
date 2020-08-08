import React, { useState } from 'react';
import StyledCalculator from './Calculators.styles';
import threePhaseScheme from '../../images/schemes/ThreePhase.jpg';
import threePhaseCurrentFormula from '../../images/formulas/ThreePhaseCurrent.jpg';
import StyledForm from '../../components/shared/Form/Form.styles';
import NumberInput from '../../components/shared/NumberInput/NumberInput';
import CalculatorInfo from '../../components/shared/CalculatorInfo/CalculatorInfo';
import CalculatorTools from '../../components/shared/CalculatorTools/CalculatorTools';

const ThreePhaseCurrent = () => {

  const [voltage, setVoltage] = useState(0);
  const [power, setPower] = useState(0);
  const [cosPhi, setCosPhi] = useState(0);
  const [result, setResult] = useState('Wpisz dane.');

  const calculatorDescription = 'Kalkulator prądu fazowego w układzie trójfazowym.';

  const handleSubmit = event => {
    event.preventDefault();
    if (
      voltage > 0 &&
      power >= 0 &&
      cosPhi > 0 &&
      cosPhi <= 1
    ) {
      const current = (power * 1000) / (Math.sqrt(3) * voltage * cosPhi);
      setResult(`Prąd fazowy wynosi ${current.toFixed(3)} [A].`);
    } else {
      setResult('Niepoprawne dane. Wartości napięcia i współczynnika mocy muszą być dodatnie oraz cos φ musi znajdować się w przedziale 0-1.');
    }
  }

  return (
    <StyledCalculator>
      <StyledForm onSubmit={handleSubmit}>
        <NumberInput onChange={e => setVoltage(Number(e.target.value))} label='Napięcie przewodowe [V]' placeholder='Wpisz wartość napięcia' />
        <NumberInput onChange={e => setPower(Number(e.target.value))} label='Moc [kW]' placeholder='Wpisz wartość mocy' />
        <NumberInput onChange={e => setCosPhi(Number(e.target.value))} label='Współczynnik mocy cos φ [-]' placeholder='Wpisz wartość współczynnika mocy' />
        <CalculatorTools result={result} />
      </StyledForm>
      <CalculatorInfo description={calculatorDescription} schemePath={threePhaseScheme} formulaPath={threePhaseCurrentFormula} />
    </StyledCalculator>
  );
}

export default ThreePhaseCurrent;
