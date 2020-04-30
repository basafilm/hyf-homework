const myObject={
    name: "Malek",
    SecondName:"Shafi'i",
    skils :[' writing, editing, photography'],
    freinds : [
        {
          name : "Meir" ,
          secondName: "Noori"
        },
        {
            name : "Ahmad",
            SecondName :"Poori"
        }
    ]
}
const toJason = JSON.stringify(myObject)
console.log(toJason)
const backToObject = JSON.parse(toJason)
console.log(backToObject.freinds)
const gateFreindsName =backToObject.freinds.map(name => {
    console.log(name.name)
});

//API

const nameUrl= `https://myfakeapi.com/api/cars/`
fetch(nameUrl)
.then(res =>res.json())
.then(resulte1=>{
const carsName = resulte1.cars
console.log(carsName)
const allNames = carsName.map( car=>{
    return `<li>${car.car}</li>`
});
 const price= carsName.map(price=>{
    return `<li>${price.price}</li>`
 })
 const model = carsName.map(model=>{
     return `<li>${model.car_model}</li>`
 })
const outPutNames = `<ul>${allNames.join('')} </ul> `
const outPutPrices = `<ul>${price.join('')} </ul> `
const outPutModels = `<ul>${model.join('')} </ul> `
    
    const nameOftheCars =document.querySelector('table').rows[0].cells;
    //console.log(nameOftheCars)
    nameOftheCars[0].innerHTML =`Name: ${outPutNames}`
    const priceOftheCars =document.querySelector('table').rows[0].cells;
    //console.log(priceOftheCars)
    priceOftheCars[1].innerHTML =`Parice: ${outPutPrices}`
    const modelOftheCars =document.querySelector('table').rows[0].cells;
    modelOftheCars[2].innerHTML =`Model: ${outPutModels}`
})