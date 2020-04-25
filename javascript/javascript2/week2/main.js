
console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);


// week- 2 homework, Doubling of number
let numbers = [1, 2, 3, 4];
const doubleOdNumber= numbers.filter((value)=>{
    return value %2 ===0;
}).map((value)=> value *2);
console.log(doubleOdNumber);



const searchBar = document.querySelector('div.search > input');
const productNames = document.querySelector('section.products ul '); 
//console.log(productNames)

searchBar.addEventListener('keyup', filterproducts);
function filterproducts(){
    productNames.textContent = '';
    const filteredData = products.filter(product => product.name.toLowerCase().includes(searchBar.value));
    renderProducts(filteredData);
};
renderProducts(products);

const sortItems = document.querySelector('.sort > select');
console.log(sortItems);
sortItems.addEventListener('change',sortProducts)
function sortProducts(){
    const items =sortItems.value; 
    // console.log(items)
    //const items = sortItems.options[sortItems.selectedIndex].value;
    for ( let i=0; i<items.length; i++ ){
        // const item =items[i];
        // console.log(item)
    if( items==='cheap'){
      const cheapItems = products.sort((a, b)=> a.price - b.price);
      //console.log(cheapItems)
      renderProducts(cheapItems);
    } if(items==='expensive') {
        const expensiveItems = products.sort((a, b)=>b.price - a.price);
        renderProducts(expensiveItems);
    }
    }
};
sortProducts(products);


// sortItems.addEventListener('change', () =>{
//     const items = sortItems.options[sortItems.selectedIndex].value;
//     console.log(items)
//     if(items==='cheap'){
//         const cheapItems = products.sort((a, b)=> a.price - b.price);
//         renderProducts(cheapItems); 
//     }
// if (items==='expensive'){
//     const expensiveItems = products.sort((a, b)=>a.price - a.price);
//     renderProducts(expensiveItems);
// }
// return products;
// })
