//filter() mehtod

let numbers = [1,2,3,4,5,6];

function isOdd(num){
  return num%2 === 1;
}

const myOddNumbers = numbers.filter(isOdd);
console.log(myOddNumbers);
