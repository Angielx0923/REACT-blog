// Libraries
import React from "react";
import classes from './Input.module.css';

function Input(props) {
    let inputElmt;
    const inputClasses = [];

    // Add class invalid to input not checking the rules
    if(!props.valid && props.touched) {
        inputClasses.push(classes.invalid);
    }

    // eslint-disable-next-line default-case
    switch(props.type) {
        case('input'):
            inputElmt = (
                <input
                    {...props.config}
                    value={props.value}
                    className={inputClasses}
                    id={props.id}
                    onChange={props.changed}
                />
            );
            break;
        case('textarea'):
            inputElmt = (
                <textarea value={props.value} className={inputClasses} id={props.id} onChange={props.changed}></textarea>
            );
            break;
        case('select'):
            inputElmt = (
                <select value={props.value} id={props.id} onChange={props.changed}>
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
            <label htmlFor={props.id}>{props.label}</label>
            {inputElmt}
        </div>
    );
}

export default Input;