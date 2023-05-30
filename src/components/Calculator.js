import React from 'react';
import Screen from './Screen';
import CalculatorButtons from './CalculatorButtons';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <Screen value="0" />
    <CalculatorButtons />
  </div>
);

export default Calculator;
