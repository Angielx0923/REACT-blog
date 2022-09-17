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
            label: 'Title'
        },
        content: {
            elementType: 'textarea',
            elementConfig: {},
            value: '',
            label: "Article's content"
        },
        author: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: "Author's name"
            },
            value: '',
            label: 'Author'
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
            label: 'State'
        }
    });

    // Variables
    const formElmtArray = [];
    // Converting the object into an array to make it usable for methode .map
    for (let key in inputs) {
        formElmtArray.push({
            id: key,
            config: inputs[key]
        });
    }

    let form = (
        <form>
            {formElmtArray.map(formElmt => (
                <Input 
                    key={formElmt.id}
                    value={formElmt.config.value}
                    label={formElmt.config.label}
                    type={formElmt.config.elementType}
                    config={formElmt.config.elementConfig}
                />
            ))}
            <input className={classes.Input} type="submit" value="Send"></input>
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