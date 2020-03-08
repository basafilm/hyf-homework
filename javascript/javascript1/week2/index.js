
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

// Number of Students

const class07Students = ["Queen", 'Benjamin'];
function addStudentToClass(studentName) {
    if(class07Students> 6){
        alert('Cannot add more students to class 07');
    }else if(class07Students.includes(studentName)){
        alert('Student Benjamin is already in the class')
    } else {
        class07Students.push(studentName);
    }
}
console.log(class07Students);

function getNumberOfStudents(){
    // You write code here
    return class07Students;
}



