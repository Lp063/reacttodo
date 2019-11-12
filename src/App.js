import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/addTodo';
import About from './components/pages/About';
import uuid from 'uuid';
//import { ReactComponent } from '*.svg';


class App extends Component {
  state = {
    todos:[
      {
        id:uuid.v4(),
        title:"Take out trash",
        completed:false
      },{
        id:uuid.v4(),
        title:"Wash car",
        completed:true
      },{
        id:uuid.v4(),
        title:"Cook Food",
        completed:false
      },{
        id:uuid.v4(),
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

  //add Todo
  addTodo = (title) =>{
    console.log(title);
    const newTodo={
      id:uuid.v4(),
      title,
      completed:false
    };
    this.setState({ todos:[...this.state.todos, newTodo]});
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
              </React.Fragment>
            )}/>
            <Route path="/about" render={props=>(
              <React.Fragment>
                <About />
              </React.Fragment>
            )}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
