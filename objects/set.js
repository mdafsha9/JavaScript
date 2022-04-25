//JavaScript Set

let numbers = new Set();


numbers.add(1);
numbers.add(4);
numbers.add(4);

numbers.add(5);
numbers.add(6);
numbers.add(7);
console.log(numbers);

//checking specific number is there in Set
if(numbers.has(5)){
  console.log("5 is present");
}else{
  console.log("5 is not present");
}

let char = new Set("abcdefghijklmnopqrstuvwxyz");
console.log(char);
