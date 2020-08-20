import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

import Todos from './components/Todos';
import Timer from './components/Timer';


class App extends Component {

  constructor(props) {
    super(props);
          this.state =  {
                todos:''
              }

          this.marked = this.marked.bind(this);
          this.deleted = this.deleted.bind(this);
          this.edit = this.edit.bind(this);
          this.onSubmit = this.onSubmit.bind(this)
          this.handleInputChange = this.handleInputChange.bind(this);
        };
   

  componentDidMount =() =>{

    const url = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    fetch(url)
    .then(response => response.json())
    .then(data => {
     data.forEach(element => {
        const todo = {
            id : element.id ,
            description: element.description,
            deadline: element.deadline,
            checked: false,
        };
          this.setState({
            todos: [...this.state.todos, todo]
          })
          
         })  
       })
    };

    onSubmit(e){
      e.preventDefault();
      const newItem = {
        id : uuid(4),
        description: this.state.description,
        deadline: this.state.deadline,
        checked: false,
      };

        this.setState({
          todos: [...this.state.todos, newItem]
        })
        // e.target.reset()
    }

    handleInputChange(e) {
      e.stopPropagation();
        this.setState({
          [e.target.name]: e.target.value,
        }); 
    }

  marked =(id) =>{
    this.setState({ todos : this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.checked = !todo.checked
        }
        return todo
      })});
  }


  edit(id , e ){   
 this.setState(prevState => {
            const newList = prevState.todos.map(todo => {
                if (id === todo.id) {
                    return {
                        ...todo,
                        description: prevState.description,
                        deadline: prevState.deadline,
                    };
                }
                return todo;
            });
            return { todos: newList };
        });
    e.preventDefault();
    }


  deleted = (id) => {
    const deletedItems = this.state.todos.filter(todo => {
      return todo.id !==id
    })
    this.setState({
     todos: [...deletedItems]
    })
    if (deletedItems.length === 0) {
    
      this.setState({    
         message: " No item left, please add! "  
       })
    }
  }


  render = () => {
    const {message, todos } = this.state;
    return (
      <div className="App">
       <Timer />
       <form className="inputTodoForm" onSubmit={this.onSubmit} >
          <label>
              Description
              <input name="description" 
              type="text" 
              value ={this.state.todos.name} 
              onChange={this.handleInputChange}
              />
          </label>
          <br />
          <label>
                DeadLine
              <input name="deadline" 
              type="date"  
              value={this.state.name}
              placeholder={'yyyy-mm-dd'}  
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value= "Add Items" />
       </form>
       
        <div className="rendredItems">
              {
              todos.length === 0 && 
              <p>{message}</p>
              } 

              {
              todos.length > 0 &&
              <Todos todos ={this.state.todos}  
              marked={this.marked} 
              deleted= {this.deleted}
              edit = {this.edit} 

              />
              }
              
        </div>
   
      </div>
    )
  };
}

export default App;
