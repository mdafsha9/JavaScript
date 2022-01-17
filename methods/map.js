//map() creates a new array from calling a function for every array element
//map() calls a function once for each element in an array
//map() does not execute a function for empty elements
//map() does not change original arrays

const numbers = [2,5,3,4];

function square(num){
  return (num*num);
}

const squareNumbers = numbers.map(square);
console.log(squareNumbers);
