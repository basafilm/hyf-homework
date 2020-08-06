import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid'
import Todos from './components/Todos';


class App extends Component {

  constructor(props) {
    super(props);
          this.state =  {
            count : 0,
            todos: [
              {
              id: uuid(4),
              description: 'Take out of the bed',
              deadline: "Wed Sep 13 2017",
              checked: false,
              },
              {
                id: uuid(4),
                description: 'Take Brush teeth',
                deadline: "Wed Thu Sep 14 2017",
                checked: false,
              },
              {
                id: uuid(4),
                description: 'Eat breakfast',
                deadline: "Fri Sep 15 2017",
                checked: false,
              }
            ],
          }
          this.marked = this.marked.bind(this);
          this.deleted = this.deleted.bind(this);
        };
      
  addItem = () => {
    
    const randomDesciptions = ['Take out of the bed', 'Take Brush teeth', 'Eat breakfast', ' walking on the jongle'];
    const randomDeadlines = ["Wed Sep 13 2017", "Wed Thu Sep 14 2017", "Fri Sep 15 2017"];

      const newItem = {
        id : uuid(4),
        description: randomDesciptions[Math.floor(Math.random() * randomDesciptions.length)],
        deadline: randomDeadlines[Math.floor(Math.random() * randomDeadlines.length )],
        checked: false
      };

    this.setState({
      todos: [...this.state.todos, newItem]
    })

  }

  marked =(id) =>{
    this.setState({ todos : this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.checked = !todo.checked
        }
        return todo
      })});
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
    const {message, todos, count } = this.state;
    return (
      <div className="App">
      <p className="playDate"> You are spending <strong>{count} </strong>secounds in this website</p>
        <input type="button" onClick={this.addItem}  value= "Add Items" />

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
              />
              }
        </div>
   
      </div>
    )
  };

  // timer count
              componentDidMount(){
                  this.getDate = setInterval(()=>{
                    this.setState(prevState => ({
                    count : prevState.count + 1
                    }))
                  }, 1000);
              }
              
              componentWillUnmount(){
                  clearInterval(this.getDate);
              } ; 

}

export default App;
