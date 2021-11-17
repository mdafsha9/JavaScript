//type of operators (primitive values)
//String "Karl"
//number 1, 2, 3
//boolean
//undefined
//null
//BigInt
//symbol

let age = 23;
let firstName = "Cathy";

console.log(typeof age);
console.log(typeof firstName);

//convert number to string
age = 23 + " ";
console.log(age);
console.log(typeof age);
  // or
let num = 25;
num = String(num);
console.log(typeof num);

//convert string to number
firstName = +"Cathy";
console.log(typeof firstName);
  // or

let lastName = "krumm";
lastName = Number(lastName);
console.log(typeof lastName);

//string concatenation
let str1 = "Cathy";
let str2 = "Krumm";
let newString = str1 + " " + str2;
console.log(newString);
console.log(typeof newString);

str1 = "12";
str2 = "20";
newString = str1 + str2;
console.log(newString);
console.log(typeof newString);

newString = +str1 + +str2;
console.log(newString);
console.log(typeof newString);
