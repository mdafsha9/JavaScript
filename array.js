//array is a special variable which can hold more than one value

let fruits = ["Apple", "Mango", "Pappaya"];
console.log(fruits);
fruits[1] = "Banana";
console.log(fruits);



//for arrays and object literals the typeof is object
console.log(typeof fruits);

let obj = {};
console.log(typeof obj);

//Now we want to check whic one is arrays
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

//push strmethods to add another vegitable at the last
let vegies = ["Brinjal", "Tomato", "Potato"];
console.log(vegies);
vegies.push("Cabbage");
console.log(vegies);

//pop method to remove the last array element & showed the removed element
console.log(vegies);
vegies.pop();
console.log(vegies);
let poppedVegitable = vegies.pop();
console.log(poppedVegitable);
