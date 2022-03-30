//filter() mthod

let numbers = [1,2,3,4,5];

function isEven(number){
   return number%2 === 0;
}

let Even = numbers.filter(isEven);
console.log(Even);
