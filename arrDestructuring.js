//Array Destructuring
const arr = ["Value1", "Value2", "Value3"];
console.log(arr);
const [myArr1, myArr2, myArr3] = arr;
console.log(myArr1);
const [newArr1, , newArr2]=arr;
console.log(newArr1);
console.log(newArr2);
const myNewArr = arr.slice(1);
console.log(myNewArr);
