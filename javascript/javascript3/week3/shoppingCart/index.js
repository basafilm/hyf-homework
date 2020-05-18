// Shopping cart using Classes

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency){
            if (currency === "GBP"){
                return this.price / 0.11
            }
            else if(currency === "EUR"){
               return this.price / 0,13
            }
            else if (currency === "USD") {
               return this.price / 0,0.14
            } else {
                return this.price
            }
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(product) {
        const productToRemove= this.products.filter(item =>{
         return item.name !==product.name;
        })
        this.products = productToRemove;
    }

    searchProduct(productName) {
        //const searchBox= document.querySelector('section> input').value
       const serchProduct = this.products.find(({name}) => name === productName.name);
       return serchProduct
    }

    getTotal() {
        // Implement functionality here
        const totallAmunt = this.products.map(p => p.price).reduce( (total , sum) => total + sum )
        return totallAmunt
        
    }

    renderProducts() {
        // Implement functionality here
        const total = this.getTotal()
        const printOut = document.querySelector('div');
        this.products.map(item =>{
           const list= document.createElement('ul')
           list.innerHTML = `<li> Nme : ${item.name.charAt(0).toUpperCase() + item.name.slice(1)} | Price : ${item.price} </li> `
           printOut.appendChild(list)

        });
            const renderTotal = document.createElement('h4')
            renderTotal.innerText =`Total : ${total}`
            printOut.appendChild(renderTotal)
       return printOut
    }

    getUser() {
        // Implement functionality here
        const user = new Promise(resolve => setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json()) 
            .then(result =>{
                const div = document.querySelector('div')
                const addTitle = document.createElement('h4')
                addTitle.innerHTML = "Address: "
                div.appendChild(addTitle)
                for ( let [key, value] of Object.entries(result.address)){
                    const lilist = document.createElement('ul')
                    lilist.innerHTML = `<li>${key} : ${value}</li>`
                    div.appendChild(lilist)
                }
                const company = document.createElement('h4')
                company.innerHTML = "Company: "
                div.appendChild(company)
                for ( let [key, value] of Object.entries(result.company)){
                    const lilist = document.createElement('ul')
                    lilist.innerHTML = `
                    <li>${key} : ${value}</li>`
                    div.appendChild(lilist)
                } 
            console.log(result)
            
            })
            .then(resolve)
            .catch(error => {
                console.error('Error:', error);
            })

        }, 1000));
        
         return user
    
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product('flat-screen', 5000);
const radio = new Product('panasonic' , 1000 )
const tv = new Product('Sony' , 25000 )
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(radio);
shoppingCart.addProduct(tv);
// shoppingCart.searchProduct(flatscreen);

const total= shoppingCart.getTotal()
console.log(total)
console.log(shoppingCart)

// const outPut = shoppingCart.removeProduct()
const printRender = shoppingCart.renderProducts()
console.log(printRender)

const user = shoppingCart.getUser()
console.log(user)

const search = shoppingCart.searchProduct(flatscreen)
console.log(search)

const plant = new Product('plant', 50);
console.log(plant.convertToCurrency('USD')) 