// Libraries
import React, { useState } from "react";
import classes from './Add.module.css'

// Components
import Input from '../../../Components/UI/Input/Input';

function Add() {
    // STATE
    const [inputs, setInputs] = useState({
        title: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: "Article's title"
            },
            value: '',
            label: 'Title',
            // Valid = false set the input to false if it is empty
            valid: false,
            // Rules
            validation: {
                required: true,
                minLength: 5,
                maxLength: 30
            },
            touched: false
        },
        content: {
            elementType: 'textarea',
            elementConfig: {},
            value: '',
            label: "Article's content",
            valid: false,
            validation: {
                required: true
            },
            touched: false
        },
        author: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: "Author's name"
            },
            value: '',
            label: 'Author',
            valid: false,
            validation: {
                required: true
            },
            touched: false
        },
        state: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: true, displayValue: 'Draft'},
                    {value: false, displayValue: 'Published'},
                ]
            },
            value: '',
            label: 'State',
            valid: true,
            validation: {}
        }
    });

    const [valid, setValid] = useState(false);

    const checkValidity = (value, rules) => {
        // Input set to true by default
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid; 
        }

        return isValid;
    }

    // Functions
    const inputChangedHandler = (event, id) => {
        // Change the value
        const newInputs = {...inputs};
        newInputs[id].value = event.target.value;

        // Set by default touched to true
        newInputs[id].touched = true;

        // Check if the value is valid
        newInputs[id].valid = checkValidity(event.target.value, newInputs[id].validation);

        setInputs(newInputs);

        // Check if form is valid
        let formIsValid = true;
        for(let input in newInputs) {
            formIsValid = newInputs[input].valid && formIsValid;
        }
        setValid(formIsValid);
    };

    const formHandler = event => {
        event.preventDefault();
    };

    // Variables
    const formElmtArray = [];
    // Converting the object into an array to make it usable for methode .map
    for (let key in inputs) {
        formElmtArray.push({
            id: key,
            config: inputs[key]
        });
    };

    let form = (
        <form className={classes.Form} onSubmit={(e) => formHandler(e)}>
            {formElmtArray.map(formElmt => (
                <Input 
                    key={formElmt.id}
                    id={formElmt.id}
                    value={formElmt.config.value}
                    label={formElmt.config.label}
                    type={formElmt.config.elementType}
                    config={formElmt.config.elementConfig}
                    valid={formElmt.config.valid}
                    touched={formElmt.config.touched}
                    changed={(e) => inputChangedHandler(e, formElmt.id)}
                />
            ))}
            <input className={classes.submit} type="submit" value="Save" disabled={!valid}></input>
        </form>
    );

    return (
        <div>
            <h1>Add</h1>
            {form}
        </div>
    );
}

export default Add;