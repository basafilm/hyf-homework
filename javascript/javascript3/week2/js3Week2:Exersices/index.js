// // Exercise 1
const myfunction=async()=>{
const url ="https://yesno.wtf/api"
const response= await fetch(url)
const result = await response.json()
console.log(result)
};
myfunction();

// // Exercise 2
// // fetch yes or no from this api: https://yesno.wtf/api. log out the answer
// // Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message

const mySecoundFunction= async()=>{
try {
const secUrl="https://yesno.wtf/api"
const res =await fetch(secUrl);
const result =await res.json()
console.log(result)
}catch(error){
    console.log("error" + error)
}
}
mySecoundFunction()

const returnErrorFunction= async()=>{
    try {
        const secUrl="https://knajskdskj.jasdk"
    const res =await fetch(secUrl);
    const result =await res.json()
    console.log(result)
    }catch(error){
        console.log("error " + error)
    }
    }
// returnErrorFunction()
// // Exercise 3
// // Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds.
// // Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console.

const helloFunction=(sayHello)=>{
return new Promise((resolve, reject)=>{
setTimeout(()=>{
    if(sayHello){
        resolve()  
    } else {
        reject() 
    }
},4000)
})
};
helloFunction(true)
.then( response=>{
    console.log("Hello ") 
})
.catch( e=>{
    console.log("error " )
});


// Exercise 4
// Create a function that returns a promise, that i can use like this:

// getLoggedInUsers should wait 5 seconds before it resolves with the users! 
// Sometimes it should resolve and sometimes it should reject. 
// Look into Math.random

const getLoggedInUsers =()=>{
 return new Promise ((resolve, reject)=>{
    const users = ['benna', 'magdy', 'carolina']
    const returnUsers = users[Math.floor(Math.random() * users.length)]
    setTimeout(()=>{
        if(Math.random()> 0.5) {
            resolve(returnUsers)
        } else {
            reject('This is an error!')  
        }
    },1000)
})
};
getLoggedInUsers()
.then(users => {
console.log('This is the user ' +users); // ['benna', 'magdy', 'carolina']
}).catch(error => {
console.log("error " + error);
});

// Exercise 5
// Using chaining

// Fetch the astronauts
// http://api.open-notify.org/astros.json

// After the astronauts has been fetched, fetch movies using this api
// https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json

// Log out the movies


const urlImage= 'http://api.open-notify.org/astros.json'
const secontUrl = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
fetch(urlImage)
.then(res => res.json())
.then( result =>{
    console.log(result)
return fetch(secontUrl)
})
.then( response=> response.json())
.then(result =>{
    const allTitles= result.map(title => title.title)
    console.log(allTitles)
})
.catch( er=>{
    console.error(er)
})

// Exercise 6
// Get the astronauts and the movies at the same time. Log out the movies and the astronauts when both promises has been resolved.
const url1=fetch(urlImage)
const url2=fetch(secontUrl)
const allApi = [url1, url2 ]
Promise.all(allApi)
.then(response => {
    const outPut=response.map(result=> result.json())
    // let url1= response[0].json()
    //  let url2= response[1].json()
      return Promise.all(outPut)
})

.then(result =>{
    console.log(result)
});

Promise.race(allApi)
.then(result=>{
    console.log(result)
})