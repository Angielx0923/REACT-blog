// Libraries
import React from "react";
import classes from './Input.module.css';

function Input(props) {
    let inputElmt;

    // eslint-disable-next-line default-case
    switch(props.type) {
        case('input'):
            inputElmt = (
                <input
                    {...props.config}
                    value={props.value}
                />
            );
            break;
        case('textarea'):
            inputElmt = (
                <textarea value={props.value}></textarea>
            );
            break;
        case('select'):
            inputElmt = (
                <select value={props.value}>
                    {props.config.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElmt}
        </div>
    );
}

export default Input;