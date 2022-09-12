// Libraries
import React from "react";
import classes from './Layout.module.css';

// Components
import Header from "../../Components/Contact/Header/Header";

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
}

export default Layout;