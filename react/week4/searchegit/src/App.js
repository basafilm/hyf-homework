import React, {useState} from 'react';
import './App.css';
import SearcheGit from './SearcheGit'
import {userContext} from './UserContext'

export default function App() {

 const [user, setUser] = useState('');
 const [searche, setSearche] = useState(user ||'');

 const onSubmit = (e) => {
        e.preventDefult();
        setSearche(searche)      
 }



  return (

    <div >
      <form onSubmit={onSubmit}>
       <input
        type="text"
        value={user}
        onChange={event => setUser(event.target.value)}
      />
  
       </form>
       <userContext.Provider value={{user:user}}>
       < SearcheGit  user={user} />
       </userContext.Provider>
    </div>

  );

  }
 
