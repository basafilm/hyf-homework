
// getFullName 
function getFullName(firstName, surName){
    const fullname1= firstName;
    const fullname2= surName;
    return fullname1 + ' ' + fullname2
}
console.log(getFullName('Benjamin', 'Hughes'));
// getFormalName
function getFullName(firstName, surName, useFormalName){
    const fullname1= firstName;
    const fullname2= surName;
    if ( useFormalName= true) {
        return 'Lord! ' + fullname1 + ' ' + fullname2
    } else{
        return fullname1 + ' ' + fullname2
    } 
}
const fullName = getFullName('Malek', 'Shafei', 'useFormalName');
console.log(fullName);

// Event application
const weekDays= ['Sunday','Monday','Tursday','Wedensday','Thursday', 'Friday', 'Sutarday'];
function getEventWeekday(event) {
let day= new Date();
let toDay = day.getDay();
eventDay = (toDay+ event) %7;
return weekDays[eventDay];
}
const yourEvent = getEventWeekday(5);
console.log(yourEvent);

//Weather wear
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

const class07Students = ["Queen"];
function addStudentToClass(studentName) {
    if(class07Students.length> 6){
        alert('Cannot add more students to class 07');
    }else if(class07Students.includes(studentName)){
        alert(`Student ${studentName} is already in the class`)
    } else {
        class07Students.push(studentName);
    }
}
console.log(class07Students);

function getNumberOfStudents(){
    // You write code here
    return class07Students;
}

