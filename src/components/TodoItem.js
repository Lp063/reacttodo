import React,{ Component } from 'react';
//import PropTypes from 'prop-types';

class TodoItem extends Component{

  getStyle = () => {
    return{
      backgroundColor:'f4f4f4f4',
      padding:'10px',
      borderBottom:'1px ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
  }

  render(){

    const {id,title,completed}=this.props.todo;

    return (
        <div style={this.getStyle()}>
            <p>
            <input type="checkbox" name="" id={id} onChange={this.props.markComplete.bind(this, id)} checked={completed} />{' '}
            { title }
            </p>
        </div>
    )
  }
}



export default TodoItem;
