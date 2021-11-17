//trim()
//toUpperCase()
//toLowerCase()
//slice()

//trim() method is used to remove space,
let fruitName = "      Apple       ";
console.log(fruitName.length);
console.log(fruitName);
//here we have to take another new string to assign a trim()
let newString = fruitName.trim();
console.log(newString.length);
console.log(newString);


//toUpperCase
console.log(newString.toUpperCase());

//toLowerCase
newString = "APPLE";
console.log(newString.toLowerCase());

//slice()--first parameter start index and second parameter last index
fruitName = "Banana";
newString = fruitName.slice(0,4);
console.log(newString);
newString = fruitName.slice(1,5);
console.log(newString);
