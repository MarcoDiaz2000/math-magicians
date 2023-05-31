import React from 'react';
import PropTypes from 'prop-types';
import './CalculatorButtons.css';

const CalculatorButtons = ({ clickHandler }) => {
  const handleClick = (buttonName) => () => clickHandler(buttonName);

  return (
    <div>
      <button type="button" className="button ac" onClick={handleClick('AC')}>AC</button>
      <button type="button" className="button plus-minus" onClick={handleClick('+/-')}>+/-</button>
      <button type="button" className="button percent" onClick={handleClick('%')}>%</button>
      <button type="button" className="button divide" onClick={handleClick('÷')}>÷</button>
      <button type="button" className="button seven" onClick={handleClick('7')}>7</button>
      <button type="button" className="button eight" onClick={handleClick('8')}>8</button>
      <button type="button" className="button nine" onClick={handleClick('9')}>9</button>
      <button type="button" className="button multiply" onClick={handleClick('x')}>x</button>
      <button type="button" className="button four" onClick={handleClick('4')}>4</button>
      <button type="button" className="button five" onClick={handleClick('5')}>5</button>
      <button type="button" className="button six" onClick={handleClick('6')}>6</button>
      <button type="button" className="button subtract" onClick={handleClick('-')}>-</button>
      <button type="button" className="button one" onClick={handleClick('1')}>1</button>
      <button type="button" className="button two" onClick={handleClick('2')}>2</button>
      <button type="button" className="button three" onClick={handleClick('3')}>3</button>
      <button type="button" className="button add" onClick={handleClick('+')}>+</button>
      <button type="button" className="button zero" onClick={handleClick('0')}>0</button>
      <button type="button" className="button dot" onClick={handleClick('.')}>.</button>
      <button type="button" className="button equal" onClick={handleClick('=')}>=</button>
    </div>
  );
};

CalculatorButtons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CalculatorButtons;
