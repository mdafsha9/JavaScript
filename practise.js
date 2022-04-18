//forEach method


let numbers = [1,5,6,8,9];

function even(number){
  return number%2 === 0;
}

let evenNums = numbers.filter(even);
console.log(evenNums);
