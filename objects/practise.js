//map() mehtod

let numbers = [1,2,3,4,5,6];

function myFunc(num){
  return num*num;
}
const squareNumbers = numbers.map(myFunc);
console.log(squareNumbers);
