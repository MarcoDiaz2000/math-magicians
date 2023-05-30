import React from "react";
import Button from "./Button";

const CalculatorButtons = () => {
    const buttons = [
        'AC', '+/-', '%', '÷',
        '7', '8', '9', 'x',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '=',
    ];
    return (
        <div>
            {buttons.map(label => <Button key={label} label={label} />)}
        </div>
    );
}

export default CalculatorButtons;