import React, {useState, useEffect, useContext} from 'react';
import {userContext} from './UserContext'


function SearcheGit() {
  const {user} = useContext(userContext);

  const [data, setData] = useState([]);

  useEffect(() => {

    if (!user) return;

          const fetchData = async () => {
                let response = await fetch(`https://api.github.com/search/users?q=${user}`);
                let resulte = await response.json()
        
                setData(resulte.items);
              
          };
      
          fetchData();
        }, [user]);
  
              if (!user) {
                return `No results `
              }
              if (data.length ===0) {
                return 'Loding ...'
              }


  return (
    <React.Fragment>

      <ul style={{listStyle: "none"}} >
        {data.map(item =>{
           return (
            <li key={item.id} >
            <a style={{textDecoration: 'none'}} href={item.url}>{item.login}</a>
            </li>
           )}
        )}
      </ul>
    </React.Fragment>
  );
}

export default SearcheGit;