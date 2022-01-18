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


let users = [
  {productId:1, productItem:"Laptop", price:22000},
  {productId:2, productItem:"Phone", price:45000},
  {productId:3, productItem:"Tablet", price:80000},
  {productId:4, productItem:"Strightner", price:2000},
  {productId:5, productItem:"Dryier", price:1000},
]

const LowestToHighest = users.sort((a,b)=>a.price-b.price);
console.log(LowestToHighest);

const totalAmount = users.reduce((totalValue, currentValue)=>
{
  return totalValue+currentValue.price;
}, 0)
console.log(totalAmount);
