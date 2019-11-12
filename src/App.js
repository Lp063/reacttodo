import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/addTodo';
import About from './components/pages/About';
import Axios from 'axios';
//import { ReactComponent } from '*.svg';


class App extends Component {
  state = {
    todos:[]
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(
      res=>this.setState({ todos:res.data })
    )
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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(
      res => this.setState({ 
        todos:[...this.state.todos.filter(todo =>todo.id !== id )] 
      })
    );
  }

  //add Todo
  addTodo = (title) =>{
    Axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    }).then(
      res => this.setState({ todos:[...this.state.todos, res.data]})
    );
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
