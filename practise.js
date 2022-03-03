
//reduce method

const numbers = [1,5,6,2];

function sum(accumulator, currentValue){
  return accumulator + currentValue ;
}

const total = numbers.reduce(sum);
console.log(total);
