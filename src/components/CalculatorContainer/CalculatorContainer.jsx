import React from 'react';
import "./calculator.css"
import CalculatorButton from './CalculatorButton';
import CalculatorNumb from './CalculatorNumb';

function CalculatorContainer(props) {
    return (
        <div className='calculator_container'>
            <CalculatorNumb/>
            <CalculatorButton>
                AC
            </CalculatorButton>
        </div>
    );
}

export default CalculatorContainer;