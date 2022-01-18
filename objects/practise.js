//reduce() mehtod

let numbers = [1,2,3,4,5,6];

function sum(total, currentValue){
  return total + currentValue;
}
let totalAmount = numbers.reduce(sum);

console.log(totalAmount);
