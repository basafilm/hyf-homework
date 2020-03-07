
/*function getFullName(firstName, surName){
    return firstName + surName;
}
const fullname1= getFullName('Malek ', 'Shafii');
console.log(fullname1)
*/


function getFullName(firstName, surName, useFormalName){

}
const firstName= '';
const surName= '';
let useFormalName= true;  
if(useFormalName==true){
    console.log('Lord!' +' ' + firstName +' ' +surName)
}else{
    console.log(firstName+' '+surName)
}



function weekdayEvent() {
let weekDays= ['Sunday','Monday','Tursday','Wedensday','Thursday', 'Friday', 'Sutarday'];
let today= new Date();
let day = today.getDay();
let eventDay = day  % 7;
return weekDays[eventDay];

}
console.log(weekdayEvent(9));


function wearSomeThing(temprature){
    
    if(temprature>=18){
        console.log(" Wear T-Shert")
    }else if(temprature< 18 && temprature>  15 ){
        console.log( "Wear somethings warm!")
    } else{
        console.log("Wear Something Really Warm!")
    }
}

wearSomeThing(10);