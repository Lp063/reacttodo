import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <title>Todo List</title>
            <h1>Todo List</h1>
            <Link style={pageLink} to="/">Home</Link> | <Link style={pageLink} to="/about">About</Link>
        </header>
    )
}

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

const pageLink={
    color:'white',
    textDecoration:'none'
}

export default Header