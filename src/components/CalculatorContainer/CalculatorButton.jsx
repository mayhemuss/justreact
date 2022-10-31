import React from 'react';

function CalculatorButton(props) {
    return (
        <div className={"buttons " + props.buttonType}>
            {props.children}
        </div>
    );
}

export default CalculatorButton;