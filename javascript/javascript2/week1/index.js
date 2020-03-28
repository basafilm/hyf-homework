//Find the shortest word
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findShortWord(allWords){
    let allStrings= allWords[0].length;
    let shortWords = 0;
    for ( let i=0; i<allWords.length; i++){
       const shortest = allWords[i]// display all strings inside danishWords Array 
       const wordLenght = shortest.length; // display the number of letter of all strings
        if (wordLenght < allStrings){ 
            allStrings =wordLenght;
            shortWords=i;
        }
    }
    return allWords[shortWords];
}
console.log(findShortWord(danishWords));

//Difference between median and average

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function findAverage(arr){
let sumOfNumbers = 0;
 for ( i= 0; i<arr.length; i++){
     sumOfNumbers= sumOfNumbers+arr[i];
     averageOfNumbers=sumOfNumbers/arr.length;
};
return averageOfNumbers;
};
console.log(findAverage(housePrices));
// Midian 
function findMedian(mid){
    let lenghtOfNumbers = mid.length;
    let midNumber=0;
for (let i=0; i<mid.length; i++ ){
    if ( lenghtOfNumbers % 2 ===0){
        midNumber= (mid[lenghtOfNumbers /2 -1]+ mid[lenghtOfNumbers /2])/ 2;

    } else {
        midNumber = mid[(lenghtOfNumbers -1) /2];
    }
    return midNumber
}
    
}
const midResult = findMedian(housePrices)
console.log(midResult);

// Calculate midan and average 
const array=[];
function midAverage(mid, av){
    const midAv = mid+av;
    array.push(midAv.toFixed(2));

};
const midAvResult = midAverage(averageOfNumbers, midResult);
console.log(array);

