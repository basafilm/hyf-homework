import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';


class App extends Component {

  state = {
    todos: [
      {
        id: 1,
       description: 'Take out of the bed',
       deadline: "Wed Sep 13 2017",
      },
      {
        id: 2,
        description: 'Take Brush teeth',
        deadline: "Wed Thu Sep 14 2017",
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadline: "Fri Sep 15 2017",
      }
    ],
  }
  render(){
    return (
      <div className="App">
        <Todos todos ={this.state.todos} />
      </div>
    )
  };
}

export default App;
