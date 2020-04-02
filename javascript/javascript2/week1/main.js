//const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
const products = getAvailableProducts()
console.log(products);

function renderProducts(products){
    const ulFirstSet = document.querySelector('section.products > ul');
    const countryList = document.querySelector('div.country >select').value; 

    for (let i=0; i<products.length; i++){
        const productsItem= products[i];
        const liList = document.createElement('li');
              //liList.innerHTML = productsItem.name
         
        liList.innerHTML = `| ${productsItem.name} | ${productsItem.price} | ${productsItem.rating} |`;
        ulFirstSet.appendChild(liList);
        const thirdLi = ulFirstSet.lastChild;
        const ulSecondSet = document.createElement('ul');
        thirdLi.appendChild(ulSecondSet);
        const countries= document.querySelector('div.country >select').value;
for (let i=0 ; i<countries.length; i++){
    const liSecindLayer =document.createElement('li');
          liSecindLayer.innerHTML = countryList;
          ulSecondSet.appendChild(liSecindLayer);
}
        
 
    }
      /*
    for (i=0; i<productsItem.length; i++){
        const thirdLi = ulFirstSet.lastChild;
        const ulSecondSet = document.createElement('ul');
        thirdLi.appendChild(ulSecondSet);
        const liSecindLayer =document.createElement('li');
        liSecindLayer.innerHTML = countryList;
        ulSecondSet.appendChild(liSecindLayer);
    }*/
};
renderProducts(products);


console.log('Script loaded');

//console.log(getAvailableProducts());