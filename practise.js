//tyeof

let firstName = "Afsha";
let num = 22;
console.log(firstName, typeof firstName);
console.log(num, typeof num);

let lastname;
console.log(typeof lastname);
lastname = "";
console.log(typeof lastname);
lastname= null;
console.log(lastname, typeof lastname);
lastname = undefined;
console.log(typeof lastname, lastname);

//num to string consversion

var num1 = 22;
console.log(typeof num1);
num1 = 22 + " ";
console.log(typeof num1);
 var myNum = String(num1);
 console.log(typeof myNum);

//string to number consversion
let fruits = "Mango";
console.log(typeof fruits, fruits);
let myFruits = +fruits;
console.log(typeof myFruits);
let myNewfruits = Number(fruits);
console.log(typeof myNewfruits);
