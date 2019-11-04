import React from 'react';

function Header(){
    return(
        <header style={headerStyle}>
            <title>Todo List</title>
            <h1>Todo List</h1>
        </header>
    )
}

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

export default Header