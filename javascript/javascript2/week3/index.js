
//Exercise 1:
//when the first button is clicked it should first log out 0. The next time it is cliecked it should log out 1, etc.
//when the second button is clicked, it should count downwards

let i= 0;
const countUp = function(e){	
        console.log(`${i}`);
        i++
};
const countDown = function(e){	
    console.log(`${i}`);
    i--
};
const button1= document.getElementById("btnOne");
button1.addEventListener( 'click', countUp);
button1.style.backgroundColor = 'tomato';
button1.style. marginLeft= '100px';



const button2 = document.getElementById("btnTwo");
button2.addEventListener( 'click', countDown);
button2.style.backgroundColor = 'tomato';
button2.style. margin= '50px';


//Exercise 2:
//Create a button in html with the text "Log in 3 seconds":
//When the button is clicked it should wait 3 seonds and then log the text "This text was delayed by 3 seconds"

function delay(){
    setTimeout(()=>console.log("This text was delayed by 3 seconds"), 3000);   
}
const button3= document.getElementById("btnThree");
button3.addEventListener( 'click', delay);
button3.style.backgroundColor ='gray'
button3.style. marginLeft= '100px';

//planets 
function eart(){
 console.log('Planet Eart');
};

function Saturn (){
    console.log(' Planet Saturn')
};


function planetLogFunction (planet) {
   planet()
}
planetLogFunction (Saturn);


//geo = navigator.geolocation; 
const logButton=document.getElementById('btnLogLocation');
logButton.addEventListener('click', logLocation);
function logLocation(){
    navigator.geolocation.getCurrentPosition(function(position){
        let lat = position.coords.altitude;
        let long = position.coords.longitude;
    })
};

//runAfterDelay
function runAfterDelay(delay, callback){
    setTimeout(delay, 4000);
    if(typeof(callback)==='function'){
        callback();
    }
};
runAfterDelay(function(){
console.log('You are waited 4 seconds to see this!');
});

document.body.addEventListener('dblclick', function(){
    console.log('Double clicked!');
});

//jokeCreator 
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
if(shouldTellFunnyJoke) {
    logFunnyJoke();
} else {
    logBadJoke();
}
};
function logFunnyJoke(){
console.log('Police: Do you know why we stopped you? Man: No, I\'m as baffled as you are!')
};
function logBadJoke(){
    console.log('Do you know what’s cool- Winter.');
    };

jokeCreator(true, logFunnyJoke, logBadJoke);

// Function as a variable

const arryOfFunctions=[
function first(){ console.log('this is first function')},
function second(){ console.log('This is second function')},
function third(){ console.log('This is third function')},
];
arryOfFunctions.forEach(each => console.log(each));

const consFunction =function(){
console.log(' This function asigned to the const');
};
function normalFunction(callback){
console.log('This function callinback the consFunction');
callback();
};
 normalFunction(consFunction);

 // object function

 const objectOfFunction={
name: function(){ 
    console.log(5+7)
},
};
console.log(objectOfFunction.name);

