// Libraries
import React from "react";
import classes from './Navigation.module.css';
import routes from '../../../../routes';

// Components
import NavigationItem from "./NavigationItem/NavigationItem";

function Navigation() {
    return (
        <ul className={classes.Navigation}>
            <NavigationItem exact to={routes.HOME}>Home</NavigationItem>
            <NavigationItem to={routes.ARTICLES}>Articles</NavigationItem>
            <NavigationItem exact to={routes.CONTACT}>Contact</NavigationItem>
            <NavigationItem exact to={routes.ADD}>Add</NavigationItem>
        </ul>
    );

}

export default Navigation;