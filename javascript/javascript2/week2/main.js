

// week- 2 homework
let numbers = [1, 2, 3, 4];

let newNumbers = [];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}
console.log("The doubled numbers are", newNumbers); // [2, 6]

const doubleOdNumber= numbers.filter((value)=>{
    return value %2 ===0;
}).map((value)=> value *2);
console.log(doubleOdNumber);

