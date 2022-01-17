//filter() method can create a new array filled with elements that pass a test provided by a function
//filter() method does not execute the function for empty elements
//filter() method does not change the original arrays

const numbers = [1,2,3,4,5,6,7,8,9];

function isEven(num){
  return num%2 === 0;
}

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);
