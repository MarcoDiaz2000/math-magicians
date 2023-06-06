import React from 'react';
import Calculators from '../components/Calculators';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator-container">
    <div className="calculator-text">
      <h1>
        Let&apos;s do some math!
      </h1>
    </div>
    <div className="calculator-body">
      <Calculators />
    </div>
  </div>
);

export default Calculator;
