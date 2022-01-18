//every() Method

let numbers = [2,4,6,8,10];
  const even = numbers.every((num)=>num%2===0);
  console.log(even);


let users = [
  {item1:"Fridge", price:25000},
  {item1:"Air conditioner", price:15000},
  {item1:"Television", price:20000},
]

const Budget = users.every((user)=>user.price<30000);
console.log(Budget);
