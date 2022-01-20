//iterables
//Where we can apply "for of loop" those are iterables. We can apply "for of loop" in strings and arrays
//strings and arrays are iterables.

//iterating over a string
let firstName = "Richardson";
for(let char of firstName){
  console.log(char);
}

//iterating over an array
let fruits = ["Apple", "Banana", "Grapes", "Orange"];
for(let fruit of fruits){
  console.log(fruit);
}

//array like objects
//where we can apply lenght property and index those are array like object
//strings are array like object

firstName = "RomanRoy";
console.log(firstName.length);
console.log(firstName[2]);
