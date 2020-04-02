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

//Spirit animal name generator
const bodyPage =document.body.style
      bodyPage.backgroundColor = 'rgb(150 150 150)';
      bodyPage.width= '70%';
      bodyPage.color= 'white'
      bodyPage.fontSize ='18px'

const creatInput = document.querySelector("input");
    creatInput.setAttribute("type", "text");
    creatInput.setAttribute("value", "Write Your Name here!")
    creatInput.style.backgroundColor= 'rgb(120 120 120)'
    creatInput.style.color ='white'
    creatInput.style.padding =' 5px'
    creatInput.style.marginBottom =' 5px'
    creatInput.style.marginTop =' 5px'
creatInput.addEventListener('click', function(s){
    s.preventDefault();
    alert('Benjamin - The fullmoon wolf');
});
const t = document.createElement('p');
    t.innerHTML = 'The first try interacting between JS and HTML';
    document.getElementById('form').appendChild(t);
    t.style.fontFamily ='sans-serif'

const fram = document.getElementById('form').elements;
    // access tages 
    const input= fram["animal-input"];
    const button = fram["animal-button"];
    // add value 
    input.setAttribute("type", "text");
    input.setAttribute('value', 'write here');
    button.setAttribute('class', 'me!');
    button.innerHTML= 'Click On Me!';
   
const animalNames =['The crying butterfly', ' Angry Buffalo', 'Sleepy Pig', 'Goosy Cat' ];

function animal(){
    
const randumAnim= animalNames[Math.floor(Math.random() * animalNames.length)];
const form2= fram[0].value
if ( form2){
  fram[1].addEventListener('click', function(al){
      al.preventDefault();
      alert(` ${input.value} : ${randumAnim}`);
  })
}
};
console.log(animal(animalNames));