//pusp, pop arrays & shift ans unshift arrays


let fruits = ["Apple", "Mango", "Grapes"];
console.log(fruits);
//push mehtod add an element at the end
fruits.push("Banana");
console.log(fruits);
//pop method removes an element at the end
let poppedFruit = fruits.pop();
console.log("Popped fruits is " +poppedFruit);

console.log(fruits);

//unshift method add an element at the start
fruits.unshift("Strawberry");
console.log(fruits);

//shift method removes an element at the start
let removedFruit = fruits.shift();
console.log("Removed fruit is " +removedFruit);
console.log(fruits);
