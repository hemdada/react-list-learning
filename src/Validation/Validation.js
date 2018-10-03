import React from 'react';
import './Validation.css';

const validation = (props) => {
    const MAX_LENGTH = 5;
    let displayText = "";
    if (props.inputTextLength < MAX_LENGTH) {
        displayText = "Text too short";
    } else {
        displayText = "Text long enough";
    }
    return (
        <div className="Validation">
        <p>Validation Component</p>
        <p>{displayText}</p>
        </div>
    );
};

export default validation;