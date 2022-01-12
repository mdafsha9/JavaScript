//forEach loop
//The forEach() loop calls a function for each element in an array
//The forEach() loop can only be used on arrays, sets and maps

let numbers = [1,2,8,5];
function myFunc(num, index){
  console.log(`Number is ${num} and the index is ${index}`);
}
numbers.forEach(myFunc);
