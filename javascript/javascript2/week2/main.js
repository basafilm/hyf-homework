

// week- 2 homework, Doubling of number
let numbers = [1, 2, 3, 4];
const doubleOdNumber= numbers.filter((value)=>{
    return value %2 ===0;
}).map((value)=> value *2);
console.log(doubleOdNumber);

