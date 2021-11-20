//primitive Vs Reference data types

//primitive values (stored in stack)
let num1 = 6;
let num2 = num1;
console.log(num1);
console.log(num2);

num1++;
console.log(num1);
console.log(num2);

//Reference data types
let array1 = ["item1", "item2", "item3"];
let array2 = array1;
console.log(array1);
console.log(array2);

array1.push("item3");
console.log(array1);
console.log(array2);
