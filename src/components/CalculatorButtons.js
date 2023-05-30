// CalculatorButtons.js
import React from "react";
import './CalculatorButtons.css';

const CalculatorButtons = () => {
    return (
        <div>
            <button className='button ac'>AC</button>
            <button className='button plus-minus'>+/-</button>
            <button className='button percent'>%</button>
            <button className='button divide'>÷</button>
            <button className='button seven'>7</button>
            <button className='button eight'>8</button>
            <button className='button nine'>9</button>
            <button className='button multiply'>x</button>
            <button className='button four'>4</button>
            <button className='button five'>5</button>
            <button className='button six'>6</button>
            <button className='button subtract'>-</button>
            <button className='button one'>1</button>
            <button className='button two'>2</button>
            <button className='button three'>3</button>
            <button className='button add'>+</button>
            <button className='button zero'>0</button>
            <button className='button dot'>.</button>
            <button className='button equal'>=</button>
        </div>
    );
}

export default CalculatorButtons;
