//const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
const products = getAvailableProducts()
console.log(products);

function renderProducts(products){
    const ulFirstSet = document.querySelector('section.products > ul');
    products.forEach(element => {
        const liList = document.createElement('li');
        const countries= element.shipsTo.reduce((accumulator , currentvalue)=> `<ul><li>${accumulator}</li><li>${currentvalue}</li></ul>`);
        liList.innerHTML = `
        <ul>
          <li> |${element.name}| </li>
          <li>|${element.price}|</li>
          <li>|${element.rating}|</li>
          <li>|${countries}|</li>
        </ul>`;
        ulFirstSet.appendChild(liList);
    });        
};
renderProducts(products);


// week- 2 homework, Doubling of number
let numbers = [1, 2, 3, 4];
const doubleOdNumber= numbers.filter((value)=>{
    return value %2 ===0;
}).map((value)=> value *2);
console.log(doubleOdNumber);



const searchBar = document.querySelector('div.search > input');
const productNames = document.querySelector('div.products >ul'); 

searchBar.addEventListener('keyup', filterproducts);
function filterproducts(){
    productNames.textContent = '';
    const filteredData = products.filter(element => element.name.toLowerCase().includes(searchBar.value));
    renderProducts(filteredData);
};
renderProducts(products);
