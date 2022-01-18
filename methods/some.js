//some() Method

let numbers = [3,5,8,9];

const even = numbers.some((num)=>num%2===0);

console.log(even);


let users = [
  {item1:"Fridge", price:25000},
  {item1:"Air conditioner", price:15000},
  {item1:"Television", price:120000},
]

const Budget = users.some((user)=>user.price>100000);
console.log(Budget);
