//Getting into promises

  let names =['Aswini-D3', 'tariqjavid', 'LucyChyzhova' ]
  let repositories = names.map(name=> fetch(`https://api.github.com/search/repositories?q=user:${name}`));
  const prom= Promise.all(repositories)
   setTimeout(async function() {
       return prom
       .then(response =>{
        const swiniRepo = response[0].json()
        const tariqRepo = response[1].json()
        const lucyRepo = response[2].json()
        return Promise.all([swiniRepo,tariqRepo,lucyRepo ])
    })
    //render the fullname of the repo, url of the repo, and the owner
    .then((result) =>{
      console.log( result)
      const arryOfObjects = result.map(re=> re.items);
            arryOfObjects.forEach(item =>{
             const repoNames = `<li> Full Name Of the Repo :  ${item[0].full_name}</li>`;
             const urlRepos = `<li> Url of the Repo :  ${item[0].html_url}</li>`
             const ownerOftheRepo = `<li> Owner of the Repo :  ${item[0].owner.login}</li>`
         
 
         const outPut = document.querySelector('div')
         const lists =document.createElement('ul');
         outPut.appendChild(lists)
         lists.innerHTML =`
          ${repoNames}
         ${urlRepos}
          ${ownerOftheRepo}
         
         `
     }) 
    })
   }, 2000)
   

