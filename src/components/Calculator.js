import React from "react";
import Screen from "./Screen";
import CalculatorButtons from "./CalculatorButtons";

const Calculator = () => {
    return (
        <div>
            <Screen value='0' />
            <CalculatorButtons />
        </div>
    );
}

export default Calculator;