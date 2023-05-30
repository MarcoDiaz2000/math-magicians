// CalculatorButtons.js
import React from 'react';
import './CalculatorButtons.css';

const CalculatorButtons = () => (
  <div>
    <button type="button" className="button ac">AC</button>
    <button type="button" className="button plus-minus">+/-</button>
    <button type="button" className="button percent">%</button>
    <button type="button" className="button divide">÷</button>
    <button type="button" className="button seven">7</button>
    <button type="button" className="button eight">8</button>
    <button type="button" className="button nine">9</button>
    <button type="button" className="button multiply">x</button>
    <button type="button" className="button four">4</button>
    <button type="button" className="button five">5</button>
    <button type="button" className="button six">6</button>
    <button type="button" className="button subtract">-</button>
    <button type="button" className="button one">1</button>
    <button type="button" className="button two">2</button>
    <button type="button" className="button three">3</button>
    <button type="button" className="button add">+</button>
    <button type="button" className="button zero">0</button>
    <button type="button" className="button dot">.</button>
    <button type="button" className="button equal">=</button>
  </div>
);

export default CalculatorButtons;
