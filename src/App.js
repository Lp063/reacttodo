import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
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

  // toggle complete
  markComplete = (id) =>{
    this.setState({ todos: this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // delete todo
  delTodo =(id)=>{
    this.setState({ 
      todos:[...this.state.todos.filter(todo =>todo.id !== id )] 
    });
  }
  render(){
    return (
      <div className="App">
          <Header />
          <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
