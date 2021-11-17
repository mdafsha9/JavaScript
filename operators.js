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

//template String
let name = "Afsha";
let years = 25;
let aboutme = "My name is " + name + " and I am " + years + ' old';
console.log(aboutme);

//undefined (just declare a variable without assigning a value to variable, it returns undefined)
let toy;
console.log(toy);

//null (null value returns null)
let myToy = null;
console.log(myToy);

//typeof null returns object (its bug in javascript, but if javascript team will not fix this bug, because there are lot of javascript frameworks, if they want to fix this bug they ahave to fix all javascript framework)
console.log(typeof null);

//BigInt
//this is the largest big integer
console.log(Number.MAX_SAFE_INTEGER);
let myNum = BigInt(123558566867564658);
console.log(myNum, typeof myNum);

//both variables are BigInt
myNum = BigInt(123);
let samemyNum = 12n;
console.log(myNum + samemyNum);
