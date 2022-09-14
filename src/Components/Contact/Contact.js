// Libraries
import React from "react";
import classes from "./Contact.module.css";
import { Route } from 'react-router-dom';

function Contact(props) {
    const emailClickedHandler = () => {
        props.history.push(props.match.url + '/email');
    }

    const linkedinClickedHandler = () => {
        props.history.push(props.match.url + '/linkedin');
    }

    return (
        <>
            <h1>Contact</h1>

            <button onClick={emailClickedHandler} className={classes.button}>Email</button>
            <button onClick={linkedinClickedHandler} className={classes.button}>LinkedIn</button>

            <Route path={props.match.url + '/email'} render={() => <p>contact@angelinamachova.com</p>} />
            <Route path={props.match.url + '/linkedin'} render={() => <p>linkedin.com/in/a-lm/</p>} />
        </>
    );
}

export default Contact;