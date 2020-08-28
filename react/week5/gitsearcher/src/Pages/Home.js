import React,{useState} from 'react';
import SearcheInput from './SearcheInput';
import GitUsers from './GitUsers';
import HyfCph from './HyfCph'
import '../Css/App.css';

export default function Home () {
    const [users, setUsers] = useState("");
      return (
            <div className={'home'}> 
              <div>
                  <h2>GitUsers: </h2>
                 <SearcheInput users={users} setUsers={setUsers}/> 
                 <GitUsers users ={users} />
            </div>
            <div>
                 < HyfCph />
            </div>
            </div>

      )
}