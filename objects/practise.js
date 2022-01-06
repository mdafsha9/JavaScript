//Array destructuring
let myArray = ["item1", "item0", "item2", "item3", "item4"];
let [myArr1, , myArr2, ...newArr] = myArray;

console.log(myArr1);
console.log(myArr2);
console.log(newArr);
