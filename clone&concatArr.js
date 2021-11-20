//to clone an array
//There are methods to clone an arrays
//1.slice() method 2.concat() method 3.spread operator

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("array3");
console.log(array1);
console.log(array2);

//if we clone like above method we cannot push an element in one array

//clone with slice methods
let arr1 = ["item1", "item2"];
let arr2 = arr1.slice(0);
console.log(arr1);
console.log(arr2);
arr1.push("item3");
console.log(arr1);
console.log(arr2);

//clone with concat methods
let a1 = ["item1", "item2"];
let a2 = [].concat(a1);
console.log(a1);
console.log(a2);
a1.push("item3");
console.log(a1);
console.log(a2);

//clone with spread operators
let ar1 = ["item1", "item2"];
let ar2 = [...ar1];
console.log(ar1);
console.log(ar2);
ar1.push("item3");
console.log(ar1);
console.log(ar2);
