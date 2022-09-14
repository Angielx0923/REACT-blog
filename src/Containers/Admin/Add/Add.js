// Librairies
import React, { useState } from "react";

function Add() {
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
        }
    });

    return (
        <h1>Add</h1>
    );
}

export default Add;