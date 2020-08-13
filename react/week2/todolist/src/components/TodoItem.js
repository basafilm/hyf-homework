import React, { Component } from 'react'
import propTypes from 'prop-types'


export class TodoItem extends Component {

    checkBoxStyle() {
        return {
            textDecoration : this.props.todo.checked ? 'line-through' : 'none'
        }
    }


    render() {
        const {id, description, deadline} = this.props.todo;
        return (
            <div className="todoItemsSection">
                <div className="todoItems" style={this.checkBoxStyle()}>
                        <p >
                            <strong>{description}
                            </strong>
                            {": "}
                            {deadline}  
                    </p>
                </div>
               <input type="checkbox"  onChange= {this.props.marked.bind(this,id)} />  
               <input type="button" value={'Delete'}  onClick = {this.props.deleted.bind(this, id)} />
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
