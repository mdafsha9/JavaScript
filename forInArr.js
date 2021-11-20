//for loop in array

let fruits = ["Apple", "Mango", "Grapes"];
for(let i=0; i<fruits.length; i++){
  console.log(fruits[i].toUpperCase());
}

//in arrays we can use const variable
const vegies = ["Brinjal", "Tomato", "Potato"];
console.log(vegies);
//we cannot re=declare & re-initalize vegies variable but we can pus a variables
vegies.push("Cabbage");
console.log(vegies);
//here we cannot change a vegies variable we just add a variable
