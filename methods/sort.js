//sort() method


let fruits = ["Mango", "Grapes", "Apple", "Pine-apple"];
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

let numbers = [60, 500, 2, 300, 6000];
const LowToHigh = numbers.sort((a,b) => {
  return a-b;
});
console.log(LowToHigh);

const HighToLow = numbers.sort((a,b) => {
  return b-a;
});
console.log(HighToLow);
