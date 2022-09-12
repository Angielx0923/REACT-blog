// Libraries
import React from "react";
import classes from "./Contact.module.css";
import { Route } from 'react-router-dom';

function Contact(props) {
    const emailClickedHandler = () => {
        props.history.push('/contact/email');
    }

    const linkedinClickedHandler = () => {
        props.history.push('/contact/linkedin');
    }

    return (
        <>
            <h1>Contact</h1>

            <button onClick={emailClickedHandler} className={classes.button}>Email</button>
            <button onClick={linkedinClickedHandler} className={classes.button}>LinkedIn</button>

            <Route path="/contact/email" render={() => <p>contact@angelinamachova.com</p>} />
            <Route path="/contact/linkedin" render={() => <p>linkedin.com/in/a-lm/</p>} />
        </>
    );
}

export default Contact;