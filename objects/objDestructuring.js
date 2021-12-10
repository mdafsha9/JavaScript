//Array destructuring

const myArray = ["array1", "array2", "array3"];
console.log(myArray);
const [myArr1, myArr2, myArr3] = myArray;
console.log(myArr1);
console.log(myArr2);
console.log(myArr3);
const newArray = myArray.slice(1);
console.log(newArray);
const myNewArray = [...myArray];
console.log(myNewArray);


//object objDestructuring
const myObj = {
  firstName : "Lorie",
  age : 25,
  hobbies : ["reading", "playing", "singing"]
};
console.log(myObj);

const {firstName, age, hobbies} = myObj;
console.log(firstName);
console.log(age);
console.log(hobbies);

const newObj = {...myObj};
console.log(newObj);
