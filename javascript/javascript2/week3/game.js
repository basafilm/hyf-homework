function myFunction() {
    let runGame = document.getElementById("myInput").value;
     console.log(runGame);
  };

//const inputeValue= document.getElementById("myInput").value;
//console.log(inputeValue);
let sClicker = document.querySelector('.btnS button');
let sCounter= document.querySelector('.btnS h3');
const lClicker = document.querySelector('.btnL button');
let lCounter= document.querySelector('.btnL h3');

sClicker.addEventListener('click', countUp);
function countUp(){
    sCounter.innerHTML++   
};

lClicker.addEventListener('click',lCount);
function lCount(){
    lCounter.innerHTML++;
};

const myButton = document.getElementById('btn');
myButton.addEventListener('click',  count);
function count() {
let secounds = myFunction();
 secounds =setInterval(() => {
        secounds--
        if(secounds===0){
           console.log("Game is Over!");
           clearInterval(secounds);
        }
    },5000);
}



function gameResulte(resultS,resultL){
    const anunceResulte= document.querySelector('.result p');
    if(resultS > resultL){
       anunceResulte.innerHTML ='S wone';
    } else {
        anunceResulte.innerHTML ='L wone';
    }
}
gameResulte(sCounter.value,lCounter.value );