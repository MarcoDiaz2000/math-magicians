import React, { useState } from 'react';
import Screen from './Screen';
import CalculatorButtons from './CalculatorButtons';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };
  return (
    <div className="calculator">
      <Screen value={state.next || state.total || '0'} />
      <CalculatorButtons clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
