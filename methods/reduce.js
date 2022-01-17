//reduce() method executes reducer function for array element
//reduce() returns single value, that function's accumulated result
//reduce() does not execute the function for empty array elements
//reduce() method does not change the original arrays

let numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulated, currentValue) => {
  return accumulated+currentValue;
})
console.log(sum);
