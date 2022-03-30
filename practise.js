//reduce() mthod

let numbers = [1,2,3,4,5];

function sum(accumaltor, currentValue){
   return accumaltor+currentValue;
}

let Total = numbers.reduce(sum);
console.log(Total);
