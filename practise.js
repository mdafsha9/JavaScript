let firstName = "MariGold";
console.log(firstName.length);

console.log(firstName[firstName.length-1]);
console.log(firstName[1]);

//trim() strmethods

firstName = "      MAriya       ";
console.log(firstName, firstName.length);
console.log(firstName.trim(), firstName.length);

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

let fruitName = "Banana";
let newString = fruitName.slice(2,4);
console.log(newString);
