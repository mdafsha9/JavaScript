//arrays

const fruits = ["Apple", "orange", "Mango"];
console.log(fruits, typeof fruits);
console.log(fruits.length, Array.isArray(fruits), fruits[fruits.length-1]);

//add an element at the last use pusp()

fruits.push("Banana");
console.log(fruits);

//remove an element at the last we use shift()

fruits.shift();
console.log(fruits);

//add an eleemnt at the first we use unshift()
fruits.unshift("Apple");
console.log(fruits);

//remove an element at the last we use pop()
fruits.pop();
console.log(fruits);

for(let fruit of fruits){
  console.log(fruits);
}
for(let index in fruits){
  console.log(fruits[index]);
}

//for loop

for(let i=0; i<=fruits.length-1; i++){
  console.log(fruits[i]);
}

//while loop

let i = 0;

while(i<=fruits.length-1){
  console.log(fruits[i]);
  i++;
}
