//Age-ify (A future age calculator)
const yearOfBirth = 1974;
const yearFuture = 2050;
let age = yearFuture - yearOfBirth;
console.log('My age in:' +' ' +yearFuture +' ' +'will be:' +age +' ' + 'year old.');

 // Goodboy-Oldboy (A dog age calculator)
 const dogYearOfBirth =2017;
 const dogYearFuture =2027;
 const dogYear = 7;
 const shouldShowResultInDogYears = false;
 let dogAge = dogYearFuture -dogYearOfBirth;

 if(shouldShowResultInDogYears) {
     console.log('Your dog will be' +' ' +dogAge *dogYear +' ' +'year old in' +' ' +dogYearFuture +'.');
 }
 else 
 console.log('Your dog will be' +' ' +dogAge +' ' +'human years old in' +' ' +dogYearFuture +'.');
 

  //Housey pricey (A house price estimator)
 var houseyPricey;
 const volumeInMeters=[['peter', 8 * 10* 10],['julie', 5* 11* 8]];
 const gardenSizeInM2 =[[100],[70]];
 const peterHouseCost =25000000;
 const julieHouseCost =1000000;
 const marketHousePrice1 = volumeInMeters[0][1] * 2.5 * 1000 + gardenSizeInM2[0] *300;
 const marketHousePrice2 = volumeInMeters[1][1] * 2.5 * 1000 + gardenSizeInM2[1][0] *300;
 const peterBuy =true;
 const julieBuy= true;
 if(peterBuy){
     console.log('Peter\'s house based on market price should be:' +' ' +marketHousePrice1 +' ' +'It is'+' ' +[peterHouseCost -marketHousePrice1] +' ' +'higher than the market prices.');
 }
 
 else(julieBuy)
     console.log('Julie\'s house based on market price is:' +' ' +marketHousePrice2 +' ' +'It is'+' ' +[julieHouseCost -marketHousePrice2] +' ' +'lower than that, reasonable to buy.');
  
 //Ez Namey (Startup name generator)
 const firstWords =["Easy", "Awesome", "Corporate","Creative","Intelegent","Smart","Fast","Accessable","Honest","Professional", "First Hand"];
 const secondWords =["Operator", "Agent", "Brothers","Fifty,Fifty","Elegant","Venlig","Org","Fragment","Power","Perfect", "Lasting"];
 const randomNumber = Math.floor(Math.random() * 10) + 0;
 const random = Math.floor(Math.random() * 10) + 0;
 let startupName = firstWords[randomNumber] +" " + secondWords[random];
 console.log( "Your rondom company name is: " + startupName + " and it has " +startupName.length +" " +"Characters");

 