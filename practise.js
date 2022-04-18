//forEach method


let numbers = [1,5,6,8,9];

function sum(accum, currentVal){
  return accum+currentVal;
}

let totalNums = numbers.reduce(sum);
console.log(totalNums);
