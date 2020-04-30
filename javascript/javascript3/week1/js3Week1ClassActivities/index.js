const order = `{
    "Name": "Pittza",
    "Id": "12",
    "price": "50",
    "list of drings": ["COC", "Pipsi", "wather"],
    "order extras":["cheese", "suse", "salt"]
    }`
    console.log(typeof order)
    const toObj = JSON.parse(order)
    console.log(toObj)

    const backJas = JSON.stringify(toObj)
    console.log(backJas)


//API
const url = `http://api.open-notify.org/astros.json`
fetch(url)
.then(response =>response.json())
.then(resulte =>{
    console.log(resulte)
    const getName= resulte.people.map(person=> {
        return `<li>${person.name}</li>`
    })
    const body =document.querySelector('body')
    const outPut = `
    <ul>
        ${getName.join('')}
    </ul>`
    body.innerHTML =outPut
})

// dog Lovers 

const imageRandom = (()=>{
    const urlDo =`https://dog.ceo/api/breeds/image/random`
    fetch(urlDo)
    .then(response => response.json())
    .then(resulte =>{
        console.log(resulte)
        const getImage = resulte.message
        const outPut = `<img src="${getImage}" />`
        const body = document.querySelector('body')
    
    body.innerHTML =`${outPut}`
    })
    const animName = `https://dog.ceo/api/breeds/list/all`
    fetch(animName)
    .then(response => response.json())
    .then(names =>{
        console.log(names)
   const getName = names.message 
   const name = Object.keys(getName)
   const allNames = name.length
   const randomIndex =Math.floor(Math.random() * name.length)
   const randomBreeds = name[randomIndex]
   const breedUrl =` https://dog.ceo/api/breed/${randomBreeds}/images/random`
   fetch(breedUrl)
   .then(response=>response.json())
   .then(resultAll =>{
    console.log(resultAll)
    const getImage = resultAll.message
    const body = document.querySelector('body')
    const outPutAll = `
    <img src="${getImage}" />
    <p> ${randomBreeds}</p>
    `
    
       body.innerHTML=`${outPutAll}`
})
})

})

setInterval(imageRandom , 2000)


