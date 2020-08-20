import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodoItem extends Component {


    checkBoxStyle =() =>{
        return {
            textDecoration : this.props.todo.checked ? 'line-through' : 'none'
        }
    }


    render() {
        const {id,description, deadline} = this.props.todo;
        return (
            <section className="todoItemsSection">

                <div className="todoItems" style={this.checkBoxStyle()}>
                        <p>
                            <strong>{description}
                            </strong>
                            {": "}
                            {deadline}  
                    </p>
                </div>
               <input type="checkbox"  onChange= {this.props.marked.bind(this,id)} />  
               <input type="button" value={'Delete'}  onClick = {this.props.deleted.bind(this, id)} />
               {
                 description?  <input type="button" onClick= {this.props.edit.bind(this, id)} value={'Edit'} />
                 :
                 <input type="button" onClick= {this.props.edit.bind(this, id)} value={'Update'} /> 
               }

            </section>
        )   
    }


     
}

 // propTypes required
 TodoItem.propTypes={
     todos: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number,
    description : PropTypes.string.isRequired,
    deadline : PropTypes.oneOfType([PropTypes.string , PropTypes.number]).isRequired,
     }))
     
 }

export default TodoItem
