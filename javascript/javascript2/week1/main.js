//const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
const products = getAvailableProducts()
console.log(products);

function renderProducts(products){
    const ulTag = document.querySelector('section.products > ul');
    for (let i=0; i<products.length; i++){
        const productsItem= products[i];
        ulTag.innerHTML = 
        `<li> |${productsItem.name}| </li>
        <li>|${productsItem.price}|</li>
        <li>|${productsItem.rating}|</li>`;
    const shipedCountry =productsItem.shipsTo;
    console.log(shipedCountry)
    shipedCountry.forEach(country => {
        let liTag_2 =document.createElement('li');
        ulTag.appendChild(liTag_2);
        liTag_2.innerHTML += country;
        return country
    });
    }    
};
renderProducts(products);


console.log('Script loaded');

//console.log(getAvailableProducts());
