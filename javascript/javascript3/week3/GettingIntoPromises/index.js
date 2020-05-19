//Getting into promises
  let repoUrls = `https://api.github.com/search/repositories?q=user:`;
   const getUrl = async (user) =>{
       const response = await fetch(repoUrls.concat(user))
        const result = await response.json()
        //console.log(result)
        return result
    }
    console.log(getUrl('Aswini-D3'))

  const outPut = async (user1, user2, user3) => {
    const allPromisies = [getUrl(user1),getUrl(user2),getUrl(user3)]
    const getUsers = await Promise.all(allPromisies)
    const users = getUsers.map( result =>result.items)
    const getBody = document.querySelector('body');
    users.map((res) => {
         const h5Tage = document.createElement('h5')
         h5Tage.innerHTML = `Repo's Owner Name : ${res[0].owner.login}`
         getBody.appendChild(h5Tage);
        res.forEach( item => {
          const ulList = document.createElement('ul');
          const liList = document.createElement('li')
          liList.innerHTML =item.name
          ulList.appendChild(liList);
          getBody.appendChild(ulList );
        })
       })
  }
  outPut('Aswini-D3', 'tariqjavid', 'LucyChyzhova');


