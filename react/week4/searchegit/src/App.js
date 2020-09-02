import React, {useState} from 'react';
import './App.css';
import SearchGithub from './SearchGithub'
import {userContext} from './UserContext'

export default function App() {

 const [user, setUser] = useState('');

  return (

    <div >
      <form >
       <input
        type="text"
        value={user}
        onChange={event => setUser(event.target.value)}
      />
  
       </form>
       <userContext.Provider value={{user:user}}>
       < SearchGithub />
       </userContext.Provider>
    </div>

  );

  }
 
