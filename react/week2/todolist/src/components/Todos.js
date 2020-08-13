import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types'

class Todos extends Component {

  render(){
    return this.props.todos.map((todo)=>(
    <TodoItem key={todo.id} todo={todo} marked={this.props.marked} deleted = {this.props.deleted}/>
    ))
  };
  
    // propTypes required
    Todos ={
        todos : propTypes.array.isRequired,
    }
}


export default Todos;
