import React, { useState, useEffect} from "react";


 function Hyf() {

    const [repos, setRepos] = useState([])
 

    useEffect(() => {

        const fetchData = async () => {

                // read github user
                let githubResponse = await fetch(`https://api.github.com/users/HackYourFuture-CPH/repos`);
                let githubUser = await githubResponse.json();

                setRepos(githubUser)
            
        }
        fetchData()
    });

      const style = {
         listStyle: "none",
      }
            
 return (
            <ul style={style} >
              <h3>Hack Your Future-CPH Repos: </h3>
                { repos.map(repo =>{
                return(
                  <li key={repo.id} >
                  <a style={{textDecoration: 'none'}} href={repo.url}>{repo.name}</a>
                  </li>
                ) 
                })}
             </ul>
 )


 }
            
 export default  Hyf

