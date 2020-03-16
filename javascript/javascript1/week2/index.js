


function getFullName(firstName, surName, formalName){
    if(formalName===true){
        return 'Lord!' +' ' + firstName +' ' +surName;
    } else{
         return firstName +' ' + surName;
    }
};
console.log(getFullName('', '', ''));


//Event application

function weekdayEvent(event) {
const weekDays= ['Sunday','Monday','Tursday','Wedensday','Thursday', 'Friday', 'Sutarday'];
const today= new Date().getDay();
const eventDay = (today+event) % weekDays.length;
return weekDays[eventDay];

}
console.log(weekdayEvent(6));


function wearSomeThing(temprature){
    
    if(temprature>=18){
        console.log(" Wear T-Shert")
    }else if( temprature>  15 ){
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
    return class07Students.length;
}
