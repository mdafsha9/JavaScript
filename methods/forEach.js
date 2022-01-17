//forEach loop
//The forEach() loop calls a function for each element in an array
//The forEach() method can only be used on arrays, sets and maps
//The forEach() method is not executed for empty elements
let fruits = ["Apple", "Banana", "Mango"];
function myFunc(fruit, index){
  console.log(`My fruit is ${fruit} and the fruit index is ${index}`);
}
fruits.forEach(myFunc);
