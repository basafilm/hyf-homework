//Age-ify (A future age calculator)
let yearOfBirth = 1974;
let yearFuture = 2050;
age = yearFuture - yearOfBirth;
console.log('My age in:' +' ' +yearFuture +' ' +'will be:' +age +' ' + 'year old.');

 // Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth =2017;
const dogYearFuture =2027;
let dogYear = 7;
let shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears) {
    dogAge = dogYearFuture -dogYearOfBirth;
    console.log('Your dog will be' +' ' +dogAge *dogYear +' ' +'year old in' +' ' +dogYearFuture +'.');
}

else 
dogAge = dogYearFuture -dogYearOfBirth;
console.log('Your dog will be' +' ' +dogAge +' ' +'human years old in' +' ' +dogYearFuture +'.');

var houseyPricey;
//Housey pricey (A house price estimator)
volumeInMeters=[['peter', 8 , 10, 10],['julie', 5, 11, 8]];
gardenSizeInM2 =[[100],[70]];
peterBuy =true;
julieBuy= true;
if(peterBuy){
    /*
    volumeInMeters=[8 , 10, 10];
    gardenSizeInM2 =100;
    */
    houseCost =25000000;
    housePrice = volumeInMeters[0][1] * 2.5 * 1000 + gardenSizeInM2[0] *300;
    console.log('Peter\'s house price should be:' +' ' +housePrice +' ' +'It is'+' ' +[houseCost -housePrice] +' ' +'higher than the market prices.');
}

else(julieBuy)
/*
    volumeInMeters=[5 , 11, 8];
    gardenSizeInM2 =70;
    */
    houseCost =1000000;
    housePrice = volumeInMeters[1][1] * 2.5 * 1000 + gardenSizeInM2[1][0] *300;
    console.log('Julie\'s house price should be:' +' ' +housePrice +' ' +'It is'+' ' +[houseCost -housePrice] +' ' +'higher than the market prices.');
 
//Ez Namey (Startup name generator)
/*
firstWords =["Easy", "Awesome", "Corporate","Creative","Intelegent","Smart","Fast","Accessable","Honest","Professional", "First Hand"];
secondWords =["Operator", "Agent", "Brothers","Fifty,Fifty","Elegant","Venlig","Org","Fragment","Power","Perfect", "Lasting"];
let startupName= firstWords + secondWords;
console.log(Math.floor(Match.random(0-9) * 10) +0);
*/