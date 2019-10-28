import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
//import { ReactComponent } from '*.svg';


class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:"Take out trash",
        completed:false
      },{
        id:2,
        title:"Wash car",
        completed:true
      },{
        id:3,
        title:"Cook Food",
        completed:false
      },{
        id:4,
        title:"Book Train",
        completed:true
      }
    ]
  }

  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  return(){
    return (
      <div className="App">
        <header className="App-header">
          <Todos todos={this.state.todos}  markComplete={this.markComplete} />
        </header>
      </div>
    );
  }
}

export default App;
