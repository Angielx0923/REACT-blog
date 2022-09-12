// Libraries
import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to="/articles/1">My article</Link>
            <Link to={{
                hash: '#projects'
            }}>Ancre</Link>
        </>
    );
}

export default Home;