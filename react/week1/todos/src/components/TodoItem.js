import React, { Component } from 'react'
import propTypes from 'prop-types'


export class TodoItem extends Component {
    render() {
        return (
            <div className="todoItems">
               <h3>{this.props.todo.description}:</h3>
               <p>{this.props.todo.deadline}</p>   
            </div>
        )
    }
      // propTypes required
  TodoItem ={
            description : propTypes.string.isRequired,
            deadline : propTypes.oneOfType([propTypes.string , propTypes.number]).isRequired,
         }
}

export default TodoItem
